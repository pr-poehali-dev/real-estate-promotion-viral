import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  { id: 'all', label: 'Все', icon: 'LayoutGrid' },
  { id: 'new', label: 'Новостройки', icon: 'Building' },
  { id: 'secondary', label: 'Вторичка', icon: 'Home' },
  { id: 'house', label: 'Дома', icon: 'Trees' },
  { id: 'sell', label: 'Продажа', icon: 'TrendingUp' },
  { id: 'mortgage', label: 'Ипотека', icon: 'BadgePercent' },
];

const REELS = [
  // Новостройки
  {
    id: 1,
    cat: 'new',
    trend: '🔥 Тренд: «До и после»',
    hook: '«Вот что будет за 5 лет в этом районе...»',
    format: 'Монтаж: рендер → стройка → готовый ЖК',
    duration: '15 сек',
    vibe: 'Динамика',
    script: [
      { time: '0–3 с', text: 'Крупный план: кран, котлован. Текст поверх: «2024 год»' },
      { time: '3–6 с', text: 'Рендер будущего ЖК. Текст: «2026 год»' },
      { time: '6–12 с', text: 'Голос за кадром: «Пока другие ждут — ты уже живёшь в своей квартире. Новостройки Казани от 5,8 млн — и мы одобрим ипотеку бесплатно»' },
      { time: '12–15 с', text: 'Логотип + призыв: «Ссылка в шапке профиля»' },
    ],
    caption: '🏗 Купил на котловане — выиграл в цене. Узнай, какие новостройки сейчас выгоднее всего → ссылка в шапке профиля\n\n#новостройка #ипотека #недвижимость #квартира',
    color: 'from-emerald-900 to-emerald-700',
    accent: 'bg-emerald-400',
  },
  {
    id: 2,
    cat: 'new',
    trend: '🎭 Тренд: «Честно о новостройках»',
    hook: '«3 вещи, о которых молчат застройщики»',
    format: 'Говорящая голова + текст списком',
    duration: '30 сек',
    vibe: 'Доверие',
    script: [
      { time: '0–5 с', text: 'Агент смотрит в камеру: «Работаю в недвижимости 8 лет. Вот что вам не расскажут в офисе продаж»' },
      { time: '5–15 с', text: 'Поочерёдно на экране: «1. Реальные сроки сдачи», «2. Скрытые платежи при отделке», «3. Как проверить застройщика за 5 минут»' },
      { time: '15–25 с', text: '«Мы работаем с 30+ проверенными ЖК и одобряем ипотеку — бесплатно»' },
      { time: '25–30 с', text: 'Призыв: «Напиши "КЛЮЧ" в директ — пришлю чек-лист»' },
    ],
    caption: '⚠️ Перед покупкой новостройки прочитайте это. Сохраните — пригодится!\n\nОдобряем ипотеку бесплатно, работаем с лучшими ЖК города.\n\n#честнооновостройках #ипотекабесплатно #новостройка',
    color: 'from-blue-900 to-blue-700',
    accent: 'bg-blue-400',
  },
  {
    id: 3,
    cat: 'new',
    trend: '💸 Тренд: «Цена вопроса»',
    hook: '«Что можно купить в новостройке за 7 млн?»',
    format: 'Слайд-шоу квартир с ценами',
    duration: '20 сек',
    vibe: 'Полезность',
    script: [
      { time: '0–4 с', text: 'Заголовок крупно: «7 000 000 ₽ в новостройке — что это?»' },
      { time: '4–14 с', text: 'Быстро листаем: 3 варианта квартир с фото, метражом, районом и ежемесячным платежом по ипотеке' },
      { time: '14–18 с', text: 'Текст: «Ипотеку одобряем бесплатно. Лучшая ставка — уже сегодня»' },
      { time: '18–20 с', text: 'Логотип + номер телефона' },
    ],
    caption: '💰 7 миллионов в новостройке — это вот что! Смотри все варианты → ссылка в профиле\n\nПомогаем выбрать и одобряем ипотеку бесплатно 🔑\n\n#квартира #новостройка #ипотека2025',
    color: 'from-violet-900 to-violet-700',
    accent: 'bg-violet-400',
  },

  // Вторичка
  {
    id: 4,
    cat: 'secondary',
    trend: '🕵️ Тренд: «Вторичка без риска»',
    hook: '«Как не купить проблемную квартиру»',
    format: 'Говорящая голова + чек-лист',
    duration: '30 сек',
    vibe: 'Доверие',
    script: [
      { time: '0–5 с', text: 'Агент: «Каждая 5-я вторичная квартира имеет скрытые проблемы. Вот как их найти»' },
      { time: '5–20 с', text: 'Показываем: «1. Проверяй ЕГРН», «2. История собственников», «3. Долги по ЖКХ», «4. Обременения»' },
      { time: '20–27 с', text: '«Мы проверяем всё бесплатно. Подбираем только чистые объекты»' },
      { time: '27–30 с', text: 'Призыв: «Напиши "ПРОВЕРКА" — расскажем подробнее»' },
    ],
    caption: '🔍 Перед покупкой вторички — обязательно проверь эти 4 пункта!\n\nМы подбираем объекты и проверяем юридическую чистоту бесплатно.\n\n#вторичка #недвижимость #безопасность',
    color: 'from-orange-900 to-orange-700',
    accent: 'bg-orange-400',
  },
  {
    id: 5,
    cat: 'secondary',
    trend: '🏠 Тренд: «Тур по квартире»',
    hook: '«Смотрим хрущёвку за 5,5 млн — стоит ли?»',
    format: 'Видео-тур от первого лица',
    duration: '45 сек',
    vibe: 'Развлечение',
    script: [
      { time: '0–5 с', text: 'Вход в квартиру, голос: «Вот что дают за 5,5 млн в центре — смотрим честно»' },
      { time: '5–35 с', text: 'Быстрый обход комнат: кухня, санузел, балкон. Короткие честные комментарии плюсов и минусов' },
      { time: '35–42 с', text: 'Вывод: «После ремонта — отличный вариант. Ипотека — от 47 тыс/мес. Одобряем бесплатно»' },
      { time: '42–45 с', text: 'Призыв: «Хочешь такой тур по своей будущей квартире? Пиши в директ»' },
    ],
    caption: '🚪 Честный тур по вторичке за 5,5 млн — стоит ли брать?\n\nПодбираем объекты под ваш бюджет и одобряем ипотеку. Бесплатно.\n\n#туркоквартире #вторичка #недвижимость',
    color: 'from-teal-900 to-teal-700',
    accent: 'bg-teal-400',
  },

  // Дома
  {
    id: 6,
    cat: 'house',
    trend: '🌿 Тренд: «Жизнь за городом»',
    hook: '«Почему всё больше людей уезжают из квартир»',
    format: 'Атмосферное видео + факты',
    duration: '30 сек',
    vibe: 'Эмоция',
    script: [
      { time: '0–6 с', text: 'Съёмка утра в загородном доме: кофе, птицы, тишина. Текст: «Это не мечта. Это реально»' },
      { time: '6–20 с', text: 'Факты: «Дом 100 м² в 30 км от города — от 8 млн», «Ипотека на дом — от 55 тыс/мес», «Мы подбираем бесплатно»' },
      { time: '20–27 с', text: 'Голос: «Квартира или дом — посчитаем, что выгоднее именно для вас»' },
      { time: '27–30 с', text: 'Призыв: «Напиши "ДОМ" — пришлю подборку»' },
    ],
    caption: '🏡 Уехать из квартиры — это проще, чем кажется. Дома от 8 млн, ипотека от 55 тыс/мес.\n\nПодбираем бесплатно 👇 Пиши в директ\n\n#загородныйдом #домsmечта #недвижимость',
    color: 'from-green-900 to-green-700',
    accent: 'bg-green-400',
  },
  {
    id: 7,
    cat: 'house',
    trend: '🔧 Тренд: «Сравнение»',
    hook: '«Квартира vs Дом — что выгоднее в 2025?»',
    format: 'Разделённый экран: 2 варианта',
    duration: '30 сек',
    vibe: 'Полезность',
    script: [
      { time: '0–5 с', text: 'Экран делится пополам. Слева квартира, справа дом. Текст: «Сравниваем честно»' },
      { time: '5–22 с', text: 'Построчно сравниваем: Цена / Платёж по ипотеке / Стоимость ЖКХ / Площадь / Парковка / Воздух' },
      { time: '22–28 с', text: '«Поможем подобрать под ваш бюджет и образ жизни — бесплатно»' },
      { time: '28–30 с', text: 'Призыв: «Сохрани, чтобы не потерять»' },
    ],
    caption: '🏢 vs 🏡 Что выгоднее купить в 2025 году — квартиру или дом? Сохраняй сравнение!\n\nПодбираем оба варианта и одобряем ипотеку бесплатно.\n\n#квартираилидом #ипотека #недвижимость2025',
    color: 'from-lime-900 to-lime-700',
    accent: 'bg-lime-400',
  },

  // Продажа
  {
    id: 8,
    cat: 'sell',
    trend: '⚡ Тренд: «Срочно продать»',
    hook: '«Как продать квартиру за 2 недели?»',
    format: 'Говорящая голова + шаги',
    duration: '30 сек',
    vibe: 'Срочность',
    script: [
      { time: '0–5 с', text: 'Агент: «Хочешь продать быстро и дорого? Вот формула»' },
      { time: '5–20 с', text: 'Шаги: «1. Правильная цена — не занижай», «2. Профессиональные фото», «3. Показы в первые 3 дня», «4. Агент, который работает, а не ждёт»' },
      { time: '20–27 с', text: '«Продаём с минимальной комиссией. Все расходы — только после сделки»' },
      { time: '27–30 с', text: 'Призыв: «Пиши "ПРОДАМ" — оценим бесплатно»' },
    ],
    caption: '⚡ Продаёшь квартиру? Вот 4 шага, которые ускорят продажу в 3 раза!\n\nРаботаем с минимальной комиссией. Оценка — бесплатно.\n\n#продатьквартиру #продажанедвижимости #агент',
    color: 'from-red-900 to-red-700',
    accent: 'bg-red-400',
  },
  {
    id: 9,
    cat: 'sell',
    trend: '💡 Тренд: «Ошибки продавца»',
    hook: '«5 ошибок при продаже — теряете сотни тысяч»',
    format: 'Список с примерами и цифрами',
    duration: '40 сек',
    vibe: 'Страх потери',
    script: [
      { time: '0–5 с', text: 'Текст на экране: «Вы теряете деньги прямо сейчас. Если совершаете хоть одну из этих ошибок»' },
      { time: '5–30 с', text: '5 ошибок с примером потерь: неправильная цена (-300 тыс), плохие фото (-200 тыс), отказ от торга (-150 тыс), нет агента (-400 тыс экономии), затянутые показы (-месяц)' },
      { time: '30–37 с', text: '«Мы помогаем продать максимально дорого с минимальной комиссией»' },
      { time: '37–40 с', text: 'Призыв: «Сохрани и напиши нам перед продажей»' },
    ],
    caption: '😱 Продаёте квартиру? Эти ошибки стоят сотни тысяч рублей!\n\nМы продаём выгодно — с минимальной комиссией.\n\n#ошибкипродавца #продажанедвижимости #выгоднопродать',
    color: 'from-pink-900 to-pink-700',
    accent: 'bg-pink-400',
  },

  // Ипотека
  {
    id: 10,
    cat: 'mortgage',
    trend: '📊 Тренд: «Разбор ставки»',
    hook: '«Почему не берите ипотеку без нас»',
    format: 'Цифры и калькулятор на экране',
    duration: '25 сек',
    vibe: 'Экономия',
    script: [
      { time: '0–5 с', text: 'Текст: «Разница в 0,5% ставки — это 200 000 ₽ за 20 лет»' },
      { time: '5–17 с', text: 'Показываем: среднерыночная ставка vs ставка через агентство. Считаем разницу по платежам' },
      { time: '17–22 с', text: '«Мы подаём в 15+ банков и выбиваем лучшую ставку. И это — бесплатно»' },
      { time: '22–25 с', text: 'Призыв: «Напиши "СТАВКА" — посчитаем вашу выгоду»' },
    ],
    caption: '💸 0,5% разницы в ставке = 200 000 рублей! Мы находим лучшую ставку в 15+ банках.\n\nБесплатно. Без визита в банк.\n\n#ипотека #ипотекабесплатно #лучшаяставка',
    color: 'from-cyan-900 to-cyan-700',
    accent: 'bg-cyan-400',
  },
  {
    id: 11,
    cat: 'mortgage',
    trend: '🤯 Тренд: «Миф о ставке»',
    hook: '«Нет — ипотека сейчас НЕ дорогая. Объясняю»',
    format: 'Говорящая голова + графики',
    duration: '35 сек',
    vibe: 'Провокация',
    script: [
      { time: '0–7 с', text: 'Агент: «Все говорят, что ипотека сейчас дорогая. Это не так — и вот почему»' },
      { time: '7–25 с', text: 'Аргументы: рост цен на аренду vs платёж по ипотеке, рост цен на недвижимость за год, субсидированные программы, семейная ипотека' },
      { time: '25–32 с', text: '«Мы найдём для вас программу с минимальной ставкой — абсолютно бесплатно»' },
      { time: '32–35 с', text: 'Призыв: «Напиши "ИПОТЕКА" — подберём»' },
    ],
    caption: '🔥 «Ипотека сейчас дорогая» — разбираю этот миф! Сохрани, чтобы не пожалеть.\n\nОдобряем ипотеку в 15+ банках. Бесплатно.\n\n#ипотека2025 #мифыоипотеке #недвижимость',
    color: 'from-indigo-900 to-indigo-700',
    accent: 'bg-indigo-400',
  },
];

