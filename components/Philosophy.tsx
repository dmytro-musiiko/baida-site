export default function Philosophy() {
  return (
    <section className="bg-paper py-32 sm:py-48">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="flex items-center gap-4 mb-16 label-caps-sm text-ink/55">
          <span className="w-12 h-px bg-ink/25" />
          <span>The approach · Philosophy · 2026</span>
        </div>

        <blockquote className="font-serif italic text-ink/85 leading-[1.05] tracking-[-0.015em] text-[clamp(2.5rem,7vw,7rem)] max-w-[14ch]">
          <span className="text-tan-dark">“</span>Сучасна реконструкція — це поєднання{" "}
          <em className="not-italic font-normal font-sans text-ink">точності,</em>{" "}
          <em className="not-italic font-normal font-sans text-ink">функції</em> та{" "}
          <em className="not-italic font-normal font-sans text-ink">симетрії</em>.
        </blockquote>

        <div className="mt-16 flex items-center gap-4 label-caps-sm text-ink/55">
          <span className="w-1.5 h-1.5 rounded-full bg-tan" />
          <span>Dr. Maksym Baida, PhD</span>
        </div>
      </div>
    </section>
  );
}
