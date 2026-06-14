const layers = [
  {
    num: "01",
    title: "Передопераційне планування",
    body: "Аналіз геометрії кінцівки, осі та симетрії, моделювання корекції та сценарію реконструкції під конкретний випадок.",
    tags: ["deformity analysis", "axis & alignment", "case planning"],
  },
  {
    num: "02",
    title: "Системи корекції та фіксації",
    body: "Сучасні reconstruction-системи для контрольованої корекції, фіксації та подовження — як частина єдиного workflow, а не каталог імплантів.",
    tags: ["external / internal fixation", "lengthening systems", "gradual correction"],
  },
  {
    num: "03",
    title: "Інтраопераційний контроль",
    body: "Контроль осі, симетрії та біомеханічного балансу під час втручання з опорою на попереднє планування.",
    tags: ["intra-op control", "biomechanics", "precision"],
  },
  {
    num: "04",
    title: "Функціональне відновлення",
    body: "Контрольоване відновлення функції та анатомії при деформаціях, вкороченнях і подовженні з прогнозованим протоколом.",
    tags: ["protocol-driven", "outcome tracking", "rehabilitation"],
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>01</span>
          <span className="w-16 h-px bg-hairline" />
          <span>Reconstruction ecosystem</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] mb-8">
              <span className="font-light">Реконструкція як </span>
              <span className="font-extrabold">єдиний workflow</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
            <div className="space-y-5 text-ink leading-relaxed text-lg max-w-2xl">
              <p>
                Для професійної аудиторії reconstruction-напрямок — це не окрема послуга, а
                наскрізний процес: від планування геометрії до контролю функціонального
                результату.
              </p>
              <p className="text-ink-muted text-[17px]">
                Технологічні рішення та сучасні reconstruction-системи інтегровані в цей процес
                як інструмент precision-хірургії. Технології розширюють можливості реконструкції —
                не замінюючи клінічне рішення хірурга.
              </p>
            </div>
          </div>

          {/* Knee geometry visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-tan rounded-[20px]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-hairline-soft">
                <img
                  src="/clinical-knee.jpg"
                  alt="Геометрія колінного суглоба — reconstruction planning overlay"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 label-caps-sm text-ink/70 bg-cream/85 backdrop-blur-sm px-3 py-1.5 rounded">
                  Planning geometry
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 workflow layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border-y border-hairline">
          {layers.map((l) => (
            <div
              key={l.num}
              className="group relative flex flex-col bg-cream p-8 lg:p-10 transition-colors hover:bg-paper"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-tan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-sans font-semibold text-xl tracking-tight max-w-[18ch]">{l.title}</h3>
                <span className="font-serif italic text-3xl text-hairline-soft leading-none">{l.num}</span>
              </div>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-7 max-w-[52ch]">{l.body}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {l.tags.map((t) => (
                  <span
                    key={t}
                    className="label-caps-sm bg-paper text-ink-muted px-3 py-1.5 border border-hairline-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
