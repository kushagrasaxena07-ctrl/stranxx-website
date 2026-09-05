import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import slide1 from "../assets/images/stranxx_bess_solar_1787500686947.jpg";
import slide2 from "../assets/images/hero_slider_2.png";
import slide3 from "../assets/images/hero_slider_3.png";

const slides = [
  { id: 1, src: slide1, alt: "BESS and Solar Integration" },
  { id: 2, src: slide2, alt: "Green Future Technology" },
  { id: 3, src: slide3, alt: "Green Energy Facility" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-0 md:pt-48 flex flex-col items-center justify-center min-h-screen text-center bg-obsidian overflow-hidden">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center w-full px-4 md:px-6 mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-semibold leading-[1.05] tracking-tight mb-6 text-[#1d1d1f] max-w-4xl mx-auto">
          Powering <br />
          Excellence.
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-[#86868b] max-w-2xl leading-relaxed mb-10 font-medium">
          Uncompromising quality and high-stakes reliability. Engineered for continuous operation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-[#1d1d1f] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:bg-[#1d1d1f]/90 transition-colors flex items-center gap-2">
            Explore Systems
          </button>
          <Link to="/about-us" className="bg-transparent text-[#1d1d1f] px-8 py-3 rounded-full font-medium text-[15px] hover:bg-black/5 transition-colors flex items-center gap-2">
            Learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1400px] mx-auto aspect-video md:aspect-[16/9] rounded-2xl md:rounded-[40px] overflow-hidden bg-white shadow-2xl mb-8 md:mb-12 mt-auto group cursor-pointer">
          {slides.map((slide, index) => (
            <img 
              key={slide.id}
              src={slide.src} 
              alt={slide.alt} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                activeSlide === index ? "opacity-100 group-hover:scale-105" : "opacity-0"
              }`} 
            />
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setActiveSlide(index); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "bg-white w-6" : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
