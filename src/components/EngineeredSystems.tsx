import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import dgImage from "../assets/images/regenerated_image_1787557488489.png";
import panelImage from "../assets/images/stranxx_lt_panels_1787500703584.jpg";
import servoImage from "../assets/images/regenerated_image_1787555922847.png";
import bessImage from "../assets/images/regenerated_image_1787557190781.png";

const systems = [
  {
    id: "Power Generation",
    name: "DG Sets",
    desc: "High-capacity prime and standby power generation units built for continuous heavy-duty operation.",
    image: dgImage
  },
  {
    id: "Power Distribution",
    name: "Electrical Panels",
    desc: "Custom-engineered panels ensuring precise power distribution and robust system protection.",
    image: panelImage
  },
  {
    id: "Power Regulation",
    name: "Servo Stabilisers",
    desc: "Automated voltage regulation systems safeguarding critical infrastructure from fluctuations.",
    image: servoImage
  },
  {
    id: "Energy Storage",
    name: "BESS Storage",
    desc: "Scalable battery energy storage solutions for peak shaving and renewable integration.",
    image: bessImage
  }
];

export function EngineeredSystems() {
  return (
    <section id="products" className="py-24 md:py-32 px-4 md:px-8 max-w-[1024px] mx-auto bg-obsidian">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Engineered Systems.
          </h2>
          <p className="font-sans text-xl text-[#86868b] max-w-lg font-medium leading-relaxed">
            Robust industrial power infrastructure built to exact specifications.
          </p>
        </div>
        <Link to="/products" className="inline-flex items-center gap-2 text-[#0066cc] hover:text-[#0066cc]/80 transition-colors font-sans text-sm font-medium">
          View all specifications <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system) => (
          <Link to="/products" key={system.id} className="group bg-white border border-black/5 hover:border-black/10 transition-all duration-300 rounded-[24px] overflow-hidden flex flex-col cursor-pointer shadow-sm hover:shadow-md">
            <div className="p-8 pb-0 z-10 flex flex-col">
              <div className="font-sans text-xs text-[#86868b] uppercase tracking-widest font-medium mb-3">
                {system.id}
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3 tracking-tight">{system.name}</h3>
              <p className="text-[#86868b] font-sans text-sm mb-6 max-w-xs leading-relaxed">
                {system.desc}
              </p>
              <div className="mt-4 mb-5">
                <span className="font-medium text-[#1d1d1f] flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="relative flex-1 min-h-[360px] md:min-h-[460px] w-full mt-2">
              <img 
                src={system.image} 
                alt={system.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
