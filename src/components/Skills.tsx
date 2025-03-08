import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'C', level: 90 },
  { name: 'CPP', level: 85 },
  { name: 'PYTHON', level: 80 },
  { name: 'JAVA', level: 75 },
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'React', level: 40 },
  { name: 'JavaScript', level: 70 },
  { name: 'QT', level: 60 },
  { name: 'QML', level: 60 },
  { name: 'Leadership', level: 80 },
  { name: 'Communication', level: 80 }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}