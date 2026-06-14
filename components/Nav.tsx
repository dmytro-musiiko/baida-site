const navLinks = [
  { label: "Головна", href: "/", active: true },
  { label: "Про напрямок", href: "#about-field" },
  { label: "Напрямки", href: "#treatments" },
  { label: "Про лікаря", href: "#about-doctor" },
  { label: "Технології", href: "#technology" },
  { label: "Контакти", href: "#consultation" },
];

const locales = ["UA", "EN", "DE", "PL"];

function LocaleDropdown() {
  return (
    <details className="relative group">
      <summary className="flex items-center gap-2 px-6 py-5 label-caps text-[11.5px] font-semibold text-white/85 hover:text-white cursor-pointer list-none border-l border-white/15 h-full transition-colors">
        <span>UA</span>
        <svg
          className="transition-transform group-open:rotate-180"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1 L5 5 L9 1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-0 min-w-[80px] bg-cream border border-hairline shadow-lg z-50">
        {locales.map((l, i) => (
          <button
            key={l}
            className={`block w-full text-left px-5 py-3 label-caps transition-colors ${
              i === 0
                ? "text-ink bg-paper"
                : "text-ink-muted hover:text-ink hover:bg-paper"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </details>
  );
}

export default function Nav() {
  return (
    <header className="bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="flex items-stretch">
        {/* Logo */}
        <a href="/" className="flex flex-col justify-center px-8 py-5 w-[220px] border-r border-white/15">
          <span className="font-serif italic text-2xl leading-none tracking-tight text-white">
            Baida<span className="text-tan">.</span>
          </span>
          <span className="label-caps-sm text-white/65 font-semibold mt-1.5 leading-tight">
            Реконструктивна
            <br />
            ортопедія
          </span>
        </a>

        {/* Main nav */}
        <nav className="flex items-center gap-8 px-8 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`label-caps text-[11.5px] font-semibold relative py-2 transition-colors ${
                link.active ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute left-0 right-0 -bottom-px h-px bg-tan" />
              )}
            </a>
          ))}
        </nav>

        {/* Locale dropdown */}
        <div className="hidden md:flex items-stretch">
          <LocaleDropdown />
        </div>

        {/* For colleagues */}
        <a
          href="/clinical"
          className="hidden lg:flex items-center gap-2 px-6 border-l border-white/15 label-caps text-[11.5px] font-semibold text-white/85 hover:text-tan transition-colors"
        >
          Для колег
          <span aria-hidden>→</span>
        </a>

        {/* Hamburger */}
        <button
          className="flex items-center justify-center w-[220px] border-l border-white/15 hover:bg-white/10 transition-colors text-white"
          aria-label="Menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="0" y1="1" x2="20" y2="1" />
            <line x1="0" y1="7" x2="20" y2="7" />
            <line x1="0" y1="13" x2="20" y2="13" />
          </svg>
        </button>
      </div>
    </header>
  );
}
