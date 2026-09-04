import { Battery, Zap, Shield, ArrowRight, Settings, Server, Cpu } from "lucide-react";
import bessImage from "../assets/images/regenerated_image_1787557190781.png";
import dgImage from "../assets/images/regenerated_image_1787557488489.png";
import panelImage from "../assets/images/stranxx_lt_panels_1787500703584.jpg";
import servoImage from "../assets/images/regenerated_image_1787555922847.png";

const products = [
  {
    id: "bess",
    tagline: "Next Generation Storage",
    title: "BESS Solutions.",
    desc: "High-density Battery Energy Storage Systems designed for seamless renewable integration, grid stabilization, and critical power backup.",
    icon: Battery,
    image: bessImage,
    buttonText: "Explore BESS",
    features: [
      {
        title: "Peak Saving",
        desc: "Reduce peak demand charges by deploying stored energy when rates are highest.",
        icon: Zap
      },
      {
        title: "Grid Resilience",
        desc: "Instantaneous power transition ensuring zero downtime during micro-outages.",
        icon: Shield
      }
    ]
  },
  {
    id: "dg",
    tagline: "Prime Power Generation",
    title: "DG Sets.",
    desc: "High-capacity prime and standby power generation units built for continuous heavy-duty operation and extreme reliability.",
    icon: Settings,
    image: dgImage,
    buttonText: "Explore DG Sets",
    features: [
      {
        title: "Continuous Power",
        desc: "Robust performance for extended operational hours in demanding environments.",
        icon: Zap
      },
      {
        title: "CPCB IV+ Compliant",
        desc: "Meeting the latest emission standards for cleaner and more efficient power generation.",
        icon: Shield
      }
    ]
  },
  {
    id: "panels",
    tagline: "Power Distribution",
    title: "LT Panels.",
    desc: "Custom-engineered electrical panels ensuring precise power distribution, monitoring, and robust system protection.",
    icon: Server,
    image: panelImage,
    buttonText: "Explore Panels",
    features: [
      {
        title: "Precise Distribution",
        desc: "Optimized routing and load management for complex industrial facilities.",
        icon: Zap
      },
      {
        title: "Robust Protection",
        desc: "Advanced safety mechanisms to safeguard equipment from overloads and short circuits.",
        icon: Shield
      }
    ]
  },
  {
    id: "servo",
    tagline: "Power Regulation",
    title: "Servo Stabilisers.",
    desc: "Automated voltage regulation systems designed to protect sensitive infrastructure from harmful power fluctuations.",
    icon: Cpu,
    image: servoImage,
    buttonText: "Explore Stabilisers",
    features: [
      {
        title: "Voltage Regulation",
        desc: "Maintains a constant voltage output despite wide variations in input supply.",
        icon: Zap
      },
      {
        title: "Equipment Protection",
        desc: "Extends the lifespan of critical machinery by preventing over/under voltage damage.",
        icon: Shield
      }
    ]
  }
];

export function EnergyStorage() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1024px] mx-auto bg-obsidian space-y-16 md:space-y-24">
      {products.map((product, index) => {
        const Icon = product.icon;
        const isEven = index % 2 === 0;

        return (
          <div key={product.id} className={`bg-white border border-black/5 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group shadow-xl`}>
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 bg-white">
              <div className="flex items-center gap-2 mb-6">
                <Icon className="w-6 h-6 text-[#0066cc]" />
                <span className="font-sans text-sm text-[#0066cc] font-semibold tracking-wide uppercase">{product.tagline}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
                {product.title}
              </h2>
              
              <p className="font-sans text-lg md:text-xl text-[#86868b] leading-relaxed mb-8 font-medium">
                {product.desc}
              </p>
              
              <div className="space-y-6 mb-10">
                {product.features.map((feature, fIndex) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={fIndex} className="flex items-start gap-4">
                      <FeatureIcon className="w-5 h-5 text-[#86868b] shrink-0 mt-1" />
                      <div>
                        <h4 className="text-[#1d1d1f] font-medium mb-1">{feature.title}</h4>
                        <p className="text-[#86868b] text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <button className="bg-[#1d1d1f] text-white w-max px-8 py-3 rounded-full font-medium text-[15px] hover:bg-[#1d1d1f]/90 transition-colors flex items-center gap-2">
                {product.buttonText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="w-full md:w-1/2 relative min-h-[400px]">
              <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
              <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-white via-transparent to-transparent hidden md:block`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden"></div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
