'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Zap, Bot, Database, Workflow, Shield, Star, Cog, TrendingUp, Code, Sparkles, Globe, Calculator, MessageSquare, Send } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import TechnologiesCarousel from '@/components/TechnologiesCarousel'
import ProcessFlow from '@/components/ProcessFlow'
import { useQuoteModal } from '@/hooks/useQuoteModal'
import QuoteModal from '@/components/QuoteModal'

const AutomatizacionesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = React.useState(0)
  const { isOpen, serviceType, openModal, closeModal } = useQuoteModal()

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
      description: "Evaluamos tus flujos de trabajo actuales y identificamos oportunidades de automatización",
      color: "#3B82F6"
    },
    {
      step: "02",
      title: "Diseño de Arquitectura",
      description: "Diseñamos la arquitectura del sistema y las integraciones necesarias",
      color: "#8B5CF6"
    },
    {
      step: "03",
      title: "Desarrollo e Integración",
      description: "Construimos el sistema y conectamos todas tus herramientas existentes",
      color: "#06B6D4"
    },
    {
      step: "04",
      title: "Testing y Optimización",
      description: "Probamos exhaustivamente y optimizamos el rendimiento del sistema",
      color: "#10B981"
    },
    {
      step: "05",
      title: "Implementación y Soporte",
      description: "Desplegamos el sistema y proporcionamos soporte continuo y mantenimiento",
      color: "#F59E0B"
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
      icon: Cog,
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

  const automationTechnologies = [
    { name: "n8n", icon: "🔄", color: "#FF6B6B" },
    { name: "Zapier", icon: "⚡", color: "#FF4A00" },
    { name: "Power Automate", icon: "🔵", color: "#0078D4" },
    { name: "APIs", icon: "🔌", color: "#FF6B6B" },
    { name: "Hugging Face", icon: "🤗", color: "#FF6B6B" },
    { name: "AI/ML", icon: "🧠", color: "#FF6B6B" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "Redis", icon: "🔴", color: "#DC382D" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "TensorFlow", icon: "🔥", color: "#FF6F00" }
  ]

  // Debug: verificar que los iconos estén definidos
  console.log('Benefits array:', benefits)
  console.log('TrendingUp icon:', TrendingUp)
  console.log('Cog icon:', Cog)
  console.log('Shield icon:', Shield)
  console.log('Zap icon:', Zap)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title and Description */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Integración de{' '}
                <span className="gradient-text">Sistemas y Automatizaciones</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transformo tu negocio con sistemas inteligentes que automatizan procesos, conectan todas 
                tus herramientas y te permiten enfocarte en lo que realmente importa: hacer crecer tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => openModal('automation')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calculator className="w-5 h-5" />
                  Solicitar Cotización
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bot className="w-5 h-5" />
                  Ver Portafolio
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Cuéntame sobre tu Proyecto</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Servicio de Interés
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300">
                    <option value="" className="text-gray-900">Selecciona un servicio</option>
                    <option value="chatbot" className="text-gray-900">Chatbot Inteligente</option>
                    <option value="workflow" className="text-gray-900">Automatización de Procesos</option>
                    <option value="integration" className="text-gray-900">Integración de Sistemas</option>
                    <option value="custom" className="text-gray-900">Solución Personalizada</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto, objetivos y cómo puedo ayudarte..."
                  />
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={() => openModal('automation')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calculator className="w-5 h-5" />
                    Cotización
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Features Section */}
       <section className="py-16 bg-white dark:bg-slate-900">
         <div className="container-padding">
           <motion.div
             className="text-center mb-12"
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
               Descubre las ventajas únicas que hacen que mis sistemas de automatización 
               sean la elección inteligente para tu negocio.
             </p>
           </motion.div>

           <div className="max-w-7xl mx-auto">
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                 {features.map((feature, index) => (
                   <motion.div
                     key={index}
                     className="group relative p-6 cursor-pointer hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -4, scale: 1.02 }}
                   >
                     {/* Icon container */}
                     <div className="text-center mb-4">
                       <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                         <motion.div
                           animate={{ rotate: [0, 3, -3, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         >
                           <feature.icon className="w-8 h-8 text-white" />
                         </motion.div>
                       </div>
                     </div>

                     {/* Content */}
                     <div className="text-center">
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                         {feature.title}
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                         {feature.description}
                       </p>
                     </div>

                     {/* Hover indicator */}
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600 group-hover:w-1/2 transition-all duration-300 rounded-t-full" />
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Projects Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container-padding">
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
              Explora mi portafolio de sistemas de automatización implementados para diferentes industrias.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Columna izquierda - Proyecto principal */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="w-20 h-20 text-white opacity-80" />
                    </div>
                    
                    {/* Overlay con botón "Ver Página" */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="w-4 h-4" />
                        Ver Página
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {relatedProjects[selectedProject].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                      {relatedProjects[selectedProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {relatedProjects[selectedProject].technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {relatedProjects[selectedProject].results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                          <span className="text-base">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Columna derecha - Miniaturas de proyectos */}
              <div className="space-y-6">
                {relatedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden border-2 ${
                      selectedProject === index
                        ? 'border-purple-500 shadow-lg scale-105'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 hover:scale-102'
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ y: -2 }}
                  >
                    <div className="h-24 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Bot className="w-8 h-8 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-padding">
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
        <div className="container-padding">
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

      {/* Technologies Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnologías de{' '}
              <span className="gradient-text">Automatización</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Utilizo las herramientas y tecnologías más avanzadas para crear sistemas de automatización inteligentes y eficientes.
            </p>
          </motion.div>

          {/* Tech Carousel - Main Content */}
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Infinite Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-infinite space-x-8">
                {/* First set of technologies */}
                {automationTechnologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 min-w-[140px] group hover:-translate-y-3"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
                
                {/* Duplicate set for infinite effect */}
                {automationTechnologies.map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 min-w-[140px] group hover:-translate-y-3"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessFlow
        steps={processSteps}
        title="Mi Proceso de Implementación"
        subtitle="Un enfoque sistemático y probado que garantiza la implementación exitosa de sistemas de automatización."
      />


      {/* Related Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container-padding">
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
      
      {/* Quote Modal */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeModal}
        serviceType={serviceType}
      />
    </div>
  )
}

export default AutomatizacionesPage
