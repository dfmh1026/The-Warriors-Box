# 🚀 Guía de Instalación y Uso - The Warriors Box

## 📋 Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (no es estrictamente necesaria para ver la página)
- Editor de texto (VS Code recomendado) - solo si deseas personalizar

## 📂 Estructura de Archivos

```
The warriors Box/
├── index.html                    # ⭐ Página principal (ABRE ESTO)
├── styles.css                    # Estilos modernos
├── script.js                     # Interactividad
├── config.json                   # Configuración del gimnasio
├── README.md                     # Documentación completa
├── INSTALL.md                    # Este archivo
└── assets/
    ├── color-palette.svg         # Paleta visual (imagen SVG)
    └── color-palette.html        # Referencia de colores (página HTML)
```

## 🎯 Primeros Pasos

### Opción 1: Abrir Directamente (Más Simple)

1. Navega a la carpeta del proyecto
2. Haz click derecho en `index.html`
3. Selecciona "Abrir con" → tu navegador preferido
4. ¡Disfruta! 🎉

### Opción 2: Servidor Local (Recomendado)

#### Con Python (Más común)

**Python 3:**
```bash
cd "The warriors Box"
python -m http.server 8000
```

Luego abre: `http://localhost:8000`

**Python 2:**
```bash
cd "The warriors Box"
python -m SimpleHTTPServer 8000
```

#### Con Node.js

```bash
# Instalar http-server (una sola vez)
npm install -g http-server

# Ejecutar
cd "The warriors Box"
http-server

# Abre la URL mostrada en consola
```

#### Con VS Code Live Server

1. Instala la extensión "Live Server" (Ritwick Dey)
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎨 Personalización

### 1. Cambiar Nombre del Gimnasio

**Archivo:** `index.html`

Busca y reemplaza:
```html
<div class="logo">⚔️ THE WARRIORS BOX</div>
```

**Archivo:** `config.json`

```json
"nombre": "TU NOMBRE DEL GIMNASIO"
```

### 2. Cambiar Colores

**Archivo:** `styles.css` (Líneas 1-12)

```css
:root {
    --primary-dark: #0a0e27;      /* Tu color oscuro */
    --primary-red: #ff2d55;       /* Tu color principal */
    --primary-orange: #ff6b35;    /* Tu color secundario */
    /* ... más colores */
}
```

### 3. Cambiar Horarios

**Archivo:** `index.html` (Busca "HORARIOS DE CLASES")

Edita los bloques `horario-slot`:

```html
<div class="horario-slot">
    <div class="horario-time">5:00 AM</div>
    <div class="horario-clase">CROSSFIT</div>
    <div class="horario-duracion">60 min</div>
</div>
```

También actualiza `config.json`:

```json
"horarios": {
    "mañana": {
        "clases": [
            { "hora": "05:00", "tipo": "CROSSFIT", "duracion_min": 60 },
            ...
        ]
    }
}
```

### 4. Agregar Contacto Real

**Archivo:** `index.html` (Footer)

Busca:
```html
<p>📞 +34 XXX XXX XXX</p>
<p>📧 info@thewarriorsbox.com</p>
<p>📍 Calle Crossfit 123</p>
```

Reemplaza con tu información.

### 5. Cambiar Testimonios

**Archivo:** `index.html` (Sección TESTIMONIOS)

O mejor en `config.json`:

```json
"testimonios": [
    {
        "nombre": "Tu Cliente",
        "calificacion": 5,
        "texto": "Su testimonio aquí"
    }
]
```

## 🔧 Funcionalidades

### Sistema de Reservas

Al hacer click en un horario, se guarda en `LocalStorage`. 

**Ver reservas en la consola:**
```javascript
// Abre DevTools (F12) → Console
let reservas = JSON.parse(localStorage.getItem('reservasWarriors'));
console.log(reservas);
```

### Atajos de Teclado

- **H** - Ir al inicio
- **C** - Ir a clases
- **S** - Ir a horarios

Pruébalo presionando estas teclas.

### Notificaciones

