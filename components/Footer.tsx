const navLinks = [
  { label: "Головна", href: "/" },
  { label: "Про напрямок", href: "#about-field" },
  { label: "Напрямки", href: "#treatments" },
  { label: "Про лікаря", href: "#about-doctor" },
  { label: "Технології", href: "#technology" },
  { label: "Контакти", href: "#consultation" },
];

const contacts = [
  { label: "Telegram", handle: "—" },
  { label: "WhatsApp", handle: "—" },
  { label: "Instagram", handle: "—" },
  { label: "Email", handle: "—" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="font-serif italic text-3xl tracking-tight leading-none mb-2">
            Baida<span className="text-tan">.</span>
          </div>
          <div className="label-caps-sm text-ink-muted mb-5">Modern Orthopaedic Reconstruction</div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
            Dr. Maksym Baida, PhD — сучасна реконструктивна ортопедія, корекція деформацій та
            подовження кінцівок.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-4">
          <div className="label-caps-sm text-ink-muted mb-5">— Навігація</div>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-ink hover:text-tan-dark transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="md:col-span-3">
          <div className="label-caps-sm text-ink-muted mb-5">— Контакти</div>
          <ul className="space-y-3">
            {contacts.map((c) => (
              <li key={c.label} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-ink">{c.label}</span>
                <span className="text-ink-muted">{c.handle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1440px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 label-caps-sm text-ink-muted">
          <span>© 2026 Modern Orthopaedic Reconstruction. Усі права захищені.</span>
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
