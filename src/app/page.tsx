import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "A Jonasson Byggservice AB",
  url: "https://jonassonbyggservice.se",
  description:
    "Professionell byggservice i Östersundsområdet. Tak, fönster, kök, renovering och snickeri med hög kvalitet.",
  telephone: "+46706796199",
  email: "Ajsbygg@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hemvägen 51",
    postalCode: "831 64",
    addressLocality: "Östersund",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  areaServed: "Östersund och Jämtland",
  serviceType: [
    "Nybyggnation",
    "Renovering och tillbyggnad",
    "Takarbeten",
    "Fönster och dörrar",
    "Kök och inredning",
    "Snickeri",
  ],
  sameAs: ["https://www.instagram.com/jonassons_byggservice/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
