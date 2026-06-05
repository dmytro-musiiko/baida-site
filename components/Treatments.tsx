import LegLengthening from "./icons/LegLengthening";
import LegDeformity from "./icons/LegDeformity";
import LegSymmetry from "./icons/LegSymmetry";
import Technology from "./icons/Technology";

const cards = [
  {
    title: "Подовження",
    body: "Поступове подовження стегна або гомілки за методикою Ілізарова та з PRECICE-стрижнями.",
    tags: ["FEMUR", "TIBIA", "PRECICE"],
    meta: "Δ +4.2 cm",
    Icon: LegLengthening,
  },
  {
    title: "Корекція деформацій",
    body: "Виправлення варусних, вальгусних та ротаційних деформацій за CORA-методом.",
    tags: ["VARUS / VALGUS", "CORA", "OSTEOTOMY"],
    meta: "α 14°",
    Icon: LegDeformity,
  },
  {
    title: "Відновлення симетрії",
    body: "Усунення анізомелії після травм, інфекцій або вродженого скорочення — відновлення осі та ходи.",
    tags: ["ANISOMELIA", "GAIT", "PELVIC AXIS"],
    meta: "Δ 3.6 cm",
    Icon: LegSymmetry,
  },
  {
    title: "Reconstruction-технології",
    body: "Магнітні інтрамедулярні стрижні, 3D-планування, біосумісні титанові імпланти.",
    tags: ["PRECICE 2.2", "3D PLAN", "MAGNETIC"],
    meta: "Ti-6Al-4V",
    Icon: Technology,
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Centered mixed-weight heading (websyvet-style) */}
        <div className="text-center mb-4 label-caps-sm text-ink-muted">02 — Напрямки лікування</div>
        <h2 className="text-center font-sans leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,6vw,5rem)] mb-6 max-w-4xl mx-auto">
          <span className="font-light">Чотири напрямки сучасної </span>
          <span className="font-extrabold">реконструкції</span>
          <span className="font-serif italic font-medium text-tan">.</span>
        </h2>
        <p className="text-center text-ink-muted max-w-2xl mx-auto mb-20 leading-relaxed">
          Кожен напрямок — окрема методологія, що поєднує доказову ортопедію, сучасні
          імпланти та персональний план відновлення.
        </p>

        {/* 2×2 dark cards with offset pads (websyvet signature) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="relative">
              {/* Offset pad */}
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 bg-tan rounded-[20px]" />
              {/* Main card */}
              <article className="relative bg-tan-dark text-white rounded-[20px] p-10 lg:p-12 flex flex-col min-h-[360px]">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center">
                    <card.Icon className="h-7 w-auto text-white" />
                  </div>
                  <span className="label-caps-sm text-white/55 font-mono">{card.meta}</span>
                </div>
                <h3 className="font-sans font-bold text-2xl lg:text-3xl leading-tight tracking-[-0.015em] mb-4">
                  {card.title}
                </h3>
                <p className="text-white/75 leading-relaxed text-[15px] mb-6 flex-1">{card.body}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label-caps-sm text-white/70 border border-white/25 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
