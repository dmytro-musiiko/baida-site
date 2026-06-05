const footerCols = [
  {
    label: "Напрямки",
    items: ["Подовження кінцівок", "Корекція деформацій", "Відновлення симетрії", "Reconstruction tech"],
  },
  {
    label: "Пацієнтам",
    items: ["Як проходить консультація", "Підготовка знімків", "Реабілітація", "FAQ"],
  },
  {
    label: "Лікар",
    items: ["Біографія", "Публікації", "Виступи · конференції", "Контакти"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-3">
          <div className="font-serif italic text-3xl tracking-tight leading-none mb-2">
            Baida<span className="text-tan">.</span>
          </div>
          <div className="label-caps-sm text-ink-muted mb-5">Modern Orthopaedic Reconstruction</div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
            Персональна практика Dr. Maksym Baida, PhD — вузька спеціалізація на реконструкції
            нижніх кінцівок та корекції деформацій. Київ.
          </p>
        </div>

        {/* Columns */}
        {footerCols.map((col) => (
          <div key={col.label} className="md:col-span-3">
            <div className="label-caps-sm text-ink-muted mb-5">— {col.label}</div>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink hover:text-tan-dark transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1440px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 label-caps-sm text-ink-muted">
          <span>© 2026 Dr. Maksym Baida. Усі права захищені.</span>
          <div className="flex items-center gap-4">
            <span>UA</span>
            <span className="opacity-30">·</span>
            <span className="opacity-50">EN</span>
            <span className="opacity-30">·</span>
            <span className="opacity-50">DE</span>
            <span className="opacity-30">·</span>
            <span className="opacity-50">PL</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
