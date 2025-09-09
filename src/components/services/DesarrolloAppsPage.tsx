'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { CheckCircle, Smartphone, Zap, Shield, Users, Star, ChevronRight, Smartphone as PhoneIcon, Bot, Code, Sparkles, Globe, Calculator } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import TechnologiesCarousel from '@/components/TechnologiesCarousel'
import ProcessFlow from '@/components/ProcessFlow'
import ServiceCTA from '@/components/ServiceCTA'
import { useQuoteModal } from '@/hooks/useQuoteModal'
import QuoteModal from '@/components/QuoteModal'
import TechLogo from '../TechLogo'

const DesarrolloAppsPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = React.useState(0)
  const { isOpen, serviceType, openModal, closeModal } = useQuoteModal()

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
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Android Studio" },
    { name: "Firebase" },
    { name: "React" },
    { name: "JavaScript" },
    { name: "Dart" },
    { name: "Kotlin" },
    { name: "Swift" },
    { name: "Xcode" },
    { name: "Git" },
    { name: "REST APIs" }
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
                Desarrollo de{' '}
                <span className="gradient-text">Apps Móviles</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Creo aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de apps. 
                Desde conceptos innovadores hasta apps empresariales, cada proyecto está optimizado para el éxito móvil.
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
                onClick={() => openModal('mobile')}
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
               ¿Por qué elegir mi{' '}
               <span className="gradient-text">Desarrollo Móvil</span>?
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Descubre las características únicas que hacen que mis aplicaciones móviles 
               destaquen en las tiendas y generen engagement real.
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
                           <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-green-700 transition-colors duration-300">
                             {index + 1}
                           </div>
                         </div>
                         
                         {/* Content */}
                         <div className="flex-1">
                           <div className="flex items-center space-x-3 mb-2">
                             <feature.icon className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                             <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
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
                         <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                           <Smartphone className="w-8 h-8 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                           Apps Móviles Premium
                         </h3>
                         <p className="text-gray-600 dark:text-gray-300">
                           Aplicaciones que conectan con tus usuarios
                         </p>
                       </div>

                       {/* Stats */}
                       <div className="grid grid-cols-2 gap-4 mb-8">
                         <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                           <div className="text-2xl font-bold text-green-600 dark:text-green-400">iOS</div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">Apple Store</div>
                         </div>
                         <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                           <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Android</div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">Play Store</div>
                         </div>
                       </div>

                       {/* CTA */}
                       <div className="text-center">
                         <motion.button
                           className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                     <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-20 animate-pulse" />
                     <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
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

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
        
        <div className="container-padding relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0.4)',
                  '0 0 0 10px rgba(59, 130, 246, 0)',
                  '0 0 0 0 rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Smartphone size={18} />
              Plataformas Soportadas
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Desarrollo para{' '}
              <span className="gradient-text">Todas las Plataformas</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creo aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de apps, 
              asegurando la máxima compatibilidad y experiencia del usuario.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-3xl" />
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon with enhanced styling */}
                  <motion.div 
                    className="text-7xl mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {platform.icon}
                    {/* Glow effect */}
                    <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {platform.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base">
                    {platform.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 group/feature"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className="group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-600/5" />
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
              <span className="gradient-text">Desarrollo Móvil</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Utilizo las tecnologías más avanzadas para crear apps móviles nativas y multiplataforma de alto rendimiento.
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
                {mobileTechnologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 min-w-[140px] group hover:-translate-y-3 hover:border-green-200 dark:hover:border-green-700"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300 relative">
                      <TechLogo 
                        name={tech.name} 
                        size={48} 
                        className="text-black"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm font-semibold text-black group-hover:scale-110 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
                
                {/* Duplicate set for infinite effect */}
                {mobileTechnologies.map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 min-w-[140px] group hover:-translate-y-3 hover:border-green-200 dark:hover:border-green-700"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300 relative">
                      <TechLogo 
                        name={tech.name} 
                        size={48} 
                        className="text-black"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm font-semibold text-black group-hover:scale-110 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300">
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
        subtitle="Un enfoque sistemático y probado que garantiza apps de alta calidad y rendimiento excepcional."
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

      {/* CTA Section */}
      <ServiceCTA
        serviceType="mobile"
        title="¿Listo para crear tu"
        highlightedText="App Móvil"
        onQuoteClick={() => openModal('mobile')}
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

export default DesarrolloAppsPage
