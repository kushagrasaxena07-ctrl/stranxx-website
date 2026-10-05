import { SEO } from "./components/SEO";
import { Hero } from "./components/Hero";
import { EngineeredSystems } from "./components/EngineeredSystems";
import { Commitment } from "./components/Commitment";
import { EnergyStorage } from "./components/EnergyStorage";
import { ServiceSupport } from "./components/ServiceSupport";
import { Ethos } from "./components/Ethos";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://stranxx.com/#website",
      "url": "https://stranxx.com/",
      "name": "STRANXX LLP",
      "description": "Industrial power infrastructure and energy systems: Servo Voltage Stabilizers, Electrical Panels, DG Sets, and BESS.",
      "publisher": {
        "@type": "Organization",
        "@id": "https://stranxx.com/#organization",
        "name": "STRANXX LLP",
        "url": "https://stranxx.com/",
        "logo": "https://stranxx.com/assets/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 45, Industrial Area Guldhar 2, Meerut Road",
          "addressLocality": "Ghaziabad",
          "postalCode": "201017",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-8287252775",
            "contactType": "sales",
            "areaServed": "IN"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-9220778377",
            "contactType": "customer support",
            "areaServed": "IN"
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "name": "STRANXX Industrial Power Infrastructure Solutions",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Servo Voltage Stabilizers",
          "url": "https://stranxx.com/servo"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Electrical Panels (LT, APFC, AMF, Synchronising)",
          "url": "https://stranxx.com/panels"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Battery Energy Storage Systems (BESS) & Solar + BESS",
          "url": "https://stranxx.com/bess"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "DG Sets (Diesel & Gas Generators)",
          "url": "https://stranxx.com/dg"
        }
      ]
    }
  ]
};

export function Home() {
  return (
    <main>
      <SEO
        title="STRANXX LLP | Industrial Power Infrastructure & Energy Systems Manufacturer"
        description="STRANXX LLP is a premier manufacturer in India for Servo Voltage Stabilizers, Electrical Panels (LT, APFC, AMF, Synchronising), BESS, Solar + BESS, and CPCB-IV+ DG Sets."
        canonicalPath="/"
        schema={homeSchema}
      />
      <Hero />
      <EngineeredSystems />
      <Commitment />
      <EnergyStorage />
      <ServiceSupport />
      <Ethos />
    </main>
  );
}
