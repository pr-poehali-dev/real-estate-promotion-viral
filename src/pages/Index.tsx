import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f23f5792-4031-45e9-97af-0067777d4538/files/92aec6c4-1e69-4643-baf7-d7ceaa2560e3.jpg';

const NAV = [
  { label: 'Ипотека', href: '#mortgage' },
  { label: 'Подбор', href: '#search' },
  { label: 'Выкуп', href: '#buyout' },
  { label: 'Услуги', href: '#services' },
  { label: 'Объекты', href: '#objects' },
  { label: 'Контакты', href: '#contacts' },
];

const SERVICES = [
  {
    icon: 'BadgePercent',
    title: 'Одобрение ипотеки',
    price: 'Бесплатно',
    text: 'Подаём заявки в 15+ банков одновременно и добиваемся лучшей ставки. Вы не платите ни рубля.',
  },
  {
    icon: 'Search',
    title: 'Подбор объектов',
    price: 'Бесплатно',
    text: 'Находим квартиру под ваш бюджет и пожелания — от студии до пентхауса. Без скрытых платежей.',
  },
  {
    icon: 'Home',
    title: 'Выкуп недвижимости',
    price: 'Любой объект',
    text: 'Срочный выкуп квартир, домов, долей и проблемных объектов. Деньги — за 1 день.',
  },
  {
    icon: 'Handshake',
    title: 'Продажа объекта',
    price: 'Мин. комиссия',
    text: 'Продаём вашу недвижимость быстро и выгодно с минимальным комиссионным вознаграждением.',
  },
];

const STATS = [
  { value: '15+', label: 'банков-партнёров' },
  { value: '0 ₽', label: 'за ипотеку и подбор' },
  { value: '1 день', label: 'на срочный выкуп' },
  { value: '2 400+', label: 'довольных клиентов' },
];

const OBJECTS = [
  { tag: 'Новостройка', title: 'ЖК «Казань Сити»', meta: 'Казань · 1–3 комн · от 5,8 млн ₽' },
  { tag: 'Новостройка', title: 'ЖК «Лазурные небеса»', meta: 'Иннополис · от 4,9 млн ₽' },
  { tag: 'Вторичка', title: '2-комн. на Проспекте Победы', meta: 'Казань · 58 м² · 7,4 млн ₽' },
  { tag: 'Вторичка', title: '3-комн. в Зеленодольске', meta: '74 м² · 4,2 млн ₽' },
  { tag: 'Загородный дом', title: 'Дом в Лаишевском районе', meta: '120 м², 6 сот · 8,1 млн ₽' },
  { tag: 'Выкуп', title: 'Срочный выкуп по РТ', meta: 'Казань и область · оценка за 30 мин' },
];

export default function Index() {
  const [form, setForm] = useState({ name: '', phone: '', topic: 'Ипотека' });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-wide">
            <Icon name="BrainCircuit" className="text-gold" size={22} />
            УМНАЯ<span className="text-gold"> ИПОТЕКА</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-gold transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/reels" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors">
              <Icon name="Clapperboard" size={16} />
              Рилс
            </a>
            <Button asChild className="bg-gold text-accent-foreground hover:bg-gold/90 font-semibold">
              <a href="#contacts">Консультация</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Недвижимость" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 grain opacity-40" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-sm mb-6">
              <Icon name="Sparkles" size={15} /> Агентство нового формата
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] uppercase">
              Ипотека и подбор —
              <span className="gradient-text"> бесплатно</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Одобряем ипотеку в 15+ банках, подбираем объекты без комиссии и выкупаем любую
              недвижимость за один день.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-accent-foreground hover:bg-gold/90 font-semibold text-base glow-gold"
              >
                <a href="#contacts">
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border bg-secondary/40 hover:bg-secondary font-semibold text-base"
              >
                <a href="#buyout">Срочный выкуп</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">Услуги</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
                Что мы делаем
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Прозрачные условия и забота о клиенте на каждом этапе сделки.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                id={['mortgage', 'search', 'buyout', 'sale'][i]}
                className="group rounded-2xl border border-border bg-card p-7 hover:border-gold/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon name={s.icon} className="text-gold" size={24} />
                </div>
                <div className="text-gold text-sm font-semibold">{s.price}</div>
                <h3 className="font-display text-xl font-semibold mt-1 uppercase">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYOUT highlight */}
      <section className="py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-10 md:p-14">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
                  Выкупим <span className="gradient-text">любой</span> объект
                </h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Квартиры, дома, доли, проблемная и залоговая недвижимость. Честная оценка и деньги
                  на руках за один день.
                </p>
              </div>
              <div className="grid gap-3">
                {['Бесплатная оценка за 30 минут', 'Сделка за 1 день', 'Работаем с любыми ситуациями'].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-3 rounded-xl bg-secondary/40 px-4 py-3">
                      <Icon name="CheckCircle2" className="text-gold shrink-0" size={20} />
                      <span className="text-sm">{t}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTS */}
      <section id="objects" className="py-24">
        <div className="container">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Объекты</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2 mb-4">
            Новостройки и вторичный рынок
          </h2>
          <p className="text-muted-foreground mb-12">Казань, Иннополис, Зеленодольск, Лаишево и вся Республика Татарстан</p>
          <div className="grid md:grid-cols-3 gap-5">
            {OBJECTS.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-card overflow-hidden hover:border-gold/50 transition-all"
              >
                <div className="h-44 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <Icon name="Building2" className="text-gold/40" size={56} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">{o.tag}</span>
                  <h3 className="font-display text-xl font-semibold mt-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{o.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 border-t border-border bg-card/40">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2 leading-tight">
              Оставьте заявку
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Перезвоним в течение 15 минут и бесплатно проконсультируем по ипотеке, подбору или
              выкупу.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-gold" size={20} />
                <a href="tel:+79375888578" className="font-semibold hover:text-gold transition-colors">8 (937) 588-85-78</a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-gold" size={20} />
                <span>ipotekanam@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-gold" size={20} />
                <span>Казань и Республика Татарстан</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-8 animate-scale-in"
          >
            <div className="space-y-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ваше имя"
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-gold transition-colors"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Телефон"
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-gold transition-colors"
              />
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-gold transition-colors"
              >
                {['Ипотека', 'Подбор объекта', 'Выкуп', 'Продажа'].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold text-accent-foreground hover:bg-gold/90 font-semibold text-base"
              >
                Отправить заявку
                <Icon name="Send" size={17} className="ml-1" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
            <Icon name="BrainCircuit" className="text-gold" size={18} />
            УМНАЯ<span className="text-gold"> ИПОТЕКА</span>
          </div>
          <span>© 2026 Умная ипотека. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
}