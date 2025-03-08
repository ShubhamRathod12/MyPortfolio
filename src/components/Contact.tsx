import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import React, { useRef, useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current!);

    try {
      await fetch('YOUR_GOOGLE_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      alert('✅ Your data has been successfully stored!');
      formRef.current?.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ There was an error submitting your data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>shubhamrathod0222@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-blue-400" />
                <span>+91 8140153621</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Ahmedabad , India </span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://github.com/ShubhamRathod12" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shubham-rathod-7982ba245/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/shubham_rathod022/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
