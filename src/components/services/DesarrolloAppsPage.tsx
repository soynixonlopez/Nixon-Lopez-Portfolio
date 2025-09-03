'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Smartphone, Zap, Shield, Users, Star, ChevronRight, Smartphone as PhoneIcon, Bot, Code, Sparkles, Globe } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import TechnologiesCarousel from '@/components/TechnologiesCarousel'
import ProcessFlow from '@/components/ProcessFlow'

const DesarrolloAppsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = React.useState(0)

  const features = [
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Apps nativas para iOS y Android con React Native y Flutter"
    },
    {
      icon: Zap,
      title: "Performance Nativo",
      description: "Velocidad y fluidez como si fuera una app nativa desarrollada por Apple/Google"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Implementación de las mejores prácticas de seguridad móvil"
    },
    {
      icon: Users,
      title: "UX Móvil Optimizada",
      description: "Interfaces diseñadas específicamente para la experiencia móvil"
    }
  ]

  const relatedProjects = [
    {
      id: 1,
      title: "App E-commerce ShopSmart",
      description: "Aplicación móvil completa para comercio electrónico con pagos y notificaciones push",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Stripe"],
      results: ["+40% ventas móviles", "4.8/5 rating", "100k+ descargas"]
    },
    {
      id: 2,
      title: "App de Fitness FitLife",
      description: "Aplicación de seguimiento de ejercicios con wearables y análisis de datos",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "HealthKit", "Google Fit"],
      results: ["50k+ usuarios activos", "85% retención", "Integración wearables"]
    },
    {
      id: 3,
      title: "App de Delivery FoodExpress",
      description: "Plataforma de entrega de comida con seguimiento en tiempo real",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Google Maps", "Push Notifications"],
      results: ["30min tiempo promedio", "98% satisfacción", "GPS tracking"]
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
      title: "Análisis de Requisitos",
      description: "Evaluamos las necesidades específicas de tu app, funcionalidades y plataformas objetivo",
      color: "#3B82F6"
    },
    {
      step: "02",
      title: "Arquitectura y Diseño",
      description: "Diseñamos la arquitectura técnica y las interfaces de usuario optimizadas para móvil",
      color: "#8B5CF6"
    },
    {
      step: "03",
      title: "Desarrollo y Testing",
      description: "Construimos tu app con las mejores tecnologías y realizamos pruebas exhaustivas",
      color: "#06B6D4"
    },
    {
      step: "04",
      title: "Optimización y Pulido",
      description: "Optimizamos el rendimiento, la usabilidad y preparamos para las tiendas de apps",
      color: "#10B981"
    },
    {
      step: "05",
      title: "Despliegue y Mantenimiento",
      description: "Publicamos en App Store y Google Play, y proporcionamos soporte continuo",
      color: "#F59E0B"
    }
  ]

  const mobileTechnologies = [
    { name: "Flutter", icon: "🦋", color: "#02569B" },
    { name: "React Native", icon: "⚛️", color: "#61DAFB" },
    { name: "Android Studio", icon: "🤖", color: "#3DDC84" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "Dart", icon: "🎯", color: "#00B4AB" },
    { name: "Kotlin", icon: "🟠", color: "#7F52FF" },
    { name: "Swift", icon: "🍎", color: "#FF6B6B" },
    { name: "Xcode", icon: "💻", color: "#007ACC" },
    { name: "Git", icon: "📚", color: "#F05032" },
    { name: "REST APIs", icon: "🔌", color: "#FF6B6B" }
  ]

  const platforms = [
    {
      name: "iOS",
      icon: "🍎",
      description: "Apps nativas para iPhone y iPad con Swift y SwiftUI",
      features: ["App Store", "Siri Integration", "Apple Pay", "HealthKit"]
    },
    {
      name: "Android",
      icon: "🤖",
      description: "Apps nativas para dispositivos Android con Kotlin",
      features: ["Google Play", "Google Services", "Material Design", "Wear OS"]
    },
    {
      name: "Cross-Platform",
      icon: "🔄",
      description: "Una sola app para ambas plataformas con React Native o Flutter",
      features: ["Código único", "Actualizaciones simultáneas", "Costos reducidos", "Mantenimiento fácil"]
    }
  ]

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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Desarrollo de{' '}
               <span className="gradient-text">Apps Móviles</span>
             </h1>
             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Creo aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de apps. 
               Desde conceptos innovadores hasta apps empresariales, cada proyecto está optimizado para el éxito móvil.
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
       <section className="py-16 bg-white dark:bg-slate-900">
         <div className="container mx-auto px-4">
           <motion.div
             className="text-center mb-12"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               ¿Por qué elegir mi{' '}
               <span className="gradient-text">Desarrollo Móvil</span>?
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Descubre las características únicas que hacen que mis aplicaciones móviles 
               destaquen en las tiendas y generen engagement real.
             </p>
           </motion.div>

           <div className="max-w-7xl mx-auto">
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                 {features.map((feature, index) => (
                   <motion.div
                     key={index}
                     className="group relative p-6 cursor-pointer hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -4, scale: 1.02 }}
                   >
                     {/* Icon container */}
                     <div className="text-center mb-4">
                       <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                         {feature.title}
                       </h3>
                       <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                         {feature.description}
                       </p>
                     </div>

                     {/* Hover indicator */}
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-1/2 transition-all duration-300 rounded-t-full" />
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Platforms Section */}
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
              Plataformas{' '}
              <span className="gradient-text">Soportadas</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Desarrollo apps para todas las plataformas móviles principales, asegurando la máxima 
              compatibilidad y experiencia del usuario.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {platform.description}
                </p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechnologiesCarousel
        technologies={mobileTechnologies}
        title="Tecnologías de Desarrollo Móvil"
        subtitle="Utilizo las tecnologías más avanzadas para crear apps móviles nativas y multiplataforma de alto rendimiento."
      />

      {/* Process Section */}
      <ProcessFlow
        steps={processSteps}
        title="Mi Proceso de Desarrollo"
        subtitle="Un enfoque sistemático y probado que garantiza apps de alta calidad y rendimiento excepcional."
      />

      {/* Projects Gallery Section */}
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
              Proyectos de{' '}
              <span className="gradient-text">Desarrollo Móvil</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explora mi portafolio de aplicaciones móviles desarrolladas para diferentes industrias.
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
                  <div className="h-64 bg-gradient-to-br from-green-500 to-blue-600 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PhoneIcon className="w-20 h-20 text-white opacity-80" />
                    </div>
                    
                    {/* Overlay con botón "Ver Página" */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center gap-2"
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
                          className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {relatedProjects[selectedProject].results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
                        ? 'border-green-500 shadow-lg scale-105'
                        : 'border-gray-200 dark:border-gray-700 hover:border-green-300 hover:scale-102'
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ y: -2 }}
                  >
                    <div className="h-24 bg-gradient-to-br from-green-500 to-blue-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PhoneIcon className="w-8 h-8 text-white opacity-80" />
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

      {/* Related Testimonials Section */}
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
              Testimonios de{' '}
              <span className="gradient-text">Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Lo que dicen mis clientes sobre mis servicios de desarrollo móvil.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

export default DesarrolloAppsPage
