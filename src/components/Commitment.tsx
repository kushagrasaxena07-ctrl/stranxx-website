import { Target, Zap, Shield } from "lucide-react";

export function Commitment() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1024px] mx-auto bg-obsidian">
      <div className="bg-white rounded-[32px] md:rounded-[48px] overflow-hidden border border-black/5 shadow-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f5f5f7] z-0"></div>
        <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center">
          <div className="font-sans text-sm text-[#0066cc] font-semibold tracking-wide uppercase mb-6">
            The STRANXX Standard
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-8 max-w-3xl mx-auto">
            Uncompromising quality across every dimension.
          </h2>
          <p className="font-sans text-xl text-[#86868b] max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            We measure our success by the resilience of the systems we build. Precision engineering meets rigorous testing to deliver infrastructure you can trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center border border-black/5 mb-6">
                <Target className="w-6 h-6 text-[#1d1d1f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">Zero Tolerance</h3>
              <p className="text-[#86868b] text-sm leading-relaxed">Every component passes through a multi-stage quality control matrix before integration.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center border border-black/5 mb-6">
                <Shield className="w-6 h-6 text-[#1d1d1f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">Rugged Durability</h3>
              <p className="text-[#86868b] text-sm leading-relaxed">Built using industrial-grade materials designed to withstand extreme environments and continuous loads.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center border border-black/5 mb-6">
                <Zap className="w-6 h-6 text-[#1d1d1f]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">Peak Efficiency</h3>
              <p className="text-[#86868b] text-sm leading-relaxed">Optimized layouts and premium conductors ensure minimal power loss and maximum throughput.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
