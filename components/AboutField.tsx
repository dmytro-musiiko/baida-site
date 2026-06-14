const paragraphs = [
  "Сучасна реконструктивна ортопедія поєднує функціональне відновлення, корекцію деформацій та сучасні технології подовження кінцівок.",
  "Індивідуальне планування лікування дозволяє працювати з вкороченням кінцівок, порушенням симетрії, наслідками травм та естетичною корекцією пропорцій тіла.",
  "Сучасні реконструктивні технології відкривають можливості для більш точного, контрольованого та прогнозованого відновлення функції й анатомії кінцівок.",
];

export default function AboutField() {
  return (
    <section id="about-field" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>01</span>
          <span className="w-16 h-px bg-hairline" />
          <span>Про напрямок</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)]">
              <span className="font-light">Реконструктивна ортопедія </span>
              <span className="font-extrabold">нового покоління</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
          </div>

          {/* Body */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-ink leading-relaxed text-lg max-w-2xl">
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "" : "text-ink-muted text-[17px]"}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-7 py-4 label-caps min-w-[260px]"
              >
                Записатись на консультацію
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#consultation"
                className="group inline-flex items-center justify-between gap-6 border border-hairline hover:border-ink text-ink px-7 py-4 label-caps transition-colors min-w-[260px]"
              >
                Подати запит на оцінку випадку
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
