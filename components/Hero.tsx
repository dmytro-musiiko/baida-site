import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative min-h-screen overflow-hidden bg-tan-dark flex items-start">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Left-side gradient for text readability — fades fully before reaching the doctor */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.78) 25%, rgba(10,25,41,0.45) 50%, rgba(10,25,41,0) 80%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 pt-[200px] lg:pt-[216px] pb-32 lg:pb-36 text-white">
          <div className="relative max-w-2xl">
            {/* Vertical hairline accent on left */}
            <span aria-hidden className="hidden lg:block absolute -left-12 top-2 bottom-2 w-px bg-white/20" />

            {/* H1 */}
            <h1 className="font-sans font-light leading-[1.05] tracking-[-0.01em] text-[clamp(2.25rem,4.8vw,4.5rem)]">
              Dr. Maksym Baida, <span className="text-white/75">PhD</span>
            </h1>

            {/* Positioning line */}
            <div className="mt-6 label-caps text-[12px]! text-white/85 tracking-[0.22em]">
              Modern Orthopaedic Reconstruction
            </div>

            {/* Subtitle */}
            <p className="mt-10 text-white/90 text-2xl lg:text-3xl font-light leading-snug text-balance max-w-[34ch]">
              Сучасна реконструктивна ортопедія, корекція деформацій та подовження кінцівок.
            </p>

            {/* Body */}
            <p className="mt-6 text-white/85 leading-relaxed text-lg font-light text-balance max-w-[58ch]">
              Спеціалізований напрямок сучасної ортопедії для пацієнтів із вкороченням кінцівок, деформаціями та порушенням симетрії, а також для функціонального та естетичного подовження кінцівок.
            </p>

            {/* Primary CTA + secondary text link */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <a
                href="#consultation"
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps min-w-[280px]"
              >
                Записатись на консультацію
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#case-evaluation"
                className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-8 py-4 label-caps transition-colors min-w-[280px]"
              >
                Подати запит на оцінку випадку
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom trust-bar — experience stats */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-md border-t border-white/15">
          <div className="grid grid-cols-3 md:grid-cols-4 divide-x divide-white/15">
            {[
              { value: "—", label: "років досвіду" },
              { value: "—", label: "операцій" },
              { value: "—", label: "наукових публікацій" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-center gap-3 px-6 py-5"
              >
                <span className="font-sans font-light text-white text-lg leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="label-caps text-white/75">{stat.label}</span>
              </div>
            ))}
            <div className="hidden md:flex items-center justify-center p-3 btn-metallic">
              <a
                href="#consultation"
                className="group flex items-center justify-between gap-6 w-full border border-white/40 hover:border-white text-white px-5 py-2.5 label-caps transition-colors"
              >
                <span>Записатись</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
