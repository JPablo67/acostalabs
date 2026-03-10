"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-6">
              {/* Quick contact links */}
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-white font-medium">{SITE.email}</p>
                  </div>
                </a>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-card hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-white font-medium">{SITE.phone}</p>
                  </div>
                </a>

                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="text-white font-medium">Connect with me</p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 px-4 text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{SITE.location}</span>
              </div>

              {/* Calendly placeholder */}
              <div className="p-6 rounded-2xl bg-dark-card border border-dark-card mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h3 className="text-white font-semibold">
                    Schedule a Call
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Prefer a video call? Book a free 30-minute consultation.
                </p>
                <Button
                  href="https://calendly.com/acostapablose"
                  variant="secondary"
                  size="sm"
                  className="w-full"

                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Meeting
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <div className="bg-dark-card rounded-2xl border border-dark-card p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email",
                          },
                        })}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      {...register("subject", {
                        required: "Please select a subject",
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="consulting">Consulting</option>
                      <option value="fulltime">Full-Time Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Please write at least 10 characters",
                        },
                      })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
