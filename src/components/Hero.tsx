import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/tak/661312155_18165954559414596_3351954771220495131_n.jpg"
          alt="Takarbete i soluppgång"
          fill
          className="object-cover object-[center_75%]"
          priority
        />
      </div>

      {/* Lätt filter för textläsbarhet */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Innehåll */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
        <h1 className="mb-10">
          <span className="sr-only">A Jonasson Byggservice AB</span>
          <Image
            src="/logo-white.png"
            alt=""
            width={754}
            height={503}
            className="w-56 md:w-96 h-auto"
            priority
          />
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/kontakt"
            className="bg-accent text-background px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-accent-light transition-colors duration-200"
          >
            Kontakta oss
          </Link>
          <Link
            href="/#projekt"
            className="border border-accent/50 text-accent px-8 py-3 text-sm tracking-widest uppercase font-sans hover:border-accent hover:text-accent-light transition-colors duration-200"
          >
            Se projekt
          </Link>
        </div>
      </div>

      {/* Scroll-indikator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-foreground/40 text-xs tracking-widest uppercase">Scrolla</span>
        <svg
          className="w-4 h-4 text-accent/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
