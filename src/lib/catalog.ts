export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  emotionalMatch: string; // Why it matches the emotion
  coverUrl: string;
  buyUrl?: string;
}

export const catalog: Book[] = [
  {
    id: "money-history",
    title: "Гроші. Історія людства",
    author: "Девід Маквільямс",
    description: "Захоплива подорож історією грошей: від перших обмінних операцій до сучасних криптовалют. Автор розкриває, як фінанси формували цивілізацію.",
    emotionalMatch: "Для тих, хто прагне зрозуміти приховані механізми нашого світу.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotgroshi_istoriya_lyudstvaquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotgroshi-istoriya-lyudstvaquot/808.jpg"
  },
  {
    id: "stoic-leader",
    title: "Лідер-стоїк",
    author: "Джон Селларс, Джастін Стед",
    description: "Поєднання античної мудрості стоїцизму з викликами сучасного лідерства. Практичні поради для розвитку внутрішньої сили та стійкості.",
    emotionalMatch: "Допомагає знайти спокій та впевненість у часи турбулентності.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotliderstokquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotliderstokquot/611.jpg"
  },
  {
    id: "shortest-democracy",
    title: "Найкоротша історія демократії",
    author: "Джон Кін",
    description: "Стислий, але глибокий огляд розвитку демократичних ідеї та інститутів від давнини до наших днів.",
    emotionalMatch: "Інтелектуальний путівник для розуміння свободи та самоврядування.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotnaykorotsha_istoriya_demokratiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotnaykorotsha-istoriya-demokratiquot/650.jpg"
  },
  {
    id: "girl-with-bear",
    title: "Дівчина з ведмедиком",
    author: "Віктор Домонтович",
    description: "Інтелектуальний модерністський роман про стосунки вчителя та його учениці, де переплітаються філософія, почуття та виклик традиціям.",
    emotionalMatch: "Для шанувальників витонченої української інтелектуальної прози.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotdivchina_z_vedmedikomquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotdivchina-z-vedmedikomquot/801.jpg"
  },
  {
    id: "doctor-serafikus",
    title: "Доктор Серафікус",
    author: "Віктор Домонтович",
    description: "Роман про вченого, який намагається відгородитися від світу в вежі зі слонової кістки, але змушений зіткнутися з реальністю почуттів.",
    emotionalMatch: "Дослідження самотності, інтелекту та неможливості втечі від життя.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotdoktor_serafikusquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotdoktor-serafikusquot/499.jpg"
  },
  {
    id: "without-ground",
    title: "Без ґрунту",
    author: "Віктор Домонтович",
    description: "Філософський роман про втрату коріння, пошук ідентичності та складність вибору людини в епоху великих зламів.",
    emotionalMatch: "Глибокі роздуми про мистецтво, віру та відсутність опори в мінливому світі.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotbezruntuquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotbez-%D2%91runtuquot/748.jpg"
  },
  {
    id: "to-the-lighthouse",
    title: "До маяка",
    author: "Вірджинія Вулф",
    description: "Шедевр модернізму, що досліджує плин часу, складність сімейних стосунків та природу художньої творчості через потік свідомості.",
    emotionalMatch: "Тонка психологічна подорож у глибини людського сприйняття.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotdo_mayakaquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotdo-mayakaquot/795.jpg"
  },
  {
    id: "dracula",
    title: "Дракула",
    author: "Брем Стокер",
    description: "Бессмертна готична класика про протистояння людей і таємничого графа-вампіра. Історія, що започаткувала цілий жанр.",
    emotionalMatch: "Напружена атмосфера таємниці, жаху та вічної боротьби світла з темрявою.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotdrakulaquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotdrakulaquot/523.jpg"
  },
  {
    id: "frankenstein",
    title: "Франкенштайн, або Сучасний Прометей",
    author: "Мері Шеллі",
    description: "Перший науково-фантастичний роман про межі людського пізнання, відповідальність творця та трагедію самотності створеної ним істоти.",
    emotionalMatch: "Етична дилема про науку та людяність, що не втрачає актуальності.",
    buyUrl: "https://atenabooks.com/product:quotfrankenshtayn_abo_suchasniy_prometeyquot",
    coverUrl: "https://atenabooks.com/upload/product/quotfrankenshtayn-abo-suchasniy-prometeyquot/839.jpg"
  },
  {
    id: "crash-test",
    title: "Краш тест",
    author: "Емі Джеймс",
    description: "Сучасна проза про випробування характеру, несподівані повороти долі та пошук сили всередині себе після потрясінь.",
    emotionalMatch: "Для тих, хто шукає натхнення для подолання життєвих криз.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotkrash_testquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotkrash-testquot/44.jpg"
  },
  {
    id: "roommates",
    title: "Вони були сусідами по кімнаті",
    author: "Пейдж Поварс",
    description: "Легка, але наповнена сенсом історія про дружбу, співжиття та те, як випадкові люди можуть змінити наше життя на краще.",
    emotionalMatch: "Тепла розповідь про людські зв'язки в сучасному ритмі великого міста.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotvoni_buli_susidami_po_kimnatiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotvoni-buli-susidami-po-kimnatiquot/230.jpg"
  },
  {
    id: "stormy-calm",
    title: "У Штормовому – штиль",
    author: "Сергій Скришевський",
    description: "Насичена подіями історія про внутрішню рівновагу серед життєвих бур, пошук правди та вірність собі.",
    emotionalMatch: "Філософський погляд на стійкість людини перед обличчям неминучих змін.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotu_shtormovomushtilquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotu-shtormovomu-%E2%80%93-shtilquot/293.jpg"
  },
  {
    id: "read-people",
    title: "Читайте людей, як книжки",
    author: "Патрік Кінґ",
    description: "Практичний посібник із психології спілкування, що вчить розпізнавати приховані сигнали, розуміти наміри та будувати кращі стосунки.",
    emotionalMatch: "Інструментарій для кожного, хто хоче вдосконалити навички емпатії.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotchitayte_lyudey_yak_knijkiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotchitayte-lyudey-yak-knijkiquot/111.jpg"
  },
  {
    id: "24h-vikings",
    title: "24 години у світі вікінгів",
    author: "Кірстен Вольф",
    description: "Мандрівка крізь час: один день із життя скандинавських воїнів та хліборобів, їхні вірування, побут та суворий етос.",
    emotionalMatch: "Імерсивний досвід для любителів справжньої історії без міфів.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quot24_godini_u_sviti_vikingivquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quot24-godini-u-sviti-vikingivquot/470.jpg"
  },
  {
    id: "they-come-at-night",
    title: "По мене прийдуть уночі",
    author: "Тахір Хамут Ізґіл",
    description: "Потужні мемуари про життя уйгурського поета в умовах тоталітарного контролю та боротьбу за свободу рідного народу.",
    emotionalMatch: "Пронизливе свідчення про людську гідність та незламність духу.",
    buyUrl: "https://atenabooks.com/product:po_mene_priydut_unochi",
    coverUrl: "https://atenabooks.com/upload/product/po-mene-priydut-unochi/143.jpg"
  },
  {
    id: "thorn-heart",
    title: "Терн у кожному серці",
    author: "Кейт Кінґ",
    description: "Емоційна драма про складність вибачення, тягар минулого та здатність серця загоїти старі рани заради майбутнього.",
    emotionalMatch: "Щира історія про зцілення та любов, що долає всі перешкоди.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quottern_u_kojnomu_sertsiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quottern-u-kojnomu-sertsiquot/715.jpg"
  },
  {
    id: "maria-stuart",
    title: "Збірка творів: Марія Стюарт",
    author: "Фрідріх Шиллер",
    description: "Драматична історія протистояння шотландської королеви та англійської Єлизавети I. Трагедія про владу, королівську гідність та фатум.",
    emotionalMatch: "Висока класика про політичні інтриги та велич жіночої долі.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotzbirka_tvoriv_mariya_styuartquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotzbirka-tvoriv-mariya-styuartquot/529.jpg"
  },
  {
    id: "william-tell",
    title: "Збірка творів: Вільгельм Телль",
    author: "Фрідріх Шиллер",
    description: "Героїчна драма про легендарного швейцарського стрільця та боротьбу за свободу проти тиранії.",
    emotionalMatch: "Надихає на рішучі вчинки та віру в справедливість.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotzbirka_tvoriv_vilgelm_tellquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotzbirka-tvoriv-vilgelm-tellquot/286.jpg"
  },
  {
    id: "jane-eyre",
    title: "Джейн Ейр",
    author: "Шарлотта Бронте",
    description: "Історія сильної жінки, яка долає самотність та соціальні обмеження. Роман про гідність, кохання та право бути собою.",
    emotionalMatch: "Атмосферна класика, що надихає вірити у власну силу.",
    buyUrl: "https://atenabooks.com/product:djeyn_eyr",
    coverUrl: "https://atenabooks.com/upload/product/djeyn-eyr/16.jpg"
  },
  {
    id: "sense-sensibility",
    title: "Чуття і чуттєвість",
    author: "Джейн Остін",
    description: "Класичний роман про двох сестер – помірковану Елінор та емоційну Маріанну, та їхні різні шляхи до щастя.",
    emotionalMatch: "Тонке дослідження балансу між розумом та серцем.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotchuttya_i_chuttevistquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotchuttya-i-chuttevistquot/901.jpg"
  },
  {
    id: "martin-eden",
    title: "Мартін Іден",
    author: "Джек Лондон",
    description: "Історія моряка, який мріє про літературну славу і самовдосконалення заради кохання, але стикається з порожнечею успіху.",
    emotionalMatch: "Потужна драма про талант, боротьбу та ціну амбіцій.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotmartin_idenquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotmartin-idenquot/873.jpg"
  },
  {
    id: "animal-farm",
    title: "Колгосп тварин",
    author: "Джордж Орвелл",
    description: "Алегорична повість про те, як ідеали свободи та рівності можуть перетворитися на тоталітарну диктатуру.",
    emotionalMatch: "Гостра сатира, що застерігає від маніпуляцій владою.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotkolgosp_tvarinquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotkolgosp-tvarinquot/899.jpg"
  },
  {
    id: "1984",
    title: "1984",
    author: "Джордж Орвелл",
    description: "Найвідоміша антиутопія про тотальний контроль, де правда — це брехня, а свобода — це рабство.",
    emotionalMatch: "Пророче попередження про цінність критичного мислення.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quot1984quot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quot1984quot/328.jpg"
  },
  {
    id: "churchill",
    title: "Черчилль. Лідер і командир",
    author: "Ентоні Такер-Джонс",
    description: "Біографія видатного політика, що фокусується на його стратегічному генії та незламності під час війни.",
    emotionalMatch: "Надихне тих, хто прагне розвинути лідерські якості в складні часи.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_cherchill_lider_i_komandir",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-cherchill-lider-i-komandir/85.jpg"
  },
  {
    id: "24h-athens",
    title: "24 години у стародавніх Афінах",
    author: "Філіп Матишак",
    description: "Живий опис одного дня в колисці демократії — від ринкової площі до Акрополя.",
    emotionalMatch: "Відчуйте себе мешканцем стародавнього міста та пізнайте його секрети.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quot24_godini_u_starodavnih_afinahquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quot24-godini-u-starodavnih-afinahquot/944.jpg"
  },
  {
    id: "24h-rome",
    title: "24 години у стародавньому Римі",
    author: "Філіп Матишак",
    description: "Подорож Римом часів його найбільшої могутності очима звичайних людей.",
    emotionalMatch: "Для всіх, хто заворожений античною історією та побутом.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quot24_godini_u_starodavnomu_rimiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quot24-godini-u-starodavnomu-rimiquot/188.jpg"
  },
  {
    id: "not-afraid-death",
    title: "Я не боюся смерті, бо там на мене чекаєш ти",
    author: "Світлана Бабійчук",
    description: "Зворушлива сповідь про кохання, втрату та віру, що дає сили жити далі навіть після найважчих випробувань.",
    emotionalMatch: "Для душ, що шукають втіхи та світла в момент глибокої скорботи.",
    buyUrl: "https://atenabooks.com/product:ya_ne_boyusya_smerti_bo_tam_na_mene_chekaesh_ti",
    coverUrl: "https://atenabooks.com/upload/product/ya-ne-boyusya-smerti-bo-tam-na-mene-chekaesh-ti/610.jpg"
  },
  {
    id: "feminism-nature",
    title: "Фемінізм у дикій природі",
    author: "Амбіка Камат",
    description: "Дослідження гендерних стереотипів крізь призму біології та поведінки тварин, що руйнує звичні уявлення про «природність».",
    emotionalMatch: "Цікавий погляд на світ природи для сучасних інтелектуалів.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotfeminizm_u_dikiy_prirodiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotfeminizm-u-dikiy-prirodiquot/174.jpg"
  },
  {
    id: "van-gogh-sisters",
    title: "Сестри Ван Гог",
    author: "Віллем-Ян Верлінден",
    description: "Невідома історія сестер великого художника, їхнє приватне життя та листування на тлі епохи.",
    emotionalMatch: "Сімейна сага для шанувальників мистецтва та історії.",
    buyUrl: "https://atenabooks.com/product:sestri_van_gog",
    coverUrl: "https://atenabooks.com/upload/product/sestri-van-gog/437.jpg"
  },
  {
    id: "night-incident-dog",
    title: "Загадковий нічний інцидент із собакою",
    author: "Марк Геддон",
    description: "Унікальна розповідь від імені хлопчика з аутизмом, який розслідує смерть сусідського пса і відкриває правду про власну родину.",
    emotionalMatch: "Надзвичайно щирий погляд на світ іншими очима.",
    buyUrl: "http://atenabooks.com/product:peredprodaj_quotzagadkoviy_nichniy_intsident_iz_sobakoyuquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotzagadkoviy-nichniy-intsident-iz-sobakoyuquot/923.jpg"
  },
  {
    id: "notre-dame",
    title: "Собор Паризької Богоматері",
    author: "Віктор Гюґо",
    description: "Велична історія кохання, трагедії та соціальної несправедливості навколо славетного собору Парижа.",
    emotionalMatch: "Емоційна буря та шедевр французького романтизму.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotsobor_parizko_bogomateriquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotsobor-parizko-bogomateriquot/15.jpg"
  },
  {
    id: "tender-is-the-night",
    title: "Дише ніжністю ніч",
    author: "Френсіс Скотт Фіцджеральд",
    description: "Психологічний роман про розкішне життя «втраченого покоління» та трагічний розпад шлюбу талановитого психіатра.",
    emotionalMatch: "Вишукана меланхолія про втрачені ілюзії та плинність щастя.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotdishe_nijnistyu_nichquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotdishe-nijnistyu-nichquot/12.jpg"
  },
  {
    id: "great-gatsby",
    title: "Великий Ґетсбі",
    author: "Френсіс Скотт Фіцджеральд",
    description: "Історія про загадкового мільйонера Джея Ґетсбі, його розкішні вечірки та безнадійне кохання до Дейзі Б'юкенен.",
    emotionalMatch: "Яскравий та водночас сумний портрет епохи джазу.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_quotvelikiy_getsbiquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotvelikiy-%D2%90etsbiquot/616.jpg"
  },
  {
    id: "wuthering-heights",
    title: "Буремний перевал",
    author: "Емілі Бронте",
    description: "Одна з найпотужніших історій кохання та помсти в літературі. Почуття, що стають сильнішими за смерть.",
    emotionalMatch: "Темна, пристрасна та неймовірно атмосферна готика.",
    buyUrl: "https://atenabooks.com/product:emili_bronteperedprodaj_quotburemniy_perevalquot",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-quotburemniy-perevalquot/291.jpg"
  },
  {
    id: "tove-jansson",
    title: "Туве Янссон: творчість і любов",
    author: "Туула Карʼялайнен",
    description: "Біографія творчині Мумі-тролів, що розкриває її як серйозну художницю, вільну особистість та людину великої любові.",
    emotionalMatch: "Надихне на творчу свободу та щирі стосунки.",
    buyUrl: "https://atenabooks.com/product:peredzamovlennya_quottuve_yansson_tvorchist_i_lyubovquot",
    coverUrl: "https://atenabooks.com/upload/product/peredzamovlennya-quottuve-yansson-tvorchist-i-lyubovquot/370.jpg"
  },
  {
    id: "phantom-opera",
    title: "Привид опери",
    author: "Ґастон Леру",
    description: "Таємничий геній мешкає у підземеллях Паризької опери, намагаючись завоювати серце юної співачки крізь жах та музику.",
    emotionalMatch: "Містичний роман про межу між геніальністю та безумством.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_privid_operi",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-privid-operi/438.jpg"
  },
  {
    id: "murders-rue-morgue",
    title: "Вбивство на вулиці Морг",
    author: "Едгар Аллан По",
    description: "Перший в історії детективний твір, де гостра логіка Огюста Дюпена розкриває неможливий злочин.",
    emotionalMatch: "Для любителів класичних інтелектуальних загадок.",
    buyUrl: "https://atenabooks.com/product:vbivstvo_na_vulitsi_morg",
    coverUrl: "https://atenabooks.com/upload/product/vbivstvo-na-vulitsi-morg/170.jpg"
  },
  {
    id: "pivniv-storozhenko",
    title: "До третіх півнів: Олекса Стороженко",
    author: "Олекса Стороженко",
    description: "Майстерне поєднання фольклорного колориту, гумору та побутописання в оповіданнях класика.",
    emotionalMatch: "Відчуйте справжній дух традиційної української прози.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_do_tretih_pivniv_oleksa_storojenko",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-do-tretih-pivniv-oleksa-storojenko/241.jpg"
  },
  {
    id: "pivniv-gogol",
    title: "До третіх півнів: Микола Гоголь",
    author: "Микола Гоголь",
    description: "Твори Гоголя, пронизані містикою та іронією, що стали невід'ємною частиною нашої літературної свідомості.",
    emotionalMatch: "Для тих, хто любить загадкове та смішне в одному флаконі.",
    buyUrl: "https://atenabooks.com/product:peredprodaj_do_tretih_pivniv_marko_vovchok",
    coverUrl: "https://atenabooks.com/upload/product/peredprodaj-do-tretih-pivniv-marko-vovchok/324.jpg"
  },
  {
    id: "pivniv-vovchok",
    title: "До третіх півнів: Марко Вовчок",
    author: "Марко Вовчок",
    description: "Драматичні та життєствердні історії про жіночу долю, волю до свободи та соціальні зміни.",
    emotionalMatch: "Глибока емпатія та соціальна чесність у кожному рядку.",
    buyUrl: "https://atenabooks.com/product:do_tretih_pivniv_marko_vovchok",
    coverUrl: "https://atenabooks.com/upload/product/do-tretih-pivniv-marko-vovchok/982.jpg"
  },
  {
    id: "virginia-woolf",
    title: "Вірджинія Вулф",
    author: "Александра Гарріс",
    description: "Біографічний огляд життя та новаторської творчості жінки, яка змінила обличчя літератури XX століття.",
    emotionalMatch: "Пізнання внутрішнього світу видатної модерністки.",
    buyUrl: "https://atenabooks.com/product:virdjiniya_vulf",
    coverUrl: "https://atenabooks.com/upload/product/virdjiniya-vulf/712.jpg"
  },
  {
    id: "laughing-man",
    title: "Людина, що сміється",
    author: "Віктор Гюґо",
    description: "Філософський роман про долю Гуїнплена, чиє обличчя знівечене вічною посмішкою, на тлі аристократичних інтриг.",
    emotionalMatch: "Трагічна сатира на суспільну нечутливість та красу душі.",
    buyUrl: "https://atenabooks.com/product:lyudina_scho_smietsya",
    coverUrl: "https://atenabooks.com/upload/product/lyudina-scho-smietsya/37.jpg"
  },
  {
    id: "faust",
    title: "Фауст",
    author: "Йоганн Вольфґанґ фон Ґете",
    description: "Фундаментальна світова класика про пошук істини, угоду з Мефістофелем та ціну безсмертної душі.",
    emotionalMatch: "Інтелектуальні роздуми про сенс життя та межі пізнання.",
    buyUrl: "https://atenabooks.com/product:faust",
    coverUrl: "https://atenabooks.com/upload/product/faust/578.jpg"
  },
  {
    id: "last-day-condemned",
    title: "Останній день засудженого",
    author: "Віктор Гюґо",
    description: "Психологічний монолог людини, що очікує страти, — гострий маніфест проти смертної кари.",
    emotionalMatch: "Напружене гуманістичне переживання про цінність життя.",
    buyUrl: "https://atenabooks.com/product:ostanniy_den_zasudjenogo",
    coverUrl: "https://atenabooks.com/upload/product/ostanniy-den-zasudjenogo/947.jpg"
  },
  {
    id: "oderzhima",
    title: "Одержима",
    author: "Леся Українка",
    description: "Драматична поема про безодню пристрасті, де самовідданість та одержимість ідеєю ведуть до трагічного фіналу.",
    emotionalMatch: "Високий інтелектуальний градус та українська модерна драма.",
    buyUrl: "https://atenabooks.com/product:oderjima",
    coverUrl: "https://atenabooks.com/upload/product/oderjima/623.jpg"
  },
  {
    id: "cassandra",
    title: "Кассандра",
    author: "Леся Українка",
    description: "Трагедія про жінку-пророчицю, чиє знання майбутнього стає її прокляттям, бо їй ніхто не вірить.",
    emotionalMatch: "Про долю істини у світі, що відмовляється бачити правду.",
    buyUrl: "https://atenabooks.com/product:kassandra",
    coverUrl: "https://atenabooks.com/upload/product/kassandra/176.jpg"
  },
  {
    id: "lisova-pisnya",
    title: "Лісова пісня",
    author: "Леся Українка",
    description: "Шедевр української драматургії: драма-феєрія про зіткнення світу природи та світу людей крізь історію Мавки та Лукаша.",
    emotionalMatch: "Магічна, сумна та неймовірно поетична історія.",
    buyUrl: "https://atenabooks.com/product:lisova_pisnya",
    coverUrl: "https://atenabooks.com/upload/product/lisova-pisnya/685.jpg"
  },
  {
    id: "richard-ii",
    title: "Річард ІІ",
    author: "Вільям Шекспір",
    description: "Історична трагедія про падіння короля та складні питання влади, відповідальності та божественного права.",
    emotionalMatch: " Велична шекспірівська драма про занепад монарха.",
    buyUrl: "https://atenabooks.com/product:richard_ii",
    coverUrl: "https://atenabooks.com/upload/product/richard-ii/190.jpg"
  },
  {
    id: "hamlet",
    title: "Гамлет",
    author: "Вільям Шекспір",
    description: "Культова історія про принца Данського, його сумніви, помсту та моральний вибір: «Бути чи не бути?»",
    emotionalMatch: "Глибока психологічна драма про людську природу.",
    buyUrl: "https://atenabooks.com/product:gamlet",
    coverUrl: "https://atenabooks.com/upload/product/gamlet/253.jpg"
  },
  {
    id: "macbeth",
    title: "Макбет",
    author: "Вільям Шекспір",
    description: "Трагедія про руйнівну силу амбіцій та те, як жага до влади може поглинути людину та країну.",
    emotionalMatch: "Напружена історія про докори сумління та фатум.",
    buyUrl: "https://atenabooks.com/product:makbet",
    coverUrl: "https://atenabooks.com/upload/product/makbet/374.jpg"
  },
  {
    id: "divine-comedy-hell",
    title: "Божественна комедія (Пекло)",
    author: "Данте Аліґ'єрі",
    description: "Перша частина величного епосу про подорож через кола підземного світу та розплату за земні гріхи.",
    emotionalMatch: "Грандіозна алегорія про шлях душі до світла через випробування.",
    buyUrl: "https://atenabooks.com/product:dante_aligierry_bojestvenna_komediya_peklo",
    coverUrl: "https://atenabooks.com/upload/product/bojestvenna-komediya-peklo/500.jpg"
  },
  {
    id: "don-quixote",
    title: "Вигадливий ідальго Дон Кіхот Ламанчський",
    author: "Мігель де Сервантес",
    description: "Засновницький роман сучасної літератури про лицаря, що шукає ідеали у світі, позбавленому магії.",
    emotionalMatch: "Для всіх мрійників, що борються зі своїми млинами.",
    buyUrl: "https://atenabooks.com/product:migel_de_servantesvigadliviy_idalgo_don_kihot_lamanchskiy",
    coverUrl: "https://atenabooks.com/upload/product/migel-de-servantes-vigadliviy-idalgo-don-kihot-lamanchskiy/648.jpg"
  },
  {
    id: "kyiv-mosaics",
    title: "Про мозаїки Києва",
    author: "Олена Борисова",
    description: "Детальний огляд унікальної архітектурної спадщини столиці — від минулого до сучасності крізь призму мозаїк.",
    emotionalMatch: "Для закоханих у Київ та міське мистецтво.",
    buyUrl: "https://atenabooks.com/product:olena_borisovapro_mozaki_kieva",
    coverUrl: "https://atenabooks.com/upload/product/-pro-mozaki-kyieva/6.jpg"
  },
  {
    id: "stoic-wisdom",
    title: "Маленька книга стоїчної мудрості",
    author: "Джозеф Пірсі",
    description: "Практичні поради та афоризми стоїків для тих, хто прагне зберігати спокій та яність розуму щодня.",
    emotionalMatch: "Ваш кишеньковий наставник зі спокою.",
    buyUrl: "https://atenabooks.com/product:djozef_pirsimalenka_kniga_stochno_mudrosti",
    coverUrl: "https://atenabooks.com/upload/product/-malenka-kniga-stochno-mudrosti/726.jpg"
  },
  {
    id: "moderne-women",
    title: "ДОЛЯ ЧИ ВОЛЯ. ЖІНКИ ЕПОХИ MODERNE",
    author: "Сергій Романов",
    description: "Аналіз жіночих образів у літературі та культурі модерну, їхня роль у зміні суспільних норм.",
    emotionalMatch: "Інтелектуальне дослідження жіночої ідентичності.",
    buyUrl: "https://atenabooks.com/product:sergiy_romanovdolya_chi_volya_jinki_epohi_moderne",
    coverUrl: "https://atenabooks.com/upload/product/%E2%80%9Cdolya-chi-volya%E2%80%9D-jinki-epohi-moderne/784.jpg"
  },
  {
    id: "only-women",
    title: "Лише жінки",
    author: "Сніжана Жигун",
    description: "Збірка про досвід та голоси жінок в українській літературній традиції.",
    emotionalMatch: "Сила жіночого голосу та письма.",
    buyUrl: "https://atenabooks.com/product:snijana_jigunlishe_jinki",
    coverUrl: "https://atenabooks.com/upload/product/-lishe-jinki/434.jpg"
  },
  {
    id: "odyssey",
    title: "Одіссея",
    author: "Гомер",
    description: "Героїчна подорож Одіссея додому на Ітаку, повна пригод, хитромудрості та вірності.",
    emotionalMatch: "Вічна історія про повернення до власних витоків.",
    buyUrl: "https://atenabooks.com/product:gomerodisseya",
    coverUrl: "https://atenabooks.com/upload/product/odisseya/596.jpg"
  },
  {
    id: "iliad",
    title: "Іліада",
    author: "Гомер",
    description: "Епічне полотно про Троянську війну, гнів Ахілла та трагедію смертних і богів.",
    emotionalMatch: "Велич воїнської честі та масштаб стародавнього світу.",
    buyUrl: "https://atenabooks.com/product:gomeriliada",
    coverUrl: "https://atenabooks.com/upload/product/-iliada/950.jpg"
  },
  {
    id: "untitled-story",
    title: "Повість без назви",
    author: "Валерʼян Підмогильний",
    description: "Експериментальна проза класика про творчість, внутрішні кризи та неможливість висловити невимовне.",
    emotionalMatch: "Для глибоких інтелектуальних шукань.",
    buyUrl: "https://atenabooks.com/product:valeryan_pidmogilniypovist_bez_nazvi",
    coverUrl: "https://atenabooks.com/upload/product/valeryan-pidmogilniy-povist-bez-nazvi/286.jpg"
  },
  {
    id: "small-drama",
    title: "Невеличка драма",
    author: "Валерʼян Підмогильний",
    description: "Модерний роман про зіткнення прагматизму Марти та ідеалізму Славка на тлі міського життя 20-х років.",
    emotionalMatch: "Психологія міжособистісних стосунків крізь час.",
    buyUrl: "https://atenabooks.com/product:valeryan_pidmogilniynevelichka_drama",
    coverUrl: "https://atenabooks.com/upload/product/-nevelichka-drama/573.jpg"
  },
  {
    id: "misto",
    title: "Місто",
    author: "Валерʼян Підмогильний",
    description: "Перший урбаністичний роман України про Степана Радченка та його підкорення Києва ціною власної душі.",
    emotionalMatch: "Захоплива панорама життя та спокуси великого міста.",
    buyUrl: "https://atenabooks.com/product:valeryan_pidmogilniymisto",
    coverUrl: "https://atenabooks.com/upload/product/valeryan-pidmogilniy-misto/338.jpg"
  }
];
