import type { MetadataRoute } from "next";
import { locales } from "./i18n";

export const dynamic = "force-static";

const SITE_URL = "https://travmatolog.in.ua";
const TREATMENT_SLUGS = ["lengthening", "deformity", "symmetry", "technology"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push({ url: `${SITE_URL}/${lang}/`, priority: 1 });
    entries.push({ url: `${SITE_URL}/${lang}/clinical/`, priority: 0.6 });
    for (const slug of TREATMENT_SLUGS) {
      entries.push({ url: `${SITE_URL}/${lang}/treatments/${slug}/`, priority: 0.8 });
    }
  }

  return entries;
}
