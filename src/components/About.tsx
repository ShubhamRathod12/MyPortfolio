import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    year: '2025',
    title: 'Full Stack Developer ',
    description: '',
    icon: Briefcase
  },
  {
    year: '2022',
    title: 'Bachelor Of Engineering ',
    description: 'L.D. COLLEGE OF ENGINEERING [GTU]',
    icon: Calendar
  },
  {
    year: '2019',
    title: 'Diploma Engineering',
    description: 'Government Polytechnic Ahmedabad [GTU]',
    icon: GraduationCap
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm Shubham, a Computer Engineering student passionate about Python and web development. I enjoy creating innovative solutions and have experience building responsive, user-friendly websites
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            I’m driven by a love for technology and a commitment to making a meaningful impact through my work. Let's connect and collaborate on exciting projects!
            </p>
          </motion.div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start gap-4 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="p-3 bg-blue-500 rounded-full">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-blue-400 text-sm">{item.year}</span>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}