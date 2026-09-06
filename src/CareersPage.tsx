import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Briefcase } from 'lucide-react';

export function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(e.currentTarget);
      
      // Append Web3Forms specific fields
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "83972aad-2996-43f1-8123-58acf2ebe58d");
      formData.append("subject", `New Job Application from ${formData.get("name")}`);
      formData.append("from_name", "Stranxx Careers Portal");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Web3Forms standard FormData submission (without files)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        formRef.current?.reset();
        setName("");
        setPosition("");
      } else {
        const data = await response.json();
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to submit application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="pt-32 pb-32 min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-16 rounded-[32px] shadow-xl max-w-2xl text-center border border-black/5"
        >
          <CheckCircle2 className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Application Submitted Successfully
          </h2>
          <p className="text-lg text-[#86868b] leading-relaxed">
            Thank you for your interest in joining Stranxx LLP. We have received your application and will review your profile for suitable opportunities.
          </p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="mt-8 px-8 py-3 bg-[#1d1d1f] text-white rounded-full font-medium hover:bg-[#D4AF37] transition-colors"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 min-h-screen bg-[#f5f5f7]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8 pt-12 pb-16">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Join Our Team
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6"
          >
            Careers at Stranxx
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#86868b] max-w-2xl mx-auto font-medium"
          >
            Build the future of intelligent power infrastructure. We are always looking for driven, innovative minds to join our engineering and business teams.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-black/5"
        >
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-black/5">
            <div className="w-12 h-12 bg-[#f5f5f7] rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#1d1d1f]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f]">Submit Your Application</h2>
              <p className="text-sm text-[#86868b]">All fields marked with an asterisk (*) are required.</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-[#1d1d1f]">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#1d1d1f]">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-[#1d1d1f]">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-semibold text-[#1d1d1f]">Position Applied For *</label>
                <input 
                  type="text" 
                  id="position" 
                  name="position" 
                  required 
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="e.g. Electrical Engineer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-semibold text-[#1d1d1f]">Years of Experience *</label>
                <input 
                  type="text" 
                  id="experience" 
                  name="experience" 
                  required 
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="e.g. 5 Years"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-semibold text-[#1d1d1f]">Current Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-semibold text-[#1d1d1f]">LinkedIn Profile</label>
              <input 
                type="url" 
                id="linkedin" 
                name="linkedin" 
                className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#1d1d1f]">Why do you want to join Stranxx? *</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all resize-y"
                placeholder="Tell us about your motivation..."
              />
            </div>

            <div className="space-y-4 p-6 bg-[#f5f5f7] rounded-xl border border-black/5 mt-4">
              <h3 className="text-sm font-semibold text-[#1d1d1f]">Resume / CV</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">
                Please email your CV to <strong className="text-[#1d1d1f]">careers@stranxx.com</strong> with the subject:<br/>
                <span className="inline-block mt-2 font-mono text-xs bg-white px-3 py-1.5 rounded-md border border-black/10">
                  Application – {position || '[Position]'} – {name || '[Your Name]'}
                </span>
              </p>
              <a
                href={`mailto:careers@stranxx.com?subject=Application – ${position || '[Position]'} – ${name || '[Your Name]'}`}
                className="inline-flex items-center gap-2 bg-white border border-black/10 text-[#1d1d1f] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1d1d1f] hover:text-white transition-colors text-sm shadow-sm"
              >
                <Mail className="w-4 h-4" /> Email Your CV
              </a>
            </div>
            
            {submitError && <p className="text-sm text-red-500 font-medium">{submitError}</p>}

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#1d1d1f] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
