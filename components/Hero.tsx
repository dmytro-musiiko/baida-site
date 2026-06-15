import Image from "next/image";
import type { Dict, Locale } from "@/app/i18n";

export default function Hero({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.hero;
  return (
    <section className="relative bg-tan-dark overflow-hidden">
      {/* Desktop full-bleed background photo (lg+) */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="hidden lg:block object-cover"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.78) 25%, rgba(10,25,41,0.45) 50%, rgba(10,25,41,0) 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:min-h-screen">
        {/* Text content */}
        <div className="flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-[120px] md:pt-[170px] lg:pt-[216px] pb-10 lg:pb-36 text-white">
          <div className="relative max-w-2xl">
            <span aria-hidden className="hidden lg:block absolute -left-12 top-2 bottom-2 w-px bg-white/20" />

            <h1 className="font-sans font-light leading-[1.05] tracking-[-0.01em] text-[clamp(2.25rem,4.8vw,4.5rem)]">
              Dr. Maksym Baida, <span className="text-white/75">PhD</span>
            </h1>

            <div className="mt-6 label-caps text-[12px]! text-white/85 tracking-[0.22em]">
              {t.eyebrow}
            </div>

            <p className="mt-8 lg:mt-10 text-white/90 text-2xl lg:text-3xl font-light leading-snug text-balance max-w-[34ch]">
              {t.subtitle}
            </p>

            <p className="mt-5 lg:mt-6 text-white/85 leading-relaxed text-base sm:text-lg font-light text-balance max-w-[58ch]">
              {t.body}
            </p>

            <div className="mt-9 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href={`/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
              >
                {dict.common.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-8 py-4 label-caps transition-colors w-full sm:w-auto sm:min-w-[280px]"
              >
                {dict.common.ctaSecondary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / portrait doctor photo (below lg) — full portrait, uncropped */}
        <div className="lg:hidden relative mt-2">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-12 z-10"
            style={{ backgroundImage: "linear-gradient(to bottom, var(--color-tan-dark), rgba(10,25,41,0))" }}
          />
          <img
            src="/hero-doctor.jpg"
            alt="Dr. Maksym Baida"
            className="block w-full h-auto sm:max-w-[560px] sm:mx-auto"
          />
        </div>

        {/* Trust-bar — experience stats */}
        <div className="relative z-20 bg-black/30 backdrop-blur-md border-t border-white/15">
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
