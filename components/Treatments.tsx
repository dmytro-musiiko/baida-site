import type { Dict, Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import LegLengthening from "@/components/icons/LegLengthening";
import LegDeformity from "@/components/icons/LegDeformity";
import LegSymmetry from "@/components/icons/LegSymmetry";
import TechnologyIcon from "@/components/icons/Technology";

const icons = [LegLengthening, LegDeformity, LegSymmetry, TechnologyIcon];

export default function Treatments({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.treatments;

  return (
    <section id="treatments" className="bg-tan-dark py-14 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="label-caps-sm text-white/55 mb-6">
            {t.sectionNum} — {t.sectionLabel}
          </div>
          <h2 className="font-sans text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.75rem)] lg:whitespace-nowrap">
            <span className="font-light">{t.headingLight}</span>
            <span className="font-extrabold">{t.headingBold}</span>
            <span className="font-serif italic font-medium text-tan">.</span>
          </h2>
        </div>

        {/* 2×2 icon-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <a
                key={item.slug}
                href={`${BASE}/${lang}/treatments/${item.slug}/`}
                className="group flex items-center gap-6 p-6 lg:p-8 rounded-[8px] bg-navy-90 hover:bg-navy-90/70 border border-white/10 hover:border-white/25 transition-colors"
              >
                <div className="shrink-0 w-16 h-20 lg:w-20 lg:h-24 flex items-center justify-center text-tan">
                  <Icon className="w-full h-full transition-transform group-hover:scale-105" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-light text-white text-xl lg:text-2xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 text-white/50 group-hover:text-tan transition-colors"
                >
                  →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
