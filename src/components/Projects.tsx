"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CircularGallery,
  type GalleryAPI,
  type GalleryItem,
} from "@/components/ui/circular-gallery";
import BeforeAfter from "@/components/BeforeAfter";

type Project = {
  title: string;
  short?: string;
  cat: string;
  desc: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "Takjobb",
    cat: "Takarbete",
    desc: "Omfattande takarbete med byte av takmaterial. Noggrant utfört med kvalitetsmaterial för ett tätt och hållbart tak i många år framöver.",
    images: [
      "/images/tak/661312155_18165954559414596_3351954771220495131_n.jpg",
      "/images/tak/654458965_18059738393391617_7251428435707852627_n.jpg",
      "/images/tak/655917946_18071998637228162_711384214626327691_n.jpg",
      "/images/tak/655964037_18109161520827697_4050010362225125308_n.jpg",
      "/images/tak/656047669_18097838842974809_2879201841380293338_n.jpg",
      "/images/tak/657050890_18200390008350574_2784033976043529985_n.jpg",
      "/images/tak/660103858_18076146473547699_7647222780527497559_n.jpg",
    ],
  },
  {
    title: "Takjobb på Frösön",
    short: "Tak Frösön",
    cat: "Takarbete",
    desc: "Takrenovering på Frösön. Gammalt tak revs och ersattes med nytt – allt utfört fackmannamässigt och med omsorg om detaljerna.",
    images: [
      "/images/tak/650395865_18010382375837469_2315394450972475775_n.jpg",
      "/images/tak/660175122_18451683574109495_5050264884562218670_n.jpg",
    ],
  },
  {
    title: "Limträstomme på 500 m²",
    short: "Limträstomme",
    cat: "Nybyggnation",
    desc: "Här fick vi vara med och resa en limträstomme på ungefär 500 kvadratmeter. Ett stort och spännande projekt som krävde precision i varje moment.",
    images: [
      "/images/storprojekt/654004374_18092722589136244_8642254649446481096_n.jpg",
      "/images/storprojekt/656747395_18117279880652757_5849897858960737178_n.jpg",
      "/images/storprojekt/663148822_18402387043199479_3930522765358419949_n.jpg",
      "/images/storprojekt/669456915_18388079524086532_45340077295966590_n.jpg",
      "/images/storprojekt/670907188_18094522619143686_5797431851597830102_n.jpg",
    ],
  },
  {
    title: "Helrenovering av villa",
    short: "Helrenovering",
    cat: "Renovering",
    desc: "Vi var med och gjorde en helrenovering av en villa – från stomme till färdiga ytskikt. Ett helhetsprojekt där varje del fick den tid och noggrannhet den förtjänar.",
    images: [
      "/images/storprojekt/657596505_18107640379668219_5981814148846001237_n.jpg",
      "/images/storprojekt/657730851_18060102203395587_4312763068635290002_n.jpg",
      "/images/storprojekt/659707974_17958876843083317_5915692772628256203_n.jpg",
      "/images/storprojekt/662286586_18100259288055870_2686640724216143037_n.jpg",
      "/images/storprojekt/670350182_18038409551588370_8080658685756348662_n.jpg",
    ],
  },
  {
    title: "Kök från Storsjökök",
    short: "Nytt kök",
    cat: "Kök",
    desc: "Här blev det ett riktigt snyggt kök från Storsjökök. Montering av komplett kök med fokus på passform och snygga detaljer.",
    images: [
      "/images/kok/570551156_17952558831019195_7062055708902263563_n.jpg",
      "/images/kok/571485935_17952558807019195_7960772978161419884_n.jpg",
      "/images/kok/572951973_17952558849019195_7106445355270088966_n.jpg",
      "/images/kok/573061790_17952558858019195_3446881809363365505_n.jpg",
      "/images/kok/573076466_17952558840019195_865799920996911811_n.jpg",
    ],
  },
  {
    title: "Kök i gammal stil, Brunflo",
    short: "Kök Brunflo",
    cat: "Kök",
    desc: "Ett stiligt kök i gammal stil som monterades i Brunflo. Klassisk känsla kombinerad med moderna funktioner.",
    images: [
      "/images/kok/707713550_17976211833019195_1644131302846552389_n.jpg",
      "/images/kok/708733967_17976212523019195_7093167909147278297_n.jpg",
      "/images/kok/709121629_17976211743019195_8612599589973782380_n.jpg",
      "/images/kok/709566900_17976211965019195_8908732682812232619_n.jpg",
    ],
  },
  {
    title: "Minikök på Expo Norr",
    short: "Minikök",
    cat: "Kök",
    desc: "Montering av ett minikök på Expo Norr. Litet format men samma höga krav på utförande och finish.",
    images: [
      "/images/kok/504361878_17938973034019195_2700508429132054735_n.jpg",
      "/images/kok/511471456_17938973046019195_1522039229175094055_n.jpg",
      "/images/kok/513818950_17938973055019195_2238008792410184381_n.jpg",
    ],
  },
  {
    title: "Fönsterbyte",
    cat: "Fönster",
    desc: "Byte av fönster för bättre isolering och ett lyft för husets utseende. Monterat med precision för täthet och lång livslängd.",
    images: [
      "/images/fonster/656897309_18124602526588590_6107423895730065725_n.jpg",
      "/images/fonster/657151748_18104428040303158_1509815853354712422_n.jpg",
      "/images/fonster/663069522_18087256423993056_4147204942462133271_n.jpg",
      "/images/fonster/669778470_18126362458600199_4211255199621467386_n.jpg",
      "/images/fonster/669855932_18400373944151031_1349302136847841378_n.jpg",
    ],
  },
  {
    title: "Fönsterbyte i Myrviken",
    short: "Fönster Myrviken",
    cat: "Fönster",
    desc: "Fönsterbyte i Myrviken med nya energieffektiva fönster. Ett lyft både för komforten och husets karaktär.",
    images: [
      "/images/fonster/642169156_17939536668011309_5567709209949096027_n.jpg",
      "/images/fonster/654006059_18068259200289457_8583491487037272180_n.jpg",
      "/images/fonster/654571296_18091120166122551_2444511192746465650_n.jpg",
      "/images/fonster/670622944_18401875030199529_43955230659058375_n.jpg",
    ],
  },
  {
    title: "Renovering med nya fönster",
    short: "Nya fönster",
    cat: "Renovering",
    desc: "Renoveringsprojekt där nya fönster monterades som en del av en större upprustning av fasaden.",
    images: [
      "/images/fonster/654170034_18083057519042111_1022976616307540178_n.jpg",
      "/images/fonster/656012813_18126827989604568_6274374723186022787_n.jpg",
      "/images/fonster/660677072_17945082516156323_3517800045484621236_n.jpg",
      "/images/fonster/661497457_17994853541951848_2306050787491905472_n.jpg",
    ],
  },
  {
    title: "Specialbyggda carportar",
    short: "Carportar",
    cat: "Snickeri",
    desc: "Specialbyggda carportar anpassade efter kundens behov och tomtens förutsättningar. Ritat och byggt från grunden.",
    images: [
      "/images/ovrigt/701681191_17975076618019195_3575553379513880756_n.jpg",
      "/images/ovrigt/702564710_17975076603019195_8055956274920413976_n.jpg",
      "/images/ovrigt/703284646_17975076621019195_6919780010775136247_n.jpg",
      "/images/ovrigt/703298291_17975076630019195_3031044061442207344_n.jpg",
    ],
  },
];

