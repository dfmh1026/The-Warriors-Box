# ✅ Checklist — The Warriors Box

Estado del proyecto y puntos pendientes.
Última revisión: **20 julio 2026**

Leyenda: `[ ]` pendiente · `[x]` hecho · 🔴 bloqueante para publicar · 🟡 importante · 🟢 mejora

---

## 🔴 Bloqueantes antes de publicar

Datos falsos o de relleno que hoy están visibles para cualquier visitante.

- [x] ~~Teléfono de contacto~~ → **+57 312 797 4802**, pulsable con `tel:` *(20 jul 2026)*
- [x] ~~Dirección real~~ → Cra 1 #61A - 30 *(20 jul 2026)*
- [x] ~~Enlaces de redes sociales rotos~~ → Facebook, TikTok y YouTube eliminados (no existen); solo queda Instagram con su logo real, enlazando a [@thewarriorsboxx](https://www.instagram.com/thewarriorsboxx) *(20 jul 2026)*
- [x] ~~Los botones CTA no envían nada a nadie~~ → ahora abren WhatsApp al **+57 312 797 4802** con el mensaje ya escrito. Si el visitante ha elegido una franja horaria, el mensaje la incluye *(20 jul 2026)*
- [ ] 🔴 **Testimonios inventados.** Carlos M., María L. y Juan P. no son clientes reales · [index.html:212-226](index.html#L212-L226). Publicar reseñas ficticias como auténticas es publicidad engañosa (en Colombia, Estatuto del Consumidor - Ley 1480 de 2011, arts. 29-30). **Pendiente: los vas a cambiar más adelante — conviene hacerlo antes de publicar el sitio.**
- [ ] **Verificar "desde 2020"** — el footer y `config.json` afirman fundación en 2020 · [index.html:249](index.html#L249)
- [ ] ¿Hace falta un email de contacto? Se quitó el genérico `info@thewarriorsbox.com` porque no existía
- [x] ~~Año del copyright desactualizado~~ → ahora se calcula solo con JS, no volverá a quedarse viejo *(20 jul 2026)*

---

## 🟡 Bugs y problemas de código

- [x] ~~Doble listener en los horarios~~ → unificado en uno solo *(20 jul 2026)*
- [x] ~~Se "reserva" con cualquier click~~ → eliminada la clase `SistemaReservas` que guardaba reservas falsas en `localStorage`. Ahora al pulsar una franja se marca como elegida y lleva a la sección de reserva, sin afirmar que está confirmada *(20 jul 2026)*
- [x] Datos de contacto y redes de `config.json` puestos al día (teléfono real, WhatsApp, solo Instagram) *(20 jul 2026)*
- [ ] **`config.json` no lo usa nadie.** No hay ningún `fetch()` en el código; clases, horarios y testimonios están duplicados a mano en el HTML. Hay que elegir una de dos:
  - cargar el JSON y generar el HTML dinámicamente, **o**
  - borrar `config.json` para que no engañe.
- [ ] **Los colores de `config.json` ya no son los del sitio.** Dice `#0a0e27` (azul) y `#ff2d55` (rosa) · [config.json:109-117](config.json#L109-L117), pero el CSS real usa negro `#0b0b0c`, oro `#ffc81e` y rojo `#d61f2b` · [styles.css:6-19](styles.css#L6-L19). Está desactualizado.
- [x] ~~Atajos de teclado sin protección~~ → ahora se ignoran si escribes en un campo o usas Ctrl/Alt/Cmd *(20 jul 2026)*
- [x] ~~Contador de horarios hardcodeado~~ → se cuenta desde el DOM, ya no se desincroniza *(20 jul 2026)*
- [x] ~~`performance.timing` obsoleto~~ → migrado a Navigation Timing API v2 *(20 jul 2026)*
- [ ] **Emoji inconsistente** — el turno de tarde usa 🌇 en el HTML pero 🌅 (amanecer) en [config.json:83](config.json#L83)

---

## 🟡 Accesibilidad

- [x] ~~El menú móvil no funciona con teclado~~ → ahora es `<button>` con `aria-expanded`, `aria-controls`, cierre con Escape y foco visible *(20 jul 2026)*
- [x] ~~Las notificaciones no las anuncia un lector de pantalla~~ → `role="status"` + `aria-live="polite"` *(20 jul 2026)*
- [x] ~~Respetar `prefers-reduced-motion`~~ → **ya estaba implementado** en [styles.css:1162](styles.css#L1162). Error mío al revisar. *(20 jul 2026)*
- [x] Franjas horarias accesibles por teclado (`role="button"`, `tabindex`, Enter/Espacio, `aria-pressed`) *(20 jul 2026)*
- [x] Menú cerrado ya no es alcanzable con Tab en móvil *(20 jul 2026)*
- [ ] Verificar contraste del texto gris `--text-muted: #9ea3ad` sobre fondo negro (mínimo AA 4.5:1)
- [ ] Añadir un enlace "saltar al contenido" al inicio

---

## 🟢 SEO y rendimiento

- [x] ~~Open Graph~~ → añadidos `og:title`, `og:description`, `og:image`, `twitter:card` y `theme-color` *(20 jul 2026)*
- [x] ~~`width`/`height` en las `<img>`~~ → añadidos (640×643) + `fetchpriority="high"` en el hero *(20 jul 2026)*
- [x] ~~`loading="lazy"` en la imagen del footer~~ *(20 jul 2026)*
- [x] ~~`apple-touch-icon`~~ *(20 jul 2026)*
- [ ] **Requiere dominio primero:** `og:url` + `<link rel="canonical">` (deliberadamente no puestos: apuntar a una URL equivocada es peor que no ponerlos)
- [ ] **Requiere datos reales primero:** Schema.org `GymAndFitnessCenter` — con la dirección y teléfono falsos actuales haría más mal que bien en Google
- [ ] Convertir el logo a **WebP** — el PNG actual pesa 654 KB y se carga 3 veces
- [ ] Crear `robots.txt` y `sitemap.xml`

---

## 🟢 Contenido que falta

- [ ] **Sección de precios / tarifas** — es de lo primero que busca la gente y ahora mismo no está por ningún lado
- [x] ~~Formulario de reserva real~~ → resuelto vía **WhatsApp**, sin backend. Si algún día quieres registro propio de reservas, haría falta servidor *(20 jul 2026)*
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
