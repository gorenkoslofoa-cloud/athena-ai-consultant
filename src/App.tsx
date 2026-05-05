import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, BookOpen, Sparkles, Library, Instagram, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAthenaResponse } from "./lib/gemini";
import { Book } from "./lib/catalog";
import confetti from "canvas-confetti";
import Markdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  books?: Book[];
  activeBookIndex?: number;
  actions?: string[];
  suggestions?: string[];
}

const TYPING_SUGGESTIONS = [
  "хочу книгу на вечір",
  "хочу книгу на вихідні",
  "порадь щось для роздумів",
  "порадь щось для натхнення",
  "хочу зануритися в історію"
];

const getInitialSuggestions = () => {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const hour = now.getHours();

  const suggestions = [];

  // Season based (refined)
  if (month >= 2 && month <= 4) { // Spring (March, April, May)
    suggestions.push("🌿 Порадь щось для весняного натхнення");
    suggestions.push("🌸 Хочу книгу на травневий ранок");
    suggestions.push("🌱 Щось про зародження нових почуттів");
  } else if (month >= 5 && month <= 7) { // Summer
    suggestions.push("☀️ Порадь щось для літньої подорожі");
    suggestions.push("🌊 Хочу книгу на березі моря");
    suggestions.push("🍦 Легке читання на спекотний день");
  } else if (month >= 8 && month <= 10) { // Autumn
    suggestions.push("🍂 Порадь щось для осінньої меланхолії");
    suggestions.push("☕ Затишна книга на дощовий вечір");
    suggestions.push("🍁 Щось атмосферне та глибоке");
  } else { // Winter
    suggestions.push("❄️ Порадь щось для зимових свят");
    suggestions.push("🕯️ Книга для довгих зимових ночей");
    suggestions.push("🍊 Щось тепле та казкове");
  }

  // Time of day based
  if (hour >= 5 && hour < 11) {
    suggestions.push("🌅 Книга до ранкової кави ☕");
  } else if (hour >= 11 && hour < 17) {
    suggestions.push("📖 Щось для обідньої перерви");
  } else if (hour >= 17 && hour < 22) {
    suggestions.push("🕯️ Атмосферна книга на вечір");
  } else {
    suggestions.push("🌙 Таємнича історія на ніч");
  }

  // Randomize and pick 3 unique ones
  const filtered = Array.from(new Set(suggestions));
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const SUGGESTION_MAP: Record<string, string[]> = {
  "хочу": [
    "прочитати щось про кохання 💖", 
    "зануритися в історію Києва 🏛️", 
    "щось для саморозвитку 🌱", 
    "знайти натхнення у класиці 🌿",
    "книгу на затишний вечір ☕"
  ],
  "шукаю": [
    "детектив із загадками 🔍", 
    "складний інтелектуальний текст 🧠", 
    "сучасну українську прозу 🇺🇦", 
    "фентезі про магічні світи 🌌",
    "біографію видатних людей 👤"
  ],
  "порадь": [
    "свіжий бестселер 🔥", 
    "щось для глибоких роздумів 🤔", 
    "книгу під весняний настрій 🌸",
    "трилер, що тримає в напрузі 🔪"
  ],
  "детектив": ["класичний англійський 🕵️‍♂️", "сучасний психологічний 🏙️", "скандинавський нуар ❄️", "історичний детектив 📜"],
  "фентезі": ["про магічні світи 🌌", "героїчне фентезі ⚔️", "міське фентезі 🌃", "темне фентезі 🌑"],
  "історія": ["про Київ ХІХ століття 🏛️", "біографії видатних людей 👤", "військову історію ⚔️", "історію мистецтва 🎨"],
  "класика": ["українську класику 🌿", "зарубіжну літературу 🌍", "античні твори 🏛️", "модернізм ХХ століття 🎭"],
  "про": ["кохання та почуття 💖", "пошук себе та сенсу ✨", "таємниці минулого 🕵️‍♀️", "майбутнє та технології 🤖"]
};

const PLACEHOLDERS = [
  "Яку книгу ви шукаєте? 🔍",
  "Напишіть жанр або автора... 🖋️",
  "Ваш наступний улюблений сюжет тут... ✨",
  "Шукайте за назвою чи настроєм... 🎭",
  "Афіна слухає... Про що поговоримо? 🏛️",
  "Поділіться своїм настроєм — я підберу книгу 🕯️",
  "Яку історію розповісти вам зараз? 📖",
  "Тут народжуються нові думки... 🌱"
];

const LOADING_PHRASES = [
  "Атена звертається до сувоїв мудрості...",
  "Формуємо стратегію вашого читання...",
  "Шукаємо істину серед тисяч сторінок...",
  "Рада мудреців готує відповідь...",
  "Малюю ідеальну пораду для вас...",
  "Заварюю каву та готую список книг...",
  "Атена перевіряє бібліотечні полиці...",
  "Зачекайте мить, мудрість потребує часу..."
];

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Вітаю! Я — Атена. 🌿 Допоможу обрати книгу під ваш настрій. Що шукаєте сьогодні? ✨",
      suggestions: getInitialSuggestions()
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState(LOADING_PHRASES[0]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getSmartSuggestions = () => {
    const lowerInput = input.toLowerCase().trim();
    if (!lowerInput) return [];

    // 1. Check if input is a partial prefix of a key in SUGGESTION_MAP
    const partialKeys = Object.keys(SUGGESTION_MAP).filter(key => 
      key.startsWith(lowerInput) && key !== lowerInput
    );
    if (partialKeys.length > 0) {
      return partialKeys.map(key => key.charAt(0).toUpperCase() + key.slice(1) + "...");
    }

    // 2. Find if input starts with or equals any key in SUGGESTION_MAP
    const matchingKey = Object.keys(SUGGESTION_MAP).find(key => 
      lowerInput === key || lowerInput.startsWith(key + " ")
    );

    if (matchingKey) {
      const existingTail = lowerInput.slice(matchingKey.length).trim();
      return SUGGESTION_MAP[matchingKey]
        .filter(s => !existingTail || s.toLowerCase().includes(existingTail))
        .map(s => {
          const base = matchingKey.charAt(0).toUpperCase() + matchingKey.slice(1);
          return base + " " + s;
        });
    }

    return [];
  };

  const smartSuggestions = getSmartSuggestions();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Tab" || e.key === "ArrowRight") && smartSuggestions.length > 0) {
      e.preventDefault();
      setInput(smartSuggestions[0]);
    }
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const [prevMessagesCount, setPrevMessagesCount] = useState(messages.length);

  useEffect(() => {
    if (messages.length > prevMessagesCount && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "end",
        inline: "nearest"
      });
    }
    setPrevMessagesCount(messages.length);
  }, [messages, prevMessagesCount]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setLoadingPhrase(LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]);

    const history = messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    try {
      const response = await getAthenaResponse(textToSend, history);

      const athenaMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: response.text,
        books: response.recommendedBooks,
        activeBookIndex: 0,
        actions: response.actions,
        suggestions: (response as any).suggestions,
      };

      setMessages((prev) => [...prev, athenaMsg]);
      
      if (response.recommendedBooks && response.recommendedBooks.length > 0) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#24377c", "#808bb2", "#ffffff"],
        });
      }
    } catch (error) {
      console.error("Interaction error:", error);
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        role: "model",
        text: "Вибачте, Атена тимчасово не може зв'язатися з бібліотекою. Спробуйте ще раз за хвилину. 🏛️"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen font-serif text-[#24377c] selection:bg-[#24377c] selection:text-white bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: 'url(https://i.postimg.cc/Zn8HLh14/Zavdanna-1-Atena-Interaktivnij-cat-bot-vidavnictva-Gorenko-Sofia-SC-53.png)' }}
    >
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[#24377c]/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-2 shrink-0">
              <Library size={16} className="text-[#24377c] hidden sm:block" />
              <h1 className="text-[10px] sm:text-sm font-bold tracking-tight uppercase whitespace-nowrap">Видавництво «Атена»</h1>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <a 
                href="https://atenabooks.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full bg-[#24377c] text-white transition-all hover:scale-110 active:scale-95"
                title="Сайт Атена"
              >
                <Globe size={14} className="sm:w-[16px] sm:h-[16px]" />
              </a>
              <a 
                href="https://www.instagram.com/vd.atena" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full bg-[#24377c] text-white transition-all hover:scale-110 active:scale-95"
                title="Instagram"
              >
                <Instagram size={14} className="sm:w-[16px] sm:h-[16px]" />
              </a>
              <a 
                href="https://web.telegram.org/k/#-4888694754" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full bg-[#24377c] text-white transition-all hover:scale-110 active:scale-95"
                title="Telegram Channel"
              >
                <Send size={14} className="sm:w-[16px] sm:h-[16px]" />
              </a>
              <a 
                href="https://web.telegram.org/k/#@athenabooks_bot" 
                target="_blank" 
                rel="noreferrer" 
                className="flex h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full bg-[#24377c] text-white transition-all hover:scale-110 active:scale-95"
                title="Афіна-Бот"
              >
                <Bot size={14} className="sm:w-[16px] sm:h-[16px]" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-3 sm:px-4 pt-16 sm:pt-20 pb-20 overflow-hidden">
        <div 
          ref={scrollRef} 
          className="h-[calc(100dvh-150px)] sm:h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide w-full overscroll-contain"
        >
          <div className="flex flex-col gap-5 sm:gap-6 py-6 sm:py-8">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  ref={index === messages.length - 1 ? lastMessageRef : null}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.role === "model" ? (
                    <div className="flex flex-col gap-2 max-w-[90%] sm:max-w-[85%]">
                      {/* Top Avatar & Name */}
                      <div className="flex items-center gap-3 px-1">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#24377c]/20 bg-white shadow-sm flex items-center justify-center">
                          <img 
                            src="https://i.postimg.cc/3Jks5tzf/Gemini-Generated-Image-imn2oyimn2oyimn2.png" 
                            alt="Athena" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#24377c]">Атена</span>
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        {msg.text && (
                          <div className="rounded-2xl rounded-tl-none bg-white/90 p-4 text-black border border-[#24377c]/10 shadow-sm backdrop-blur-sm">
                            <div className="prose prose-slate max-w-none text-[15px] leading-[22px] font-serif text-black text-left">
                              <Markdown>
                                {msg.text}
                              </Markdown>
                            </div>
                          </div>
                        )}
                        
                        {msg.books && msg.books.length > 0 && (
                          <div className="mt-2 flex flex-col gap-2">
                            {(() => {
                              const activeIndex = msg.activeBookIndex ?? 0;
                              const currentBook = msg.books[activeIndex];
                              
                              return (
                                <>
                                  <motion.div
                                    key={`${msg.id}-${activeIndex}`}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={(_, info) => {
                                      const threshold = 50;
                                      if (info.offset.x < -threshold && msg.books && msg.books.length > 1) {
                                        // Swipe Left -> Next
                                        setMessages(prev => prev.map(m => 
                                          m.id === msg.id ? { ...m, activeBookIndex: (activeIndex + 1) % m.books!.length } : m
                                        ));
                                      } else if (info.offset.x > threshold && msg.books && msg.books.length > 1) {
                                        // Swipe Right -> Prev
                                        setMessages(prev => prev.map(m => 
                                          m.id === msg.id ? { ...m, activeBookIndex: (activeIndex - 1 + m.books!.length) % m.books!.length } : m
                                        ));
                                      }
                                    }}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="cursor-grab active:cursor-grabbing touch-pan-y"
                                  >
                                    <Card className="overflow-hidden border-[#24377c]/10 bg-white shadow-sm hover:shadow-md transition-shadow w-full max-w-full">
                                      <div className="flex flex-col sm:flex-row">
                                        <div className="h-40 sm:h-auto w-full sm:w-32 bg-slate-50 shrink-0">
                                          <img
                                            src={currentBook.coverUrl}
                                            alt={currentBook.title}
                                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            onError={(e) => {
                                              e.currentTarget.src = `https://picsum.photos/seed/${currentBook.id}/400/600`;
                                              e.currentTarget.onerror = null;
                                            }}
                                          />
                                        </div>
                                        <CardContent className="flex flex-1 flex-col p-3 sm:p-5">
                                          <div className="mb-1.5 sm:mb-2 flex items-center gap-2 text-[#808bb2] opacity-60">
                                            <BookOpen size={10} />
                                            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em]">Атена рекомендує</span>
                                          </div>
                                          <h3 className="text-sm sm:text-base font-bold mb-0.5 leading-tight">{currentBook.title}</h3>
                                          <p className="mb-1.5 sm:mb-2 text-[10px] sm:text-[11px] italic text-[#808bb2]">{currentBook.author}</p>
                                          <p className="mb-3 text-[12px] sm:text-[13px] leading-[16px] sm:leading-[18px] opacity-80 line-clamp-3 sm:line-clamp-2">
                                            {currentBook.description.split('.')[0]}.
                                          </p>
                                          <div className="mt-auto pt-2 border-t border-[#24377c]/5">
                                            <p className="text-[10px] sm:text-[11px] leading-[12px] font-normal text-center italic text-[#808bb2] mb-2 sm:mb-3">
                                              {currentBook.emotionalMatch}
                                            </p>
                                            <Button 
                                              className="w-full bg-[#24377c] text-white hover:bg-[#1a2a5e] rounded-none px-4 font-bold uppercase tracking-widest text-[11px] sm:text-[12px] h-9 sm:h-10 shrink-0 shadow-md active:scale-95 transition-transform"
                                              onClick={() => currentBook.buyUrl && window.open(currentBook.buyUrl, '_blank')}
                                            >
                                              Придбати
                                            </Button>
                                          </div>
                                        </CardContent>
                                      </div>
                                    </Card>
                                  </motion.div>

                                  {msg.books.length > 1 && (
                                    <div className="flex justify-center gap-2 py-1">
                                      {msg.books.map((_, idx) => (
                                        <button
                                          key={idx}
                                          onClick={() => {
                                            setMessages(prev => prev.map(m => 
                                              m.id === msg.id ? { ...m, activeBookIndex: idx } : m
                                            ));
                                          }}
                                          className={`text-[16px] leading-none transition-all ${
                                            idx === activeIndex ? "text-[#24377c] scale-125" : "text-[#24377c]/20 hover:text-[#24377c]/40"
                                          }`}
                                        >
                                          {idx === activeIndex ? "●" : "○"}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </>
                              );
                            })()}
                          </div>
                        )}

                        {msg.actions && msg.actions.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {msg.actions.map((action, i) => (
                              <Button
                                key={i}
                                variant="outline"
                                size="sm"
                                className="rounded-full border-[#24377c]/20 bg-white/80 transition-all text-[#24377c] hover:bg-white hover:border-[#24377c] text-[15px] h-auto py-2 px-6 shadow-sm font-medium whitespace-normal text-left"
                                onClick={() => {
                                  handleSend(action);
                                }}
                              >
                                {action}
                              </Button>
                            ))}
                          </div>
                        )}

                        {msg.suggestions && (
                          <div className="flex flex-col gap-1.5 mt-1.5 w-full">
                            {msg.suggestions.map((s, i) => (
                              <Button
                                key={i}
                                variant="ghost"
                                className="justify-start h-auto py-2 px-4 text-[14px] text-[#24377c] bg-white/60 hover:bg-white border border-[#24377c]/10 rounded-lg transition-all shadow-sm whitespace-normal text-left"
                                onClick={() => handleSend(s)}
                              >
                                {s}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end gap-1.5 max-w-[85%]">
                      <div className="rounded-2xl rounded-tr-none bg-[#24377c] p-4 text-white shadow-md break-words overflow-hidden">
                        <div className="text-[15px] leading-[22px] font-serif">
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-sm italic text-[#808bb2]"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span>{loadingPhrase}</span>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 w-full p-2 sm:p-4 text-[#24377c] bg-white/60 backdrop-blur-md border-t border-[#24377c]/5 md:bg-transparent md:backdrop-blur-none md:border-none safe-area-pb">
        <div className="mx-auto max-w-3xl">
          <AnimatePresence>
            {smartSuggestions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mb-2 sm:mb-3 flex flex-wrap gap-1.5 sm:gap-2 px-1"
              >
                {smartSuggestions.map((s, i) => (
                   <Button
                    key={i}
                    variant="secondary"
                    size="sm"
                    className="rounded-full bg-white/90 border border-[#24377c]/20 text-[#24377c] hover:bg-[#24377c]/10 text-[12px] sm:text-[13px] h-auto py-1.5 sm:py-2 font-serif shadow-sm backdrop-blur-sm px-3 sm:px-4 whitespace-normal text-left active:scale-95 transition-transform"
                    onClick={() => {
                      setInput(s);
                    }}
                  >
                    {s}
                  </Button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative flex items-center gap-2 sm:gap-3 px-1">
            <div className="relative flex-1">
              <Input
                placeholder={PLACEHOLDERS[placeholderIndex]}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-11 sm:h-12 rounded-full border border-[#24377c]/20 bg-white/90 px-4 sm:px-6 text-sm sm:text-base text-[#24377c] focus-visible:ring-1 focus-visible:ring-[#24377c]/30 placeholder:text-[#808bb2]/60 transition-all font-serif relative z-10 shadow-sm"
                disabled={isLoading}
              />
            </div>
            <Button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full bg-[#24377c] text-white hover:bg-[#1a2a5e] p-0 shadow-lg active:scale-90 transition-transform"
            >
              <Send size={18} className="sm:w-[20px] sm:h-[20px]" />
            </Button>
          </div>
          <p className="mt-2 sm:mt-3 text-center text-[7px] sm:text-[8px] uppercase tracking-[0.2em] opacity-30 pb-1">
            Інтелектуальний консультант Атена
          </p>
        </div>
      </footer>
    </div>
  );
}