const galleryItems: GalleryItem[] = projects.map((p) => ({
  image: p.images[0],
  text: p.short ?? p.title,
  subtext: p.cat,
}));

/* ---------- GalleryModal ---------- */

function GalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? project.images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === project.images.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 flex flex-col"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10 flex-shrink-0">
        <p className="text-accent text-xs uppercase tracking-[0.3em]">{project.cat}</p>
        <button
          onClick={onClose}
          className="text-foreground/60 hover:text-foreground transition-colors p-2"
          aria-label="Stäng"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Bild */}
      <div className="flex-1 relative flex items-center justify-center px-4 py-2 min-h-0">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 text-foreground p-3 transition-colors z-10"
          aria-label="Föregående"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.images[current]}
          alt={`${project.title} – bild ${current + 1}`}
          className="max-h-full max-w-full object-contain shadow-2xl"
        />
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 text-foreground p-3 transition-colors z-10"
          aria-label="Nästa"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Titel + beskrivning */}
      <div className="bg-light px-6 py-5 flex-shrink-0">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl text-ink leading-none mb-1">{project.title}</h3>
          <p className="text-ink/60 text-sm leading-relaxed mt-2">{project.desc}</p>
        </div>
      </div>

      {/* Tumnaglar */}
      <div className="flex gap-2 px-6 py-4 overflow-x-auto border-t border-foreground/10 flex-shrink-0">
        {project.images.map((img, i) => (
          <button
            key={img}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-16 h-12 overflow-hidden transition-opacity ${
              i === current ? "ring-2 ring-accent" : "opacity-50 hover:opacity-80"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
        <p className="ml-auto self-center text-foreground/40 text-xs whitespace-nowrap pl-4">
          {current + 1} / {project.images.length}
        </p>
      </div>
    </div>
  );
}

/* ---------- Projects ---------- */

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const apiRef = useRef<GalleryAPI | null>(null);
  const [bend, setBend] = useState(3);

  useEffect(() => {
    const handler = () => setBend(window.innerWidth < 768 ? 1 : 3);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleInit = useCallback((api: GalleryAPI) => {
    apiRef.current = api;
  }, []);

  const handleItemClick = useCallback((i: number) => {
    setSelected(projects[i]);
  }, []);

  return (
    <>
      <section id="projekt" className="pt-24 pb-12 bg-light">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-accent-dark text-xs tracking-[0.3em] uppercase font-sans mb-3">
            Utförda arbeten
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Våra Projekt</h2>
          <p className="mt-4 text-ink/60 max-w-md leading-relaxed mx-auto">
            Ett urval av våra senaste arbeten – dra eller använd pilarna för att bläddra,
            klicka på ett projekt för att se fler bilder och läsa mer.
          </p>
        </div>

        <div className="relative" style={{ height: "520px" }}>
          <CircularGallery
            items={galleryItems}
            bend={bend}
            autoRotateSpeed={0.012}
            scrollEase={0.06}
            onItemClick={handleItemClick}
            onInit={handleInit}
            fontClassName="font-serif text-ink"
          />

          <button
            onClick={() => apiRef.current?.scrollPrev()}
            onTouchEnd={(e) => {
              e.stopPropagation();
              apiRef.current?.scrollPrev();
            }}
            className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 z-10 bg-light border border-ink/15 text-ink p-4 md:p-3 shadow-md hover:bg-light-muted transition-colors"
            aria-label="Föregående projekt"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => apiRef.current?.scrollNext()}
            onTouchEnd={(e) => {
              e.stopPropagation();
              apiRef.current?.scrollNext();
            }}
            className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 z-10 bg-light border border-ink/15 text-ink p-4 md:p-3 shadow-md hover:bg-light-muted transition-colors"
            aria-label="Nästa projekt"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-ink/40 text-xs mt-3">
          Dra eller använd pilarna · Klicka på ett projekt för att se alla bilder
        </p>

        {/* Före/efter-slider */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <p className="text-accent-dark text-xs uppercase tracking-[0.25em] mb-3">
            Före &amp; efter – dra för att se skillnaden
          </p>
          <BeforeAfter
            before="/images/fore-efter/innan.jpg"
            after="/images/fore-efter/efter.jpg"
            height={440}
            beforePosition="center 78%"
            afterPosition="center 70%"
          />
          <p className="text-ink/60 text-sm leading-relaxed mt-4 max-w-2xl">
            Årets första trall – en ny altan som gav uteplatsen ett rejält lyft. Dra i reglaget
            för att jämföra före och efter.
          </p>
        </div>
      </section>

      {selected && <GalleryModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
