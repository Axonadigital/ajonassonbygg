"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Nybyggnation",
    description: "Från grund till färdig byggnad – stommar, tillbyggnader och kompletta byggprojekt.",
    image: "/images/storprojekt/654004374_18092722589136244_8642254649446481096_n.jpg",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Renovering & Tillbyggnad",
    description: "Helrenoveringar och delprojekt med noggrann planering.",
    image: "/images/storprojekt/659707974_17958876843083317_5915692772628256203_n.jpg",
    span: "sm:col-span-2",
  },
  {
    title: "Takarbeten",
    description: "Reparation, byte och nyläggning av tak.",
    image: "/images/tak/660175122_18451683574109495_5050264884562218670_n.jpg",
    span: "",
  },
  {
    title: "Fönster & Dörrar",
    description: "Byte och montering för bättre isolering.",
    image: "/images/fonster/661497457_17994853541951848_2306050787491905472_n.jpg",
    span: "",
  },
  {
    title: "Kök & Inredning",
    description: "Montering och renovering av kök – från justeringar till kompletta installationer.",
    image: "/images/kok/571485935_17952558807019195_7960772978161419884_n.jpg",
    span: "sm:col-span-2",
  },
  {
    title: "Snickeri",
    description: "Altaner, carportar, förråd och speciallösningar i trä.",
    image: "/images/ovrigt/701681191_17975076618019195_3575553379513880756_n.jpg",
    span: "sm:col-span-2",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="tjanster" className="py-16 md:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
            Vad vi erbjuder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Våra Tjänster</h2>
          <p className="text-ink/60 mt-4 max-w-2xl mx-auto">
            Vi utför allt inom bygg – stora som små projekt, alltid med samma hantverksskicklighet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 auto-rows-[13rem] md:auto-rows-[11rem] gap-3">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <button
                key={service.title}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`relative overflow-hidden group text-left ${service.span}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isOpen
                      ? "bg-gradient-to-t from-black/95 via-black/55 to-black/20"
                      : "bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:from-black/90"
                  }`}
                />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                  <h3 className="font-serif text-xl text-white">{service.title}</h3>

                  {/* Brödtext – expanderar vid klick */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <span className="text-accent text-xs tracking-widest uppercase">
                    {isOpen ? "Stäng −" : "Läs mer +"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
