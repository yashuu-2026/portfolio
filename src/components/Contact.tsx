import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, Mail, MapPin, Copy, Check, MessageSquare, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending with nice interactive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger subtle celebration confetti with pastel colors
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#B69CFF', '#F5B8D2', '#B8E5E1', '#FFF0C9', '#29243A']
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti fails
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient pastel illumination */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pastel-lavender/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-lavender/25 border border-pastel-lavender/40 text-pastel-plum text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-pastel-plum" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pastel-plum tracking-tight mb-4">
            Let's Connect!
          </h2>
          <p className="text-base sm:text-lg text-pastel-plumMuted">
            {PORTFOLIO_DATA.personal.introduction.split('.')[0] + '.'} I'm always excited to learn, connect with new people, and explore opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/90 shadow-soft-md relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-pastel-lavender/25 border border-pastel-lavender/40 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pastel-plum" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-pastel-plumMuted">
                      Direct Email
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-pastel-plum break-all">
                      {PORTFOLIO_DATA.personal.email}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-pastel-lavender/20">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-pastel-plum bg-white border border-pastel-lavender/40 shadow-xs hover:bg-pastel-bgBase hover:scale-105 active:scale-95 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-pastel-lavender" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-pastel-plum bg-pastel-lavender/30 hover:bg-pastel-lavender/50 border border-pastel-lavender/40 transition-all hover:scale-105"
                >
                  <Send className="w-3 h-3 text-pastel-plum" />
                  <span>Open Mail App</span>
                </a>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/90 shadow-soft-sm flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#29243A] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <GithubIcon className="w-5 h-5 text-pastel-cream" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-plumMuted block">
                    Code Repositories
                  </span>
                  <span className="font-display font-bold text-sm text-pastel-plum truncate block">
                    GitHub Profile
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/90 shadow-soft-sm flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <LinkedinIcon className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-plumMuted block">
                    Professional Network
                  </span>
                  <span className="font-display font-bold text-sm text-pastel-plum truncate block">
                    LinkedIn Profile
                  </span>
                </div>
              </a>

            </div>

            {/* Location & Availability Card */}
            <div className="glass-card rounded-2xl p-5 border border-pastel-lavender/30 shadow-soft-sm flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-pastel-mint/30 border border-pastel-mint flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-pastel-plum" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-plumMuted block">
                  Current Location
                </span>
                <span className="font-bold text-sm text-pastel-plum">
                  {PORTFOLIO_DATA.personal.location}
                </span>
                <p className="text-xs text-pastel-plumMuted mt-0.5">
                  Available for remote & in-person roles
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/90 shadow-soft-lg relative">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-pastel-plum">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-pastel-plumMuted mt-1">
                    Have an opportunity, question, or want to discuss a project? Drop a note below!
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-pastel-lavender" />
              </div>

              {/* Form State Handling */}
              {isSubmitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-pastel-mint/30 border-2 border-pastel-mint flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-pastel-plum" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-pastel-plum mb-2">
                    Message Received!
                  </h4>
                  <p className="text-sm text-pastel-plumLight max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-pastel-plum">{formData.name}</strong>! Your message preview has been captured.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/70 border border-pastel-lavender/30 max-w-md mx-auto text-left text-xs text-pastel-plumMuted mb-6 space-y-1">
                    <p className="font-bold text-pastel-plum">Message Preview:</p>
                    <p className="italic">"{formData.message}"</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-pastel-plum bg-gradient-to-r from-pastel-lavender to-pastel-pink shadow-soft-sm hover:scale-105 transition-all"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-pastel-plum mb-2"
                    >
                      Your Name <span className="text-pastel-pink font-black">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/80 border text-sm text-pastel-plum placeholder-pastel-plumMuted/60 focus:outline-none focus:ring-2 transition-all ${
                        formErrors.name
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-pastel-lavender/40 focus:border-pastel-lavender focus:ring-pastel-lavender/30'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-pastel-plum mb-2"
                    >
                      Email Address <span className="text-pastel-pink font-black">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-white/80 border text-sm text-pastel-plum placeholder-pastel-plumMuted/60 focus:outline-none focus:ring-2 transition-all ${
                        formErrors.email
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-pastel-lavender/40 focus:border-pastel-lavender focus:ring-pastel-lavender/30'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-pastel-plum mb-2"
                    >
                      Your Message <span className="text-pastel-pink font-black">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      placeholder="Hi Yashaswini, I came across your portfolio and would love to discuss..."
                      className={`w-full px-4 py-3 rounded-2xl bg-white/80 border text-sm text-pastel-plum placeholder-pastel-plumMuted/60 focus:outline-none focus:ring-2 transition-all resize-y ${
                        formErrors.message
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-pastel-lavender/40 focus:border-pastel-lavender focus:ring-pastel-lavender/30'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-extrabold text-base text-pastel-plum bg-gradient-to-r from-pastel-lavender via-pastel-pink to-pastel-mint shadow-soft-md hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/60 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-pastel-plum border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Functional Backend Integration Notice */}
                  <div className="pt-3">
                    <p className="text-[11px] text-center text-pastel-plumMuted leading-relaxed">
                      💡 <strong>Developer Note:</strong> This form includes full interactive validation. To receive live emails directly in your inbox, simply plug in your free endpoint from Formspree, EmailJS, or Formkeep in this component!
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
