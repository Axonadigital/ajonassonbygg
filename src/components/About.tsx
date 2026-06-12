export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-light-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
                Om företaget
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                Hantverksskicklighet med yrkesstolthet
              </h2>
            </div>

            <p className="text-ink/70 leading-relaxed">
              A Jonasson Byggservice AB är ett lokalt byggföretag baserat i Östersund med fokus på
              kvalitet, tillförlitlighet och gott hantverk. Vi tar oss an allt från mindre
              reparationer till fullskaliga renoveringar – alltid med samma engagemang och
              noggrannhet.
            </p>

            <p className="text-ink/70 leading-relaxed">
              Med gedigen erfarenhet av takarbeten, fönsterbyten, köksmontage och byggnadssnickeri
              kan vi erbjuda en bred kompetens under ett och samma tak. Vi arbetar nära våra kunder
              för att leverera resultat som håller i längden.
            </p>

            <div className="border-l-2 border-accent-dark pl-6 py-2">
              <p className="font-serif text-lg text-ink/80 italic">
                "Oavsett om det är ett litet jobb eller ett stort projekt gör vi det rätt – första
                gången."
              </p>
            </div>
          </div>

          {/* Details card */}
          <div className="bg-light p-10 flex flex-col gap-6 shadow-lg">
            <h3 className="font-serif text-xl text-ink">Företagsinformation</h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-accent-dark mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <p className="text-ink/50 text-xs tracking-widest uppercase mb-1">Adress</p>
                  <p className="text-ink/80 text-sm">
                    Hemvägen 51, 831 64 Östersund
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-accent-dark mt-0.5 flex-shrink-0"
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
                <div>
                  <p className="text-ink/50 text-xs tracking-widest uppercase mb-1">Telefon</p>
                  <a
                    href="tel:0706796199"
                    className="text-ink/80 text-sm hover:text-accent-dark transition-colors"
                  >
                    070-679 61 99
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-accent-dark mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                <div>
                  <p className="text-ink/50 text-xs tracking-widest uppercase mb-1">Org.nr</p>
                  <p className="text-ink/80 text-sm">559400-0225</p>
                </div>
              </div>
            </div>

            <a
              href="/kontakt"
              className="mt-2 inline-block text-center bg-background text-accent px-6 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-muted transition-colors duration-200"
            >
              Begär offert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
