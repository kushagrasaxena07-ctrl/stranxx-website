import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import generatorsImage from "./assets/images/regenerated_image_1788527420116.png";
import panelsImage from "./assets/images/regenerated_image_1788527424218.png";
import stabilisersImage from "./assets/images/regenerated_image_1788527433315.png";
import bessImage from "./assets/images/regenerated_image_1788527428547.png";

const productCategories = [
  {
    id: "generators",
    name: "Diesel & NG Generators",
    description: "Reliable power generation solutions for critical operations and continuous power needs.",
    image: generatorsImage,
    subProducts: [
      "Diesel Generators - (10 KVA - 2000 KVA)",
      "NG Generators - (100 KVA - 250 KVA)"
    ]
  },
  {
    id: "panels",
    name: "Electrical Panels",
    description: "Custom-engineered power distribution and control panels for industrial applications.",
    image: panelsImage,
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
    name: "Servo Stabilisers",
    description: "Advanced voltage regulation to protect sensitive equipment from power fluctuations.",
    image: stabilisersImage,
    subProducts: [
      "Balanced type",
      "Unbalanced Type",
      "Linear Type"
    ]
  },
  {
    id: "bess",
    name: "Solar+BESS (Battery Energy Storage Systems)",
    description: "Intelligent energy storage solutions for peak shaving and grid independence.",
    image: bessImage,
    subProducts: [
      "C&I BESS",
      "Solar + BESS",
      "Utility-Scale BESS",
      "Microgrid BESS"
    ]
  }
];

export function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-[1024px] mx-auto min-h-screen">
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
                  alt={category.name} 
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
                <ul className="grid grid-cols-1 gap-4">
                  {category.subProducts.map((sub, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]" />
                      <span className="font-medium text-[#1d1d1f]">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="mt-8 font-medium text-[#0066cc] flex items-center gap-2 hover:gap-3 transition-all">
                Request Specifications <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