const TIPS = [
  { icon: 'Volume2', tip: 'Первые 3 секунды решают всё — начинай с неожиданного факта или провокации' },
  { icon: 'Type', tip: 'Крупные субтитры обязательны — 85% смотрят без звука' },
  { icon: 'Clock', tip: 'Оптимальная длина: 15–30 сек для охвата, 45–60 сек для прогрева' },
  { icon: 'Hash', tip: '3–5 хэштегов работают лучше, чем 30 — алгоритмы это любят' },
  { icon: 'MessageCircle', tip: 'Призыв «Пиши в директ» + кодовое слово = +40% конверсии' },
  { icon: 'TrendingUp', tip: 'Публикуй 3–5 рилс в неделю — алгоритм любит регулярность' },
];

export default function Reels() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openReel, setOpenReel] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? REELS : REELS.filter((r) => r.cat === activeCategory);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ArrowLeft" size={18} />
            ЭСТЕЙТ<span className="text-gold">.</span>
          </a>
          <div className="flex items-center gap-2">
            <Icon name="Clapperboard" className="text-gold" size={22} />
            <span className="font-display font-bold uppercase tracking-wide">Студия рилс</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div className="container relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest mb-5">
            <Icon name="Zap" size={13} /> Актуальные тренды 2025
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase leading-tight">
            Сценарии рилс<br />
            <span className="gradient-text">которые приводят клиентов</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-xl text-lg">
            Готовые сценарии по самым работающим трендам — для новостроек, вторички, домов и продажи объектов. Копируй и снимай.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 text-sm">
              <Icon name="Video" className="text-gold" size={16} />
              <span>{REELS.length} сценариев</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 text-sm">
              <Icon name="Target" className="text-gold" size={16} />
              <span>5 тематик</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 text-sm">
              <Icon name="Copy" className="text-gold" size={16} />
              <span>Готовые подписи и хэштеги</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border bg-card/30 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === c.id
                    ? 'bg-gold text-accent-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/50'
                }`}
              >
                <Icon name={c.icon} size={15} />
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Grid */}
      <section className="py-12">
        <div className="container grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((reel) => (
            <div
              key={reel.id}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:border-gold/40 transition-all group"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${reel.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                <span className="text-xs text-white/70 font-semibold">{reel.trend}</span>
                <h3 className="font-display text-xl font-bold text-white mt-2 uppercase leading-tight">
                  {reel.hook}
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <span className={`${reel.accent} text-black text-xs font-bold px-2 py-1 rounded-lg`}>
                    {reel.duration}
                  </span>
                  <span className="text-white/60 text-xs">{reel.format}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Icon name="Sparkles" className="text-gold" size={14} />
                  Вайб: <span className="text-foreground font-semibold">{reel.vibe}</span>
                </div>

                {/* Script preview */}
                <div className="space-y-2 mb-5">
                  {reel.script.slice(0, openReel === reel.id ? reel.script.length : 2).map((s, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="shrink-0 text-gold font-mono text-xs bg-gold/10 px-2 py-1 rounded-lg">
                        {s.time}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">{s.text}</span>
                    </div>
                  ))}
                  {reel.script.length > 2 && (
                    <button
                      onClick={() => setOpenReel(openReel === reel.id ? null : reel.id)}
                      className="text-gold text-xs font-semibold flex items-center gap-1 hover:underline"
                    >
                      <Icon name={openReel === reel.id ? 'ChevronUp' : 'ChevronDown'} size={14} />
                      {openReel === reel.id ? 'Свернуть' : `Ещё ${reel.script.length - 2} шага`}
                    </button>
                  )}
                </div>

                {/* Caption */}
                <div className="rounded-xl bg-secondary/40 border border-border p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Подпись + хэштеги
                    </span>
                    <button
                      onClick={() => handleCopy(reel.caption, reel.id)}
                      className="text-xs text-gold font-semibold flex items-center gap-1 hover:underline"
                    >
                      <Icon name={copied === reel.id ? 'Check' : 'Copy'} size={13} />
                      {copied === reel.id ? 'Скопировано!' : 'Скопировать'}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 border-t border-border bg-card/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase mb-10">
            <span className="gradient-text">Советы</span> для максимального охвата
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIPS.map((t, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon name={t.icon} className="text-gold" size={20} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-10 text-center">
            <div className="absolute inset-0 grain opacity-20" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase">
                Снял рил — клиент написал.<br />
                <span className="gradient-text">Закрываем сделку вместе.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                Рилс приводят подписчиков. Мы превращаем их в покупателей — бесплатная ипотека, подбор и выкуп.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-gold text-accent-foreground hover:bg-gold/90 font-semibold text-base glow-gold"
              >
                <a href="/#contacts">
                  Оставить заявку
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}