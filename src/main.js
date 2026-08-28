import './style.css'
import heroIllustration from './assets/hero-license.png'

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="container">
    <p class="logo">PUNTOS PAMPLONA</p>
    <p class="tagline">Recuperación de puntos y del permiso</p>
  </div>
</header>

<main>
  <section class="hero container">
    <div class="hero-content">
      <h1>Recupera tus puntos.<br>Recupera tu permiso.</h1>
      <p class="hero-subtitle">Cursos de recuperación de puntos y del permiso de conducir en Pamplona y comarca.</p>
      <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
    </div>
    <div class="hero-illustration">
      <img src="${heroIllustration}" alt="" width="768" height="512" />
    </div>
  </section>

  <section class="quick-cards container" aria-label="Información rápida">
    <div class="info-card">
      <button class="info-card-trigger" type="button" aria-expanded="false" aria-controls="when-content">
        <span class="info-card-toggle" aria-hidden="true">+</span>
        <h2>¿CUÁNDO?</h2>
      </button>
      <div class="info-card-content" id="when-content" aria-hidden="true">
        <p>Consulta las próximas fechas disponibles.</p>
      </div>
    </div>
    <div class="info-card">
      <button class="info-card-trigger" type="button" aria-expanded="false" aria-controls="how-much-content">
        <span class="info-card-toggle" aria-hidden="true">+</span>
        <h2>¿CUÁNTO?</h2>
      </button>
      <div class="info-card-content course-price-content" id="how-much-content" aria-hidden="true">
        <div>
          <p class="course-price-label">PARCIAL 10H</p>
          <p class="course-price">215 €</p>
        </div>
        <div>
          <p class="course-price-label">TOTAL 20H</p>
          <p class="course-price">405 €</p>
        </div>
      </div>
    </div>
    <div class="info-card">
      <button class="info-card-trigger" type="button" aria-expanded="false" aria-controls="where-content">
        <span class="info-card-toggle" aria-hidden="true">+</span>
        <h2>¿DÓNDE?</h2>
      </button>
      <div class="info-card-content location-content" id="where-content" aria-hidden="true">
        <p class="location-name">Autoescuela Barañain</p>
        <address>
          C/ Pedro Bidagor, 7<br>
          31010 Barañáin
        </address>
      </div>
    </div>
  </section>

  <section class="contact-block container" aria-labelledby="contact-title">
    <h2 id="contact-title">DUDAS Y RESERVA DE PLAZAS</h2>
    <a class="cta-button contact-link" href="https://wa.me/34649230920" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp en el 649 230 920">
      <svg class="contact-link-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3.5A12.4 12.4 0 0 0 5.7 22.8L4 29l6.4-1.7A12.4 12.4 0 1 0 16 3.5Zm0 22.6c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.8 1 1-3.7-.2-.4a10.2 10.2 0 1 1 8.7 4.8Zm5.7-7.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.4 8.4 0 0 1-4.2-3.7c-.3-.6.3-.6.8-1.8.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.4 1.4 3.6a11.9 11.9 0 0 0 5 4.4c1.9.8 2.6.9 3.6.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.3Z" />
      </svg>
      <span>649 230 920</span>
    </a>
  </section>

  <section class="course-information container" aria-labelledby="course-information-title">
    <h2 id="course-information-title">INFORMACIÓN SOBRE LOS CURSOS</h2>
    <nav aria-label="Información oficial sobre los cursos">
      <ul class="course-information-links">
        <li><a href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Recuperación parcial de puntos <span aria-hidden="true">→</span></a></li>
        <li><a href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Recuperación del permiso <span aria-hidden="true">→</span></a></li>
        <li><a href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Retirada judicial del permiso <span aria-hidden="true">→</span></a></li>
        <li><a href="https://www.boe.es/eli/es/o/2024/09/02/int914/con" target="_blank" rel="noopener noreferrer">Duración y contenido de los cursos <span aria-hidden="true">→</span></a></li>
        <li><a href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Exámenes y pruebas <span aria-hidden="true">→</span></a></li>
        <li><a href="https://www.boe.es/eli/es/o/2024/09/02/int914/con" target="_blank" rel="noopener noreferrer">Normativa oficial <span aria-hidden="true">→</span></a></li>
      </ul>
    </nav>
  </section>
</main>
`

document.querySelectorAll('.info-card-trigger').forEach((trigger) => {
  const card = trigger.closest('.info-card')
  const content = document.getElementById(trigger.getAttribute('aria-controls'))
  const toggle = trigger.querySelector('.info-card-toggle')

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

    trigger.setAttribute('aria-expanded', String(!isExpanded))
    content.setAttribute('aria-hidden', String(isExpanded))
    card.classList.toggle('is-open', !isExpanded)
    toggle.textContent = isExpanded ? '+' : '−'
  })
})
