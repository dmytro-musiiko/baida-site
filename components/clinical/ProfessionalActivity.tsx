import type { Dict } from "@/app/i18n";

export default function ProfessionalActivity({ dict }: { dict: Dict }) {
  const t = dict.clinical.activity;
  return (
    <section id="academic" className="bg-paper py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>03</span>
          <span className="w-16 h-px bg-hairline" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] mb-8">
              <span className="font-light">{t.headingLight}</span>
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-md">
              {t.intro}
            </p>

            <blockquote className="mt-10 pl-6 border-l-2 border-tan font-serif italic text-ink/85 leading-snug text-[clamp(1.125rem,1.8vw,1.5rem)] max-w-md">
              {t.quote}
            </blockquote>
          </div>

          {/* Activity grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border-y border-hairline">
              {t.groups.map((a) => (
                <div key={a.k} className="bg-paper p-7 lg:p-8">
                  <div className="label-caps-sm text-tan-dark mb-4">{a.k}</div>
                  <ul className="space-y-2.5">
                    {a.items.map((it, i) => (
                      <li
                        key={i}
                        className={`text-[15px] leading-snug ${it === "—" ? "text-ink-muted/60" : "text-ink"}`}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
