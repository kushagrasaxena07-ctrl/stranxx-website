import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Activity, Database, CheckCircle2, Factory, Building2, Zap, ArrowRight, ArrowDown, Monitor, Cpu, Server, Lock, Lightbulb, Combine } from 'lucide-react';
import { Link } from 'react-router-dom';

import panelHeroImg from './assets/images/regenerated_image_1788631419935.png';
import panelManufacturingImg from './assets/images/regenerated_image_1788690081546.png';

export function PanelsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-obsidian text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={panelHeroImg} alt="STRANXX Electrical Panels" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
              POWER DISTRIBUTION
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              ENGINEERED TO DISTRIBUTE POWER. <br className="hidden md:block"/><span className="text-[#D4AF37]">BUILT TO PROTECT IT.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-6 font-medium leading-relaxed">
              Custom-engineered electrical panels designed for reliable power distribution, intelligent monitoring and dependable protection across industrial and commercial applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#philosophy" className="bg-[#D4AF37] text-obsidian px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors flex items-center gap-2">
                Explore Panel Solutions <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:sales@stranxx.com?subject=Technical Consultation - Panels" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors">
                Request a Technical Consultation
              </a>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Designed &bull; Engineered &bull; Tested &bull; Delivered
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STRANXX Panel Philosophy */}
      <section id="philosophy" className="py-24 bg-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            PRECISION IN EVERY CONNECTION.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6 text-lg text-[#86868b] leading-relaxed mb-12"
          >
            <p className="font-medium text-[#1d1d1f]">
              Electrical distribution is the backbone of every industrial facility.
            </p>
            <p>
              STRANXX designs and integrates electrical panels around the actual load, operating conditions, protection requirements and future expansion needs of each application.
            </p>
            <p>
              From incoming power to final distribution, every element is engineered to work as part of a coordinated electrical system.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto bg-[#f5f5f7] p-10 rounded-[32px] border border-black/5">
            <h3 className="text-xl font-bold tracking-widest uppercase mb-8 text-[#1d1d1f]">POWER IN. CONTROLLED POWER OUT.</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-mono font-bold text-sm md:text-base tracking-widest">
              <div className="bg-white px-6 py-4 rounded-xl border border-black/10 text-black shadow-sm w-full md:w-auto">Incoming Supply</div>
              <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0 shrink-0" />
              <div className="bg-white px-6 py-4 rounded-xl border border-black/10 text-black shadow-sm w-full md:w-auto">Protection</div>
              <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0 shrink-0" />
              <div className="bg-white px-6 py-4 rounded-xl border border-black/10 text-black shadow-sm w-full md:w-auto">Distribution</div>
              <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0 shrink-0" />
              <div className="bg-white px-6 py-4 rounded-xl border border-black/10 text-black shadow-sm w-full md:w-auto">Monitoring</div>
              <ArrowRight className="w-5 h-5 text-[#0066cc] rotate-90 md:rotate-0 shrink-0" />
              <div className="bg-white px-6 py-4 rounded-xl border border-black/10 text-[#0066cc] shadow-sm w-full md:w-auto">Loads</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Panel Portfolio */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ONE ENGINEERING PLATFORM.<br/>MULTIPLE POWER SOLUTIONS.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-black/5 shadow-sm group hover:shadow-lg transition-all row-span-2 flex flex-col">
              <div className="w-14 h-14 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mb-8">
                <Server className="w-7 h-7 text-[#0066cc]" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-[#1d1d1f]">LT PANELS</h3>
              <p className="text-[#86868b] leading-relaxed mb-8 flex-grow font-medium">Low-voltage distribution systems designed for safe, organised and reliable electrical power distribution.</p>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#D4AF37] mb-3 uppercase">Applications</h4>
                <ul className="space-y-2 text-sm text-[#1d1d1f] font-medium">
                  <li>Industrial plants</li>
                  <li>Commercial buildings</li>
                  <li>Infrastructure</li>
                  <li>Utilities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">PCC PANELS</h3>
              <p className="text-xs font-semibold tracking-widest text-[#0066cc] mb-4 uppercase">Power Control Centre</p>
              <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-medium">Designed for centralised power distribution and management across multiple electrical loads.</p>
              <div className="text-xs font-medium text-[#1d1d1f] grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Incomer/outgoer</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Protection</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Metering</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Busbar systems</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">MCC PANELS</h3>
              <p className="text-xs font-semibold tracking-widest text-[#0066cc] mb-4 uppercase">Motor Control Centre</p>
              <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-medium">Designed for centralised control and protection of motors and associated equipment.</p>
              <div className="text-xs font-medium text-[#1d1d1f] flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full">Pumps</span>
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full">Compressors</span>
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full">HVAC</span>
                <span className="px-3 py-1 bg-[#f5f5f7] rounded-full">Conveyors</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">AMF PANELS</h3>
              <p className="text-xs font-semibold tracking-widest text-[#0066cc] mb-4 uppercase">Automatic Mains Failure</p>
              <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-medium">Designed to automatically manage the transition between utility power and DG supply where appropriately configured.</p>
              <p className="text-xs font-mono font-bold tracking-wider text-black bg-[#f5f5f7] p-2 rounded-lg text-center">Utility Failure &rarr; DG Start &rarr; Load Transfer</p>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">APFC PANELS</h3>
              <p className="text-xs font-semibold tracking-widest text-[#0066cc] mb-4 uppercase">Automatic Power Factor Correction</p>
              <p className="text-[#86868b] text-sm leading-relaxed mb-4 font-medium">Designed to automatically control capacitor stages according to reactive-power requirements.</p>
              <p className="text-xs text-[#1d1d1f] font-medium border-l-2 border-[#D4AF37] pl-3 py-1">Improve power-factor performance and reduce avoidable reactive-power demand.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">CONTROL PANELS</h3>
              <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-medium">Custom-built control and automation panels for industrial equipment and process applications.</p>
              <p className="text-xs font-mono font-bold tracking-widest text-[#0066cc]">PLC &bull; HMI &bull; Relays &bull; VFD</p>
            </div>
            
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-[#1d1d1f]">METERING PANELS</h3>
              <p className="text-[#86868b] text-sm leading-relaxed font-medium">Designed for organised power monitoring and distribution across multiple feeders and electrical systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Premium Technical Architecture */}
      <section className="py-24 bg-obsidian text-white overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED FROM THE <br/>BUSBAR TO THE LOAD</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: "01", t: "INCOMING", d: "ACB/MCCB or appropriate incoming switching arrangement.", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop" },
              { n: "02", t: "BUSBAR SYSTEM", d: "Engineered busbar arrangement based on rated current, short-circuit requirements and configuration.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" },
              { n: "03", t: "PROTECTION", d: "Protection devices selected according to system requirements and coordination philosophy.", img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop" },
              { n: "04", t: "DISTRIBUTION", d: "Multiple outgoing feeders configured for connected loads.", img: "https://images.unsplash.com/photo-1581092334812-747fceb5cdae?q=80&w=2070&auto=format&fit=crop" },
              { n: "05", t: "MONITORING", d: "Digital meters and monitoring systems provide visibility of electrical parameters.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
              { n: "06", t: "CONTROL", d: "Control circuits, interlocks and automation integrated according to the application.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" }
            ].map((step, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden min-h-[300px]">
                <img src={step.img} alt={step.t} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/70 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col h-full justify-between">
                  <div className="text-[#D4AF37] font-mono font-bold text-xl">{step.n}</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 tracking-widest">{step.t}</h3>
                    <p className="text-gray-300 text-sm font-medium leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Makes a STRANXX Panel Different? */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">PRECISION BUILT INTO EVERY PANEL</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, t: "POWER DISTRIBUTION", d: "Organised and engineered distribution architecture for complex electrical systems." },
              { icon: ShieldCheck, t: "PROTECTION", d: "Protection against applicable overload, short-circuit and other electrical fault conditions." },
              { icon: Activity, t: "MONITORING", d: "Real-time visibility of key electrical parameters through appropriate metering and monitoring systems." },
              { icon: Settings, t: "SERVICEABILITY", d: "Thoughtful internal arrangement for inspection, troubleshooting and maintenance." },
              { icon: Monitor, t: "CUSTOM ENGINEERING", d: "Panel architecture configured around project-specific requirements." },
              { icon: Lightbulb, t: "FUTURE READY", d: "Provision for expansion and integration with modern monitoring and automation systems where required." }
            ].map((feat, i) => (
              <div key={i} className="bg-[#f5f5f7] p-8 rounded-[32px] border border-black/5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6 text-[#0066cc]" />
                </div>
                <h3 className="text-lg font-bold tracking-widest uppercase mb-3 text-[#1d1d1f]">{feat.t}</h3>
                <p className="text-[#86868b] leading-relaxed font-medium">{feat.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Engineering & Design */}
      <section className="py-24 bg-[#f5f5f7] border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f]">DESIGNED BEFORE IT IS BUILT.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "LOAD ANALYSIS", d: "Understanding connected loads, demand, diversity and operating characteristics." },
              { t: "SINGLE-LINE DESIGN", d: "Developing the electrical distribution architecture around the project requirement." },
              { t: "COMPONENT SELECTION", d: "Selection of switching, protection, metering and control components based on application requirements." },
              { t: "BUSBAR ENGINEERING", d: "Busbar sizing and arrangement based on applicable electrical and thermal considerations." },
              { t: "PROTECTION COORDINATION", d: "Developing protection arrangements appropriate to the system architecture." },
              { t: "PANEL LAYOUT", d: "Optimised component placement, wiring and accessibility." },
              { t: "TESTING", d: "Inspection and functional/electrical testing before dispatch, as applicable." }
            ].map((step, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl border border-black/5 ${i === 6 ? 'lg:col-span-2' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center font-bold text-xs mb-4">{i + 1}</div>
                <h3 className="font-bold text-sm tracking-widest text-[#1d1d1f] uppercase mb-2">{step.t}</h3>
                <p className="text-xs text-[#86868b] leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Smart Panels */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#0066cc] uppercase mb-4">Smart Panels</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">FROM POWER DISTRIBUTION TO <br/>INTELLIGENT POWER MANAGEMENT</h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">Modern electrical panels can become a source of real-time operational data.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f7] p-10 rounded-[32px] border border-black/5 shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Monitor className="w-7 h-7 text-[#1d1d1f]" />
              </div>
              <h3 className="text-xl font-bold tracking-widest mb-6 text-[#1d1d1f]">MONITOR</h3>
              <div className="flex flex-wrap justify-center gap-2 font-mono text-xs font-semibold text-black">
                {["Voltage", "Current", "Frequency", "Power", "Power factor", "Energy consumption", "Demand", "Alarms"].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white rounded-full border border-black/5">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-[#f5f5f7] p-10 rounded-[32px] border border-black/5 shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Combine className="w-7 h-7 text-[#1d1d1f]" />
              </div>
              <h3 className="text-xl font-bold tracking-widest mb-6 text-[#1d1d1f]">CONNECT</h3>
              <p className="text-sm font-medium text-[#1d1d1f] mb-4">Integration with:</p>
              <div className="flex flex-wrap justify-center gap-2 font-mono text-xs font-semibold text-black">
                {["PLC", "SCADA", "HMI", "EMS", "BMS", "Industrial communication networks"].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white rounded-full border border-black/5">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-obsidian text-white p-10 rounded-[32px] shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066cc]/20 blur-2xl rounded-full"></div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 relative z-10">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-widest mb-6 relative z-10">ANALYSE</h3>
              <p className="text-sm font-medium text-gray-300 mb-6 relative z-10">Use electrical data to understand:</p>
              <ul className="text-sm text-left space-y-3 font-medium text-black relative z-10">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" /> Where power is going</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" /> When demand peaks</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" /> How equipment is performing</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" /> Where optimisation may be possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Manufacturing */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">PRECISION MANUFACTURING.<br/>DISCIPLINED ASSEMBLY.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-[32px] overflow-hidden shadow-2xl h-[500px]">
              <img src={panelManufacturingImg} alt="STRANXX Manufacturing" className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "FABRICATION", d: "Precision enclosure fabrication according to approved drawings." },
                { t: "BUSBAR WORK", d: "Cutting, bending, drilling and insulation according to design requirements." },
                { t: "ASSEMBLY", d: "Mounting of switchgear, protection, metering and control components." },
                { t: "WIRING", d: "Systematic control and power wiring with proper identification and routing." },
                { t: "INSPECTION", d: "Visual and dimensional verification before testing." },
                { t: "TESTING", d: "Electrical and functional testing according to applicable requirements." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-black/5">
                  <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-[#1d1d1f]">{step.t}</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Quality & Testing */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">EVERY CONNECTION COUNTS.</h2>
          
          <div className="flex flex-col gap-2 max-w-lg mx-auto mb-12">
            {[
              "DESIGN REVIEW",
              "ASSEMBLY INSPECTION",
              "WIRING VERIFICATION",
              "INSULATION / ELECTRICAL TESTS",
              "FUNCTIONAL TESTING",
              "PROTECTION & CONTROL VERIFICATION",
              "FINAL INSPECTION",
              "READY FOR DISPATCH"
            ].map((test, i, arr) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-[#f5f5f7] w-full py-4 px-6 rounded-xl border border-black/5 font-mono font-bold tracking-widest text-sm text-[#1d1d1f]">
                  {test}
                </div>
                {i < arr.length - 1 && <ArrowDown className="w-5 h-5 text-gray-400 my-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Applications */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED FOR THE WAY <br/>INDUSTRY WORKS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { icon: Factory, t: "Manufacturing", d: "Power distribution and motor control for production facilities." },
              { icon: Building2, t: "Commercial", d: "Electrical distribution for offices, malls, warehouses and commercial infrastructure." },
              { icon: Settings, t: "Process Industries", d: "Custom distribution and control systems for demanding industrial processes." },
              { icon: Server, t: "Infrastructure", d: "Power distribution systems for infrastructure and project applications." },
              { icon: Lightbulb, t: "Solar", d: "Integration of solar generation with electrical distribution architecture." },
              { icon: Database, t: "BESS", d: "Electrical integration of Battery Energy Storage Systems with the grid and facility loads." },
              { icon: Zap, t: "DG", d: "Integration of generator systems with AMF and LT distribution." }
            ].map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col items-center text-center">
                <app.icon className="w-8 h-8 text-[#0066cc] mb-4" />
                <h4 className="font-bold text-lg mb-2 text-[#1d1d1f]">{app.t}</h4>
                <p className="text-xs text-[#86868b] leading-relaxed font-medium">{app.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Solar + BESS + DG + LT Ecosystem */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">ONE POWER ECOSYSTEM.</h2>
          
          {/* Animated Diagram */}
          <div className="max-w-3xl mx-auto mb-20 bg-white/5 p-8 md:p-16 rounded-[32px] border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center gap-6 font-mono text-sm font-bold tracking-widest">
              {/* SOLAR */}
              <div className="flex flex-col items-center">
                <div className="px-6 py-3 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] rounded-lg">SOLAR</div>
                <ArrowDown className="w-5 h-5 text-gray-500 my-2" />
              </div>
              
              {/* MIDDLE ROW (GRID -> LT PANEL -> LOAD) */}
              <div className="flex items-center gap-4 md:gap-8 w-full justify-center">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">GRID</span>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>
                
                <div className="px-8 py-6 bg-white text-gray-800 rounded-2xl border-2 border-[#0066cc] shadow-[0_0_30px_rgba(0,102,204,0.3)] text-lg">
                  LT PANEL
                </div>
                
                <div className="flex items-center gap-4">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800 bg-white/90 px-4 py-2 rounded">INDUSTRIAL LOAD</span>
                </div>
              </div>
              
              <div className="flex items-center gap-12 mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">DG</span>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-5 h-5 text-gray-500 my-2 rotate-180" />
                  <div className="px-6 py-3 bg-[#0066cc]/20 border border-[#0066cc]/50 text-[#0066cc] rounded-lg">BESS</div>
                </div>
                <div className="w-16"></div> {/* Spacer to balance DG side */}
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold tracking-widest mb-8 text-[#D4AF37]">GENERATE. STORE. DISTRIBUTE. CONTROL.</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            STRANXX brings together:
          </p>
          <div className="font-mono text-sm tracking-widest text-black mb-6 bg-white inline-block px-6 py-3 rounded-xl border border-white/20">
            Solar + BESS + DG + LT Panels + AMF + Energy Management
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            to create integrated power architectures for modern industrial and commercial facilities.
          </p>
        </div>
      </section>

      {/* 13. Why STRANXX */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f]">ENGINEERING FIRST.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { t: "APPLICATION-SPECIFIC", d: "We design around your electrical requirement rather than forcing the application into a standard configuration." },
              { t: "INTEGRATED", d: "Power distribution, control, protection and monitoring can be engineered as a coordinated system." },
              { t: "QUALITY FOCUSED", d: "Structured manufacturing, inspection and testing processes." },
              { t: "SCALABLE", d: "Designed with future expansion and system integration in mind." },
              { t: "TECHNOLOGY READY", d: "Prepared for digital monitoring, automation and energy-management integration." }
            ].map((adv, i) => (
              <div key={i} className="bg-[#f5f5f7] p-8 rounded-2xl border border-black/5 shadow-sm text-center">
                <h4 className="font-bold text-sm tracking-widest uppercase mb-4 text-[#1d1d1f] border-b border-black/5 pb-4">{adv.t}</h4>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">{adv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
