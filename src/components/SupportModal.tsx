import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, User, Phone, Briefcase, Award } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    phoneNumber: '',
    details: '',
    supportRegarding: ''
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
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.fullName,
          email: formData.emailId,
          phone: formData.phoneNumber,
          interest: formData.supportRegarding,
          message: formData.details,
          subject: `Technical Support Request from ${formData.fullName} regarding ${formData.supportRegarding}`,
          from_name: "Stranxx Website Support"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
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

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        fullName: '',
        emailId: '',
        phoneNumber: '',
        details: '',
        supportRegarding: ''
      });
    }, 300);
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
            onClick={resetAndClose}
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
                <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">Technical Support</h2>
                <p className="text-sm text-[#86868b] mt-1">Connect with our engineering team.</p>
              </div>
              <button 
                onClick={resetAndClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#1d1d1f]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f5f5f7] rounded-3xl p-8 border border-black/5"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1d1d1f]">Request Submitted</h3>
                      <p className="text-sm text-[#86868b]">Our team will contact you shortly.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 space-y-4">
                    <h4 className="font-semibold text-[#1d1d1f] border-b border-black/5 pb-2 mb-4">Your Point of Contact</h4>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-[#86868b]" />
                      <p className="text-sm text-[#1d1d1f]"><span className="font-medium">Name:</span> Kushagra Saxena</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-[#86868b]" />
                      <p className="text-sm text-[#1d1d1f]"><span className="font-medium">Designation:</span> Founding Partner</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#86868b]" />
                      <p className="text-sm text-[#1d1d1f]"><span className="font-medium">Qualification:</span> B.Tech (Mech.)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#86868b]" />
                      <p className="text-sm text-[#1d1d1f]"><span className="font-medium">Industry Experience:</span> 15+ years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#86868b]" />
                      <p className="text-sm text-[#1d1d1f]"><span className="font-medium">Contact Info:</span> +91 84105 07727</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={resetAndClose}
                    className="w-full mt-6 bg-[#1d1d1f] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#D4AF37] transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#1d1d1f]">Technical support regarding*</label>
                      <select 
                        required
                        name="supportRegarding"
                        value={formData.supportRegarding}
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
                    {submitStatus === 'error' && (
                      <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-200">
                        Something went wrong. Please try again later or contact us directly.
                      </div>
                    )}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1d1d1f] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#D4AF37] disabled:opacity-70 disabled:hover:bg-[#1d1d1f] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'Submit'} 
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
