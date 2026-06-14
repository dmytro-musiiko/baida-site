import { localeNames, type Dict, type Locale } from "@/app/i18n";

export default function Footer({ dict, lang }: { dict: Dict; lang: Locale }) {
  const navLinks = [
    { label: dict.nav.home, href: `/${lang}/` },
    { label: dict.nav.field, href: `/${lang}/#about-field` },
    { label: dict.nav.treatments, href: `/${lang}/#treatments` },
    { label: dict.nav.doctor, href: `/${lang}/#about-doctor` },
    { label: dict.nav.tech, href: `/${lang}/#technology` },
    { label: dict.nav.contacts, href: `/${lang}/#consultation` },
    { label: dict.nav.forColleagues, href: `/${lang}/clinical/` },
  ];

  return (
    <footer className="bg-cream border-t border-hairline">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="font-serif italic text-3xl tracking-tight leading-none mb-2">
            Baida<span className="text-tan">.</span>
          </div>
          <div className="label-caps-sm text-ink-muted mb-5">{dict.common.brandTagline}</div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
            {dict.footer.brandDescription}
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-4">
          <div className="label-caps-sm text-ink-muted mb-5">{dict.footer.navLabel}</div>
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
          <div className="label-caps-sm text-ink-muted mb-5">{dict.footer.contactsLabel}</div>
          <ul className="space-y-3">
            {dict.footer.contacts.map((c) => (
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
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 label-caps-sm text-ink-muted">
          <span>{dict.footer.copyright}</span>
          <div className="flex items-center gap-4">
            {(Object.keys(localeNames) as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center gap-4">
                {i > 0 && <span className="opacity-30">·</span>}
                <a
                  href={`/${l}/`}
                  className={l === lang ? "text-ink" : "opacity-50 hover:opacity-100 transition-opacity"}
                >
                  {localeNames[l]}
                </a>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink transition-colors">
              {dict.footer.privacy}
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              {dict.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
