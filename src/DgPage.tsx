import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Activity, Database, CheckCircle2, Factory, Building2, Zap, ArrowRight, ArrowDown } from 'lucide-react';

import dgHeroImg from './assets/images/regenerated_image_1787557488489.png';

export function DgPage() {
  const [connectedLoad, setConnectedLoad] = useState('');
  const [maxDemand, setMaxDemand] = useState('');
  const [motorLoads, setMotorLoads] = useState('Yes');
  const [startingMethod, setStartingMethod] = useState('DOL');
  const [application, setApplication] = useState('Industrial');
  const [operation, setOperation] = useState('Standby');
  const [fuel, setFuel] = useState('Diesel');
  
  const [calculatedKva, setCalculatedKva] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const demand = parseFloat(maxDemand) || parseFloat(connectedLoad) || 0;
    
    if (demand === 0) {
      alert("Please enter a valid Maximum Demand or Connected Load in kW.");
      return;
    }

    // Base kVA calculation (assuming 0.8 PF)
    let baseKva = demand / 0.8;
    
    // Add margin for motor starting currents
    let motorFactor = 1.0;
    if (motorLoads === 'Yes') {
      switch (startingMethod) {
        case 'DOL': motorFactor = 1.5; break;
        case 'Star-Delta': motorFactor = 1.3; break;
        case 'Soft Starter': motorFactor = 1.2; break;
        case 'VFD': motorFactor = 1.1; break;
      }
    }
    
    // Prime power typically requires more buffer
    const primeFactor = operation === 'Prime' ? 1.25 : 1.0;
    
    const calculatedKvaResult = Math.ceil(baseKva * motorFactor * primeFactor);
    
    setCalculatedKva(calculatedKvaResult);
    setIsSubmitted(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-obsidian text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={dgHeroImg} alt="STRANXX DG Sets" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
              PRIME POWER GENERATION
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              POWER WHEN <span className="text-[#D4AF37]">IT MATTERS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-6 font-medium leading-relaxed">
              High-performance DG solutions engineered for dependable prime, standby and critical-power applications.
            </p>
            <p className="text-lg text-black mb-10 max-w-2xl leading-relaxed">
              From industrial facilities and commercial buildings to infrastructure and mission-critical operations, STRANXX DG solutions are configured around your load, operating profile and site requirements.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Reliable &bull; Efficient &bull; Engineered &bull; Application Ready
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STRANXX DG Philosophy */}
      <section id="philosophy" className="py-24 bg-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            POWER ISN'T JUST GENERATED. <br className="hidden md:block"/>IT'S ENGINEERED.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6 text-lg text-[#86868b] leading-relaxed"
          >
            <p>
              A generator is more than an engine and alternator.
            </p>
            <p>
              STRANXX approaches DG systems as an integrated power solution combining:
            </p>
            <div className="p-6 bg-[#f5f5f7] rounded-2xl font-mono text-sm text-[#1d1d1f] font-semibold tracking-tight border border-black/5 leading-relaxed">
              Engine + Alternator + Controller + AMF/ATS + Protection + Acoustic Enclosure + Fuel System + Exhaust + Monitoring
            </div>
            <p>
              The result is a coordinated system designed for dependable operation, maintainability and application-specific performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Applications */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">BUILT FOR DEMANDING <br className="md:hidden"/>POWER ENVIRONMENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "INDUSTRIAL", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", d: "Reliable standby and prime power for manufacturing plants, process industries and production facilities." },
              { t: "COMMERCIAL", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", d: "Backup power solutions for offices, commercial buildings, warehouses and business facilities." },
              { t: "CRITICAL INFRASTRUCTURE", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop", d: "Power continuity solutions for applications where interruption can have significant operational consequences." },
              { t: "CONSTRUCTION", img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Drilling_rig_at_a_construction_site_in_Tuntorp.jpg", d: "Robust temporary and site power solutions for demanding construction environments." },
              { t: "TELECOM & INFRASTRUCTURE", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Waikaretu_telecommunications_tower.jpg", d: "Dependable backup generation for critical infrastructure and remote installations." },
              { t: "DATA & MISSION-CRITICAL", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop", d: "Engineered backup-power architectures for facilities requiring high availability." }
            ].map((app, idx) => (
              <div key={idx} className="group relative bg-obsidian rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all h-[400px]">
                <img src={app.img} alt={app.t} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h3 className="text-2xl font-bold text-black mb-3 tracking-wide">{app.t}</h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">{app.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Prime vs Standby */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">THE RIGHT POWER.<br/>FOR THE RIGHT DUTY.</h2>
            <p className="text-[#86868b] text-lg">Final selection should always be based on the manufacturer's rating definitions, load profile and intended operating regime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f7] rounded-[32px] p-10 md:p-12 border border-black/5">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">PRIME POWER</h3>
              <p className="text-lg text-[#86868b] mb-8 leading-relaxed">
                Designed for applications where the DG set operates as a primary source of power for defined operating conditions.
              </p>
              <h4 className="font-semibold text-sm tracking-widest text-[#D4AF37] mb-6 uppercase">Ideal for</h4>
              <ul className="space-y-4 text-[#1d1d1f] font-medium">
                {["Remote facilities", "Construction sites", "Industrial operations", "Off-grid applications", "Variable-load environments"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066cc]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-obsidian text-white rounded-[32px] p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight text-black">STANDBY POWER</h3>
              <p className="text-lg text-black mb-8 leading-relaxed">
                Designed to provide backup power when the primary utility supply is unavailable.
              </p>
              <h4 className="font-semibold text-sm tracking-widest text-[#D4AF37] mb-6 uppercase">Ideal for</h4>
              <ul className="space-y-4 text-black font-medium">
                {["Commercial buildings", "Manufacturing facilities", "Hospitals", "Infrastructure", "Critical loads"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The STRANXX DG Architecture */}
      <section className="py-24 bg-obsidian text-white overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED AS ONE<br/>POWER SYSTEM</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
            {/* Visual Flow Left */}
            <div className="md:w-1/3 flex flex-col justify-between space-y-4 bg-white/5 border border-white/10 p-8 rounded-[32px]">
              {["FUEL", "ENGINE", "ALTERNATOR", "CONTROL SYSTEM", "AMF / ATS", "PROTECTION", "LOAD"].map((step, i, arr) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full text-center py-3 bg-white/10 rounded-lg text-sm font-bold tracking-widest text-[#D4AF37]">
                    {step}
                  </div>
                  {i < arr.length - 1 && <ArrowDown className="w-5 h-5 text-gray-500 my-2" />}
                </div>
              ))}
            </div>
            
            {/* Details Right */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "ENGINE", desc: "Selected according to required power rating, duty cycle, operating conditions and application." },
                { title: "ALTERNATOR", desc: "Designed to deliver stable electrical output appropriate to the connected load and system configuration." },
                { title: "DIGITAL CONTROLLER", desc: "Real-time monitoring and control of critical operating parameters." },
                { title: "AMF / ATS", desc: "Automatic detection of mains failure and controlled transfer to generator supply where configured." },
                { title: "PROTECTION", desc: "Electrical and engine protection functions designed around the selected system." },
                { title: "ACOUSTIC ENCLOSURE", desc: "Engineered enclosure and exhaust arrangements to support noise-control requirements. CPCB guidance includes requirements concerning acoustic enclosure and exhaust-muffler provisions for applicable DG sets." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold mb-3 tracking-widest text-[#D4AF37]">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Intelligent Control */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">YOUR POWER. UNDER CONTROL.</h2>
            <p className="text-xl text-[#86868b]">Intelligent monitoring and automatic operation.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Mock */}
            <div className="bg-obsidian rounded-[32px] p-8 md:p-10 shadow-2xl border border-black/10">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h3 className="text-black font-bold tracking-widest">STRANXX DIGITAL CONTROLLER</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-black font-mono">STANDBY MODE</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-sm">
                {[
                  { label: "Voltage", val: "415 V" }, { label: "Current", val: "280 A" },
                  { label: "Frequency", val: "50.0 Hz" }, { label: "Engine Speed", val: "1500 RPM" },
                  { label: "Oil Pressure", val: "4.5 Bar" }, { label: "Coolant Temp", val: "85 °C" },
                  { label: "Battery", val: "27.2 V" }, { label: "Running Hrs", val: "1254 H" },
                  { label: "Load", val: "72 %" }, { label: "Fuel Lvl", val: "68 %" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-black">{stat.label}</span>
                    <span className="text-black font-bold">{stat.val}</span>
                  </div>
                ))}
                <div className="col-span-2 pt-4">
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-lg text-center font-bold text-xs tracking-widest">
                    NO ALARMS - SYSTEM HEALTHY
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flow */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#D4AF37]" /> Automatic Operation
                </h3>
                <p className="text-[#86868b] leading-relaxed mb-6 font-medium">With an appropriately configured AMF/ATS system, power transition is seamless and intelligent.</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1d1f] mb-1">Utility Available</h4>
                    <p className="text-xs font-mono text-gray-500 font-semibold tracking-wide">GRID &rarr; LOAD</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                </div>
                
                <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1d1f] mb-1">Utility Failure</h4>
                    <p className="text-xs font-mono text-gray-500 font-semibold tracking-wide">GRID &#10005; &rarr; DG START &rarr; LOAD</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">2</div>
                </div>
                
                <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#1d1d1f] mb-1">Utility Restored</h4>
                    <p className="text-xs font-mono text-gray-500 font-semibold tracking-wide">GRID &rarr; LOAD &rarr; DG COOLDOWN &rarr; STOP</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Performance */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">ENGINEERED FOR LONG HOURS.<br/>BUILT FOR REAL CONDITIONS.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "HIGH AVAILABILITY", d: "Designed for dependable operation when backup power is required." },
              { t: "LOAD RESPONSE", d: "Engineered to respond to changing electrical demand within the system's specified operating envelope." },
              { t: "FUEL EFFICIENCY", d: "System selection focused on appropriate engine loading and operating profile." },
              { t: "THERMAL MANAGEMENT", d: "Cooling and ventilation designed around the application and installation environment." },
              { t: "ACOUSTIC CONTROL", d: "Enclosure and exhaust arrangements designed with applicable noise requirements in mind." },
              { t: "SERVICEABILITY", d: "Accessible architecture designed to simplify inspection and maintenance." }
            ].map((perf, i) => (
              <div key={i} className="bg-[#f5f5f7] p-8 rounded-2xl border border-black/5">
                <div className="w-10 h-10 bg-obsidian text-white rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-3 text-[#1d1d1f]">{perf.t}</h3>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">{perf.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DG + AMF + LT PANEL */}
      <section className="py-24 bg-obsidian text-white">
        <div className="max-w-[1024px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            FROM GENERATION TO DISTRIBUTION.<br/><span className="text-[#D4AF37]">ONE ENGINEERED SOLUTION.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 font-mono font-bold tracking-widest text-lg">
            <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/20 text-black">DG SET</div>
            <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90 md:rotate-0" />
            <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/20 text-black">AMF PANEL</div>
            <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90 md:rotate-0" />
            <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/20 text-black">LT PANEL</div>
            <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90 md:rotate-0" />
            <div className="bg-white/10 px-6 py-4 rounded-xl border border-[#D4AF37] text-[#D4AF37]">CRITICAL LOAD</div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            STRANXX can integrate DG generation with AMF control and LT distribution systems to create a coordinated backup-power architecture.
          </p>
          <p className="mt-6 text-2xl font-bold text-black tracking-widest uppercase">One system. One engineering approach.</p>
        </div>
      </section>

      {/* 9. DG + BESS */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">THE NEXT GENERATION OF BACKUP POWER</h2>
          <p className="text-xl font-bold tracking-widest text-[#0066cc] mb-12">DG + BESS</p>
          
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto mb-16 font-medium">
            Combine conventional generation with battery energy storage to create a more flexible energy architecture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-bold text-obsidian mb-2">DG</h3>
              <p className="text-[#86868b] font-medium text-sm">Long-duration energy source</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-bold text-obsidian mb-2">BESS</h3>
              <p className="text-[#86868b] font-medium text-sm">Fast-response energy storage</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-bold text-obsidian mb-2">EMS</h3>
              <p className="text-[#86868b] font-medium text-sm">Intelligent energy management</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold tracking-widest mb-12 text-[#1d1d1f] uppercase">= SMARTER POWER</h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
            {["Peak-load management", "Reduced generator runtime", "Renewable integration", "Load smoothing", "Fast-response support", "Microgrid architectures"].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 bg-obsidian text-black rounded-full text-sm font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-[#86868b]">Make clear that actual savings, runtime reduction and performance depend on the project load profile and system design.</p>
        </div>
      </section>

      {/* 10. Compliance & Quality */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">BUILT AROUND STANDARDS.<br/>DELIVERED WITH DISCIPLINE.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-xl font-bold tracking-wide mb-6">Applicable Compliance</h3>
              <p className="text-[#86868b] mb-6 font-medium">Depending on the selected DG model and project:</p>
              <ul className="space-y-4 mb-8">
                {["Applicable CPCB requirements", "Applicable emissions requirements", "Applicable noise requirements", "Electrical safety requirements", "Manufacturer certification", "Type approval / conformity documentation where applicable"].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1d1d1f] font-medium">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" /> <span>{req}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#86868b] p-4 bg-[#f5f5f7] rounded-xl border border-black/5">
                CPCB states that applicable DG models are subject to certification requirements, including Type Approval and Conformity of Production requirements under the relevant regulations.
              </p>
            </div>
            
            <div className="bg-obsidian text-white p-10 rounded-[32px] shadow-xl">
              <h3 className="text-xl font-bold tracking-wide mb-8 text-[#D4AF37]">Rigorous Testing Protocol</h3>
              <div className="space-y-6 font-mono text-sm">
                {[
                  "Visual Inspection", "Wiring Verification", "Controller Testing", 
                  "Protection Testing", "Functional Testing", "Load Testing"
                ].map((test, i, arr) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">{i+1}</div>
                    <div className="flex-1 border-b border-white/10 pb-2 text-gray-300 tracking-wide">{test}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DG Selection */}
      <section className="py-24 bg-obsidian text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066cc]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">WHAT SIZE DG DO YOU NEED?</h2>
            <p className="text-xl text-gray-400">Instead of just a kVA rating, tell us about your load.</p>
          </div>
          
          <form className="space-y-6 bg-white/5 p-8 md:p-12 rounded-[32px] border border-white/10 backdrop-blur-md" onSubmit={handleCalculate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">1. Connected Load (kW)</label>
                <input type="number" value={connectedLoad} onChange={(e) => setConnectedLoad(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="e.g. 500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">2. Maximum Demand (kW)</label>
                <input type="number" value={maxDemand} onChange={(e) => setMaxDemand(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="e.g. 350" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">3. Motor Loads</label>
                <select value={motorLoads} onChange={(e) => setMotorLoads(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-obsidian" value="Yes">Yes</option>
                  <option className="bg-obsidian" value="No">No</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">4. Starting Method</label>
                <select value={startingMethod} onChange={(e) => setStartingMethod(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-obsidian" value="DOL">DOL</option>
                  <option className="bg-obsidian" value="Star-Delta">Star-Delta</option>
                  <option className="bg-obsidian" value="Soft Starter">Soft Starter</option>
                  <option className="bg-obsidian" value="VFD">VFD</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">5. Application</label>
                <select value={application} onChange={(e) => setApplication(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-obsidian" value="Industrial">Industrial</option>
                  <option className="bg-obsidian" value="Commercial">Commercial</option>
                  <option className="bg-obsidian" value="Construction">Construction</option>
                  <option className="bg-obsidian" value="Critical">Critical</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">6. Required Operation</label>
                <select value={operation} onChange={(e) => setOperation(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-obsidian" value="Standby">Standby</option>
                  <option className="bg-obsidian" value="Prime">Prime</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-300">7. Fuel Preference</label>
                <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option className="bg-obsidian" value="Diesel">Diesel</option>
                  <option className="bg-obsidian" value="Other">Other</option>
                </select>
              </div>
            </div>
            
            {isSubmitted && calculatedKva ? (
              <div className="mt-8 p-8 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl text-center">
                <h4 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-2 uppercase">Estimated Requirement</h4>
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">{calculatedKva} <span className="text-2xl text-gray-400">kVA</span></div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Your technical requirements have been logged and sent to our engineering team.<br/>We will contact you shortly with a detailed proposal.</p>
                <button type="button" onClick={() => setIsSubmitted(false)} className="px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                  Recalculate
                </button>
              </div>
            ) : (
              <button type="submit" className="w-full bg-[#D4AF37] hover:bg-white text-obsidian font-bold py-4 rounded-xl transition-colors mt-4">
                Calculate & Request Quote
              </button>
            )}
          </form>
        </div>
      </section>

      {/* 12. STRANXX Advantage */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">WHY STRANXX?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { t: "APPLICATION ENGINEERING", d: "We start with the load and application—not simply the generator rating." },
              { t: "INTEGRATED SYSTEMS", d: "DG, AMF, LT panels, protection and controls can be engineered as one coordinated system." },
              { t: "CUSTOM CONFIGURATION", d: "Solutions can be adapted to site conditions and operational requirements." },
              { t: "SERVICEABILITY", d: "Designed with practical operation, maintenance and accessibility in mind." },
              { t: "ENERGY INTEGRATION", d: "DG solutions can be combined with BESS, solar and intelligent energy-management architectures where appropriate." }
            ].map((adv, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm text-center">
                <h4 className="font-bold text-sm tracking-widest uppercase mb-4 text-[#1d1d1f] border-b border-black/5 pb-4">{adv.t}</h4>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">{adv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Project Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">The Project Journey</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {[
                { n: "01", t: "LOAD STUDY", d: "Understand the facility and electrical demand.", img: "https://images.unsplash.com/photo-1541888086903-efdc748291b0?q=80&w=2070&auto=format&fit=crop" },
                { n: "02", t: "DG SIZING", d: "Determine appropriate generator configuration.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
                { n: "03", t: "ENGINEERING", d: "Integrate DG, AMF, LT panels and protection.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" },
                { n: "04", t: "MANUFACTURING", d: "Panel assembly, controls and system integration.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" },
                { n: "05", t: "TESTING", d: "Functional and electrical verification.", img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop" },
                { n: "06", t: "COMMISSIONING", d: "Site integration and operational commissioning.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" },
                { n: "07", t: "SUPPORT", d: "Maintenance and technical support.", img: "https://images.unsplash.com/photo-1581091870621-0a44256eb91f?q=80&w=2070&auto=format&fit=crop" }
              ].map((step, i) => (
                <div key={i} className="relative p-5 rounded-2xl border border-white/10 shadow-sm text-center overflow-hidden group min-h-[260px] flex flex-col justify-end bg-obsidian">
                  <img src={step.img} alt={step.t} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/70 to-obsidian/20 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#D4AF37] text-obsidian rounded-full flex items-center justify-center mb-4 font-mono font-bold text-sm">
                      {step.n}
                    </div>
                    <h4 className="font-bold text-xs tracking-widest uppercase mb-2 text-black">{step.t}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-medium">{step.d}</p>
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
