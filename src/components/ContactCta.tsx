import Link from "next/link";

export default function ContactCta() {
  return (
    <section id="kontakt-cta" className="py-24 bg-light-muted">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div>
          <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
            Redo att starta ditt projekt?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Låt oss hjälpa dig
          </h2>
        </div>

        <p className="text-ink/70 leading-relaxed max-w-xl">
          Hör av dig för en kostnadsfri rådgivning eller offertförfrågan. Vi svarar
          snabbt och ser fram emot att höra om ditt projekt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/kontakt"
            className="bg-background text-accent px-10 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-muted transition-colors duration-200"
          >
            Skicka förfrågan
          </Link>
          <a
            href="tel:0706796199"
            className="flex items-center gap-3 text-ink/70 hover:text-accent-dark transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-accent-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span className="font-sans text-sm">070-679 61 99</span>
          </a>
        </div>
      </div>
    </section>
  );
}
