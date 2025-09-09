'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Zap, Bot, Database, Workflow, Shield, Star, Cog, TrendingUp, Code, Sparkles, Globe, Calculator, ChevronRight } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import TechnologiesCarousel from '@/components/TechnologiesCarousel'
import ProcessFlow from '@/components/ProcessFlow'
import ServiceCTA from '@/components/ServiceCTA'
import { useQuoteModal } from '@/hooks/useQuoteModal'
import QuoteModal from '@/components/QuoteModal'
import TechLogo from '../TechLogo'

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


  const automationTechnologies = [
    { name: "n8n" },
    { name: "Zapier" },
    { name: "Hugging Face" },
    { name: "Python" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "OpenAI" }
  ]


  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
              rotate: [0, 360],
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

        <div className="container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Main Content */}
            <motion.div
              className="text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Integración de{' '}
                <span className="gradient-text">Sistemas y Automatizaciones</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transformo tu negocio con sistemas inteligentes que automatizan procesos, conectan todas 
                tus herramientas y te permiten enfocarte en lo que realmente importa: hacer crecer tu empresa.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
                  onClick={() => {
                    const projectsSection = document.getElementById('projects')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-5 h-5" />
                  Ver Portafolio
                </motion.button>
            </motion.div>

            {/* Key Features Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
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

           <div className="max-w-6xl mx-auto">
             {/* Main Container */}
             <div className="relative">
               {/* Left Side - Features List */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 {/* Features */}
                 <div className="space-y-8">
                 {features.map((feature, index) => (
                   <motion.div
                     key={index}
                       className="group relative"
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.6, delay: index * 0.1 }}
                       viewport={{ once: true }}
                     >
                       <div className="flex items-start space-x-4">
                         {/* Number */}
                         <div className="flex-shrink-0">
                           <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-purple-700 transition-colors duration-300">
                             {index + 1}
                           </div>
                         </div>
                         
                         {/* Content */}
                         <div className="flex-1">
                           <div className="flex items-center space-x-3 mb-2">
                             <feature.icon className="w-5 h-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                             <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                               {feature.title}
                             </h3>
                           </div>
                           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                             {feature.description}
                           </p>
                         </div>
                       </div>
                       
                       {/* Connecting Line */}
                       {index < features.length - 1 && (
                         <div className="absolute left-5 top-12 w-0.5 h-8 bg-gray-200 dark:bg-gray-700" />
                       )}
                     </motion.div>
                   ))}
                 </div>

                 {/* Right Side - Visual Element */}
                 <div className="relative">
                   <motion.div
                     className="relative"
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }}
                   >
                     {/* Main Card */}
                     <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                       {/* Header */}
                       <div className="text-center mb-8">
                         <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                           <Zap className="w-8 h-8 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                           Automatizaciones Premium
                         </h3>
                         <p className="text-gray-600 dark:text-gray-300">
                           Sistemas que optimizan tu productividad
                         </p>
                       </div>

                       {/* Stats */}
                       <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                           <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">Funcionamiento</div>
                         </div>
                         <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                           <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">100%</div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">Eficiencia</div>
                         </div>
                       </div>

                       {/* CTA */}
                       <div className="text-center">
                         <motion.button
                           className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           onClick={() => {
                             const contactSection = document.getElementById('contact')
                             if (contactSection) {
                               contactSection.scrollIntoView({ behavior: 'smooth' })
                             }
                           }}
                         >
                           Comenzar Proyecto
                         </motion.button>
                       </div>
                     </div>

                     {/* Floating Elements */}
                     <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-pulse" />
                     <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
                   </motion.div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
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


      {/* Automation Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/20 to-transparent" />
        </div>
        
        <div className="container-padding relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
        </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tipos de{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Automatización</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ofrezco diferentes tipos de automatización para adaptarme a las necesidades específicas de tu negocio y maximizar tu eficiencia operativa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Main Card */}
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 overflow-hidden group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating background elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  
                  {/* Icon */}
                  <div className="relative z-10 text-center mb-6">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="text-3xl"
                        >
                          {type.icon}
                        </motion.div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {type.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                      {type.description}
                    </p>
                    
                    {/* Examples */}
                    <div className="space-y-3">
                      {type.examples.map((example, exampleIndex) => (
                        <motion.div 
                          key={exampleIndex} 
                          className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: exampleIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="font-medium">{example}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="font-semibold">¿Listo para automatizar tu negocio?</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
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
                      <TechLogo 
                        name={tech.name} 
                        size={48} 
                        className="text-black"
                      />
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
                      <TechLogo 
                        name={tech.name} 
                        size={48} 
                        className="text-black"
                      />
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

      {/* CTA Section */}
      <ServiceCTA
        serviceType="automation"
        title="¿Listo para"
        highlightedText="Automatizar tu Negocio"
        onQuoteClick={() => openModal('automation')}
      />

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