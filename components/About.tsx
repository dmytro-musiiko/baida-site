const principles = [
  {
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
    body: "Індивідуальне планування кожного випадку реконструкції — від геометрії осі до прогнозу терміну носіння апарату.",
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M14 4 L24 8 L24 16 Q24 22 14 26 Q4 22 4 16 L4 8 Z" />
        <path d="M10 14 L13 17 L18 11" />
      </svg>
    ),
    label: "Досвід",
    body: "Спеціалізована reconstruction-практика, академічна діяльність і міжнародна професійна взаємодія.",
  },
  {
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
    body: "Сучасні reconstruction-системи — внутрішньокісткові магнітні стрижні, 3D-планування, малоінвазивні доступи.",
  },
];

export default function About() {
  return (
    <section id="about-doctor" className="bg-cream pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 label-caps-sm text-ink-muted">
          <span>03</span>
          <span className="w-16 h-px bg-hairline" />
          <span>Про лікаря</span>
        </div>

        {/* 3 principle blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 pb-24 border-b border-hairline">
          {principles.map((p) => (
            <div key={p.label} className="flex flex-col">
              <div className="w-14 h-14 border border-hairline flex items-center justify-center text-ink mb-6">
                {p.icon}
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3 tracking-tight">{p.label}</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">{p.body}</p>
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
                  <div className="label-caps-sm text-tan-dark mb-1">— Practice</div>
                  <div className="font-sans font-semibold text-sm leading-snug">
                    Reconstructive Orthopaedics
                    <br />
                    · Limb Lengthening
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
              <span className="font-extrabold">реконструктивний ортопед.</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-10">
              {["PhD, Ortho", "14+ років практики", "ASAMI Member", "EFORT 2024", "SICOT Fellow", "200+ реконструкцій"].map((tag) => (
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
                Спеціалізуюся виключно на{" "}
                <span className="font-serif italic text-tan-dark">реконструкції нижніх кінцівок</span> —
                це не широка ортопедія, а вузький напрямок, у якому я веду пацієнтів від першої оцінки
                до повного повернення до активного життя.
              </p>
              <p className="text-ink-muted">
                Робота — це поєднання класичної школи Ілізарова та найсучасніших технологій: магнітних
                інтрамедулярних стрижнів, 3D-планування остеотомій, малоінвазивних доступів. За кожним
                випадком стоїть детальний аналіз геометрії кінцівки, біомеханіки ходи та індивідуального
                графіка реабілітації — без шаблонних рішень.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="mt-12 pt-8 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Освіта</div>
                <div className="text-sm font-medium">
                  НМУ ім. О.О. Богомольця ·{" "}
                  <span className="font-serif italic text-ink-muted font-normal">PhD 2016</span>
                </div>
              </div>
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Стажування</div>
                <div className="text-sm font-medium">
                  Rizzoli Institute ·{" "}
                  <span className="font-serif italic text-ink-muted font-normal">Bologna, IT</span>
                </div>
              </div>
              <div>
                <div className="label-caps-sm text-ink-muted mb-2">Спеціалізація</div>
                <div className="text-sm font-medium">
                  Limb reconstruction ·{" "}
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
