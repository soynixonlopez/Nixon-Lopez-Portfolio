'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Globe, Zap, Shield, Users, Star, ChevronRight, Globe as GlobeIcon, Bot, Code, Sparkles, Calculator, MessageSquare, Send } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import TechnologiesCarousel from '@/components/TechnologiesCarousel'
import ProcessFlow from '@/components/ProcessFlow'
import ServiceCTA from '@/components/ServiceCTA'
import { useQuoteModal } from '@/hooks/useQuoteModal'
import QuoteModal from '@/components/QuoteModal'

const DesarrolloWebPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = React.useState(0)
  const { isOpen, serviceType, openModal, closeModal } = useQuoteModal()

  const features = [
    {
      icon: Globe,
      title: "Diseño Responsivo",
      description: "Sitios web que se adaptan perfectamente a todos los dispositivos"
    },
    {
      icon: Zap,
      title: "Performance Optimizado",
      description: "Velocidad de carga rápida y SEO optimizado para Google"
    },
    {
      icon: Shield,
      title: "Seguridad Web",
      description: "Implementación de las mejores prácticas de seguridad web"
    },
    {
      icon: Users,
      title: "UX/UI Moderno",
      description: "Interfaces intuitivas y atractivas que convierten visitantes"
    }
  ]

  const relatedProjects = [
    {
      id: 1,
      title: "E-commerce ShopSmart",
      description: "Tienda online completa con sistema de pagos, inventario y panel administrativo",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      results: ["+150% conversiones", "4.9/5 rating", "Tiempo de carga <2s"]
    },
    {
      id: 2,
      title: "Portal Corporativo TechCorp",
      description: "Sitio web corporativo con blog, formularios de contacto y integración CRM",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Framer Motion"],
      results: ["+80% leads generados", "Blog con 10k+ visitas", "Integración CRM completa"]
    },
    {
      id: 3,
      title: "Landing Page StartupXYZ",
      description: "Página de aterrizaje optimizada para conversiones con A/B testing",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Vercel Analytics", "TypeScript", "Tailwind CSS"],
      results: ["+200% conversiones", "Tiempo en página +3min", "Bounce rate -40%"]
    }
  ]

  const relatedTestimonials = [
    {
      id: 1,
      name: "Laura Fernández",
      position: "Marketing Manager",
      company: "ShopSmart",
      rating: 5,
      content: "El chatbot de Nixon para nuestro e-commerce ha sido un game-changer. Maneja consultas 24/7, recomienda productos personalizados y ha incrementado nuestras ventas en un 40%.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Roberto Silva",
      position: "Gerente General",
      company: "Business Solutions",
      rating: 5,
      content: "El sistema ERP que Nixon implementó ha transformado nuestras operaciones. 8 módulos perfectamente integrados que han incrementado nuestra eficiencia en un 60%.",
      avatar: "/api/placeholder/80/80"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Análisis y Planificación",
      description: "Evaluamos tus necesidades, objetivos y competencia para crear la estrategia perfecta",
      color: "#3B82F6"
    },
    {
      step: "02",
      title: "Diseño y Wireframes",
      description: "Creamos mockups y prototipos interactivos para validar la experiencia del usuario",
      color: "#8B5CF6"
    },
    {
      step: "03",
      title: "Desarrollo Frontend",
      description: "Construimos la interfaz con las mejores tecnologías y estándares web",
      color: "#06B6D4"
    },
    {
      step: "04",
      title: "Desarrollo Backend",
      description: "Implementamos la lógica del servidor, base de datos y funcionalidades",
      color: "#10B981"
    },
    {
      step: "05",
      title: "Testing y Optimización",
      description: "Probamos exhaustivamente y optimizamos rendimiento, SEO y seguridad",
      color: "#F59E0B"
    },
    {
      step: "06",
      title: "Lanzamiento y Mantenimiento",
      description: "Desplegamos tu sitio web y proporcionamos soporte continuo",
      color: "#EF4444"
    }
  ]

  const webTechnologies = [
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "🎯", color: "#06B6D4" },
    { name: "Bootstrap", icon: "🎪", color: "#7952B3" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Supabase", icon: "💚", color: "#3ECF8E" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    { name: "SQL", icon: "🗄️", color: "#336791" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6" },
    { name: "Next.js", icon: "⚛️", color: "#000000" },
    { name: "React", icon: "⚛️", color: "#61DAFB" }
  ]

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
                Desarrollo de{' '}
                <span className="gradient-text">Sitios Web</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Creo sitios web modernos, responsivos y optimizados que convierten visitantes en clientes. 
                Desde landing pages hasta e-commerce complejos, cada proyecto está diseñado para el éxito digital.
              </p>
              <motion.button
                onClick={() => openModal('web')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="w-5 h-5" />
                Solicitar Cotización
              </motion.button>
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
                    <option value="landing" className="text-gray-900">Landing Page</option>
                    <option value="ecommerce" className="text-gray-900">E-commerce</option>
                    <option value="corporate" className="text-gray-900">Sitio Corporativo</option>
                    <option value="custom" className="text-gray-900">Desarrollo Personalizado</option>
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
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </motion.button>
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
               ¿Por qué elegir mi{' '}
               <span className="gradient-text">Desarrollo Web</span>?
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Explora las características únicas que hacen que mis sitios web 
               destaquen y conviertan visitantes en clientes.
             </p>
           </motion.div>

           <div className="max-w-7xl mx-auto">
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                 {features.map((feature, index) => (
                   <motion.div
                     key={index}
                     className="group relative p-6 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all duration-300"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -4, scale: 1.02 }}
                   >
                     {/* Icon container */}
                     <div className="text-center mb-4">
                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                         {feature.title}
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                         {feature.description}
                       </p>
                     </div>

                     {/* Hover indicator */}
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 group-hover:w-1/2 transition-all duration-300 rounded-t-full" />
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
              <span className="gradient-text">Desarrollo Web</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explora mi portafolio de sitios web y aplicaciones web desarrollados para diferentes industrias.
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
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GlobeIcon className="w-20 h-20 text-white opacity-80" />
                    </div>
                    
                    {/* Overlay con botón "Ver Página" */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
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
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {relatedProjects[selectedProject].results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
                        ? 'border-blue-500 shadow-lg scale-105'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:scale-102'
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ y: -2 }}
                  >
                    <div className="h-24 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GlobeIcon className="w-8 h-8 text-white opacity-80" />
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
              <span className="gradient-text">Desarrollo Web</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Utilizo las tecnologías más modernas y confiables para crear sitios web de alta calidad y rendimiento excepcional.
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
                {webTechnologies.map((tech, index) => (
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
                {webTechnologies.map((tech, index) => (
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
        title="Mi Proceso de Desarrollo"
        subtitle="Un enfoque sistemático y probado que garantiza sitios web de alta calidad y resultados excepcionales para tu negocio."
      />

      {/* Related Testimonials Section */}
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
              Testimonios de{' '}
              <span className="gradient-text">Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Lo que dicen mis clientes sobre mis servicios de desarrollo web.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
        serviceType="web"
        title="¿Listo para crear tu"
        highlightedText="Sitio Web"
        onQuoteClick={() => openModal('web')}
      />

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

export default DesarrolloWebPage
