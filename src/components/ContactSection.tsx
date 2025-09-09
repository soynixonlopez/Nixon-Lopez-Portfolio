'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Mail, 
  MessageSquare, 
  Send,
  Clock,
  Phone,
  CheckCircle,
  Calendar,
  TrendingUp,
  Calculator
} from 'lucide-react'
import { useQuoteModal } from '@/hooks/useQuoteModal'
import QuoteModal from './QuoteModal'
import TechLogo from './TechLogo'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { isOpen, serviceType, openModal, closeModal } = useQuoteModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', service: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'infonixoncodes@gmail.com',
      description: 'Respuesta en 24 horas',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Horario',
      info: 'Lun - Vie: 9AM - 6PM',
      description: 'Zona horaria EST',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Consulta',
      info: 'Llamada gratuita',
      description: 'Agenda tu sesión',
      color: 'from-purple-500 to-purple-600'
    }
  ]



  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        {[...Array(15)].map((_, i) => {
          // Posiciones fijas para evitar hydration mismatch
          const positions = [
            { left: 10, top: 15 }, { left: 80, top: 25 }, { left: 30, top: 70 }, { left: 90, top: 45 },
            { left: 20, top: 85 }, { left: 70, top: 10 }, { left: 50, top: 60 }, { left: 15, top: 40 },
            { left: 85, top: 75 }, { left: 40, top: 20 }, { left: 60, top: 90 }, { left: 25, top: 55 },
            { left: 95, top: 30 }, { left: 35, top: 80 }, { left: 75, top: 50 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
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
              delay: i * 0.3,
            }}
          />
        )})}
      </div>

      <div className="container-padding relative z-10">
        {/* Header */}
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
            <Send size={16} />
            Contacto
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para{' '}
            <span className="gradient-text">Innovar</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Estoy aquí para ayudarte a transformar 
            tus ideas en soluciones digitales extraordinarias.
          </p>
        </motion.div>

        {/* Centered Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              Cuéntame sobre tu Proyecto
            </h3>

            {isSubmitted && (
              <motion.div
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">¡Mensaje enviado! Te contactaré pronto.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                >
                  <option value="" className="bg-slate-900">Selecciona un servicio</option>
                  <option value="web-development" className="bg-slate-900">Desarrollo Web con IA</option>
                  <option value="chatbot" className="bg-slate-900">ChatBot Inteligente</option>
                  <option value="automation" className="bg-slate-900">Automatizaciones</option>
                  <option value="consultation" className="bg-slate-900">Consultoría</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, objetivos y cómo puedo ayudarte..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Social Media - Simple Structure */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Síguenos en nuestras{' '}
            <span className="gradient-text">Redes Sociales</span>
          </h3>
          
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://instagram.com/nixoncodes.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors p-3 rounded-full hover:bg-pink-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="Instagram" size={32} />
            </motion.a>
            <motion.a
              href="https://tiktok.com/@nixoncodes.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="TikTok" size={32} />
            </motion.a>
            <motion.a
              href="https://facebook.com/nixoncodes.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors p-3 rounded-full hover:bg-blue-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="Facebook" size={32} />
            </motion.a>
            <motion.a
              href="https://youtube.com/@nixoncodes.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors p-3 rounded-full hover:bg-red-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="YouTube" size={32} />
            </motion.a>
          </div>
        </motion.div>



      </div>
      
      {/* Quote Modal */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeModal}
        serviceType={serviceType}
      />
    </section>
  )
}

export default ContactSection