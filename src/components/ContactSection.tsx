import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".form-input",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: { trigger: formRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".contact-info",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".contact-info", start: "top 80%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          alert("✅ Message sent successfully!");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", phone: "", message: "" }); // added phone
          formRef.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let's Work Together</h3>
              <p className="text-muted-foreground">
                Passionate UI/UX Designer & Developer with experience in LMS
                platforms, websites, and mobile apps.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-input">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-input">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-input">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone} // make sure phone is in your formData state
                  onChange={handleInputChange}
                  required
                  className="glass-input"
                  placeholder="+91 12345 67890"
                  pattern="[+]{0,1}[0-9]{10,15}" // optional: basic validation for phone number
                />
              </div>

              <div className="form-input">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="glass-input resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn neon-button w-full flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              <div className="contact-info glass-card p-6 rounded-xl space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      krushnarathod0077@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9623221020</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Nagpur, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-info space-y-4">
              <h4 className="text-lg font-semibold">Follow Me</h4>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/krushna1133"
                  className="p-4 glass-card rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Github
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/krushna-rathod0077"
                  className="p-4 glass-card rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Linkedin
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>

                <a
                  href="mailto:krushnarathod0077@gmail.com"
                  className="p-4 glass-card rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <Mail
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
                <a
                  href="https://wa.me/919623221020?text=Hi%20Krushna"
                  className="p-4 glass-card rounded-xl hover:scale-110 transition-transform duration-300 group"
                >
                  <FaWhatsapp
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-info glass-card p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium text-green-400">
                  Available for Work
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how we can bring your ideas to
                life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
