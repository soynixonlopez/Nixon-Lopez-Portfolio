'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // Verificar si estamos en una página de servicios
      const currentPath = window.location.pathname
      const isServicePage = currentPath.includes('/servicios/')
      
      if (isServicePage) {
        // Si estamos en una página de servicios, ir al homepage con la sección
        window.location.href = `/${href}`
        setIsMenuOpen(false)
      } else {
        // Si estamos en el homepage, hacer scroll a la sección
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setIsMenuOpen(false)
        }
      }
    } else {
      // Enlace externo - navegar a la página
      window.location.href = href
    }
  }

  const redirectToWhatsApp = () => {
    const phoneNumber = '+50768252312' // Reemplaza con tu número real
    const message = encodeURIComponent('Estoy interesado en tus servicios')
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-slate-900 border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
              <div className="container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-none">Nixon López</div>
              <div className="text-xs text-gray-400">Web Developer & AI</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <motion.button
            onClick={redirectToWhatsApp}
            className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white fill-current">
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Chat con Nix</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <motion.nav
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#0f172a' }}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col h-full">
            {/* Header del menú móvil */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-semibold">Menú</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navegación */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left text-gray-300 hover:text-white transition-all duration-200 py-4 px-4 rounded-lg hover:bg-white/5 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-lg font-medium">{item.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={redirectToWhatsApp}
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white fill-current">
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat con Nix</span>
                </button>
              </motion.div>
            </div>

            {/* Footer del menú */}
            <div className="p-6 border-t border-white/10">
              <div className="text-center text-gray-400 text-sm">
                <p>Desarrollo Web & IA</p>
                <p className="text-xs mt-1">© 2025 Nixon López</p>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
