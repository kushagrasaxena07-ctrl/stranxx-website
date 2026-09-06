import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import syncPanelImg from './assets/images/slider_image_3.png';
import greenFacilityImg from './assets/images/green_energy_facility_1787499887143.jpg';
import dgComplianceImg from './assets/images/regenerated_image_1788681590200.png';

const caseStudies = [
  {
    id: "industrial-sync",
    title: "High-Capacity Synchronisation Panel for Industrial Manufacturing",
    category: "Electrical Panels & Automation",
    image: syncPanelImg,
    challenge: "A leading heavy manufacturing plant experienced frequent grid fluctuations leading to costly production halts. They required a robust synchronisation system to manage multiple power sources seamlessly.",
    solution: "Stranxx engineered and deployed a state-of-the-art Synchronisation Panel featuring automated load sharing and advanced PLC controls. The system intelligently balances the load between grid and backup generators in real-time.",
    impact: [
      { label: "Downtime Reduction", value: "99.9%" },
      { label: "Efficiency Gain", value: "15%" },
      { label: "ROI Achieved", value: "14 Months" }
    ]
  },
  {
    id: "hybrid-solar-bess",
    title: "Hybrid Solar & BESS Integration for Remote Facility",
    category: "Solar & Energy Storage",
    image: greenFacilityImg,
    challenge: "An off-grid remote research facility relied heavily on expensive, high-emission diesel generators for 24/7 power, seeking a sustainable and cost-effective transition.",
    solution: "We designed a hybrid microgrid combining a 500kW Solar PV array with an advanced Battery Energy Storage System (BESS). The system captures excess daytime solar energy to power nighttime operations, with existing DG sets relegated to rare emergency backup.",
    impact: [
      { label: "Fuel Savings", value: "82%" },
      { label: "Carbon Offset", value: "1.2k Tons" },
      { label: "Energy Independence", value: "24/7" }
    ]
  },
  {
    id: "data-center-backup",
    title: "CPCB-IV+ Compliant DG Setup for Data Center",
    category: "Backup Power Generation",
    image: dgComplianceImg,
    challenge: "A tier-3 data center required uncompromised backup power reliability while strictly adhering to the latest environmental emission regulations (CPCB-IV+) in a highly urbanised zone.",
    solution: "Stranxx supplied and commissioned a multi-megawatt configuration of CPCB-IV+ compliant Diesel Generators. The setup included specialised acoustic enclosures for ultra-low noise and advanced after-treatment systems for minimal emissions.",
    impact: [
      { label: "Emission Compliance", value: "100%" },
      { label: "Noise Level", value: "<75 dB(A)" },
      { label: "Uptime SLA", value: "Tier-3" }
    ]
  }
];

export function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Header Section */}
      <div className="max-w-[1024px] mx-auto px-4 md:px-8 pt-12 pb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#D4AF37] font-semibold tracking-widest text-xs uppercase mb-4"
        >
          Proven Performance
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6"
        >
          Case Studies
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[#86868b] max-w-2xl mx-auto font-medium"
        >
          Discover how Stranxx engineers reliability into every project, solving complex power challenges across industries.
        </motion.p>
      </div>

      {/* Case Studies List */}
      <div className="max-w-[1024px] mx-auto px-4 md:px-8 space-y-24">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
          >
            {/* Image Side */}
            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-black/10 rounded-[32px] pointer-events-none"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <span className="inline-block px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-semibold tracking-wide text-[#86868b] mb-4">
                {study.category}
              </span>
              <h2 className="text-3xl font-bold tracking-tight mb-6 leading-tight">
                {study.title}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f] flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-[#D4AF37]" /> The Challenge
                  </h3>
                  <p className="text-[#86868b] text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f] flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#0066cc]" /> Stranxx Solution
                  </h3>
                  <p className="text-[#86868b] text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-black/5 pt-6">
                {study.impact.map((metric, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-[#86868b] uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-[1024px] mx-auto px-4 md:px-8 mt-32">
        <div className="bg-white rounded-[40px] p-12 md:p-16 text-center border border-black/5 shadow-xl">
          <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to power your next project?</h2>
          <p className="text-[#86868b] mb-8 max-w-xl mx-auto">
            Let our engineering team design a bespoke power solution tailored precisely to your operational demands.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-medium hover:bg-[#D4AF37] transition-colors shadow-lg"
          >
            Explore Our Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
