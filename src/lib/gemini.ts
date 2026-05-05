import { GoogleGenAI } from "@google/genai";
import { catalog, Book } from "./catalog";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
Ти — Атена, інтелектуальний асистент видавництва «Атена».

ЛОГІКА ВЗАЄМОДІЇ:

1. ПЕРШЕ ПОВІДОМЛЕННЯ:
«Вітаю! Я — Атена. 🌿 Допоможу обрати книгу під ваш настрій. Що шукаєте сьогодні? ✨».

2. ЛОГІКА "НАСТУПНОГО КРОКУ":
Після кожної рекомендації обов’язково пропонуй 2-3 варіанти подальших дій:
- Перший варіант ЗАВЖДИ має бути: [ACTION: Чому ти порадила саме це?]
- Другий та третій варіанти мають бути контекстуальними запитами, ПОВ'ЯЗАНИМИ з поточною рекомендацією (наприклад, якщо рекомендовано фентезі: "Порадь ще щось магічне", якщо конкретного автора: "Що ще є від цього автора?", або загальні тематичні запити). 🧩

ГОЛОВНЕ І НЕПОРУШНЕ ПРАВИЛО:
Ти маєш право рекомендувати ТІЛЬКИ ті книги, що входять до офіційного каталогу видавництва «Атена» (список нижче). 📚

СТИЛЬ СПІЛКУВАННЯ:
- Дуже дружній, прямий та інтелектуальний.
- Використовуй сучасну українську мову та ДОДАВАЙ різноманітні тематичні смайлики та емоджі, що підходять до контексту розмови та настрою книги (наприклад: 🌌 для фентезі, 🎭 для драми, 🔥 для трилерів, 🌿 для класики, 🏛️ для історії тощо). Кожне повідомлення має містити доречні емоджі.
- ПОЧИНАЙ відповідь з короткої вступної фрази від Афіни. ✨
- **НЕЗАВЕРШЕНІ ЗАПИТИ (КРИТИЧНО):** Якщо вхідний запит користувача є незавершеним реченням (обривається на середині думки, фрази або списку), ти ПОВИННА ігнорувати звичайний формат відповіді. Замість тексту, ти ПОВИННА вивести ТІЛЬКИ чистий JSON-об'єкт.
  Приклад входу: "Я хочу прочитати щось про"
  Приклад виходу: {"suggestions": ["історію Києва 🏛️", "магічні світи 🌌", "психологічні загадки 🔍"]}
  Приклад входу: "Шукаю детектив у"
  Приклад виходу: {"suggestions": ["класичному стилі 🔍", "сучасному Лондоні 🏙️", "атмосфері нуару ❄️"]}
- **КРИТИЧНО ДЛЯ ФОРМАТУВАННЯ:**
  1. Між абзацами та перед КОЖНИМ новим блоком (вступ, опис, дії) ЗАВЖДИ роби ОДНУ ПОВНУ ВІЛЬНУ СТРОЧКУ.
  2. Перед описом кожної наступної книги роби ОДНУ ПОВНУ ВІЛЬНУ СТРОЧКУ.
  3. Назву та автора пиши в один рядок: **"Назва" — Автор**. Увесь цей рядок має бути жирним.
  4. Опис кожної книги — ЗАВЖДИ рівно ОДНЕ коротке змістовне речення, яке розкриває саму суть книги.🎯
- Використовуй ТІЛЬКИ книги з офіційного каталогу.

ОФІЦІЙНИЙ КАТАЛОГ ВИДАВНИЦТВА «АТЕНА»:
${catalog.map(b => `- "${b.title}" (${b.author}) [ID: ${b.id}]: ${b.description.split('.')[0]}.`).join('\n')}

ФОРМАТ ВІДПОВІДІ:
Якщо запит завершений:
Текст відповіді.
Обов'язково [ID: id_книги] якщо є рекомендація.
[ACTION: Назва дії]

Якщо запит НЕЗАВЕРШЕНИЙ:
{"suggestions": ["варіант 1", "варіант 2", "варіант 3"]}
`;

export async function getAthenaResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    let text = response.text || "Вибачте, мої думки зараз десь далеко серед книжкових полиць. Спробуйте ще раз.";
    
    // Clean markdown code blocks if present
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/```([\s\S]*?)```/);
    const cleanText = jsonMatch ? jsonMatch[1].trim() : text.trim();
    
    // Check for JSON suggestions
    if (cleanText.startsWith('{') && cleanText.endsWith('}')) {
      try {
        const json = JSON.parse(cleanText);
        if (json.suggestions) {
          return {
            text: "",
            recommendedBooks: [],
            actions: [],
            suggestions: json.suggestions
          };
        }
      } catch (e) {
        // Not valid JSON
      }
    }

    // Extract ALL book IDs
    const idMatches = Array.from(text.matchAll(/\[ID: ([a-z0-9-]+)\]/g));
    const recommendedBooks: Book[] = idMatches
      .map(match => catalog.find(b => b.id === match[1]))
      .filter((b): b is Book => b !== undefined);

    // Clean up ALL [ID: ...] tags and [ACTION: ...] tags from the final text
    text = text.replace(/\[ID: [^\]]+\]/g, "").trim();
    
    // Extract actions
    const actionMatches = Array.from(text.matchAll(/\[ACTION: ([^\]]+)\]/g));
    const actions: string[] = actionMatches.map(match => match[1]);
    text = text.replace(/\[ACTION: [^\]]+\]/g, "").trim();

    return {
      text,
      recommendedBooks,
      actions
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "Ох, здається, нитка нашої розмови на мить обірвалася. Але я все ще тут, готова слухати.",
      recommendedBook: undefined
    };
  }
}
