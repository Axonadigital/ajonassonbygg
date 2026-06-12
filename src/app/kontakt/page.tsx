import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt – A Jonasson Byggservice AB",
  description:
    "Kontakta oss för offert eller rådgivning. Vi finns i Östersund och hjälper dig med tak, fönster, renovering och snickeri.",
};

const INSTAGRAM_URL = "https://www.instagram.com/jonassons_byggservice/";

const instagramImages = [
  "/images/fore-efter/efter.jpg",
  "/images/kok/707713550_17976211833019195_1644131302846552389_n.jpg",
  "/images/tak/661312155_18165954559414596_3351954771220495131_n.jpg",
  "/images/storprojekt/654004374_18092722589136244_8642254649446481096_n.jpg",
  "/images/ovrigt/701681191_17975076618019195_3575553379513880756_n.jpg",
  "/images/fonster/661497457_17994853541951848_2306050787491905472_n.jpg",
];

export default function Kontakt() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-light pt-32 pb-0">
        <div className="max-w-5xl mx-auto px-6">
          {/* Rubrik */}
          <div className="text-center mb-14">
            <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
              Hör av dig
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink">Kontakta oss</h1>
            <p className="text-ink/60 mt-4 max-w-xl mx-auto leading-relaxed">
              Ring, mejla eller skicka ett meddelande på Instagram – vi svarar normalt
              inom 24 timmar på vardagar.
            </p>
          </div>

          {/* Kontaktuppgifter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            <a
              href="tel:0706796199"
              className="bg-background p-8 flex flex-col items-center text-center gap-3 hover:bg-muted transition-colors group"
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="text-foreground/50 text-xs tracking-widest uppercase">Telefon</p>
              <p className="text-foreground group-hover:text-accent transition-colors text-sm">
                070-679 61 99
              </p>
            </a>

            <a
              href="mailto:Ajsbygg@hotmail.com"
              className="bg-background p-8 flex flex-col items-center text-center gap-3 hover:bg-muted transition-colors group"
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <p className="text-foreground/50 text-xs tracking-widest uppercase">E-post</p>
              <p className="text-foreground group-hover:text-accent transition-colors text-sm break-all">
                Ajsbygg@hotmail.com
              </p>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-background p-8 flex flex-col items-center text-center gap-3 hover:bg-muted transition-colors group"
            >
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-foreground/50 text-xs tracking-widest uppercase">Instagram</p>
              <p className="text-foreground group-hover:text-accent transition-colors text-sm break-all">
                @jonassons_byggservice
              </p>
            </a>

            <div className="bg-background p-8 flex flex-col items-center text-center gap-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-foreground/50 text-xs tracking-widest uppercase">Adress</p>
              <p className="text-foreground text-sm">
                Hemvägen 51<br />831 64 Östersund
              </p>
              <p className="text-foreground/40 text-xs">Org.nr 559400-0225</p>
            </div>
          </div>

          {/* Instagram – profilkort i Instagram-stil */}
          <div className="text-center mb-10">
            <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
              Följ oss
            </p>
            <h2 className="font-serif text-3xl text-ink">Vi finns på Instagram</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-ink/10 shadow-sm mb-20">
            {/* Profilhuvud */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-5 sm:gap-8">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/logo.png"
                    alt="A Jonasson Byggservice AB"
                    width={70}
                    height={47}
                    className="w-3/5 h-auto object-contain"
                  />
                </a>

                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-ink font-medium text-lg truncate hover:underline"
                    >
                      jonassons_byggservice
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bg-[#0095f6] text-white text-sm font-medium px-5 py-1.5 rounded-lg hover:bg-[#1877f2] transition-colors"
                    >
                      Följ
                    </a>
                  </div>

                  <div className="flex gap-5 text-sm text-ink">
                    <span><strong>18</strong> inlägg</span>
                    <span><strong>115</strong> följare</span>
                    <span><strong>95</strong> följer</span>
                  </div>

                  <div className="text-sm text-ink leading-snug">
                    <p className="font-medium">A Jonasson Byggservice AB</p>
                    <p className="text-ink/70">Allt inom Bygg.</p>
                    <p className="text-ink/70">Ajsbygg@hotmail.com</p>
                    <p className="text-ink/70">Jämtland 🫎</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rutnät i IG-stil */}
            <div className="grid grid-cols-3 gap-0.5 border-t border-ink/10">
              {instagramImages.map((src) => (
                <a
                  key={src}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative aspect-square overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt="Instagram-inlägg från A Jonasson Byggservice"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, 220px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=Hemv%C3%A4gen+51,+831+64+%C3%96stersund&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta till A Jonasson Byggservice AB, Hemvägen 51, Östersund"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
