import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Battery, Cpu, Activity, Shield, Zap, Sun, Server, Settings, CheckCircle2, Factory, Network, Building2, ChevronRight, BarChart3, LineChart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import bessHeroImg from './assets/images/regenerated_image_1787557190781.png';
import indBessImg from './assets/images/stranxx_bess_solar_1787500686947.jpg';
import greenBessImg from './assets/images/green_energy_facility_1787499887143.jpg';
import bessDetail1 from './assets/images/regenerated_image_1788522284990.png';
import bessDetail2 from './assets/images/servo_bess_system_1787500435229.jpg';
import bessDetail3 from './assets/images/regenerated_image_1788685883962.png';

export function BessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-obsidian text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={bessHeroImg} alt="STRANXX BESS" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              ENERGY. <span className="text-[#D4AF37]">STORED WITH INTELLIGENCE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-6 font-medium leading-relaxed">
              Battery Energy Storage Systems engineered for a more resilient, flexible and efficient power ecosystem.
            </p>
            <p className="text-lg text-black mb-10 max-w-2xl leading-relaxed">
              STRANXX BESS solutions combine advanced battery technology, power conversion, intelligent energy management and protection systems to store energy when it is available and deliver it when it matters most.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Grid-Connected &bull; Solar Integrated &bull; Industrial &bull; Commercial &bull; Utility Scale
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The STRANXX BESS Philosophy */}
      <section id="philosophy" className="py-24 bg-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            More Than Storage. <br className="hidden md:block"/>A Smarter Power Architecture.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6 text-lg text-[#86868b] leading-relaxed"
          >
            <p>
              Energy storage is no longer simply about keeping electricity in a battery. It is about when energy is stored, when it is dispatched, how quickly the system responds, and how intelligently the entire installation is controlled.
            </p>
            <p>
              STRANXX approaches BESS as an integrated power system combining:
            </p>
            <div className="p-6 bg-[#f5f5f7] rounded-2xl font-mono text-sm text-[#1d1d1f] font-semibold tracking-tight border border-black/5">
              Battery + BMS + PCS + EMS + Thermal Management + Protection + Safety + Grid Interface
            </div>
            <p>
              This is particularly important because BESS sizing and operation need to be matched to the intended duty cycle and application rather than treated as a one-size-fits-all product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Why BESS? */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why BESS?</h2>
            <p className="text-xl text-[#86868b]">Strategic energy capabilities for modern infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Peak Shaving", desc: "Store energy during lower-demand periods and discharge during peak demand to reduce peak grid consumption." },
              { icon: Sun, title: "Renewable Integration", desc: "Capture surplus solar or renewable energy and dispatch it when generation is unavailable or demand is higher." },
              { icon: Shield, title: "Grid Resilience", desc: "Provide fast-response energy support during grid disturbances and improve power-system flexibility." },
              { icon: BarChart3, title: "Energy Time Shifting", desc: "Move energy from one period of the day to another, allowing energy to be used when it has greater operational or economic value." },
              { icon: Factory, title: "DG Optimization", desc: "Coordinate battery storage with DG systems to reduce unnecessary generator operation and improve load management." },
              { icon: Cpu, title: "Intelligent Energy Management", desc: "Use EMS-based monitoring and control to optimise charging, discharging and system operation." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#86868b] leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-[#86868b] mt-12 max-w-2xl mx-auto">
            These applications align with the roles identified by India's Ministry of New and Renewable Energy and Ministry of Power for energy storage.
          </p>
        </div>
      </section>

      {/* 4. How STRANXX BESS Works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-4">From Energy To Intelligence</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">How STRANXX BESS Works</h3>
          </div>
          
          {/* Animated Flow */}
          <div className="relative mb-24 px-4 hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#D4AF37] -translate-y-1/2 z-0 origin-left"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="relative z-10 flex justify-between items-center w-full">
              {["GRID / SOLAR", "PCS", "BATTERY SYSTEM", "BMS", "EMS", "LOAD / GRID"].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + (i * 0.2) }}
                  className="bg-white border-2 border-[#1d1d1f] px-4 py-3 rounded-xl font-bold text-xs tracking-wider shadow-lg flex flex-col items-center"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { num: "01", title: "Energy Input", desc: "Energy is supplied from the grid, solar plant or other compatible power sources." },
              { num: "02", title: "Intelligent Conversion", desc: "The PCS manages bidirectional conversion between AC and DC power." },
              { num: "03", title: "Energy Storage", desc: "Battery modules store electrical energy in a controlled environment." },
              { num: "04", title: "Continuous Protection", desc: "BMS continuously monitors battery voltage, current, temperature and operating conditions." },
              { num: "05", title: "Intelligent Dispatch", desc: "EMS determines when and how energy should be charged or discharged according to the configured operating strategy." },
              { num: "06", title: "Power Delivery", desc: "Stored energy is delivered to the connected load or grid when required." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-4xl font-bold text-[#D4AF37]/20 font-mono leading-none">{step.num}</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-[#86868b] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRANXX BESS Architecture */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED AS ONE SYSTEM</h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Modern integrated BESS products commonly combine PCS, EMS, BMS, battery modules, cooling and safety systems into a coordinated architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { title: "Battery System", desc: "High-density battery architecture designed around the required power, energy capacity and operating profile.", icon: Battery },
              { title: "Battery Management System", desc: "Continuous monitoring and protection of battery modules and racks.", icon: ShieldCheck },
              { title: "Power Conversion System", desc: "Bidirectional AC/DC conversion for controlled charging and discharging.", icon: Zap },
              { title: "Energy Management System", desc: "Intelligent control, scheduling, monitoring and energy optimisation.", icon: Cpu },
              { title: "Thermal Management", desc: "Temperature management designed around the selected battery architecture and site conditions.", icon: Activity },
              { title: "Protection & Safety", desc: "Electrical protection, isolation, monitoring and safety systems integrated into the overall design.", icon: Shield }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:bg-white/10 transition-colors">
                <item.icon className="w-8 h-8 text-[#D4AF37] mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[bessDetail1, bessDetail2, bessDetail3].map((imgSrc, idx) => (
              <div key={idx} className="relative rounded-[24px] overflow-hidden aspect-[4/5] group">
                <img src={imgSrc} alt={`BESS Engineering Detail ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 6. Applications */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ONE PLATFORM. <br className="md:hidden"/>MULTIPLE ENERGY STRATEGIES.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Industrial */}
            <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all h-[400px]">
              <img src={indBessImg} alt="Industrial BESS" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-bold text-white mb-3">INDUSTRIAL</h3>
                <p className="text-[#D4AF37] font-semibold mb-3 text-lg">Reduce peak demand. Improve power reliability. Optimise energy consumption.</p>
                <p className="text-gray-300 text-sm">For manufacturing plants, process industries, warehouses and large commercial loads.</p>
              </div>
            </div>
            {/* Solar + BESS */}
            <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all h-[400px]">
              <img src={greenBessImg} alt="Solar BESS" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-bold text-white mb-3">SOLAR + BESS</h3>
                <p className="text-[#D4AF37] font-semibold mb-3 text-lg">Store the sun. Dispatch when needed.</p>
                <p className="text-gray-300 text-sm">Use stored solar energy beyond the generation window and support smoother renewable-energy delivery.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">C&I ENERGY STORAGE</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">Turn energy consumption into an intelligent, controllable asset.</p>
              <p className="text-[#86868b] text-sm">Designed for commercial and industrial facilities seeking improved energy management.</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">MICROGRID</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">Independent energy. Intelligent control.</p>
              <p className="text-[#86868b] text-sm">Coordinate renewable generation, storage and loads for resilient microgrid operation.</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">UTILITY & GRID</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">Storage built for a flexible power system.</p>
              <p className="text-[#86868b] text-sm">Applications can include peak shifting, renewable integration, frequency support and other grid-support functions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Designed Around Your Requirement */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">NO TWO ENERGY PROFILES ARE THE SAME.</h2>
            <p className="text-xl text-[#86868b] mb-10 leading-relaxed font-medium">
              We size the system around the application—not the other way around.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Power Requirement", val: "kW / MW" },
                { label: "Energy Requirement", val: "kWh / MWh" },
                { label: "Duration", val: "1 hr / 2 hr / 4 hr / custom" },
                { label: "Load Profile", val: "Base / Peak / Variable" },
                { label: "Operating Strategy", val: "Peak Shaving / Backup / Solar Shift" },
                { label: "Site Conditions", val: "Temp / Humidity / Altitude" },
                { label: "Grid Config", val: "LV / MV / Microgrid" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="font-bold text-[#1d1d1f]">{item.label}</span>
                  <span className="text-[#86868b] font-mono text-sm">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#f5f5f7] rounded-[40px] p-12 text-center h-full flex flex-col justify-center border border-black/5 shadow-inner">
              <Settings className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-4">Engineered to Spec</h3>
              <p className="text-[#86868b] leading-relaxed">
                STRANXX designs custom BESS solutions based on your specific requirements. We don't publish arbitrary capacities—we engineer what you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Safety Section */}
      <section className="py-24 bg-[#1d1d1f] text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">SAFETY IS ENGINEERED IN.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A BESS is only as reliable as its protection architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {[
              "Cell & module monitoring", "Rack-level BMS", "Battery protection", "DC isolation",
              "AC protection", "Over-current protection", "Over/under-voltage protection", "Thermal monitoring",
              "HVAC/thermal management", "Fire detection strategy", "Emergency shutdown", "System alarms"
            ].map((item, i) => (
              <div key={i} className="bg-white/5 px-6 py-4 rounded-xl flex items-center gap-3 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500 max-w-4xl mx-auto">
            *STRANXX solutions can be engineered with layered protection. Fire-suppression tech and certifications depend on the specific project configuration. Complies with emerging regulatory focus, including CEA safety amendments.
          </p>
        </div>
      </section>

      {/* 9. Intelligent EMS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                THE BATTERY STORES ENERGY.<br/>THE EMS DECIDES WHAT TO DO WITH IT.
              </h2>
              <p className="text-xl text-[#D4AF37] font-bold mb-10 tracking-widest uppercase">
                Monitor. Predict. Optimise. Respond.
              </p>
              
              <h3 className="text-xl font-bold mb-6 border-b border-black/10 pb-4">Operating Modes</h3>
              <div className="space-y-6">
                {[
                  { t: "Peak Shaving", d: "Reduce demand during predefined peak periods." },
                  { t: "Solar Shifting", d: "Store excess solar and use it later." },
                  { t: "Backup Support", d: "Provide energy during defined grid events." },
                  { t: "Load Management", d: "Coordinate battery operation with facility demand." },
                  { t: "Grid Support", d: "Support specified grid functions where permitted." }
                ].map((mode, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-[#1d1d1f] mb-1">{mode.t}</h4>
                    <p className="text-[#86868b] text-sm">{mode.d}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-[#f5f5f7] rounded-[32px] p-8 border border-black/5 shadow-sm h-full">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#D4AF37]" /> Monitored Parameters
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "State of Charge (SOC)", "State of Health (SOH)", "Battery power",
                    "Grid power", "Load demand", "Charge/discharge status",
                    "Energy consumption", "Solar generation", "System alarms", "Operating conditions"
                  ].map((param, i) => (
                    <div key={i} className="flex items-center gap-2 border-b border-black/5 pb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1d1d1f]"></div>
                      <span className="text-sm font-medium text-[#86868b]">{param}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Performance Dashboard */}
      <section className="py-24 bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">YOUR ENERGY. VISUALISED.</h2>
            <p className="text-xl text-[#86868b]">Real-time visibility. Intelligent control. Actionable energy data.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-obsidian rounded-[24px] md:rounded-[40px] p-8 md:p-12 shadow-2xl border border-black/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#0066cc]"></div>
            
            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
              <h3 className="text-black font-bold tracking-widest">STRANXX ENERGY CONTROL</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-gray-400 font-mono">SYSTEM ONLINE</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-black font-mono mb-2">
                    <span>STATE OF CHARGE</span>
                    <span className="text-[#D4AF37]">82%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-4 rounded-full w-[82%]"></div>
                  </div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">BATTERY POWER</span>
                    <span className="text-black">1.2 MW</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">GRID LOAD</span>
                    <span className="text-black">2.8 MW</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">SOLAR GENERATION</span>
                    <span className="text-black">1.9 MW</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-gray-400 text-xs tracking-widest mb-4">TODAY'S ENERGY</h4>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-bold text-black">Charged</span>
                    <span className="text-2xl font-mono text-green-400">4.8 MWh</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-black">Discharged</span>
                    <span className="text-2xl font-mono text-blue-400">3.9 MWh</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Battery", status: "Normal" },
                    { label: "PCS", status: "Normal" },
                    { label: "Thermal", status: "Normal" },
                    { label: "EMS", status: "Online" }
                  ].map((sys, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-300 text-sm font-mono">{sys.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Why STRANXX? */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERING FIRST. ENERGY ALWAYS.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[
              "Application-Specific Design", "Integrated Electrical Engineering", 
              "Intelligent Energy Management", "Safety-Centric Architecture", "Scalable System Design"
            ].map((title, i) => (
              <div key={i} className="bg-[#f5f5f7] p-8 rounded-2xl border border-black/5 text-center flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#D4AF37]/30 font-mono mb-4">0{i+1}</span>
                <h4 className="font-bold text-sm leading-snug">{title}</h4>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-[#86868b] max-w-3xl mx-auto font-medium">
            From initial load assessment to system sizing, electrical integration, control philosophy and commissioning support, STRANXX approaches every BESS project as an engineered energy system.
          </p>
        </div>
      </section>

      {/* 12. BESS Project Journey */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">The Project Journey</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {[
                { n: "01", t: "DISCOVER", d: "Understand your load, energy profile and objectives.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" },
                { n: "02", t: "ANALYSE", d: "Evaluate power demand, operating pattern and storage requirement.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
                { n: "03", t: "ENGINEER", d: "Develop the BESS architecture, sizing and electrical integration.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" },
                { n: "04", t: "INTEGRATE", d: "Coordinate battery, PCS, BMS, EMS, protection and site interfaces.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" },
                { n: "05", t: "COMMISSION", d: "Test system operation and verify configured operating modes.", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop" },
                { n: "06", t: "OPTIMISE", d: "Monitor performance and continuously improve energy utilisation.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" }
              ].map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl border border-white/10 shadow-sm text-center overflow-hidden group min-h-[260px] flex flex-col justify-end bg-obsidian">
                  <img src={step.img} alt={step.t} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/70 to-obsidian/20 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#D4AF37] text-obsidian rounded-full flex items-center justify-center mx-auto mb-4 font-mono font-bold text-sm">
                      {step.n}
                    </div>
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-2 text-black">{step.t}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
