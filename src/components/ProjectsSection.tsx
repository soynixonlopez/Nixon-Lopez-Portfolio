'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ExternalLink,
  Github,
  Eye,
  Sparkles,
  Globe,
  Bot,
  Zap,
  GraduationCap,
  Building,
  X,
  Calendar,
  Users,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Sistema de Automatización AI",
      description: "Plataforma completa que automatiza procesos empresariales utilizando inteligencia artificial avanzada con análisis predictivo.",
      longDescription: "Sistema integral que automatiza procesos empresariales utilizando inteligencia artificial avanzada. Incluye análisis predictivo, automatización de workflows y integración con múltiples APIs. Procesa más de 10,000 transacciones diarias y ha mejorado la eficiencia operacional en un 85%.",
      image: "/api/placeholder/400/240",
      icon: Bot,
      gradient: "from-blue-500 to-purple-600",
      tags: ["Next.js", "OpenAI", "Python"],
      allTags: ["Next.js", "OpenAI", "Python", "PostgreSQL", "Docker", "AWS"],
      metrics: {
        efficiency: "+85%",
        timeReduction: "12h/día",
        clients: "15+"
      },
      features: [
        "Procesamiento de lenguaje natural avanzado",
        "Automatización completa de workflows",
        "Dashboard en tiempo real con métricas",
        "Integración con APIs externas",
        "Análisis predictivo y machine learning"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/automation",
        github: "https://github.com/nixonlopez/ai-automation",
        case: "https://case-study.nixoncodes.ai/automation"
      },
      client: "TechCorp Solutions",
      duration: "3 meses",
      year: "2024"
    },
    {
      id: 2,
      title: "ChatBot E-commerce Inteligente",
      description: "Asistente virtual para ventas que maneja consultas, recomienda productos y procesa órdenes automáticamente.",
      longDescription: "ChatBot avanzado con IA conversacional que maneja consultas de clientes, recomienda productos personalizados y procesa órdenes automáticamente. Integrado con sistemas de inventario y CRM, ha incrementado las conversiones en un 40% y mantiene 95% de satisfacción del cliente.",
      image: "/api/placeholder/400/240",
      icon: Zap,
      gradient: "from-green-500 to-teal-600",
      tags: ["React", "Node.js", "OpenAI"],
      allTags: ["React", "Node.js", "OpenAI", "Stripe", "MongoDB", "Socket.io"],
      metrics: {
        conversion: "+40%",
        satisfaction: "95%",
        queries: "10k+/mes"
      },
      features: [
        "Procesamiento NLP avanzado",
        "Recomendaciones personalizadas con IA",
        "Integración completa con pagos",
        "Análisis de sentimientos en tiempo real",
        "Soporte multiidioma automático"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/chatbot",
        github: "https://github.com/nixonlopez/ecommerce-bot",
        case: "https://case-study.nixoncodes.ai/chatbot"
      },
      client: "ShopSmart",
      duration: "2 meses",
      year: "2024"
    },
    {
      id: 3,
      title: "Plataforma Web Corporativa",
      description: "Sitio web corporativo con CMS personalizado, optimizado para SEO y con analytics avanzados integrados.",
      longDescription: "Plataforma web completa con sistema de gestión de contenido personalizado, optimizada para SEO con puntuación perfecta y analytics avanzados. Maneja más de 50,000 usuarios mensuales con performance de 98/100 en PageSpeed Insights.",
      image: "/api/placeholder/400/240",
      icon: Globe,
      gradient: "from-purple-500 to-pink-600",
      tags: ["Next.js", "Tailwind", "Supabase"],
      allTags: ["Next.js", "Tailwind", "Supabase", "Vercel", "TypeScript", "Prisma"],
      metrics: {
        performance: "98/100",
        seo: "100/100",
        users: "50k+/mes"
      },
      features: [
        "CMS personalizado y intuitivo",
        "SEO optimizado con puntuación perfecta",
        "Analytics integrados y dashboards",
        "Diseño responsive y accesible",
        "Performance optimizada y escalable"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/corporate",
        github: "https://github.com/nixonlopez/corporate-web",
        case: "https://case-study.nixoncodes.ai/corporate"
      },
      client: "Global Enterprises",
      duration: "4 meses",
      year: "2023"
    },
    {
      id: 4,
      title: "Dashboard Analytics Predictivo",
      description: "Dashboard inteligente con machine learning que procesa grandes volúmenes de datos y genera insights automáticos.",
      longDescription: "Dashboard inteligente que procesa grandes volúmenes de datos utilizando machine learning para generar insights automáticos y predicciones de negocio. Maneja más de 1 millón de data points con 94% de precisión en predicciones.",
      image: "/api/placeholder/400/240",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600",
      tags: ["React", "Python", "TensorFlow"],
      allTags: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
      metrics: {
        accuracy: "94%",
        insights: "500+",
        dataPoints: "1M+"
      },
      features: [
        "Machine Learning integrado",
        "Visualizaciones interactivas avanzadas",
        "Predicciones en tiempo real",
        "Exportación automática de reportes",
        "API REST completa y documentada"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/analytics",
        github: "https://github.com/nixonlopez/ai-analytics",
        case: "https://case-study.nixoncodes.ai/analytics"
      },
      client: "DataVision Inc",
      duration: "5 meses",
      year: "2023"
    },
    {
      id: 5,
      title: "Plataforma Educativa Gamificada",
      description: "Aplicación educativa completa con sistema de gamificación, videoconferencias y seguimiento de progreso avanzado.",
      longDescription: "Aplicación educativa completa con sistema de gamificación avanzado, videoconferencias integradas y seguimiento detallado de progreso. Cuenta con más de 2,000 estudiantes activos y 78% de tasa de finalización de cursos.",
      image: "/api/placeholder/400/240",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-blue-600",
      tags: ["Vue.js", "Firebase", "WebRTC"],
      allTags: ["Vue.js", "Firebase", "WebRTC", "PWA", "Nuxt.js", "Stripe"],
      metrics: {
        students: "2k+",
        completion: "78%",
        rating: "4.8/5"
      },
      features: [
        "Sistema de gamificación avanzado",
        "Videoconferencias HD integradas",
        "Seguimiento de progreso en tiempo real",
        "Contenido interactivo y multimedia",
        "Certificaciones automáticas verificables"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/education",
        github: "https://github.com/nixonlopez/edu-platform",
        case: "https://case-study.nixoncodes.ai/education"
      },
      client: "EduTech Academy",
      duration: "6 meses",
      year: "2023"
    },
    {
      id: 6,
      title: "Sistema ERP Empresarial",
      description: "ERP completo con 8 módulos integrados que gestiona inventario, ventas, RRHH y contabilidad en una plataforma unificada.",
      longDescription: "Sistema completo de gestión empresarial con 8 módulos totalmente integrados: inventario, ventas, recursos humanos y contabilidad. Utilizado por más de 200 usuarios activos y ha incrementado la eficiencia operacional en un 60%.",
      image: "/api/placeholder/400/240",
      icon: Building,
      gradient: "from-teal-500 to-green-600",
      tags: ["Angular", "Node.js", "MySQL"],
      allTags: ["Angular", "Node.js", "MySQL", "Docker", "Redis", "JWT"],
      metrics: {
        modules: "8",
        efficiency: "+60%",
        users: "200+"
      },
      features: [
        "8 módulos completamente integrados",
        "Reportes automáticos y personalizables",
        "Sistema de control de accesos robusto",
        "API REST completa y escalable",
        "Sistema de backup automático diario"
      ],
      links: {
        demo: "https://demo.nixoncodes.ai/erp",
        github: "https://github.com/nixonlopez/erp-system",
        case: "https://case-study.nixoncodes.ai/erp"
      },
      client: "Business Solutions",
      duration: "8 meses",
      year: "2022"
    }
  ]

  // Calculate total slides (groups of 3)
  const totalSlides = Math.ceil(projects.length / 3)
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const openProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const currentOffset = e.clientX - dragStart
    setDragOffset(currentOffset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    // If dragged more than 50px, change slide
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    
    setDragOffset(0)
  }

  // Removed auto-scroll - only manual navigation

  // Get current projects to display (3 per slide)
  const getCurrentProjects = () => {
    const startIndex = currentIndex * 3
    return projects.slice(startIndex, startIndex + 3)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(99, 102, 241, 0.4)',
                '0 0 0 10px rgba(99, 102, 241, 0)',
                '0 0 0 0 rgba(99, 102, 241, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            Proyectos Destacados
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Casos de Éxito{' '}
            <span className="gradient-text">Comprobados</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora mis proyectos más impactantes. Soluciones reales que han transformado negocios.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-white dark:bg-slate-800 shadow-xl rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-white dark:bg-slate-800 shadow-xl rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="overflow-hidden px-4 cursor-grab active:cursor-grabbing select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: isDragging ? dragOffset * 0.3 : 0 
                }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: isDragging ? 0 : 0.5 }}
              >
                {getCurrentProjects().map((project, index) => {
                  const IconComponent = project.icon
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Image Area */}
                      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                        <div className="absolute inset-0 bg-black/20" />
                        
                        {/* Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              if (!isDragging && Math.abs(dragOffset) < 10) {
                                openProjectDetails(project)
                              }
                            }}
                            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye className="w-4 h-4" />
                            Ver Proyecto
                          </motion.button>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                        <div className="absolute bottom-6 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {project.title}
                        </h3>

                        {/* Description - 2 lines */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies - 3 tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-indigo-100 hover:text-indigo-700 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Click Area */}
                      <div 
                        className="absolute inset-0 cursor-pointer"
                        onClick={(e) => {
                          // Only open modal if not dragging
                          if (!isDragging && Math.abs(dragOffset) < 10) {
                            openProjectDetails(project)
                          }
                        }}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center mt-8 gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>

          {/* Slide Counter */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} de {totalSlides} grupos
            </span>
          </motion.div>
        </div>


      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetails}
          >
            <motion.div
              className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectDetails}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className={`relative h-64 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                
                <div className="relative z-10 text-center text-white">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  >
                    <selectedProject.icon className="w-10 h-10" />
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.div
                    className="flex items-center justify-center gap-4 text-sm opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedProject.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {selectedProject.year}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </motion.div>

                {/* Metrics */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Resultados Medibles
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Características Principales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                      >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Complete Tech Stack */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Stack Tecnológico Completo
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.allTags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.a
                    href={selectedProject.links.demo}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5" />
                    Ver Demo en Vivo
                  </motion.a>
                  <motion.a
                    href={selectedProject.links.github}
                    className="px-6 py-4 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    Código
                  </motion.a>
                  <motion.a
                    href={selectedProject.links.case}
                    className="px-6 py-4 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Caso de Estudio
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection