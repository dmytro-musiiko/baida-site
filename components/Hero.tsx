import Image from "next/image";
import type { Dict, Locale } from "@/app/i18n";

export default function Hero({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.hero;
  return (
    <section className="relative">
      <div className="relative min-h-screen overflow-hidden bg-tan-dark flex items-start">
        {/* Background photo — same composition at every size, just scaled */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-center"
        />

        {/* Readability gradient — heavier/wider on small screens, classic left fade on desktop */}
        <div
          aria-hidden
          className="absolute inset-0 lg:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10,25,41,0.95) 0%, rgba(10,25,41,0.78) 42%, rgba(10,25,41,0.4) 70%, rgba(10,25,41,0.15) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.78) 25%, rgba(10,25,41,0.45) 50%, rgba(10,25,41,0) 80%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-[120px] md:pt-[170px] lg:pt-[216px] pb-32 lg:pb-36 text-white">
          <div className="relative max-w-md sm:max-w-xl lg:max-w-2xl">
            {/* Vertical hairline accent on left */}
            <span aria-hidden className="hidden lg:block absolute -left-12 top-2 bottom-2 w-px bg-white/20" />

            {/* H1 */}
            <h1 className="font-sans font-light leading-[1.05] tracking-[-0.01em] text-[clamp(1.875rem,7vw,4.5rem)]">
              Dr. Maksym Baida, <span className="text-white/75">PhD</span>
            </h1>

            {/* Positioning line */}
            <div className="mt-5 lg:mt-6 label-caps text-[11px]! sm:text-[12px]! text-white/85 tracking-[0.22em]">
              {t.eyebrow}
            </div>

            {/* Subtitle */}
            <p className="mt-7 lg:mt-10 text-white/90 text-xl sm:text-2xl lg:text-3xl font-light leading-snug text-balance max-w-[34ch]">
              {t.subtitle}
            </p>

            {/* Body */}
            <p className="mt-4 lg:mt-6 text-white/85 leading-relaxed text-[15px] sm:text-lg font-light text-balance max-w-[58ch]">
              {t.body}
            </p>

            {/* Primary CTA + secondary text link */}
            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
              <a
                href={`/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-6 sm:px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
              >
                {dict.common.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-6 sm:px-8 py-4 label-caps transition-colors w-full sm:w-auto sm:min-w-[280px]"
              >
                {dict.common.ctaSecondary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom trust-bar — experience stats */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-md border-t border-white/15">
          <div className="grid grid-cols-3 md:grid-cols-4 divide-x divide-white/15">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-1 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 text-center"
              >
                <span className="font-sans font-light text-white text-lg leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="label-caps text-white/75">{stat.label}</span>
              </div>
            ))}
            <div className="hidden md:flex items-center justify-center p-3 btn-metallic">
              <a
                href={`/${lang}/#consultation`}
                className="group flex items-center justify-between gap-6 w-full border border-white/40 hover:border-white text-white px-5 py-2.5 label-caps transition-colors"
              >
                <span>{t.ctaBook}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
