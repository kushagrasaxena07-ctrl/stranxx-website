import { Wrench, PhoneCall, CheckCircle, ArrowRight, X } from "lucide-react";
import React, { useState } from "react";

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
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
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
          Support & Enquiry.
        </h2>
        <p className="font-sans text-xl text-[#86868b] max-w-2xl mx-auto font-medium">
          Expert support. Dependable performance. Lasting confidence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-10 rounded-[32px] border border-black/5 hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
          <Wrench className="w-8 h-8 text-[#1d1d1f] mb-6" />
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight uppercase">Complaint & Maintenance</h3>
          <p className="text-[#86868b] mb-8 leading-relaxed">
            Technical support and maintenance engineered to minimise downtime and maximise reliability.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Root cause analysis
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Rapid deployment SLAs
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Genuine Spare parts
            </li>
          </ul>
          <button onClick={() => handleOpenModal("Service and Maintenance Support")} className="font-medium text-[#1d1d1f] flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Complaint & Maintenance support <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white p-10 rounded-[32px] border border-black/5 hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-md">
          <PhoneCall className="w-8 h-8 text-[#1d1d1f] mb-6" />
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">BUSINESS ENQUIRY</h3>
          <p className="text-[#86868b] mb-8 leading-relaxed">
            Let's Power Your Next Project.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Project Consultation
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Engineered Solutions
            </li>
            <li className="flex items-center gap-3 text-sm text-[#86868b]">
              <CheckCircle className="w-4 h-4 text-[#0066cc]" /> Technical & commercial proposals
            </li>
          </ul>
          <button onClick={() => handleOpenModal("Complaint Support")} className="font-medium text-[#1d1d1f] flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Discuss your requirements <ArrowRight className="w-4 h-4" />
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
                      <input type="text" name="Company" className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors" placeholder="Company Name (Optional)" />
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
                      <select 
                        name="Segment" 
                        value={selectedSegment}
                        onChange={(e) => setSelectedSegment(e.target.value)}
                        className="w-full bg-[#f5f5f7] border border-black/5 rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0066cc] transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a Segment</option>
                        <option value="DG sets">DG sets</option>
                        <option value="Electrical panels">Electrical panels</option>
                        <option value="Servo Stabilisers">Servo Stabilisers</option>
                        <option value="Solar Solutions">Solar Solutions</option>
                        <option value="BESS(Battery Energy Storage System">BESS(Battery Energy Storage System)</option>
                      </select>
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
