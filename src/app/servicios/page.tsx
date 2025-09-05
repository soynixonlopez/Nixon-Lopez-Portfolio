'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Globe, 
  Bot, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const ServiciosPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo de Sitios Web',
      description: 'Sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.',
      features: [
        'Diseño responsivo para todos los dispositivos',
        'Performance optimizada y SEO avanzado',
        'CMS intuitivo para gestión de contenido',
        'Integración con herramientas de marketing'
      ],
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
      link: '/servicios/desarrollo-web',
      image: '/api/placeholder/400/250'
    },
    {
      icon: Bot,
      title: 'Desarrollo de Apps Móviles',
      description: 'Aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de apps.',
      features: [
        'Apps nativas para iOS y Android',
        'React Native y Flutter para multiplataforma',
        'UX móvil optimizada y performance nativo',
        'Integración con APIs y servicios cloud'
      ],
      color: 'from-green-500 to-teal-500',
      delay: 0.2,
      link: '/servicios/desarrollo-apps',
      image: '/api/placeholder/400/250'
    },
    {
      icon: Zap,
      title: 'Integración de Sistemas y Automatizaciones',
      description: 'Sistemas inteligentes que automatizan procesos y conectan todas tus herramientas empresariales.',
      features: [
        'Chatbots inteligentes con IA',
        'Workflows automatizados de procesos',
        'Integración completa de sistemas',
        'Analytics avanzado y reportes automáticos'
      ],
      color: 'from-purple-500 to-pink-500',
      delay: 0.4,
      link: '/servicios/automatizaciones',
      image: '/api/placeholder/400/250'
    }
  ]

  const stats = [
    {
      number: "50+",
      label: "Proyectos Completados",
      description: "Experiencia probada en múltiples industrias"
    },
    {
      number: "98%",
      label: "Satisfacción del Cliente",
      description: "Clientes satisfechos con mis servicios"
    },
    {
      number: "24/7",
      label: "Soporte Disponible",
      description: "Asistencia técnica cuando la necesites"
    },
    {
      number: "3x",
      label: "ROI Promedio",
      description: "Retorno de inversión en 6-12 meses"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mis{' '}
              <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Soluciones tecnológicas integrales diseñadas para transformar tu negocio. 
              Desde sitios web hasta sistemas complejos de automatización, cada servicio 
              está optimizado para el éxito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
                
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
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.delay + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 mt-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white py-4 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-600 hover:border-transparent group/btn"
                >
                  <span>Explorar Servicio</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-600/5" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Resultados{' '}
              <span className="gradient-text">Comprobados</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Números que respaldan la calidad y efectividad de mis servicios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnologías que{' '}
              <span className="gradient-text">Utilizo</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mi stack tecnológico abarca desde desarrollo frontend hasta inteligencia artificial, 
              siempre manteniéndome actualizado con las últimas tendencias.
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
                {[
                  { name: 'React', icon: '⚛️', color: 'text-blue-500' },
                  { name: 'Next.js', icon: '▲', color: 'text-black dark:text-white' },
                  { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
                  { name: 'Node.js', icon: '🟢', color: 'text-green-600' },
                  { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
                  { name: 'OpenAI', icon: '🤖', color: 'text-green-500' },
                  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
                  { name: 'MongoDB', icon: '🍃', color: 'text-green-700' },
                  { name: 'Tailwind', icon: '🎨', color: 'text-cyan-500' },
                  { name: 'Framer Motion', icon: '🎭', color: 'text-pink-500' },
                  { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
                  { name: 'AWS', icon: '☁️', color: 'text-orange-500' },
                  { name: 'Git', icon: '📝', color: 'text-red-500' },
                  { name: 'Figma', icon: '🎯', color: 'text-purple-500' },
                  { name: 'Vercel', icon: '▼', color: 'text-black dark:text-white' },
                  { name: 'LangChain', icon: '🔗', color: 'text-indigo-500' },
                  { name: 'Supabase', icon: '⚡', color: 'text-emerald-500' },
                  { name: 'Prisma', icon: '🔺', color: 'text-slate-600' },
                  { name: 'GraphQL', icon: '🔷', color: 'text-pink-600' },
                  { name: 'Stripe', icon: '💳', color: 'text-blue-600' },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 min-w-[140px] group hover:-translate-y-3"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className={`text-sm font-semibold ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
                
                {/* Duplicate set for infinite effect */}
                {[
                  { name: 'React', icon: '⚛️', color: 'text-blue-500' },
                  { name: 'Next.js', icon: '▲', color: 'text-black dark:text-white' },
                  { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
                  { name: 'Node.js', icon: '🟢', color: 'text-green-600' },
                  { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
                  { name: 'OpenAI', icon: '🤖', color: 'text-green-500' },
                  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
                  { name: 'MongoDB', icon: '🍃', color: 'text-green-700' },
                  { name: 'Tailwind', icon: '🎨', color: 'text-cyan-500' },
                  { name: 'Framer Motion', icon: '🎭', color: 'text-pink-500' },
                  { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
                  { name: 'AWS', icon: '☁️', color: 'text-orange-500' },
                  { name: 'Git', icon: '📝', color: 'text-red-500' },
                  { name: 'Figma', icon: '🎯', color: 'text-purple-500' },
                  { name: 'Vercel', icon: '▼', color: 'text-black dark:text-white' },
                  { name: 'LangChain', icon: '🔗', color: 'text-indigo-500' },
                  { name: 'Supabase', icon: '⚡', color: 'text-emerald-500' },
                  { name: 'Prisma', icon: '🔺', color: 'text-slate-600' },
                  { name: 'GraphQL', icon: '🔷', color: 'text-pink-600' },
                  { name: 'Stripe', icon: '💳', color: 'text-blue-600' },
                ].map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 min-w-[140px] group hover:-translate-y-3"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className={`text-sm font-semibold ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para{' '}
              <span className="text-blue-200">Transformar</span> tu Negocio?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Conversemos sobre cómo mis servicios pueden impulsar tu empresa al siguiente nivel. 
              Agenda una consulta gratuita y descubre las posibilidades.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda tu Consulta Gratuita
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiciosPage
