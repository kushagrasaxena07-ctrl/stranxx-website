import { Wrench, PhoneCall, CheckCircle, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export function ServiceSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpenModal = (segment: string) => {
    setSelectedSegment(segment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSegment("");
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        alert(data.message || "There was a problem submitting your request.");
      }
    } catch (error) {
      alert("There was a problem submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 max-w-[1024px] mx-auto text-center bg-obsidian">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
          Service & Support.
        </h2>
        <p className="font-sans text-xl text-[#86868b] max-w-2xl mx-auto font-medium">
          Comprehensive maintenance and rapid response protocols to keep your infrastructure running flawlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-10 rounded-[32px] border border-black/5 hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
          <Wrench className="w-8 h-8 text-[#1d1d1f] mb-6" />
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">Preventative Maintenance</h3>
          <p className="text-[#86868b] mb-8 leading-relaxed">
            Scheduled diagnostics and servicing to identify and resolve potential issues before they cause downtime.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Maintenance Schedule and Solution
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Product Testing
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Compliance auditing
            </li>
          </ul>
          <button onClick={() => handleOpenModal("Maintenance")} className="font-medium text-[#1d1d1f] flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Schedule Maintenance <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white p-10 rounded-[32px] border border-black/5 hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
          <PhoneCall className="w-8 h-8 text-[#1d1d1f] mb-6" />
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">Emergency Response</h3>
          <p className="text-[#86868b] mb-8 leading-relaxed">
            24/7 rapid deployment teams ready to restore critical power infrastructure during unexpected failures.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Rapid deployment SLAs
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Genuine spare parts
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Root cause analysis
            </li>
          </ul>
          <button onClick={() => handleOpenModal("Emergency Support")} className="font-medium text-[#1d1d1f] flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Contact Support <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md">
          <div className="relative bg-white border border-black/10 rounded-[32px] w-full max-w-2xl p-10 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            <button 
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-black/50 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#0066cc] mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">Support Request Submitted Successfully</h3>
                <p className="text-[#86868b] mb-8 font-sans">Our team has received your inquiry and will be in touch shortly.</p>
                <button onClick={handleCloseModal} className="bg-[#1d1d1f] text-white font-medium text-[15px] px-8 py-3 rounded-xl hover:bg-[#1d1d1f]/90 transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">Support Inquiry</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="83972aad-2996-43f1-8123-58acf2ebe58d" />
                  <input type="hidden" name="subject" value="New Stranxx Support Request" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Name</label>
                      <input type="text" name="Name" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Company</label>
                      <input type="text" name="Company" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Company Name" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Phone</label>
                      <input type="tel" name="Phone" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Phone Number" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Email</label>
                      <input type="email" name="email" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Email Address" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Location</label>
                      <input type="text" name="Location" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="City, Region" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Equipment Type</label>
                      <input type="text" name="Equipment Type" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="e.g. Generator, Panel" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Segment</label>
                      <input type="text" name="Segment" readOnly value={selectedSegment} className="w-full bg-[#f5f5f7]/50 border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f]/70 focus:outline-none cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Nature of Issue</label>
                      <input type="text" name="Nature of Issue" required className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Brief issue summary" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-[#86868b] tracking-wider mb-2 uppercase font-medium">Description</label>
                    <textarea name="Description" required rows={4} className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors resize-none" placeholder="Provide detailed information here..."></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#1d1d1f] text-white font-medium text-[15px] px-8 py-4 rounded-xl hover:bg-[#1d1d1f]/90 transition-colors mt-8 disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSubmitting ? "Submitting Request..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
