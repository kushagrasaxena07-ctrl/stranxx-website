export function Ethos() {
  return (
    <section id="ethos" className="py-24 md:py-32 px-4 md:px-8 max-w-[1024px] mx-auto bg-obsidian">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1 w-full order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white border border-black/5 p-6 rounded-[24px] aspect-square flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img 
                   src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                   alt="Engineering Precision" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="font-sans text-xs uppercase tracking-widest text-white/80 font-medium mb-1">Principle 1</div>
                  <div className="text-xl font-semibold text-white tracking-tight">Precision</div>
                </div>
              </div>
              <div className="bg-white border border-black/5 p-6 rounded-[24px] aspect-square flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img 
                   src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                   alt="Industrial Durability" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="font-sans text-xs uppercase tracking-widest text-white/80 font-medium mb-1">Principle 3</div>
                  <div className="text-xl font-semibold text-white tracking-tight">Durability</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-12">
              <div className="bg-white border border-black/5 p-6 rounded-[24px] aspect-square flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img 
                   src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                   alt="Innovation Technology" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="font-sans text-xs uppercase tracking-widest text-white/80 font-medium mb-1">Principle 2</div>
                  <div className="text-xl font-semibold text-white tracking-tight">Innovation</div>
                </div>
              </div>
              <div className="bg-white border border-black/5 p-6 rounded-[24px] aspect-square flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img 
                   src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                   alt="Client Focus" 
                   className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="font-sans text-xs uppercase tracking-widest text-white/80 font-medium mb-1">Principle 4</div>
                  <div className="text-xl font-semibold text-white tracking-tight">Client-Centric</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full order-1 md:order-2">
          <div className="font-sans text-sm text-[#0066cc] font-semibold tracking-wide uppercase mb-4">
            Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
            The STRANXX Ethos.
          </h2>
          
          <div className="space-y-6 text-[#86868b] font-sans text-lg md:text-xl font-medium leading-relaxed">
            <p>
              At STRANXX, we believe that industrial power is not just about generating electricity; it's about sustaining the critical heartbeat of modern infrastructure.
            </p>
            <p>
              Every system we design, engineer, and deploy is rooted in a commitment to absolute precision and unyielding durability. We refuse to compromise on quality because we understand the stakes of power failure.
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
}
