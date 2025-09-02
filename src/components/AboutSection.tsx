'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  GraduationCap, 
  Code, 
  Users, 
  Award,
  Calendar,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: '5+', label: 'Años de Experiencia', icon: Calendar },
    { number: '100+', label: 'Proyectos Completados', icon: Target },
    { number: '50+', label: 'Clientes Satisfechos', icon: Users },
    { number: '24/7', label: 'Soporte Disponible', icon: Zap },
  ]

  const skills = [
    { name: 'Desarrollo Web', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Inteligencia Artificial', level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'ChatBots & Automatización', level: 92, color: 'from-green-500 to-teal-500' },
    { name: 'Enseñanza & Mentoría', level: 88, color: 'from-orange-500 to-red-500' },
  ]

  const experience = [
    {
      title: 'IT Teacher & Mentor',
      description: 'Formando la próxima generación de desarrolladores',
      icon: GraduationCap,
      highlight: true
    },
    {
      title: 'Desarrollador Full-Stack',
      description: '5 años creando soluciones web innovadoras',
      icon: Code,
      highlight: false
    },
    {
      title: 'Especialista en IA',
      description: 'Integrando inteligencia artificial en aplicaciones web',
      icon: Lightbulb,
      highlight: true
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(249, 115, 22, 0.4)',
                '0 0 0 10px rgba(249, 115, 22, 0)',
                '0 0 0 0 rgba(249, 115, 22, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users size={16} />
            Sobre Mí
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Desarrollador, Teacher{' '}
            <span className="gradient-text">& Innovador</span>
          </h2>
        </motion.div>

        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Transformando Ideas en{' '}
              <span className="gradient-text">Realidad Digital</span>
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Soy <strong>Nixon López</strong>, desarrollador web especializado en IA con 5+ años 
              de experiencia. Como IT Teacher, combino desarrollo de soluciones innovadoras con 
              la formación de nuevos talentos tecnológicos.
            </p>

            {/* Quick highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Años Experiencia</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">IT</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Teacher & Mentor</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-500/20 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">IA</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Specialist</div>
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default AboutSection
