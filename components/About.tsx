const principles = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <circle cx="14" cy="14" r="5" />
        <line x1="14" y1="2" x2="14" y2="6" />
        <line x1="14" y1="22" x2="14" y2="26" />
        <line x1="2" y1="14" x2="6" y2="14" />
        <line x1="22" y1="14" x2="26" y2="14" />
      </svg>
    ),
    label: "Точність",
    body: "Індивідуальне планування кожного випадку реконструкції — від геометрії осі до контролю симетрії кінцівок. Жодних шаблонних рішень.",
    proof: "Індивідуальне планування",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M14 4 L24 8 L24 16 Q24 22 14 26 Q4 22 4 16 L4 8 Z" />
        <path d="M10 14 L13 17 L18 11" />
      </svg>
    ),
    label: "Досвід",
    body: "Вузька реконструктивна практика, академічна діяльність і міжнародна професійна взаємодія у сучасній реконструктивній ортопедії.",
    proof: "Вузька спеціалізація",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="6" y="6" width="16" height="16" />
        <line x1="14" y1="2" x2="14" y2="6" />
        <line x1="14" y1="22" x2="14" y2="26" />
        <line x1="2" y1="14" x2="6" y2="14" />
        <line x1="22" y1="14" x2="26" y2="14" />
        <circle cx="14" cy="14" r="2.5" fill="currentColor" />
      </svg>
    ),
    label: "Технології",
    body: "Сучасні reconstruction-системи, планування корекції та малоінвазивні доступи як частина reconstruction workflow.",
    proof: "Reconstruction-системи",
  },
];

export default function About() {
  return (
    <section id="about-doctor" className="bg-cream pt-20 pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 label-caps-sm text-ink-muted">
          <span>03</span>
          <span className="w-16 h-px bg-hairline" />
          <span>Про лікаря</span>
        </div>

        {/* Lead statement */}
        <h2 className="font-sans leading-[1.1] tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.5rem)] max-w-3xl mb-14">
          <span className="font-light">Три принципи, на яких тримається кожна </span>
          <span className="font-extrabold">реконструкція</span>
          <span className="font-serif italic font-medium text-tan">.</span>
        </h2>

        {/* 3 principle blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline mb-24 border-y border-hairline">
          {principles.map((p) => (
            <div
              key={p.label}
              className="group relative flex flex-col bg-cream p-8 lg:p-10 transition-colors hover:bg-paper"
            >
              {/* Top accent line */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-tan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 border border-hairline flex items-center justify-center text-ink transition-colors group-hover:border-tan group-hover:text-tan-dark">
                  {p.icon}
                </div>
                <span className="font-serif italic text-3xl text-hairline-soft leading-none">{p.num}</span>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3 tracking-tight">{p.label}</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-6">{p.body}</p>
              <div className="mt-auto pt-5 border-t border-hairline-soft label-caps-sm text-tan-dark">
                {p.proof}
              </div>
            </div>
          ))}
        </div>

        {/* Bio split section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait — tilted card with offset pad (websyvet-style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-tan rounded-[24px]" />
              <div
                className="relative bg-paper aspect-[4/5] overflow-hidden rounded-[24px] flex items-center justify-center"
                role="img"
                aria-label="Dr. Maksym Baida portrait"
              >
                <img
                  src="/dr-baida.png"
                  alt="Dr. Maksym Baida"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between label-caps-sm text-white/85 drop-shadow">
                  <span>03 — Dr. Maksym Baida</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-cream text-ink px-5 py-3 rounded-xl border border-hairline-soft">
                  <div className="label-caps-sm text-tan-dark mb-1">— Практика</div>
                  <div className="font-sans font-semibold text-sm leading-snug">
                    Реконструктивна ортопедія
                    <br />
                    · Подовження кінцівок
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <h2 className="font-sans leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.75rem)] mb-8">
              <span className="font-light">Dr. Maksym Baida, </span>
              <span className="font-serif italic font-medium text-tan">PhD</span>
              <span className="font-light"> — </span>
              <br className="hidden sm:block" />
              <span className="font-extrabold">ортопед-травматолог, реконструктивний хірург.</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Реконструкція після травм", "Корекція деформацій", "Подовження кінцівок", "Сучасні reconstruction-технології"].map((tag) => (
                <span
                  key={tag}
                  className="label-caps-sm bg-paper text-ink-muted px-4 py-2 border border-hairline-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-5 text-ink leading-relaxed max-w-2xl">
              <p>
                Спеціалізується на{" "}
                <span className="font-semibold text-tan-dark">сучасній реконструктивній ортопедії</span>,
                корекції деформацій та подовженні кінцівок.
              </p>
              <p className="text-ink-muted">
                Основні напрямки роботи включають лікування наслідків травм, реконструкцію складних
                ортопедичних дефектів, відновлення симетрії та сучасні підходи до функціонального й
                естетичного відновлення кінцівок. Поєднує клінічну практику, академічну діяльність та
                сучасні реконструктивні технології.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="mt-12 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Освіта</div>
                <div className="text-sm font-medium">
                  НМУ ім. О.О. Богомольця ·{" "}
                  <span className="font-serif italic text-ink-muted font-normal">PhD</span>
                </div>
              </div>
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Стажування</div>
                <div className="text-sm font-medium text-ink-muted">—</div>
              </div>
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Спеціалізація</div>
                <div className="text-sm font-medium">
                  Реконструкція кінцівок ·{" "}
                  <span className="font-serif italic text-ink-muted font-normal">корекція осі</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
