import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Target, Factory, TrendingUp, Settings2, Server, Building2, Monitor, Activity, Database, HeartPulse, Sliders, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import servoHeroImg from './assets/images/regenerated_image_1787555922847.png';

export function ServoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-obsidian text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={servoHeroImg} alt="STRANXX Servo Stabilisers" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
              PRECISION POWER REGULATION
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              STABLE VOLTAGE. <br className="hidden md:block"/><span className="text-[#D4AF37]">PROTECTED EQUIPMENT.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-4 font-medium leading-relaxed">
              High-precision servo-controlled voltage stabilisation systems engineered to regulate supply variations and deliver controlled voltage to critical electrical loads.
            </p>
            <p className="text-lg text-black mb-12 font-medium leading-relaxed">
              Designed for industrial, commercial and sensitive electrical applications where voltage quality matters.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Precision &bull; Protection &bull; Reliability &bull; Intelligent Control
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STRANXX Philosophy */}
      <section id="philosophy" className="py-24 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
          >
            POWER QUALITY IS PERFORMANCE.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl text-[#86868b] font-medium leading-relaxed mb-6"
          >
            Voltage fluctuations can affect sensitive electrical equipment, production processes and system performance.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-[#1d1d1f] font-medium leading-relaxed mb-12"
          >
            STRANXX Servo Voltage Stabiliser solutions are engineered to monitor incoming voltage and automatically regulate the output within the specified operating range.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 font-mono font-bold text-sm tracking-widest mb-12">
            <span className="bg-[#f5f5f7] px-6 py-3 rounded-lg border border-black/5">MONITOR</span>
            <ArrowRight className="w-5 h-5 text-[#0066cc] mt-3" />
            <span className="bg-[#f5f5f7] px-6 py-3 rounded-lg border border-black/5">CORRECT</span>
            <ArrowRight className="w-5 h-5 text-[#0066cc] mt-3" />
            <span className="bg-[#f5f5f7] px-6 py-3 rounded-lg border border-black/5">STABILISE</span>
            <ArrowRight className="w-5 h-5 text-[#0066cc] mt-3" />
            <span className="bg-[#f5f5f7] px-6 py-3 rounded-lg border border-black/5">PROTECT</span>
          </div>

          <p className="text-md text-[#86868b] font-medium max-w-2xl mx-auto">
            The system continuously responds to supply variations through its servo-controlled voltage-regulation mechanism.
          </p>
        </div>
      </section>

      {/* 3. How a Servo Stabiliser Works */}
      <section className="py-24 bg-obsidian text-white overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            PRECISION CONTROL.<br/><span className="text-[#D4AF37]">IN REAL TIME.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: "UTILITY SUPPLY", desc: "Incoming fluctuating power from the grid." },
              { title: "INPUT VOLTAGE SENSING", desc: "Continuous monitoring of incoming voltage." },
              { title: "CONTROL SYSTEM", desc: "The controller determines the required correction." },
              { title: "SERVO MOTOR", desc: "Precisely adjusts the regulating mechanism." },
              { title: "BUCK/BOOST TRANSFORMER", desc: "Corrects the voltage according to the required operating range." },
              { title: "STABLE OUTPUT", desc: "Controlled voltage supplied to the connected load." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative z-10 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold tracking-widest text-[#D4AF37] mb-2">{step.title}</h3>
                  <p className="text-gray-300 font-medium text-sm">{step.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="h-6 w-px bg-white/20 mx-auto my-2"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 inline-flex flex-wrap items-center justify-center gap-3 font-mono font-bold text-sm tracking-widest text-black bg-white px-8 py-4 rounded-xl">
            <span>INPUT</span>
            <ArrowRight className="w-4 h-4 text-[#0066cc]" />
            <span>SENSE</span>
            <ArrowRight className="w-4 h-4 text-[#0066cc]" />
            <span>CORRECT</span>
            <ArrowRight className="w-4 h-4 text-[#0066cc]" />
            <span>DELIVER</span>
          </div>
        </div>
      </section>

      {/* 4. Why Servo Stabilisation? */}
      <section id="solutions" className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">WHEN VOLTAGE VARIES, <br className="hidden md:block"/>PRECISION MATTERS.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "VOLTAGE REGULATION", desc: "Automatically correct voltage variations within the stabiliser's specified operating range." },
              { icon: Shield, title: "EQUIPMENT PROTECTION", desc: "Helps protect connected equipment against unsuitable supply-voltage conditions when appropriately specified and configured." },
              { icon: Target, title: "PRECISION CONTROL", desc: "Servo-controlled correction enables accurate voltage regulation." },
              { icon: Factory, title: "INDUSTRIAL RELIABILITY", desc: "Suitable for demanding industrial and commercial applications when correctly sized." },
              { icon: TrendingUp, title: "IMPROVED POWER QUALITY", desc: "Provides a more controlled voltage supply to connected loads." },
              { icon: Settings2, title: "REDUCED STRESS", desc: "Appropriate voltage regulation can help reduce voltage-related stress on compatible equipment." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#f5f5f7] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#0066cc]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-3 text-[#1d1d1f]">{item.title}</h3>
                <p className="text-[#86868b] text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED FOR VOLTAGE-SENSITIVE ENVIRONMENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Factory, title: "INDUSTRIAL MACHINERY", desc: "Protect and regulate supply voltage for production machinery and industrial equipment." },
              { icon: Database, title: "DATA & IT INFRASTRUCTURE", desc: "Voltage regulation for sensitive electronic and IT-related loads, subject to the equipment manufacturer's requirements." },
              { icon: HeartPulse, title: "HEALTHCARE", desc: "Suitable for appropriately designed power systems supporting sensitive medical and auxiliary equipment." },
              { icon: Building2, title: "COMMERCIAL FACILITIES", desc: "Voltage regulation for offices, commercial buildings and critical electrical systems." },
              { icon: Sliders, title: "CNC & AUTOMATION", desc: "Suitable for CNC machines, automation systems and precision industrial equipment where stable voltage is required." },
              { icon: Activity, title: "PROCESS INDUSTRIES", desc: "Support stable electrical supply for voltage-sensitive process equipment." }
            ].map((app, idx) => (
              <div key={idx} className="p-8 bg-[#f5f5f7] rounded-[32px] border border-black/5">
                <div className="flex items-center gap-4 mb-4">
                  <app.icon className="w-6 h-6 text-[#1d1d1f]" />
                  <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">{app.title}</h3>
                </div>
                <p className="text-[#86868b] text-sm font-medium">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industrial Applications specific */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            BUILT FOR THE EQUIPMENT THAT BUILDS EVERYTHING ELSE.
          </h2>
          <p className="text-xl text-gray-300 font-medium mb-12">
            Servo stabilisers can be integrated into power systems serving:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "CNC MACHINES", "LASER MACHINES", "INJECTION MOULDING", "COMPRESSORS", 
              "HVAC SYSTEMS", "PROCESS EQUIPMENT", "AUTOMATION", "MEDICAL EQUIPMENT", "DATA CENTRES"
            ].map((machine) => (
              <span key={machine} className="px-6 py-3 bg-white border border-white/20 rounded-full font-mono text-sm tracking-widest font-bold text-black">
                {machine}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 font-medium">
            * Final suitability depends on the equipment's electrical characteristics, required voltage range and site conditions.
          </p>
        </div>
      </section>

      {/* 7. Single & Three Phase */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">THE RIGHT CONFIGURATION FOR YOUR LOAD</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-black/5 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#f5f5f7] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#1d1d1f]">1Φ</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">SINGLE PHASE</h3>
              <p className="text-[#86868b] font-medium mb-8">For smaller commercial, residential-industrial and specialised single-phase applications.</p>
              <div className="mt-auto px-6 py-3 bg-[#f5f5f7] rounded-xl font-mono text-sm font-bold tracking-wider text-[#1d1d1f]">
                Precision Voltage Regulation
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-black/5 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-[#f5f5f7] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#1d1d1f]">3Φ</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">THREE PHASE</h3>
              <p className="text-[#86868b] font-medium mb-8">For industrial machinery, production facilities and larger commercial electrical systems.</p>
              <div className="mt-auto px-6 py-3 bg-[#f5f5f7] rounded-xl font-mono text-sm font-bold tracking-wider text-[#1d1d1f]">
                Balanced Industrial Power Regulation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Technical Configuration */}
      <section className="py-24 bg-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">CONFIGURED AROUND YOUR POWER REQUIREMENT</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Capacity", value: "kVA" },
              { label: "Input Range", value: "Specified Input Window" },
              { label: "Output", value: "Specified Regulated Output" },
              { label: "Phase", value: "Single Phase / Three Phase" },
              { label: "Frequency", value: "50 Hz / As Required" },
              { label: "Correction Speed", value: "Application Specific" },
              { label: "Efficiency", value: "Application / Design Specific" },
              { label: "Installation", value: "Indoor / Outdoor" },
              { label: "Cooling", value: "Air/Oil cooled" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-[#f5f5f7] rounded-2xl border border-black/5 flex flex-col justify-between">
                <span className="text-xs font-bold tracking-widest text-[#86868b] uppercase mb-2">{item.label}</span>
                <span className="text-lg font-semibold text-[#1d1d1f]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Protection Architecture */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">REGULATION IS ONLY HALF THE SOLUTION.</h2>
              <p className="text-xl text-gray-300 font-medium mb-8">
                Depending on configuration, the system may incorporate integrated protection to safeguard connected loads from anomalies.
              </p>
              <div className="font-mono text-sm tracking-widest text-black bg-white inline-block px-6 py-3 rounded-xl font-bold mb-8">
                SENSE. REGULATE. PROTECT.
              </div>
              <p className="text-sm text-gray-500 font-medium">
                * Only features included in the specifically configured STRANXX model are provided.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
              <ul className="space-y-4">
                {[
                  "High-voltage protection",
                  "Low-voltage protection",
                  "Overload protection",
                  "Short-circuit protection",
                  "Over-temperature protection (optional)",
                  "Phase-failure protection (optional)",
                  "Phase-sequence protection",
                  "Time delay",
                  "Bypass arrangement",
                  "Surge protection where specified (optional)",
                  "Digital monitoring",
                  "Alarm indication"
                ].map((prot, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    {prot}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Intelligent Monitoring */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">SEE YOUR POWER. UNDERSTAND YOUR POWER.</h2>
            <p className="text-xl text-[#86868b] font-medium max-w-2xl mx-auto">
              Real-time visibility of electrical parameters helps operators understand system performance and identify abnormal operating conditions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl p-8 border border-black/5 overflow-hidden relative">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-black font-mono font-bold tracking-widest text-sm">STRANXX POWER MONITOR</span>
              </div>
              <div className="text-black font-mono text-xs">LIVE</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-[#f5f5f7] rounded-2xl p-6 border border-black/5">
                <h4 className="text-black font-mono text-xs mb-4 tracking-widest">INPUT VOLTAGE</h4>
                <div className="space-y-3 font-mono text-xl text-black">
                  <div className="flex justify-between"><span>L1</span><span className="text-[#ff453a]">348 V</span></div>
                  <div className="flex justify-between"><span>L2</span><span className="text-[#ff453a]">361 V</span></div>
                  <div className="flex justify-between"><span>L3</span><span className="text-[#ff453a]">355 V</span></div>
                </div>
              </div>
              
              <div className="bg-[#f5f5f7] rounded-2xl p-6 border border-black/5">
                <h4 className="text-black font-mono text-xs mb-4 tracking-widest">OUTPUT VOLTAGE</h4>
                <div className="space-y-3 font-mono text-xl text-black">
                  <div className="flex justify-between"><span>L1</span><span className="text-[#32d74b]">415 V</span></div>
                  <div className="flex justify-between"><span>L2</span><span className="text-[#32d74b]">414 V</span></div>
                  <div className="flex justify-between"><span>L3</span><span className="text-[#32d74b]">416 V</span></div>
                </div>
              </div>
              
              <div className="bg-[#f5f5f7] rounded-2xl p-6 flex flex-col justify-center items-center border border-black/5">
                <h4 className="text-black font-mono text-xs mb-4 tracking-widest">LOAD</h4>
                <div className="text-6xl font-light text-black">72<span className="text-3xl text-black">%</span></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
              <div className="bg-[#f5f5f7] border border-black/5 px-6 py-4 rounded-xl text-black flex items-center justify-between">
                <span>STATUS</span>
                <span className="text-[#32d74b] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#32d74b]"></span> SYSTEM NORMAL</span>
              </div>
              <div className="bg-[#f5f5f7] border border-black/5 px-6 py-4 rounded-xl text-black flex items-center justify-between">
                <span>SERVO</span>
                <span className="text-[#32d74b] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#32d74b]"></span> ACTIVE</span>
              </div>
              <div className="bg-[#f5f5f7] border border-black/5 px-6 py-4 rounded-xl text-black flex items-center justify-between">
                <span>PROTECTION</span>
                <span className="text-[#32d74b] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#32d74b]"></span> HEALTHY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Stabiliser + DG + LT Panel */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">FROM GENERATION TO PRECISION POWER</h2>
            <p className="text-xl text-[#86868b] font-medium max-w-3xl mx-auto">
              STRANXX can engineer voltage regulation as part of a broader electrical infrastructure, integrating stabilisation with DG, AMF and LT distribution systems where required.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-mono font-bold text-sm tracking-widest text-[#1d1d1f]">
            <div className="bg-[#f5f5f7] px-6 py-4 rounded-xl border border-black/5 shadow-sm">DG SET</div>
            <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0" />
            <div className="bg-[#f5f5f7] px-6 py-4 rounded-xl border border-black/5 shadow-sm">AMF PANEL</div>
            <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0" />
            <div className="bg-[#f5f5f7] px-6 py-4 rounded-xl border border-black/5 shadow-sm">LT PANEL</div>
            <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0" />
            <div className="bg-white text-black px-6 py-4 rounded-xl border border-black/5 shadow-sm font-bold">SERVO STABILISER</div>
            <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0" />
            <div className="bg-[#f5f5f7] px-6 py-4 rounded-xl border border-black/5 shadow-sm text-[#0066cc]">SENSITIVE LOAD</div>
          </div>
        </div>
      </section>

      {/* 12. Servo vs Conventional */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">WHY SERVO-CONTROLLED REGULATION?</h2>
            <p className="text-xl text-[#0066cc] font-bold max-w-3xl mx-auto uppercase tracking-wide">
              Don't compensate for unstable power after equipment fails.<br/>Regulate it before it reaches the load.
            </p>
          </div>
          
          <div className="bg-white rounded-[32px] shadow-sm border border-black/5 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-black border-b border-black/5">
                  <th className="p-6 font-bold tracking-widest text-sm uppercase w-1/2">Feature</th>
                  <th className="p-6 font-bold tracking-widest text-sm uppercase w-1/2 border-l border-black/5">Servo Stabiliser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-[#1d1d1f] font-medium text-sm md:text-base">
                {[
                  { f: "Voltage sensing", s: "Continuous" },
                  { f: "Correction", s: "Automatic" },
                  { f: "Regulation mechanism", s: "Servo-controlled" },
                  { f: "Application", s: "Industrial / Commercial" },
                  { f: "Suitable loads", s: "Voltage-sensitive equipment" },
                  { f: "Configuration", s: "Application-specific" },
                  { f: "Monitoring", s: "Digital options available" },
                  { f: "Protection", s: "Configurable" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f5f5f7] transition-colors">
                    <td className="p-6 font-semibold">{row.f}</td>
                    <td className="p-6 border-l border-black/5">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 13. Engineering Process */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED BEFORE IT IS INSTALLED.</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { n: "01", t: "LOAD STUDY", d: "Understand connected load and operating characteristics." },
              { n: "02", t: "VOLTAGE ANALYSIS", d: "Evaluate incoming voltage variation and required correction range." },
              { n: "03", t: "CAPACITY SELECTION", d: "Determine appropriate kVA capacity and configuration." },
              { n: "04", t: "PROTECTION DESIGN", d: "Define required protection and bypass arrangements." },
              { n: "05", t: "PANEL & SYSTEM INTEGRATION", d: "Integrate stabiliser with the site's electrical architecture." },
              { n: "06", t: "TESTING", d: "Verify regulation, protection and functional operation." },
              { n: "07", t: "COMMISSIONING", d: "Site installation, testing and operational handover." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white/5 border border-white/10 p-6 md:p-8 rounded-[24px] items-start md:items-center">
                <div className="text-[#D4AF37] font-mono font-bold text-2xl shrink-0">{step.n} —</div>
                <div>
                  <h3 className="text-xl font-bold tracking-widest mb-2">{step.t}</h3>
                  <p className="text-gray-400 font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Why STRANXX? */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">PRECISION POWER. <br className="hidden md:block"/>ENGINEERED AROUND YOUR APPLICATION.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "APPLICATION-SPECIFIC DESIGN", desc: "Stabiliser capacity and configuration based on the actual electrical requirement." },
              { title: "INDUSTRIAL ENGINEERING", desc: "Designed for demanding commercial and industrial environments." },
              { title: "INTEGRATED PROTECTION", desc: "Regulation and protection considered together." },
              { title: "SMART MONITORING", desc: "Digital monitoring options for improved visibility." },
              { title: "SYSTEM INTEGRATION", desc: "Can be incorporated with DG, LT panels, BESS and other power systems where appropriate." },
              { title: "SERVICEABILITY", desc: "Designed with accessibility and maintenance considerations in mind." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f5f5f7] p-8 rounded-[32px] border border-black/5">
                <h3 className="text-lg font-bold tracking-tight mb-4 text-[#1d1d1f] pr-4">{item.title}</h3>
                <div className="h-px w-12 bg-[#0066cc] mb-4"></div>
                <p className="text-[#86868b] text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
