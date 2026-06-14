const cases = [
  {
    code: "CASE 01",
    area: "Корекція деформації",
    title: "Корекція осі нижньої кінцівки",
    fields: [
      { k: "Показання", v: "Деформація осі, порушення симетрії" },
      { k: "Планування", v: "Аналіз геометрії, моделювання корекції" },
      { k: "Техніка", v: "—" },
      { k: "Результат", v: "—" },
    ],
  },
  {
    code: "CASE 02",
    area: "Подовження кінцівок",
    title: "Функціональне подовження",
    fields: [
      { k: "Показання", v: "Вкорочення кінцівки" },
      { k: "Планування", v: "Розрахунок подовження, контроль осі" },
      { k: "Техніка", v: "—" },
      { k: "Результат", v: "—" },
    ],
  },
  {
    code: "CASE 03",
    area: "Реконструкція після травм",
    title: "Реконструкція складного дефекту",
    fields: [
      { k: "Показання", v: "Наслідки травми, дефект сегмента" },
      { k: "Планування", v: "Поетапний reconstruction-сценарій" },
      { k: "Техніка", v: "—" },
      { k: "Результат", v: "—" },
    ],
  },
];

export default function ClinicalCases() {
  return (
    <section id="cases" className="bg-tan-dark text-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-white/55">
          <span>02</span>
          <span className="w-16 h-px bg-white/25" />
          <span>Клінічні випадки та техніки</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14">
          <div className="lg:col-span-8">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)]">
              <span className="font-light">Розбір випадків для </span>
              <span className="font-extrabold">професійної спільноти</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
            <p className="mt-7 text-white/70 leading-relaxed text-[15px] max-w-xl">
              Структуровані клінічні випадки: показання, планування, техніка, результат.
              Повні матеріали та зображення — за запитом після професійного погодження.
            </p>
          </div>

          {/* Reconstruction system visual */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square overflow-hidden rounded-[20px] border border-white/15 bg-navy-90">
              <img
                src="/orthonail.png"
                alt="Інтрамедулярна фіксація — reconstruction system"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 label-caps-sm text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded">
                Fixation system
              </div>
            </div>
          </div>
        </div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-y border-white/15">
          {cases.map((c) => (
            <article key={c.code} className="flex flex-col bg-tan-dark p-8 lg:p-9">
              <div className="flex items-center justify-between mb-7">
                <span className="label-caps-sm text-tan">{c.code}</span>
                <span className="label-caps-sm text-white/45">{c.area}</span>
              </div>
              <h3 className="font-sans font-semibold text-xl tracking-tight mb-7 leading-snug">
                {c.title}
              </h3>
              <dl className="space-y-0 border-t border-white/12">
                {c.fields.map((f) => (
                  <div key={f.k} className="flex items-baseline gap-4 py-3 border-b border-white/12">
                    <dt className="label-caps-sm text-white/45 w-[88px] shrink-0">{f.k}</dt>
                    <dd className="text-[14px] text-white/85 leading-snug">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 pt-1">
                <span className="inline-flex items-center gap-2 label-caps-sm text-white/55">
                  <span aria-hidden className="w-3.5 h-3.5 inline-flex items-center justify-center">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <rect x="2.5" y="6" width="9" height="6.5" rx="1" />
                      <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" />
                    </svg>
                  </span>
                  Матеріали за запитом
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#partnership"
            className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-7 py-4 label-caps transition-colors min-w-[280px]"
          >
            Запросити клінічні матеріали
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}