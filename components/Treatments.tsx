const cards = [
  {
    category: "Реконструктивна ортопедія",
    title: "Подовження кінцівок",
    image: "/treatment-tech.jpg",
  },
  {
    category: "Реконструктивна ортопедія",
    title: "Корекція деформацій",
    image: "/A9A8DB47-608C-4FAB-BEF1-C7D85351E807.png",
  },
  {
    category: "Реконструктивна ортопедія",
    title: "Відновлення симетрії",
    image: "/treatment-xray.jpg",
  },
  {
    category: "Реконструктивна ортопедія",
    title: "Сучасні реконструктивні технології",
    image: "/treatment-legs.jpg",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="bg-tan-dark py-14 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="label-caps-sm text-white/55 mb-6">02 — Напрямки лікування</div>
          <h2 className="font-sans text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.75rem)] whitespace-nowrap">
            <span className="font-light">Чотири напрямки сучасної </span>
            <span className="font-extrabold">реконструкції</span>
            <span className="font-serif italic font-medium text-tan">.</span>
          </h2>
        </div>

        {/* 2×2 image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <a
              key={card.title}
              href="#consultation"
              className="group relative block aspect-[16/10] overflow-hidden rounded-[8px] bg-navy-90"
            >
              {/* Image or placeholder */}
              {card.image ? (
                <div className="absolute inset-0 flex items-center justify-center p-5 lg:p-8">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-navy-90 to-tan-dark"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)",
                  }}
                />
              )}

              {/* Dark overlay for legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55 group-hover:from-black/40 group-hover:to-black/65 transition-colors"
              />

              {/* Title bottom-center */}
              <div className="absolute inset-x-6 bottom-5 flex justify-center text-center">
                <h3 className="font-sans font-light text-white text-xl lg:text-2xl tracking-tight">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
