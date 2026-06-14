import { notFound } from "next/navigation";
import { hasLocale, locales } from "../i18n";
import HtmlLang from "@/components/HtmlLang";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <HtmlLang lang={lang} />
      {children}
    </>
  );
}
