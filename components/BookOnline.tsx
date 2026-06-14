const channels = [
  { mono: "TG", label: "Telegram", handle: "—" },
  { mono: "WA", label: "WhatsApp", handle: "—" },
  { mono: "IG", label: "Instagram", handle: "—" },
  { mono: "@", label: "Email", handle: "—" },
];

export default function BookOnline() {
  return (
    <section id="consultation" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="relative">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 bg-tan rounded-[24px]" />
          <div className="relative bg-gradient-to-br from-tan-dark via-tan-dark to-blue text-white rounded-[24px] p-10 lg:p-16 overflow-hidden">
          {/* Geometric decor */}
          <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/15" />
          <div aria-hidden className="absolute top-12 right-32 w-2.5 h-2.5 rounded-full bg-white/40" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: heading + CTA */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10 label-caps-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>06 — Зверніться</span>
                <span className="w-16 h-px bg-white/30" />
              </div>

              <h2 className="font-sans font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,5.5vw,4.25rem)] max-w-[12ch]">
                Індивідуальна консультація та{" "}
                <span className="font-serif italic font-medium">оцінка випадку</span>.
              </h2>

              <p className="mt-8 text-white/85 leading-relaxed max-w-xl text-[15px]">
                Надішліть свої знімки та коротко опишіть ситуацію — ви отримаєте попередній план
                лікування з коментарями щодо подальших кроків.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-7 py-5 label-caps min-w-[280px]"
                >
                  Записатись на консультацію
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#case-upload"
                  className="group inline-flex items-center justify-between gap-6 border border-white/50 hover:border-white text-white px-7 py-5 label-caps transition-colors min-w-[280px]"
                >
                  Надіслати знімки онлайн
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right: direct channels */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8 label-caps-sm text-white/70">
                <span className="w-12 h-px bg-white/30" />
                <span>Прямі канали</span>
              </div>

              <div className="divide-y divide-white/15 border-y border-white/15">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href="#"
                    className="group flex items-center gap-5 py-5 hover:bg-white/[0.05] transition-colors px-1"
                  >
                    <span className="w-12 h-12 border border-white/25 flex items-center justify-center label-caps-sm text-white/85 group-hover:border-white group-hover:text-white transition-colors">
                      {c.mono}
                    </span>
                    <div className="flex-1">
                      <div className="label-caps-sm text-white/65 mb-0.5">{c.label}</div>
                      <div className="font-sans font-medium text-white">{c.handle}</div>
                    </div>
                    <span className="text-white/55 group-hover:text-white group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
