# ✅ Checklist — The Warriors Box

Estado del proyecto y puntos pendientes.
Última revisión: **20 julio 2026**

Leyenda: `[ ]` pendiente · `[x]` hecho · 🔴 bloqueante para publicar · 🟡 importante · 🟢 mejora

---

## 🔴 Bloqueantes antes de publicar

Datos falsos o de relleno que hoy están visibles para cualquier visitante.

- [ ] **Teléfono de contacto** — ahora pone `+34 XXX XXX XXX` · [index.html:253](index.html#L253) y [config.json:9](config.json#L9)
- [ ] **Dirección real** — ahora pone `Calle Crossfit 123` (inventada) · [index.html:255](index.html#L255) y [config.json:11](config.json#L11)
- [ ] **Email real** — verificar si `info@thewarriorsbox.com` existe y se lee
- [ ] **Enlaces de redes sociales** — los 4 son `href="#"`, no llevan a ningún sitio · [index.html:261-264](index.html#L261-L264)
- [ ] **Los botones CTA no envían nada a nadie.** "Únete hoy" y "Reserva tu clase gratis" muestran *"En breve nos pondremos en contacto"*, pero no se guarda ni se envía ningún dato: nadie recibe esa solicitud. Un cliente real se quedaría esperando una llamada que nunca llega. · [script.js:109-120](script.js#L109-L120)
- [ ] **Testimonios inventados.** Carlos M., María L. y Juan P. no son clientes reales · [index.html:212-226](index.html#L212-L226). Publicar reseñas ficticias como si fueran auténticas puede ser publicidad engañosa (en España, Ley de Competencia Desleal). Sustituir por testimonios reales con permiso, o marcarlos claramente como ejemplo.
- [ ] **Verificar "desde 2020"** — el footer y `config.json` afirman fundación en 2020 · [index.html:249](index.html#L249)
- [ ] **Año del copyright: dice 2024, estamos en 2026** · [index.html:269](index.html#L269)

---

## 🟡 Bugs y problemas de código

- [ ] **Doble listener en los horarios.** `.horario-slot` recibe dos listeners de click independientes ([script.js:52](script.js#L52) y [script.js:240](script.js#L240)). Un solo click dispara ripple + reserva + notificación a la vez. Unificar en uno.
- [ ] **Se "reserva" con cualquier click, sin pedir datos.** Al pulsar un horario se guarda una reserva en `localStorage` con el usuario literal `'Usuario'` · [script.js:248](script.js#L248). No sirve de nada: el gimnasio nunca ve esa reserva. Decidir → o formulario real, o quitar la falsa reserva.
- [ ] **`config.json` no lo usa nadie.** No hay ningún `fetch()` en el código; clases, horarios y testimonios están duplicados a mano en el HTML. Hay que elegir una de dos:
  - cargar el JSON y generar el HTML dinámicamente, **o**
  - borrar `config.json` para que no engañe.
- [ ] **Los colores de `config.json` ya no son los del sitio.** Dice `#0a0e27` (azul) y `#ff2d55` (rosa) · [config.json:109-117](config.json#L109-L117), pero el CSS real usa negro `#0b0b0c`, oro `#ffc81e` y rojo `#d61f2b` · [styles.css:6-19](styles.css#L6-L19). Está desactualizado.
- [ ] **Atajos de teclado sin protección.** `H`, `C` y `S` saltan de sección aunque estés escribiendo · [script.js:274-289](script.js#L274-L289). Hoy no molesta porque no hay inputs, pero en cuanto añadas el formulario de reserva, escribir "Sanchez" mandará al usuario dando saltos por la página. Ignorar el atajo si el foco está en un `input`/`textarea`.
- [ ] **Contador de horarios hardcodeado.** `mañanaHorarios = 4` y `tardeHorarios = 4` · [script.js:187-188](script.js#L187-L188): si cambias horarios en el HTML, este número miente.
- [ ] **Emoji inconsistente** — el turno de tarde usa 🌇 en el HTML pero 🌅 (amanecer) en [config.json:83](config.json#L83)
- [ ] `performance.timing` está obsoleto · [script.js:308](script.js#L308) → usar `performance.getEntriesByType('navigation')`

---

## 🟡 Accesibilidad

- [ ] **El menú móvil no funciona con teclado.** El hamburguesa es un `<div>` · [index.html:34](index.html#L34): no se puede enfocar con Tab ni activar con Enter. Debe ser `<button>` con `aria-expanded` y `aria-label`.
- [ ] Las notificaciones no las anuncia un lector de pantalla → añadir `role="status"` / `aria-live="polite"` · [script.js:123](script.js#L123)
- [ ] Verificar contraste del texto gris `--text-muted: #9ea3ad` sobre fondo negro (mínimo AA 4.5:1)
- [ ] Respetar `prefers-reduced-motion`: hay muchas animaciones infinitas (logo levitando, anillo giratorio, marquee) que pueden marear
- [ ] Añadir un enlace "saltar al contenido" al inicio

---

## 🟢 SEO y rendimiento

- [ ] Añadir Open Graph (`og:title`, `og:description`, `og:image`) para que al compartir en WhatsApp/Instagram salga el logo
- [ ] Añadir `<link rel="canonical">`
- [ ] Añadir datos estructurados Schema.org tipo `GymAndFitnessCenter` (ayuda mucho en Google Maps/local)
- [ ] Poner `width` y `height` en las `<img>` para evitar saltos de maquetación al cargar
- [ ] `loading="lazy"` en la imagen del footer
- [ ] Convertir el logo a **WebP** — el PNG actual pesa 654 KB y se carga 3 veces
- [ ] Añadir `apple-touch-icon` para móviles iOS
- [ ] Crear `robots.txt` y `sitemap.xml`

---

## 🟢 Contenido que falta

- [ ] **Sección de precios / tarifas** — es de lo primero que busca la gente y ahora mismo no está por ningún lado
- [ ] **Formulario de reserva real** (la sección `#reserva` es solo un botón)
- [ ] Sección de entrenadores (se dice que son certificados, pero no se muestra a nadie)
- [ ] Fotos reales del box y de las clases
- [ ] Mapa de ubicación
- [ ] Aviso legal, política de privacidad y cookies (obligatorio con formularios en la UE — RGPD)
- [ ] ¿Los horarios son iguales todos los días? Ahora no se indica qué días abre

---

## 🟢 Infraestructura

- [x] ~~El proyecto no está en Git~~ → conectado a [github.com/dfmh1026/The-Warriors-Box](https://github.com/dfmh1026/The-Warriors-Box) *(20 jul 2026)*
- [ ] Decidir dónde se publica (Netlify, Vercel, GitHub Pages…) — al estar ya en GitHub, **GitHub Pages** es lo más directo: Settings → Pages → rama `main`
- [ ] Configurar identidad de Git global si quieres usarla en otros proyectos (ahora solo está puesta en este repo)
- [ ] Comprar el dominio
- [ ] Revisar si los 3 archivos de documentación (`README.md`, `INSTALL.md`, `FEATURES.html`) se solapan

---

## ✅ Hecho

- [x] Diseño y maquetación completa (hero, clases, horarios, testimonios, CTA, footer)
- [x] Paleta de marca extraída del logo (negro / oro / rojo) · [styles.css:6-19](styles.css#L6-L19)
- [x] Diseño responsive con menú móvil
- [x] Animaciones de scroll con `IntersectionObserver`
- [x] Navbar que se compacta al hacer scroll
- [x] Smooth scroll en la navegación
- [x] **Logo sin fondo blanco** — PNG con transparencia real, recortado a su silueta, letras interiores conservadas y sin halo *(20 jul 2026)*
- [x] Favicon, navbar, hero y footer apuntando al logo transparente

---

## 📌 Sugerencia de orden

1. Datos de contacto reales + testimonios (🔴 — es lo que hace el sitio publicable)
2. Que los botones hagan algo de verdad (formulario o WhatsApp)
3. `git init`
4. Precios
5. Accesibilidad y SEO
6. Limpieza de `config.json` y los bugs de JS