Las notificaciones aparecen en la esquina superior derecha.

Para crear una notificación personalizada:
```javascript
showNotification('Tu mensaje aquí');
```

## 📱 Visualizar en Móvil

### En tu teléfono

1. Si usas servidor local: obtén tu IP
   ```bash
   # Windows (PowerShell)
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. En tu móvil, accede a: `http://TU_IP:8000`

### Con DevTools

1. Abre la página
2. Presiona **F12** (o Ctrl+Shift+I)
3. Presiona **Ctrl+Shift+M** para modo móvil
4. Selecciona dispositivo

## 🎬 Animaciones Personalizadas

En `styles.css` puedes modificar:

```css
/* Tiempo de animación */
@keyframes slideInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Duración */
animation: slideInUp 1s ease-out 0.6s both;
```

## 🚀 Deploying (Publicar Online)

### Opción 1: Netlify (GRATIS)

1. Ve a https://app.netlify.com
2. Haz click en "Drag & Drop"
3. Arrastra la carpeta del proyecto
4. ¡Obtén URL gratis! 🎉

### Opción 2: Vercel (GRATIS)

```bash
npm i -g vercel
cd "The warriors Box"
vercel
```

### Opción 3: GitHub Pages (GRATIS)

1. Crea repositorio en GitHub
2. Sube los archivos
3. Activa GitHub Pages en settings
4. ¡Tu sitio está vivo!

### Opción 4: Hosting Tradicional

1. Contrata hosting (Bluehost, SiteGround, etc.)
2. Usa FTP para subir los archivos
3. Apunta tu dominio

## 🎯 SEO Básico

Para mejorar posicionamiento, edita `index.html`:

```html
<head>
    <!-- Cambiar descripción -->
    <meta name="description" content="Descripción del gimnasio para Google">
    
    <!-- Agregar más -->
    <meta name="keywords" content="crossfit, functional, gym, entrenamiento">
    <meta name="author" content="The Warriors Box">
    <meta name="robots" content="index, follow">
</head>
```

## 📊 Análisis

Agrega Google Analytics:

```html
<!-- Dentro de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
</script>
```

## 🐛 Troubleshooting

### La página se ve rara

1. Limpia cache: Ctrl+Shift+Delete (o Cmd+Shift+Delete en Mac)
2. Recarga: Ctrl+R o F5
3. Hard refresh: Ctrl+F5

### Los estilos no cargan

Asegúrate que `styles.css` está en la misma carpeta que `index.html`.

### JavaScript no funciona

Abre la consola (F12) para ver errores. Asegúrate que `script.js` existe.

### Puertos ocupados

Si el puerto 8000 está ocupado, intenta otro:
```bash
python -m http.server 3000
```

## 💡 Tips Profesionales

1. **Backup:** Copia toda la carpeta antes de hacer cambios
2. **Testing:** Prueba en móvil y desktop
3. **Performance:** Comprime imágenes antes de agregar
4. **Seguridad:** No guardes datos sensibles en LocalStorage
5. **Analytics:** Rastrear clicks en botones CTA

## 📞 Ayuda

Si encuentras problemas:

1. Verifica que todos los archivos están en su lugar
2. Abre la consola (F12) para ver errores
3. Intenta con un navegador diferente
4. Reinicia el servidor

## 🎓 Cómo Aprender Más

- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML

## ✅ Checklist de Implementación

- [ ] Cambié el nombre del gimnasio
- [ ] Personalicé los colores
- [ ] Actualicé los horarios
- [ ] Agregué información de contacto
- [ ] Probé en móvil
- [ ] Probé en desktop
- [ ] Desplegué en servidor
- [ ] Compartí en redes sociales

## 🎉 ¡Listo!

Tu página está lista para revolucionar el mundo del crossfit.

**Recuerda: Promociona en redes sociales y obtén tráfico. ¡Éxito! 💪**

---

*Cualquier duda, recuerda que puedes abrir DevTools (F12) y revisar la consola para mensajes de depuración.*
