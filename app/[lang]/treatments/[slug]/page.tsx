import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import rawDirectionsUk from "@/app/directions.uk.json";

interface BodyItem {
  type: string;
  text?: string;
  items?: string[];
  href?: string;
}
interface Block {
  heading: string | null;
  body: BodyItem[];
  divider: boolean;
  caseImages?: string[];
}
interface Article {
  title: string;
  lead: string;
  intro: string;
  hero: string;
  gallery: string[];
  blocks: Block[];
}
interface DirectionsData {
  cards: { slug: string; title: string; summary: string; hero: string }[];
  articles: Record<string, Article>;
}

const directionsUk = rawDirectionsUk as unknown as DirectionsData;

const IMAGES: Record<string, string> = {
  lengthening: "/treatment-tech.jpg",
  deformity: "/treatment-deform.jpg",
  symmetry: "/treatment-xray.jpg",
  technology: "/treatment-legs.jpg",
};

const OLD_SLUGS = Object.keys(IMAGES);
const UK_SLUGS = Object.keys(directionsUk.articles);

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    (lang === "uk" ? UK_SLUGS : OLD_SLUGS).map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  if (lang === "uk") {
    const article = directionsUk.articles[slug];
    if (!article) return {};
    return { title: `${article.title} — ${dict.meta.homeTitle}`, description: article.lead };
  }
  const item = dict.treatments.items.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: `${item.title} — ${dict.meta.homeTitle}`, description: item.summary };
}

export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const loc = lang as Locale;
  const dict = getDictionary(loc);

  if (loc === "uk") {
    const article = directionsUk.articles[slug];
    if (!article) notFound();
    return <RichDetail dict={dict} lang={loc} slug={slug} article={article} />;
  }

  const item = dict.treatments.items.find((i) => i.slug === slug);
  if (!item) notFound();
  return <SimpleDetail dict={dict} lang={loc} item={item} />;
}

function RichDetail({
  dict,
  lang,
  slug,
  article,
}: {
  dict: ReturnType<typeof getDictionary>;
  lang: Locale;
  slug: string;
  article: Article;
}) {
  const t = dict.treatments;

  return (
    <>
      <div className="bg-tan-dark">
        <TopBar dict={dict} lang={lang} />
        <Nav dict={dict} lang={lang} current="home" />

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <a
            href={`${BASE}/${lang}/#treatments`}
            className="inline-flex items-center gap-2 label-caps text-[11.5px] font-semibold text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </a>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-[8px] overflow-hidden bg-black/20 order-first">
              <img
                src={`${BASE}/directions/${article.hero}`}
                alt=""
                aria-hidden
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="label-caps-sm text-white/55 mb-4">{t.eyebrow}</div>
              <h1 className="font-sans font-light text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)]">
                {article.title}
              </h1>
              <p className="mt-5 text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-[52ch]">
                {article.lead}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 sm:py-20">
          <p className="max-w-[920px] text-ink text-lg leading-relaxed">{article.intro}</p>

          {article.gallery.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.gallery.map((img) => (
                <div key={img} className="rounded-[8px] overflow-hidden border border-hairline">
                  <img src={`${BASE}/directions/${img}`} alt="" className="w-full h-auto" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 max-w-[920px]">
            {article.blocks.map((block, i) =>
              block.divider ? (
                <div
                  key={i}
                  className="mt-14 mb-6 pb-3 border-b border-hairline label-caps text-ink-muted text-[12px] font-semibold"
                >
                  {block.heading}
                </div>
              ) : (
                <div key={i} className="mt-8">
                  {block.heading && (
                    <h3 className="font-sans font-medium text-ink text-lg mb-3">{block.heading}</h3>
                  )}
                  {"caseImages" in block && block.caseImages && block.caseImages.length > 0 && (
                    <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {block.caseImages.map((img) => (
                        <div key={img} className="rounded-[6px] overflow-hidden border border-hairline">
                          <img src={`${BASE}/directions/${img}`} alt="" className="w-full h-auto" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-3.5 text-ink leading-relaxed">
                    {block.body.map((item, j) => {
                      if (item.items) {
                        return (
                          <ul key={j} className="space-y-2 pl-1">
                            {item.items.map((li) => (
                              <li key={li} className="flex gap-3">
                                <span aria-hidden className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-tan-dark" />
                                {li}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (item.type === "caption") {
                        return (
                          <p key={j} className="text-sm text-ink-muted italic">
                            {item.text}
                          </p>
                        );
                      }
                      if ("href" in item && item.href) {
                        return (
                          <p key={j}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-tan-dark underline hover:no-underline">
                              {item.text}
                            </a>
                          </p>
                        );
                      }
                      return <p key={j}>{item.text}</p>;
                    })}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-14 pt-10 border-t border-hairline">
            <a
              href={`${BASE}/${lang}/#consultation`}
              className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
            >
              {dict.common.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
}

function SimpleDetail({
  dict,
  lang,
  item,
}: {
  dict: ReturnType<typeof getDictionary>;
  lang: Locale;
  item: (typeof dict)["treatments"]["items"][number];
}) {
  const t = dict.treatments;
  const image = IMAGES[item.slug];

  return (
    <>
      <div className="bg-tan-dark">
        <TopBar dict={dict} lang={lang} />
        <Nav dict={dict} lang={lang} current="home" />

        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <a
            href={`${BASE}/${lang}/#treatments`}
            className="inline-flex items-center gap-2 label-caps text-[11.5px] font-semibold text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </a>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-[8px] overflow-hidden bg-black/20 order-first">
              <img src={`${BASE}${image}`} alt="" aria-hidden className="w-full h-full object-cover" />
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-cream border border-hairline rounded-[8px] p-7 lg:p-8">
              <div className="label-caps-sm text-ink-muted mb-6">{t.indicationsLabel}</div>
              <ul className="space-y-5">
                {item.indications.map((line) => (
                  <li key={line} className="flex gap-3.5 text-ink leading-relaxed">
                    <span aria-hidden className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-tan-dark" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-hairline rounded-[8px] p-7 lg:p-8">
              <div className="label-caps-sm text-ink-muted mb-6">{t.approachLabel}</div>
              <ol className="space-y-5">
                {item.approach.map((line, i) => (
                  <li key={line} className="flex gap-3.5 text-ink leading-relaxed">
                    <span
                      aria-hidden
                      className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-tan-dark text-white text-xs font-semibold tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-hairline">
            <a
              href={`${BASE}/${lang}/#consultation`}
              className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
            >
              {dict.common.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
