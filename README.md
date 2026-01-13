# Nixon López - Portafolio Digital

Portafolio profesional de Nixon López, especialista en desarrollo web con IA, ChatBots inteligentes y automatizaciones para negocios.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva con animaciones fluidas estilo n8n
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones Interactivas**: Microinteracciones y efectos visuales
- **ChatBot Demo**: Demostración en vivo de capacidades de IA
- **SEO Optimizado**: Configurado para máxima visibilidad
- **Performance**: Carga rápida y experiencia fluida

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: Vercel (recomendado)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nixonlopez/portfolio.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- `neon-blue`: #00D4FF
- `purple`: #8B5CF6
- `gradient`: De #667eea a #764ba2

### Contenido
- Edita `src/components/HeroSection.tsx` para cambiar la información principal
- Modifica `src/components/ServicesSection.tsx` para actualizar servicios
- Actualiza `src/components/AboutSection.tsx` con tu información personal
- Personaliza `src/components/ContactSection.tsx` con tus datos de contacto

### ChatBot
El ChatBot demo se encuentra en `src/components/ChatBotDemo.tsx`. Puedes:
- Agregar más respuestas predefinidas
- Integrar con APIs reales de IA
- Personalizar la apariencia y comportamiento

## 🔧 Configuración de Variables de Entorno

### Newsletter con Resend
Para que el formulario de newsletter funcione y recibas los correos de suscripción:

1. Crea una cuenta en [Resend](https://resend.com) (gratis hasta 3,000 emails/mes)
2. Obtén tu API Key en [Resend API Keys](https://resend.com/api-keys)
3. Crea un archivo `.env.local` en la raíz del proyecto:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```
4. Reemplaza `re_xxxxxxxxxxxxxxxxxxxxx` con tu API key real

Cuando alguien se suscriba al newsletter, recibirás un email en `soynixonlopez@gmail.com` con el correo del suscriptor.

## 🌐 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Las configuraciones están listas para deployment automático
3. Configura las variables de entorno:
   - Ve a Settings > Environment Variables
   - Agrega `RESEND_API_KEY` con tu API key de Resend

### Otros Proveedores
- Netlify: Compatible con build commands estándar
- Railway: Soporte completo para Next.js
- AWS Amplify: Configuración automática

## 📈 SEO y Performance

- Metadata optimizada en `src/app/layout.tsx`
- Sitemap automático en `src/app/sitemap.ts`
- Manifest para PWA en `src/app/manifest.ts`
- Robots.txt configurado
- Imágenes optimizadas con Next.js Image

## 📱 Redes Sociales

- **Email**: soynixonlopez@gmail.com
- **Instagram**: @soynixonlopez
- **TikTok**: @soynixonlopez
- **LinkedIn**: in/nixonlopez

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Nixon López - [@soynixonlopez](https://instagram.com/soynixonlopez) - soynixonlopez@gmail.com

Link del Proyecto: [https://github.com/nixonlopez/portfolio](https://github.com/nixonlopez/portfolio)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
