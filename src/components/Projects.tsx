import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Coffee Shop',
    description: 'E-commerce Coffee Shop website project featuring a modern UI to browse, select, and purchase coffee products online.Includes product catalog, shopping cart, secure checkout, and responsive design for all devices.',
    image: 'https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=612x612&w=0&k=20&c=_nYOcyQ15cYEeUYgUzkC5qG946nkCwU06NiWKt1s8SE=',
    tags: ['Reactjs', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ShubhamRathod12/COFFEE-SHOP-E-COM-WEB',
    live: '#'
  },
  {
    title: 'Sign Language Recognation',
    description: 'Sign Language Recognition project that detects and translates hand gestures into text or speech using machine learning.Provides real-time communication support with a user-friendly interface and responsive design.',
    image: 'https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Python', 'TensorFlow', 'OpenCv', 'Html', 'Css'],
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal Portfolio website showcasing projects, skills, and contact information with a modern, responsive design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Html', 'Css', 'JS'],
    github: 'https://github.com/ShubhamRathod12/PORTFOLIO',
    live: 'https://shubhamrathod12.github.io/PORTFOLIO/#home'
  },
  {
    title: 'Snake Game',
    description: 'Snake Game project in Python using the Pygame library, where the player controls a snake to eat food and grow longer.Includes collision detection, score tracking, and smooth gameplay in a simple graphical interface.',
    image: 'data:image/jpeg;base64,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',
    tags: ['Python', 'Random', 'Turtle'],
    github: 'https://github.com/ShubhamRathod12/Snack-game',
    live: '#'
  },
  {
    title: 'Flappy Bird Game',
    description: 'Flappy Bird game project in Python using Pygame, where the player controls a bird to fly through gaps between pipes without crashing.Features smooth animations, score tracking, and increasing difficulty for an engaging gameplay experience.',
    image: 'https://sm.ign.com/ign_in/news/1/10-years-a/10-years-after-it-was-pulled-offline-viral-mobile-game-flapp_df4a.jpg',
    tags: ['Python', 'pygame', 'sys'],
    github: 'https://github.com/ShubhamRathod12/FLAPPY-GAME',
    live: '#'
  },
  {
    title: 'Media Player',
    description: 'A C++ Qt-based media player project using Qt Multimedia to play audio/video files with a custom UI, controls (play, pause, stop), and a seek bar. The player integrates QMediaPlayer and QVideoWidget for smooth playback and user interaction',
    image: '/mediaplyaer.jpg',
    tags: ['CPP', 'QT'],
    github: 'https://github.com/ShubhamRathod12/QT-Multimedia-player',
    live: '#'
  },
  {
    title: 'Voice Assistance System',
    description: 'Voice Assistant System project in Python using speech recognition and text-to-speech, enabling users to interact through voice commands.',
    image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9pY2UlMjBhc3Npc3RhbnR8ZW58MHx8MHx8fDA%3D',
    tags: ['Python'],
    github: 'https://github.com/ShubhamRathod12/Mini-Jarvis',
    live: '#'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Github className="w-8 h-8 text-white hover:text-gray-200" />
                  </a>
                  <a href={project.live} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-white hover:text-gray-200" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}