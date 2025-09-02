'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Zap, Bot, Database, Workflow, Shield, Star, Cogs, TrendingUp, Code, Sparkles } from 'lucide-react'
import ContactSection from '@/components/ContactSection'

const AutomatizacionesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "Sistemas que aprenden y se adaptan a tus procesos empresariales"
    },
    {
      icon: Database,
      title: "Integración Total",
      description: "Conecta todas tus herramientas y plataformas en un solo lugar"
    },
    {
      icon: Workflow,
      title: "Flujos de Trabajo",
      description: "Optimiza procesos con flujos automatizados personalizados"
    },
    {
      icon: Shield,
      title: "Seguridad Robusta",
      description: "Protección de datos y cumplimiento de estándares de seguridad"
    }
  ]

  const relatedProjects = [
    {
      id: 1,
      title: "Sistema ERP Empresarial",
      description: "Sistema completo de gestión empresarial con 8 módulos integrados y automatizaciones",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      results: ["+60% eficiencia", "8 módulos integrados", "Tiempo real"]
    },
    {
      id: 2,
      title: "Chatbot Inteligente E-commerce",
      description: "Bot conversacional que maneja consultas 24/7 y recomienda productos",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "NLP", "API Integration"],
      results: ["+40% ventas", "Consultas 24/7", "Personalización"]
    },
    {
      id: 3,
      title: "Dashboard de Analytics",
      description: "Panel de control en tiempo real con métricas y reportes automatizados",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Python", "BigQuery", "Charts.js"],
      results: ["Métricas en tiempo real", "Reportes automáticos", "KPI tracking"]
    }
  ]

  const relatedTestimonials = [
    {
      id: 1,
      name: "Roberto Silva",
      position: "Gerente General",
      company: "Business Solutions",
      rating: 5,
      content: "El sistema ERP que Nixon implementó ha transformado nuestras operaciones. 8 módulos perfectamente integrados que han incrementado nuestra eficiencia en un 60%.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Laura Fernández",
      position: "Marketing Manager",
      company: "ShopSmart",
      rating: 5,
      content: "El chatbot de Nixon para nuestro e-commerce ha sido un game-changer. Maneja consultas 24/7, recomienda productos personalizados y ha incrementado nuestras ventas en un 40%.",
      avatar: "/api/placeholder/80/80"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Análisis de Procesos",
      description: "Evaluamos tus flujos de trabajo actuales y identificamos oportunidades de automatización"
    },
    {
      step: "02",
      title: "Diseño de Arquitectura",
      description: "Diseñamos la arquitectura del sistema y las integraciones necesarias"
    },
    {
      step: "03",
      title: "Desarrollo e Integración",
      description: "Construimos el sistema y conectamos todas tus herramientas existentes"
    },
    {
      step: "04",
      title: "Testing y Optimización",
      description: "Probamos exhaustivamente y optimizamos el rendimiento del sistema"
    },
    {
      step: "05",
      title: "Implementación y Soporte",
      description: "Desplegamos el sistema y proporcionamos soporte continuo y mantenimiento"
    }
  ]

  const automationTypes = [
    {
      name: "Automatización de Procesos",
      icon: "⚙️",
      description: "Automatiza tareas repetitivas y flujos de trabajo complejos",
      examples: ["Facturación automática", "Gestión de inventario", "Reportes programados", "Flujos de aprobación"]
    },
    {
      name: "Integración de Sistemas",
      icon: "🔗",
      description: "Conecta diferentes plataformas y herramientas en un ecosistema unificado",
      examples: ["CRM + ERP", "E-commerce + Inventario", "Marketing + Ventas", "Contabilidad + Bancos"]
    },
    {
      name: "Inteligencia Artificial",
      icon: "🤖",
      description: "Implementa chatbots, análisis predictivo y machine learning",
      examples: ["Chatbots 24/7", "Análisis de datos", "Predicción de ventas", "Recomendaciones personalizadas"]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Productividad",
      description: "Reduce el tiempo en tareas manuales en hasta un 80%"
    },
    {
      icon: Cogs,
      title: "Eficiencia Operativa",
      description: "Optimiza flujos de trabajo y elimina cuellos de botella"
    },
    {
      icon: Shield,
      title: "Reducción de Errores",
      description: "Minimiza errores humanos con procesos automatizados"
    },
    {
      icon: Zap,
      title: "Escalabilidad",
      description: "Sistemas que crecen con tu negocio sin incrementar costos"
    }
  ]

  // Debug: verificar que los iconos estén definidos
  console.log('Benefits array:', benefits)
  console.log('TrendingUp icon:', TrendingUp)
  console.log('Cogs icon:', Cogs)
  console.log('Shield icon:', Shield)
  console.log('Zap icon:', Zap)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => {
            // Posiciones fijas basadas en el índice para evitar hidration mismatch
            const positions = [
              { left: 15, top: 20 }, { left: 85, top: 35 }, { left: 45, top: 60 }, { left: 70, top: 15 },
              { left: 25, top: 75 }, { left: 90, top: 80 }, { left: 10, top: 45 }, { left: 60, top: 90 },
              { left: 35, top: 25 }, { left: 80, top: 55 }, { left: 20, top: 85 }, { left: 65, top: 10 },
              { left: 40, top: 70 }, { left: 95, top: 40 }, { left: 5, top: 65 }, { left: 75, top: 30 },
              { left: 30, top: 95 }, { left: 85, top: 20 }, { left: 50, top: 50 }, { left: 15, top: 80 }
            ];
            const position = positions[i] || { left: 50, top: 50 };
            
            return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          )})}
        </div>

        {/* Floating tech icons */}
        {[
          { Icon: Bot, delay: 0, position: { top: '20%', left: '10%' } },
          { Icon: Code, delay: 2, position: { top: '30%', right: '15%' } },
          { Icon: Zap, delay: 4, position: { bottom: '30%', left: '15%' } },
          { Icon: Sparkles, delay: 1, position: { top: '60%', right: '10%' } },
        ].map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/30"
            style={position}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Integración de{' '}
               <span className="gradient-text">Sistemas y Automatizaciones</span>
             </h1>
             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Transformo tu negocio con sistemas inteligentes que automatizan procesos, conectan todas 
               tus herramientas y te permiten enfocarte en lo que realmente importa: hacer crecer tu empresa.
             </p>
             <motion.button
               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
             >
               Solicitar Cotización
             </motion.button>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir mis{' '}
              <span className="gradient-text">Automatizaciones</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cada sistema que implemento está diseñado para maximizar la eficiencia, reducir costos 
              y proporcionar insights valiosos para la toma de decisiones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Beneficios{' '}
              <span className="gradient-text">Clave</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubre cómo la automatización puede transformar tu negocio y llevarlo al siguiente nivel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon ? (
                    <benefit.icon className="w-8 h-8 text-white" />
                  ) : (
                    <div className="w-8 h-8 bg-white rounded-full" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tipos de{' '}
              <span className="gradient-text">Automatización</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrezco diferentes tipos de automatización para adaptarme a las necesidades específicas de tu negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-6xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi{' '}
              <span className="gradient-text">Proceso</span> de Implementación
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un enfoque sistemático y probado que garantiza la implementación exitosa de sistemas de automatización.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos de{' '}
              <span className="gradient-text">Automatización</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ejemplos de sistemas de automatización que he implementado para diferentes industrias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bot className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Testimonios de{' '}
              <span className="gradient-text">Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Lo que dicen mis clientes sobre mis servicios de automatización e integración de sistemas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.position} en {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default AutomatizacionesPage
