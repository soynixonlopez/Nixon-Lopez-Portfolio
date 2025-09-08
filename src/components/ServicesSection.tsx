'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Globe, 
  Bot, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Code2,
  MessageSquare,
  Workflow
} from 'lucide-react'
import Link from 'next/link'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo de Sitios Web',
      description: 'Sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.',
      features: [
        'Interfaces intuitivas y responsive',
        'Performance optimizada',
        'SEO avanzado',
        'CMS intuitivo'
      ],
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
      link: '/servicios/desarrollo-web'
    },
    {
      icon: Bot,
      title: 'Desarrollo de Apps Móviles',
      description: 'Aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de apps.',
      features: [
        'iOS y Android nativo',
        'React Native y Flutter',
        'UX móvil optimizada',
        'Integración de APIs'
      ],
      color: 'from-green-500 to-teal-500',
      delay: 0.2,
      link: '/servicios/desarrollo-apps'
    },
    {
      icon: Zap,
      title: 'Integración de Sistemas y Automatizaciones',
      description: 'Sistemas inteligentes que automatizan procesos y conectan todas tus herramientas empresariales.',
      features: [
        'Chatbots inteligentes',
        'Workflows automatizados',
        'Integración de sistemas',
        'Analytics avanzado'
      ],
      color: 'from-purple-500 to-pink-500',
      delay: 0.4,
      link: '/servicios/automatizaciones'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(0, 212, 255, 0.4)',
                '0 0 0 10px rgba(0, 212, 255, 0)',
                '0 0 0 0 rgba(0, 212, 255, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            Mis Servicios
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Soluciones que{' '}
            <span className="gradient-text">Transforman</span>
            <br />
            tu Negocio
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Combino mi experiencia como desarrollador web e IT Teacher para crear 
            soluciones tecnológicas que impulsan el crecimiento de tu empresa.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Card Container con altura fija */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col min-h-[520px]">
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-3xl" />
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-500">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-blue-500 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base flex-grow-0">
                    {service.description}
                  </p>

                  {/* Features List - Flexible height */}
                  <div className="flex-grow">
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: service.delay + featureIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 mt-2">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`} />
                          </div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto">
                    <Link href={service.link}>
                      <motion.div
                        className="w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white py-4 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-600 hover:border-transparent group/btn block cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Explorar Servicio</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-600/5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-blue-500/50 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              ¿Listo para{' '}
              <span className="text-blue-400 font-extrabold">Transformar</span> tu Negocio?
            </h3>
            
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto font-medium">
              Conversemos sobre cómo mis servicios pueden impulsar tu empresa al siguiente nivel.
            </p>

            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="w-5 h-5" />
              Contactar Ahora
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesSection
