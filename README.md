# 💪 THE WARRIORS BOX - Página Web

Una página web moderna, llamativa y viral para el gimnasio de crossfit y functional **The Warriors Box**.

## 📁 Estructura del Proyecto

```
The warriors Box/
├── index.html              # Página principal
├── styles.css              # Estilos CSS modernos
├── script.js               # JavaScript interactivo
└── assets/
    ├── color-palette.svg   # Paleta de colores visual
    └── color-palette.html  # Referencia de colores en HTML
```

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Negro Oscuro | #0a0e27 | Fondo principal |
| Rojo Energético | #ff2d55 | Acentos, botones y CTA |
| Naranja Fuego | #ff6b35 | Efectos hover y animaciones |
| Blanco Puro | #ffffff | Texto principal |
| Gris Oscuro | #1a1f3a | Elementos secundarios |
| Oro Premium | #ffd700 | Detalles y títulos especiales |

## ⏰ Horarios de Clases

### 🌅 Turno Mañana (5 AM - 9 AM)
- **5:00 AM** - CROSSFIT (60 min)
- **6:00 AM** - FUNCTIONAL (60 min)
- **7:00 AM** - CROSSFIT (60 min)
- **8:00 AM** - FUNCTIONAL (60 min)

### 🌅 Turno Tarde (4 PM - 8 PM)
- **4:00 PM** - FUNCTIONAL (60 min)
- **5:00 PM** - CROSSFIT (60 min)
- **6:00 PM** - FUNCTIONAL (60 min)
- **7:00 PM** - CROSSFIT (60 min)

## ✨ Características

### 🎯 Frontend Moderno
- ✅ Hero section animado con gradientes
- ✅ Secciones de clases, horarios y testimonios
- ✅ Animaciones suaves y efectos hover
- ✅ Sistema de horarios interactivo
- ✅ Botones CTA atractivos con efectos
- ✅ Navbar fijo con navegación smooth
- ✅ Footer informativo

### 🎮 Interactividad (JavaScript)
- ✅ Efectos de ripple en horarios
- ✅ Sistema de reservas (LocalStorage)
- ✅ Notificaciones personalizadas
- ✅ Parallax en hero section
- ✅ Observer para animaciones on-scroll
- ✅ Atajos de teclado (H, C, S)
- ✅ Animaciones de entrada y salida

### 📱 Responsive Design
- ✅ Diseño mobile-first
- ✅ Navegación hamburguesa en móvil
- ✅ Grillas adaptables
- ✅ Textos escalables (clamp)
- ✅ Optimizado para todos los dispositivos

## 🚀 Cómo Usar

### 1. Abrir la página
Simplemente abre el archivo `index.html` en tu navegador.

```bash
# En Windows
start index.html

# En Mac
open index.html

# En Linux
xdg-open index.html
```

### 2. Usar con servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js + http-server
npx http-server

# Con VS Code Live Server
# Click derecho en index.html → Open with Live Server
```

### 3. Atajos de Teclado
- **H** - Ir al inicio
- **C** - Ver clases
- **S** - Ver horarios

## 🎨 Secciones de la Página

### 🏠 Hero Section
- Título principal animado
- Subtítulo y descripción
- Botón CTA llamativo
- Partículas animadas de fondo
- Gradientes dinámicos

### 📚 About Section
4 Cards con información:
- Entrenamientos Intensos
- Comunidad Fuerte
- Entrenadores Expertos
- Horarios Flexibles

### 🏋️ Sección de Clases
- Card CROSSFIT con beneficios
- Card FUNCTIONAL con beneficios
- Diseño con gradientes y bordes
- Efectos hover dinámicos

### 🕐 Sección de Horarios
- Turno mañana (5 AM - 9 AM)
- Turno tarde (4 PM - 8 PM)
- Horarios interactivos
- Sistema de reserva click-based

### ⭐ Testimonios
3 Testimonios de clientes
- Calificación de estrellas
- Texto del testimonio
- Nombre del cliente

### 🎯 CTA Section
- Llamada a la acción
- Descripción del oferta
- Botón promocional

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, gradientes y animaciones
- **JavaScript Vanilla** - Interactividad sin dependencias
- **SVG** - Gráficos vectoriales
- **LocalStorage** - Almacenamiento de reservas

## 🎬 Animaciones

### Principales
- `slideInDown` - Entrada superior
- `slideInUp` - Entrada inferior
- `float` - Flotación suave
- `bounce` - Rebote
- `rippleEffect` - Efecto onda
- `pulse` - Pulsación

### CSS Transforms
- Scale on hover
- Translate en scroll
- Rotate en efectos especiales

## 📊 Sistema de Reservas

El sitio incluye un sistema de reservas basado en **LocalStorage**:

```javascript
// Crear reserva
sistemaReservas.reservarClase('5:00 AM', 'CROSSFIT', 'Usuario');

// Obtener reservas
const miasReservas = sistemaReservas.obtenerReservas();
```

Las reservas se guardan localmente en el navegador del usuario.

## 🔧 Personalizaciones

Para adaptar la página a tu gimnasio:

### Cambiar Logo/Nombre
En `index.html`, línea del navbar:
```html
<div class="logo">⚔️ TU NOMBRE AQUÍ</div>
```

### Cambiar Colores
En `styles.css`, variables CSS:
```css
:root {
    --primary-dark: #0a0e27;
    --primary-red: #ff2d55;
    /* ... más colores */
}
```

### Cambiar Horarios
En `index.html`, edita la sección de horarios:
```html
<div class="horario-slot">
    <div class="horario-time">5:00 AM</div>
    <div class="horario-clase">CROSSFIT</div>
    <div class="horario-duracion">60 min</div>
</div>
```

### Agregar Contacto
En `styles.css` y `index.html`, encontrarás la sección footer donde puedes añadir:
- Teléfono
- Email
- Dirección
- Redes sociales

## 📈 Optimizaciones

- ✅ Performance Monitoring en consola
- ✅ Lazy Loading de imágenes (cuando se agreguen)
- ✅ CSS Minificado para producción
- ✅ JavaScript optimizado sin dependencias externas
- ✅ Animaciones GPU-aceleradas

## 🌐 Compatibilidad

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Navegadores móviles modernos

## 💡 Consejos para Viral

1. **Comparte en redes sociales**
   - Instagram Stories con el link
   - TikTok mostrando la página
   - LinkedIn para B2B

2. **SEO Básico**
   - Añade meta description
   - Crea sitemap.xml
   - robots.txt

3. **Análisis**
   - Integra Google Analytics
   - Rastrear conversiones de CTA
   - Monitor de usuarios

4. **Contenido**
   - Agrega testimonios reales
   - Videos de entrenamientos
   - Galería de transformaciones

## 🚀 Deploy

### Netlify
```bash
# Drag & Drop index.html, styles.css, script.js, assets/
# O conecta tu repositorio Git
```

### Vercel
```bash
# npm i -g vercel
# vercel
```

### GitHub Pages
```bash
# Sube a GitHub Pages y obtén URL gratis
```

## 📝 Licencia

Esta página es de uso libre. Siéntete libre de usarla y modificarla.

## 🤝 Soporte

Para cualquier pregunta o sugerencia, contacta al desarrollador.

---

**Hecho con ❤️ para The Warriors Box**

*"Donde los campeones se forjan" 💪*
