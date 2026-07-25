import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegLengthening from "@/components/icons/LegLengthening";
import LegDeformity from "@/components/icons/LegDeformity";
import LegSymmetry from "@/components/icons/LegSymmetry";
import TechnologyIcon from "@/components/icons/Technology";

const ICONS: Record<string, typeof LegLengthening> = {
  lengthening: LegLengthening,
  deformity: LegDeformity,
  symmetry: LegSymmetry,
  technology: TechnologyIcon,
};

const SLUGS = Object.keys(ICONS);

export function generateStaticParams() {
  return locales.flatMap((lang) => SLUGS.map((slug) => ({ lang, slug })));
}

function findItem(lang: Locale, slug: string) {
  const dict = getDictionary(lang);
  const item = dict.treatments.items.find((i) => i.slug === slug);
  return { dict, item };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const { dict, item } = findItem(lang, slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${dict.meta.homeTitle}`,
    description: item.summary,
  };
}

export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const loc = lang as Locale;
  const { dict, item } = findItem(loc, slug);
  if (!item) notFound();
  const t = dict.treatments;
  const Icon = ICONS[slug];

  return (
    <>
      <div className="bg-tan-dark">
        <TopBar dict={dict} lang={loc} />
        <Nav dict={dict} lang={loc} current="home" />

        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <a
            href={`${BASE}/${loc}/#treatments`}
            className="inline-flex items-center gap-2 label-caps text-[11.5px] font-semibold text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </a>

          <div className="mt-8 flex items-start gap-6 lg:gap-8">
            <div className="shrink-0 w-16 h-20 lg:w-20 lg:h-24 flex items-center justify-center text-tan">
              <Icon className="w-full h-full" />
            </div>
            <div>
              <div className="label-caps-sm text-white/55 mb-4">{t.eyebrow}</div>
              <h1 className="font-sans font-light text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)]">
                {item.title}
              </h1>
              <p className="mt-5 text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-[52ch]">
                {item.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-paper">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-ink text-lg leading-relaxed max-w-[68ch]">{item.intro}</p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="label-caps-sm text-ink-muted mb-5">{t.indicationsLabel}</div>
              <ul className="space-y-4">
                {item.indications.map((line) => (
                  <li key={line} className="flex gap-3 text-ink leading-relaxed">
                    <span aria-hidden className="text-tan-dark shrink-0">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label-caps-sm text-ink-muted mb-5">{t.approachLabel}</div>
              <ol className="space-y-4">
                {item.approach.map((line, i) => (
                  <li key={line} className="flex gap-3 text-ink leading-relaxed">
                    <span aria-hidden className="text-tan-dark shrink-0 tabular-nums">
                      {i + 1}.
                    </span>
                    {line}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-hairline">
            <a
              href={`${BASE}/${loc}/#consultation`}
              className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
            >
              {dict.common.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={loc} />
    </>
  );
}
