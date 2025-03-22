import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { ChevronDown, Github, Linkedin, Twitter, Mail, Code, Palette, Sparkles, Instagram } from 'lucide-react';

// const menuPhotos = [
//   {
//     title: 'Web Development',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
//     delay: 0
//   },
//   {
//     title: 'UI/UX Design',
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
//     delay: 0.1
//   },
//   {
//     title: 'Mobile Apps',
//     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
//     delay: 0.2
//   },
//   {
//     title: 'Brand Identity',
//     image: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=300&h=200&fit=crop',
//     delay: 0.3
//   }
// ];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Creative Coder'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
          </div>
        </div>
      </div>

      {/* Space Menu Bar */}
      {/* <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {menuPhotos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 mt-48 md:mt-40 flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            className="relative inline-block mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full animate-spin-slow opacity-75 blur"></div>
            </div>
            <img
              src="/shubham .jpg"
              alt="Profile"
              className="relative w-48 h-48 rounded-full border-4 border-gray-950 object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-7xl font-bold font-heading gradient-text mb-6">
              Shubham Rathod
            </h1>
            <div className="text-3xl text-gray-300 mb-8">
              I'm a <span ref={typedRef} className="text-primary-400"></span>
            </div>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-12">
              I'm Shubham, a Computer Engineering student passionate about Python and web development. I enjoy creating innovative solutions and have experience building responsive, user-friendly websites. I’m driven by a love for technology and a commitment to making a meaningful impact through my work. Let's connect and collaborate on exciting projects!
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, efficient code' },
                { icon: Palette, title: 'Creative Design', desc: 'Crafting beautiful user interfaces' },
                { icon: Sparkles, title: 'Innovation', desc: 'Bringing fresh ideas to life' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <feature.icon className="w-8 h-8 text-primary-400 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-20 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-20 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-8 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/ShubhamRathod12", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-rathod-7982ba245/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/shubham_rathod022/", label: "Twitter" },
              { icon: Mail, href: "mailto:shubhamrathod0222@gmail.com?subject=Let's%20Connect&body=Hello%20Shubham,%20I%20would%20like%20to%20get%20in%20touch.", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}