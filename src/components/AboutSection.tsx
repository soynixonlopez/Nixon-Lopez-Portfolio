'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  GraduationCap, 
  Code, 
  Users, 
  Lightbulb,
  Rocket
} from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    { text: 'Especialistas en crear páginas web para negocios de servicios', icon: Code },
    { text: 'Más de 50 negocios han conseguido más clientes con nuestras páginas web', icon: GraduationCap },
    { text: 'Integración de WhatsApp en todas las páginas para contacto inmediato', icon: Rocket },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container-padding relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(249, 115, 22, 0.4)',
                '0 0 0 10px rgba(249, 115, 22, 0)',
                '0 0 0 0 rgba(249, 115, 22, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users size={18} />
            ¿Por Qué Elegirnos?
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Páginas Web que{' '}
            <span className="gradient-text">Convierten Visitantes</span>
            <br />
            en Clientes
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Description */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Especialistas en{' '}
                <span className="gradient-text">Páginas Web para Negocios</span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Creamos páginas web profesionales diseñadas específicamente para <strong className="text-orange-500">negocios de servicios</strong>. 
                Nuestras páginas web están optimizadas para atraer más clientes, integran WhatsApp para contacto 
                inmediato y convierten visitantes en ventas. Más de 50 negocios ya están consiguiendo más clientes con nosotros.
              </p>
            </div>

            {/* Achievements List */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-200/60 dark:border-slate-600/60 shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    x: 8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-6 p-6">
                    {/* Icon with enhanced styling */}
                    <motion.div 
                      className="flex-shrink-0 relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <achievement.icon size={28} className="text-white" />
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </motion.div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <motion.p 
                        className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {achievement.text}
                      </motion.p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-slate-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <svg 
                        className="w-4 h-4 text-gray-600 dark:text-gray-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 w-0 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Simple image without borders or backgrounds */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/AboutMePicture.png"
                alt="Páginas Web Profesionales para Negocios de Servicios"
                width={800}
                height={1000}
                className="w-full h-full max-h-[900px] object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
