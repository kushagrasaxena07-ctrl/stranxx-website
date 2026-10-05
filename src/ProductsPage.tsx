import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO } from "./components/SEO";
import generatorsImage from "./assets/images/regenerated_image_1788527420116.png";
import panelsImage from "./assets/images/regenerated_image_1788527424218.png";
import stabilisersImage from "./assets/images/regenerated_image_1788527433315.png";
import bessImage from "./assets/images/regenerated_image_1788527428547.png";

const productCategories = [
  {
    id: "generators",
    name: "Diesel & NG Generators (DG Sets)",
    description: "Reliable power generation solutions for critical operations and continuous power needs. Genset makes include Cummins, KOEL, Mahindra, Baudouin, TATA, and Eicher.",
    image: generatorsImage,
    alt: "STRANXX Industrial Diesel and NG Generators DG Sets",
    link: "/dg",
    subProducts: [
      "Diesel Generators - (10 KVA - 2000 KVA)",
      "NG Generators - (100 KVA - 250 KVA)"
    ]
  },
  {
    id: "panels",
    name: "Electrical Panels",
    description: "Custom-engineered power distribution, control, and protection panels for industrial applications.",
    image: panelsImage,
    alt: "STRANXX Industrial Electrical Panels - LT, APFC, AMF, Synchronising",
    link: "/panels",
    subProducts: [
      "LT panels",
      "APFC panels",
      "ATS panels",
      "Distribution panels",
      "Synchronisation panels",
      "AMF panels"
    ]
  },
  {
    id: "stabilisers",
    name: "Servo Voltage Stabilisers",
    description: "Advanced servo-controlled voltage regulation to protect sensitive equipment and eliminate power fluctuations.",
    image: stabilisersImage,
    alt: "STRANXX Servo Voltage Stabilisers - Balanced, Unbalanced & Linear",
    link: "/servo",
    subProducts: [
      "Balanced type",
      "Unbalanced Type",
      "Linear Type"
    ]
  },
  {
    id: "bess",
    name: "Solar + BESS (Battery Energy Storage Systems)",
    description: "Intelligent energy storage solutions for peak shaving, renewable integration, and grid independence.",
    image: bessImage,
    alt: "STRANXX Battery Energy Storage Systems BESS and Solar Solutions",
    link: "/bess",
    subProducts: [
      "C&I BESS",
      "Solar + BESS",
      "Utility-Scale BESS",
      "Microgrid BESS"
    ]
  }
];

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "STRANXX Engineered Power Infrastructure Products",
  "description": "Explore STRANXX engineered industrial power systems: Servo Voltage Stabilizers, Electrical Panels, DG Sets, and Battery Energy Storage Systems (BESS).",
  "url": "https://stranxx.com/products",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": productCategories.map((cat, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": cat.name,
      "description": cat.description,
      "url": `https://stranxx.com${cat.link}`
    }))
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://stranxx.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://stranxx.com/products"
      }
    ]
  }
};

export function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-[1024px] mx-auto min-h-screen">
      <SEO
        title="Industrial Power Systems & Products | STRANXX LLP India"
        description="Explore STRANXX engineered industrial power infrastructure: Servo Voltage Stabilizers, LT/AMF/APFC/Sync Electrical Panels, CPCB-IV+ DG Sets, and BESS solutions."
        canonicalPath="/products"
        schema={productsSchema}
      />
      <div className="mb-16 md:mb-24 pt-12">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
          Engineered Systems.
        </h1>
        <p className="font-sans text-xl md:text-2xl text-[#86868b] max-w-2xl font-medium leading-relaxed">
          Explore our complete range of industrial power infrastructure, designed for precision, durability, and uninterrupted performance.
        </p>
      </div>

      <div className="space-y-24">
        {productCategories.map((category, index) => (
          <div key={category.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 items-center`}>
            <div className="flex-1 w-full relative group rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-sm">
              <div className="aspect-[4/3] w-full">
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
                {category.name}
              </h2>
              <p className="text-[#86868b] font-sans text-lg mb-8 leading-relaxed">
                {category.description}
              </p>
              
              <div className="bg-white p-8 rounded-[24px] border border-black/5 shadow-sm">
                <h3 className="font-sans text-xs uppercase tracking-widest text-[#0066cc] font-semibold mb-6">Available Configurations</h3>
                <ul className="grid grid-cols-1 gap-4 mb-6">
                  {category.subProducts.map((sub, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]" />
                      <span className="font-medium text-[#1d1d1f]">{sub}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link} 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
                >
                  View full {category.name} specifications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
