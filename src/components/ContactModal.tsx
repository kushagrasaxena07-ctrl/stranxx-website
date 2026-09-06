import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    emailId: '',
    phoneNumber: '',
    location: '',
    interest: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "83972aad-2996-43f1-8123-58acf2ebe58d",
          name: formData.fullName,
          email: formData.emailId,
          company: formData.companyName,
          phone: formData.phoneNumber,
          location: formData.location,
          interest: formData.interest,
          message: formData.details,
          subject: `New Enquiry from ${formData.fullName} for ${formData.interest}`,
          from_name: "Stranxx Website Enquiry"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            fullName: '',
            companyName: '',
            emailId: '',
            phoneNumber: '',
            location: '',
            interest: '',
            details: ''
          });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: '100%', scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '100%', scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 md:inset-0 md:m-auto z-[101] w-full max-w-2xl bg-white md:rounded-[32px] rounded-t-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 bg-[#fafafa]">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Get In Touch</h2>
                <p className="text-sm text-[#86868b] mt-1">Let's power your next project.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#1d1d1f]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">Full Name*</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      placeholder="Enter your name" 
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">Company Name</label>
                    <input 
                      type="text" 
                      name="companyName"
                      placeholder="Enter company name" 
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">Email ID*</label>
                    <input 
                      required
                      type="email" 
                      name="emailId"
                      placeholder="Enter your email address" 
                      value={formData.emailId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">Phone Number*</label>
                    <input 
                      required
                      type="tel" 
                      name="phoneNumber"
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">City / Project Location*</label>
                    <input 
                      required
                      type="text" 
                      name="location"
                      placeholder="Enter project location" 
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1d1d1f]">I’m Interested In*</label>
                    <select 
                      required
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm appearance-none"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="DG Sets">DG Sets</option>
                      <option value="LT Panels">LT Panels</option>
                      <option value="AMF / ATS Systems">AMF / ATS Systems</option>
                      <option value="Servo Stabilizers">Servo Stabilizers</option>
                      <option value="Solar Solutions">Solar Solutions</option>
                      <option value="BESS">BESS</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#1d1d1f]">Project / Requirement Details*</label>
                  <textarea 
                    required
                    name="details"
                    rows={4}
                    placeholder="Tell us about your project, capacity, application or requirement..."
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f5f5f7] border border-transparent focus:border-[#D4AF37] focus:bg-white rounded-xl outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-200">
                      Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-200">
                      Something went wrong. Please try again later or contact us directly.
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-[#1d1d1f] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#D4AF37] disabled:opacity-70 disabled:hover:bg-[#1d1d1f] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? 'SENDING...' : submitStatus === 'success' ? 'SENT' : 'SEND ENQUIRY'} 
                    {!isSubmitting && submitStatus !== 'success' && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
