const miniCards = [
  "Міжнародна професійна діяльність",
  "Академічне клінічне середовище",
  "Сучасні reconstruction-технології",
];

export default function Academic() {
  return (
    <section id="academic" className="bg-tan-dark text-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-white/55">
          <span>04</span>
          <span className="w-16 h-px bg-white/25" />
          <span>Академічне середовище</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div className="lg:col-span-7">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] mb-8">
              <span className="font-light">Академічне та клінічне </span>
              <span className="font-extrabold">середовище</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>

            <div className="space-y-5 text-white/85 leading-relaxed text-lg max-w-2xl">
              <p>
                Розвиток сучасної реконструктивної ортопедії поєднує клінічну практику, академічну
                діяльність та міжнародну професійну взаємодію.
              </p>
              <p className="text-white/70 text-[17px]">
                Університетське клінічне середовище створює основу для розвитку сучасних
                reconstruction-підходів, професійної комунікації та впровадження сучасних технологій
                у реконструкції та подовженні кінцівок.
              </p>
            </div>

            {/* Accent phrase */}
            <blockquote className="mt-12 pl-6 border-l-2 border-tan font-serif italic text-white/90 leading-snug text-[clamp(1.25rem,2vw,1.625rem)] max-w-xl">
              Сучасна реконструкція — це постійний розвиток, професійна взаємодія та технологічний
              прогрес.
            </blockquote>
          </div>

          {/* Mini-cards */}
          <div className="lg:col-span-5">
            <div className="border-y border-white/15 divide-y divide-white/15">
              {miniCards.map((card, i) => (
                <div key={card} className="flex items-center gap-5 py-6">
                  <span className="font-serif italic text-2xl text-white/40 leading-none w-8">
                    {`0${i + 1}`}
                  </span>
                  <span className="font-sans font-medium text-white text-lg leading-snug">
                    {card}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
