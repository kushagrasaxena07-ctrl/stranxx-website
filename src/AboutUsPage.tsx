import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SupportModal } from './components/SupportModal';

import heroImg from './assets/images/stranxx_green_future_1787500743386.jpg';
import panelImg from './assets/images/regenerated_image_1788631419935.png';
import solarImg from './assets/images/stranxx_bess_solar_1787500686947.jpg';
import dgSetsImg from './assets/images/regenerated_image_1788631709482.png';
import servoImg from './assets/images/stranxx_servo_stabilizers_1787500724815.jpg';

const premiumPoints = [
  {
    num: "01",
    title: "ENGINEERING EXCELLENCE",
    desc: "Precision-engineered solutions developed to meet demanding electrical and power requirements.",
  },
  {
    num: "02",
    title: "RELIABILITY BY DESIGN",
    desc: "Every solution is designed with operational continuity, safety and dependable performance at its core.",
  },
  {
    num: "03",
    title: "APPLICATION-DRIVEN SOLUTIONS",
    desc: "We understand your load, environment and operating requirements before recommending the right technology.",
  },
  {
    num: "04",
    title: "INTEGRATED POWER EXPERTISE",
    desc: "From DG power and LT panels to voltage stabilisation, solar and BESS, our expertise spans the complete power ecosystem.",
  },
  {
    num: "05",
    title: "QUALITY & PRECISION",
    desc: "Focused on quality components, robust engineering and meticulous execution to deliver consistent performance.",
  },
  {
    num: "06",
    title: "END-TO-END EXECUTION",
    desc: "From consultation and system design to installation, commissioning and ongoing support, we stay involved throughout the project lifecycle.",
  },
  {
    num: "07",
    title: "RESPONSIVE SUPPORT",
    desc: "Technical assistance, preventive maintenance and troubleshooting designed to minimise downtime and protect your operations.",
  },
  {
    num: "08",
    title: "BUILT FOR WHAT'S NEXT",
    desc: "Future-ready power solutions that support efficiency, smarter energy management and evolving business requirements.",
  }
];

export function AboutUsPage() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-obsidian text-[#1d1d1f]">
      <div className="max-w-[1024px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-black/5 rounded-full border border-black/10 text-xs font-semibold tracking-widest text-[#1d1d1f]/70 uppercase">
            About Stranxx
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Built on <span className="text-[#D4AF37]">Engineering.</span><br className="hidden md:block"/> Driven by <span className="text-[#1d1d1f]">Reliability.</span>
          </h1>
          <p className="text-lg text-[#1d1d1f]/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Stranxx delivers engineered power and energy solutions designed around performance, precision and long-term reliability. From initial consultation to commissioning and lifecycle support, we bring technical expertise to every stage of your project.
          </p>
        </motion.div>

        {/* Market-Leading Solutions Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Market-Leading Technologies</h2>
            <p className="text-[#1d1d1f]/60 font-medium uppercase tracking-widest text-sm">Top Brands & Systems in the Industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* DG Sets - Large span */}
            <div className="md:col-span-2 rounded-[32px] overflow-hidden h-[320px] shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-700 z-10"></div>
              <img src={dgSetsImg} alt="DG Sets" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-1">Diesel Generators</h3>
                <p className="text-white/80 font-medium text-sm tracking-wide">CPCB-IV+ COMPLIANT POWER</p>
              </div>
            </div>

            {/* LT Panels */}
            <div className="md:col-span-1 rounded-[32px] overflow-hidden h-[320px] shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-700 z-10"></div>
              <img src={panelImg} alt="LT Panels" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-1">LT Panels</h3>
                <p className="text-white/80 font-medium text-sm tracking-wide">PRECISION ENGINEERING</p>
              </div>
            </div>

            {/* Servo Stabilisers */}
            <div className="md:col-span-1 rounded-[32px] overflow-hidden h-[320px] shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-700 z-10"></div>
              <img src={servoImg} alt="Servo Stabilisers" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-1">Servo Stabilisers</h3>
                <p className="text-white/80 font-medium text-sm tracking-wide">VOLTAGE RELIABILITY</p>
              </div>
            </div>

            {/* BESS & Solar */}
            <div className="md:col-span-2 rounded-[32px] overflow-hidden h-[320px] shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-700 z-10"></div>
              <img src={solarImg} alt="BESS & Solar" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-1">BESS & Solar Systems</h3>
                <p className="text-white/80 font-medium text-sm tracking-wide">FUTURE-READY ENERGY</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Our Journey & Vision Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Vision & Scope</h2>
            <p className="text-[#1d1d1f]/60 font-medium uppercase tracking-widest text-sm">The Foundation and The Future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Foundation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-10 shadow-lg border border-black/5 relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-8 text-[#1d1d1f] group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-4">The Beginning</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed font-sans">
                Stranxx was established with a singular, unwavering commitment: to solve complex power challenges through engineering excellence. From our earliest days, we recognized that critical operations require more than just equipment—they demand holistic, integrated solutions built on a bedrock of trust, precision, and uncompromised quality.
              </p>
            </motion.div>

            {/* Vision and Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-10 shadow-lg border border-black/5 relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-8 text-[#1d1d1f] group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-4">Vision & Focus</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed font-sans">
                Our vision is to be the vanguard of power reliability and energy transition. We maintain an intense focus on application-driven engineering across traditional power systems and advanced Solar solutions, ensuring every deployment is tailored to the specific load, environmental demands, and infrastructural needs of our clients.
              </p>
            </motion.div>

            {/* Long-Term Goal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[32px] p-10 shadow-lg border border-black/5 relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-4">Long-Term Goal</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed font-sans">
                Looking forward, our scope expands into sustainable ecosystems and broad infrastructural development. We are aggressively scaling our comprehensive Solar solutions and pioneering new real estate ventures. Our ultimate goal is to lead the industry in smarter energy management and robust property development without ever compromising on our industrial-grade reliability.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Premium Points Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Stranxx Standard</h2>
            <p className="text-[#1d1d1f]/60 font-medium uppercase tracking-widest text-sm">Premium Points & Statements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {premiumPoints.map((point, idx) => (
              <motion.div 
                key={point.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -top-8 -left-4 text-8xl font-black text-black/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-[#D4AF37]/10 group-hover:-translate-y-2">
                  {point.num}
                </div>
                <div className="relative z-10 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
                    <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-[#1d1d1f]/70 leading-relaxed font-sans pl-11">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto text-center bg-white p-12 rounded-[40px] shadow-xl border border-black/5"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to empower your next project?</h2>
          <p className="text-lg text-[#1d1d1f]/70 mb-8 max-w-xl mx-auto">
            Partner with Stranxx for engineering excellence and solutions built for long-term reliability.
          </p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
            className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1d1d1f]/90 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Our Engineering Team <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
      
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
    </div>
  );
}
