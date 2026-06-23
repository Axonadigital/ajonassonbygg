import Image from "next/image";
import Link from "next/link";

const services = [
  "Takarbeten",
  "Fönster & Dörrar",
  "Kök & Inredning",
  "Renovering",
  "Nybyggnation",
  "Snickeri",
];

const navLinks = [
  { label: "Hem", href: "/#hero" },
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Om oss", href: "/#om-oss" },
  { label: "Projekt", href: "/#projekt" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-accent/40">
      {/* Övre del: logga + tagline */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-col items-center text-center gap-4 border-b border-foreground/10">
        <Image
          src="/logo-light.png"
          alt="A Jonasson Byggservice AB"
          width={150}
          height={100}
          className="h-24 w-auto object-contain"
        />
        <p className="text-foreground/50 text-sm max-w-md leading-relaxed">
          Kvalificerad byggservice i Östersundsområdet – med hantverksskicklighet
          och yrkesstolthet i varje projekt.
        </p>
        <a
          href="tel:0706796199"
          className="mt-2 font-serif text-accent text-xl tracking-wide hover:text-accent-light transition-colors"
        >
          070-679 61 99
        </a>
      </div>

      {/* Kolumner */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-accent text-sm tracking-[0.25em] uppercase">Tjänster</h3>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/#tjanster"
                  className="text-foreground/60 text-sm hover:text-accent transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-accent text-sm tracking-[0.25em] uppercase">Navigera</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/60 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-accent text-sm tracking-[0.25em] uppercase">Kontakt</h3>
          <div className="flex flex-col gap-2 text-foreground/60 text-sm">
            <p>
              Hemvägen 51<br />
              831 64 Östersund
            </p>
            <a href="tel:0706796199" className="hover:text-accent transition-colors">
              070-679 61 99
            </a>
          </div>
          <Link
            href="/kontakt"
            className="mt-2 inline-block self-center sm:self-start border border-accent/50 text-accent px-6 py-2.5 text-xs tracking-widest uppercase font-sans hover:bg-accent hover:text-background transition-colors duration-200"
          >
            Begär offert
          </Link>
        </div>
      </div>

      {/* Botten */}
      <div className="border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center gap-3">
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} A Jonasson Byggservice AB · Org.nr 559400-0225
          </p>
          <a
            href="https://axonadigital.se"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
          >
            <span className="text-foreground text-xs">Skapad av</span>
            <Image
              src="/axona-logo.png"
              alt="Axona Digital"
              width={336}
              height={224}
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
