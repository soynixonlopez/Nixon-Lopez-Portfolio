'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "CEO & Fundadora",
      company: "TechStart Solutions",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content: "Nixon transformó completamente nuestra presencia digital. Su chatbot inteligente incrementó nuestras conversiones en un 45% y la automatización de procesos nos ahorra 20 horas semanales. Un verdadero profesional que entiende las necesidades del negocio.",
      project: "ChatBot E-commerce + Automatizaciones",
      results: ["+45% conversiones", "20h/semana ahorradas", "ROI 300% en 6 meses"]
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Director de Tecnología",
      company: "Global Enterprises",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content: "La plataforma web que Nixon desarrolló para nosotros superó todas las expectativas. Performance perfecta, SEO optimizado y un CMS intuitivo que nuestro equipo puede manejar sin problemas. Ha sido un placer trabajar con él.",
      project: "Plataforma Web Corporativa",
      results: ["98/100 PageSpeed", "100/100 SEO", "50k+ usuarios/mes"]
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "Fundadora",
      company: "EduTech Academy",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content: "Nixon creó una plataforma educativa que revolucionó nuestra forma de enseñar. La gamificación y el sistema de seguimiento han aumentado la retención de estudiantes en un 78%. Su atención al detalle es excepcional.",
      project: "Plataforma Educativa Gamificada",
      results: ["78% retención", "2k+ estudiantes", "4.8/5 rating"]
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "Gerente General",
      company: "Business Solutions",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content: "El sistema ERP que Nixon implementó ha transformado nuestras operaciones. 8 módulos perfectamente integrados que han incrementado nuestra eficiencia en un 60%. Su conocimiento técnico y capacidad de comunicación son sobresalientes.",
      project: "Sistema ERP Empresarial",
      results: ["8 módulos integrados", "+60% eficiencia", "200+ usuarios"]
    },
    {
      id: 5,
      name: "Laura Fernández",
      position: "Marketing Manager",
      company: "ShopSmart",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content: "El chatbot de Nixon para nuestro e-commerce ha sido un game-changer. Maneja consultas 24/7, recomienda productos personalizados y ha incrementado nuestras ventas en un 40%. Los clientes están encantados con la experiencia.",
      project: "ChatBot E-commerce Inteligente",
      results: ["+40% ventas", "95% satisfacción", "10k+ consultas/mes"]
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen mis{' '}
            <span className="gradient-text">Clientes</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonios de clientes satisfechos con mis servicios.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic max-w-3xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
