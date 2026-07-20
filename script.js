// ============================================
// INTERACTIVIDAD Y DINAMISMO
// ============================================

// Año del copyright siempre al día
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Menú móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function setMenu(abierto) {
    hamburger?.classList.toggle('active', abierto);
    navMenu?.classList.toggle('active', abierto);
    hamburger?.setAttribute('aria-expanded', String(abierto));
    hamburger?.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
}

hamburger?.addEventListener('click', () => {
    setMenu(!hamburger.classList.contains('active'));
});

// Cerrar el menú con Escape y devolver el foco al botón
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger?.classList.contains('active')) {
        setMenu(false);
        hamburger.focus();
    }
});

// Smooth scroll para enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Cerrar el menú móvil tras navegar
        setMenu(false);
    });
});

// Efecto de aparecer elementos cuando se scrollea
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observer a cards
document.querySelectorAll('.about-card, .clase-card, .horario-slot, .testimonio-card').forEach(card => {
    observer.observe(card);
});

// Selección de horario: un único listener con feedback visual.
// Al elegir una franja se lleva al usuario a la sección de reserva.
document.querySelectorAll('.horario-slot').forEach(slot => {
    slot.style.cursor = 'pointer';

    // Son <div>, así que hay que darles semántica de botón a mano
    slot.setAttribute('role', 'button');
    slot.setAttribute('tabindex', '0');
    slot.setAttribute('aria-pressed', 'false');
    const hora = slot.querySelector('.horario-time')?.textContent ?? '';
    const clase = slot.querySelector('.horario-clase')?.textContent ?? '';
    slot.setAttribute('aria-label', `Elegir ${clase} a las ${hora}`);

    // Enter y Espacio deben activarlo igual que el ratón
    slot.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    slot.addEventListener('click', function() {
        // Marcar solo la franja elegida
        document.querySelectorAll('.horario-slot.seleccionado').forEach(s => {
            s.classList.remove('seleccionado');
            s.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('seleccionado');
        this.setAttribute('aria-pressed', 'true');

        this.style.transform = 'scale(1.1)';
        setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);

        // Efecto ripple
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 200, 30, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;
        slot.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        showNotification(`Has elegido ${clase} a las ${hora}. Confirma abajo para reservar. ⚡`);
        document.querySelector('#reserva')?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animación de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        from {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Hover effect en cards
document.querySelectorAll('.about-card, .clase-card, .testimonio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Navbar compacta al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('scrolled', scrollTop > 60);
}, { passive: true });

// Botones CTA con feedback
document.querySelectorAll('.cta-button, .cta-button-large').forEach(btn => {
    btn.addEventListener('click', function() {
        // Feedback visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
        
        // Mostrar alerta personalizada
        showNotification('¡Gracias por tu interés! En breve nos pondremos en contacto. 💪');
    });
});

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    // Para que los lectores de pantalla la anuncien
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ffc81e, #f2a20c);
        color: #0b0b0c;
        padding: 1rem 1.6rem;
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 12px 34px rgba(0, 0, 0, 0.5);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: bold;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Agregar animación de entrada a la derecha
const slideStyles = document.createElement('style');
slideStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(slideStyles);

// Parallax suave del logo del hero
const heroLogo = document.querySelector('.hero-logo');
window.addEventListener('scroll', () => {
    if (!heroLogo) return;
    const scrollY = window.pageYOffset;
    if (scrollY < window.innerHeight) {
        heroLogo.style.opacity = String(Math.max(0, 1 - scrollY / 600));
    }
}, { passive: true });

// Contador de horarios disponibles (leído del DOM, no a mano:
// así no se desincroniza al añadir o quitar franjas en el HTML)
const turnos = document.querySelectorAll('.turno-section');
const mañanaHorarios = turnos[0]?.querySelectorAll('.horario-slot').length ?? 0;
const tardeHorarios = turnos[1]?.querySelectorAll('.horario-slot').length ?? 0;
const totalHorarios = mañanaHorarios + tardeHorarios;

console.log(`🏋️ The Warriors Box - Sistema de Horarios Activo`);
console.log(`📅 Horarios disponibles: ${totalHorarios}`);
console.log(`🌅 Turno mañana: ${mañanaHorarios} clases (5 AM - 9 AM)`);
console.log(`🌅 Turno tarde: ${tardeHorarios} clases (4 PM - 8 PM)`);

// NOTA: aquí había una clase SistemaReservas que guardaba "reservas" en el
// localStorage del propio visitante. El gimnasio nunca las recibía, así que
// se ha eliminado para no dar por confirmada una reserva que no existe.
// Pendiente: conectar la reserva a un canal real (WhatsApp, email o backend).

// Contador de visitas (simulado)
let visitasHoy = localStorage.getItem('visitasWarriors') || 0;
visitasHoy = parseInt(visitasHoy) + 1;
localStorage.setItem('visitasWarriors', visitasHoy);

console.log(`👥 Visitas hoy: ${visitasHoy}`);

// Modo oscuro automático (ya está implementado, pero aquí podemos agregar toggles si es necesario)
console.log('🌙 Modo oscuro activado');

// Detección de dispositivo móvil
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    console.log('📱 Versión móvil detectada');
} else {
    console.log('🖥️ Versión escritorio detectada');
}

// Agregar keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // No secuestrar teclas mientras se escribe en un campo, ni con modificadores
    const el = document.activeElement;
    const escribiendo = el && (
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.isContentEditable
    );
    if (escribiendo || e.ctrlKey || e.altKey || e.metaKey) return;

    // Presionar 'H' para ir al home
    if (e.key.toLowerCase() === 'h') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Presionar 'C' para ir a clases
    if (e.key.toLowerCase() === 'c') {
        document.querySelector('#clases')?.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Presionar 'S' para ir a horarios
    if (e.key.toLowerCase() === 's') {
        document.querySelector('#horarios')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Mensaje de bienvenida en consola
console.log(`
╔══════════════════════════════════════════════╗
║    💪 BIENVENIDO A THE WARRIORS BOX 💪     ║
║  "Donde los campeones se forjan"            ║
╚══════════════════════════════════════════════╝

⚡ Atajos de teclado:
   - Presiona 'H' para ir al inicio
   - Presiona 'C' para ver clases
   - Presiona 'S' para ver horarios

¡Reserva tu clase de prueba GRATIS hoy! 🔥
`);

// Performance monitoring
window.addEventListener('load', () => {
    // performance.timing está obsoleto; se usa la Navigation Timing API v2
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
        console.log(`⚡ Página cargada en ${Math.round(nav.duration)}ms`);
    }
});
