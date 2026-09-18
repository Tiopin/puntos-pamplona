import './style.css'
import heroIllustration from './assets/hero-license.png'

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="container">
    <div class="site-header__content">
      <p class="site-header__badge">CENTRO OFICIAL DGT · 310014</p>
      <h1>Recuperación de Puntos en <span>Pamplona y comarca</span></h1>
      <p>Cursos para recuperar tus puntos o tu permiso de conducir</p>
    </div>
    <a class="site-header__phone" href="tel:649230920">649 230 920</a>
  </div>
</header>

<main>
  <section class="hero container">
    <div class="hero-content">
      <h1>Recupera tus puntos.<br>Recupera tu permiso.</h1>
      <p class="hero-subtitle">Cursos para recuperar puntos o el permiso de conducir en Pamplona y comarca.</p>
      <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
    </div>
    <div class="hero-illustration">
      <img src="${heroIllustration}" alt="" width="768" height="512" />
    </div>
  </section>

  <section class="quick-cards container" aria-label="Información rápida">
    <div class="info-card">
      <span class="info-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M6 2v4M18 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        </svg>
      </span>
      <h2>¿CUÁNDO?</h2>
      <div class="info-card-content">
        <p class="weekly-courses">CURSOS SEMANALES</p>
      </div>
    </div>
    <div class="info-card">
      <span class="info-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle cx="8" cy="8" r="5" />
          <path d="M16 7a5 5 0 1 1-4.9 6M5 8h6M8 5v6M13 16h6M16 13v6" />
        </svg>
      </span>
      <h2>¿CUÁNTO?</h2>
      <div class="info-card-content course-price-content">
        <p>PARCIAL · 10 H · <span class="course-price">215 €</span></p>
        <p>TOTAL · 20 H · <span class="course-price">405 €</span></p>
      </div>
    </div>
    <div class="info-card">
      <span class="info-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </span>
      <h2>¿DÓNDE?</h2>
      <div class="info-card-content location-content">
        <p class="location-name">C/ Pedro Bidagor, 7</p>
        <address>
          31010 Barañáin
        </address>
      </div>
    </div>
  </section>

  <section class="contact-block container" aria-labelledby="contact-title">
    <h2 id="contact-title">DUDAS Y RESERVA</h2>
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
        <li class="course-information-item">
          <button class="course-information-trigger" type="button" aria-expanded="false" aria-controls="partial-recovery-content">
            Recuperación parcial de puntos <span class="course-link-note">Hasta 4 puntos, sin examen</span><span class="course-information-toggle" aria-hidden="true">+</span>
          </button>
          <div class="course-information-content" id="partial-recovery-content" hidden>
            <p class="course-information-lead">¿Todavía conservas tu permiso de conducir pero has perdido puntos?</p>
            <p>Puedes realizar un curso de recuperación parcial para recuperar hasta 4 puntos, sin necesidad de realizar examen.</p>
            <dl class="course-information-details">
              <div><dt>Duración:</dt><dd>10 horas</dd></div>
              <div><dt>Precio:</dt><dd>215 €</dd></div>
              <div><dt>Examen:</dt><dd>No</dd></div>
            </dl>
            <div class="course-information-actions">
              <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
              <a class="cta-button course-information-whatsapp" href="https://wa.me/34649230920">CONSULTAR POR WHATSAPP</a>
            </div>
            <a class="course-information-official" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Más información oficial en la DGT <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li class="course-information-item">
          <button class="course-information-trigger" type="button" aria-expanded="false" aria-controls="permit-recovery-content">
            Recuperación del permiso <span class="course-link-note">Curso completo + examen</span><span class="course-information-toggle" aria-hidden="true">+</span>
          </button>
          <div class="course-information-content" id="permit-recovery-content" hidden>
            <p class="course-information-lead">¿Has perdido todos los puntos y ya no tienes vigente tu permiso de conducir?</p>
            <p>Para volver a conducir deberás realizar el curso de recuperación del permiso y superar posteriormente la prueba correspondiente.</p>
            <dl class="course-information-details">
              <div><dt>Duración:</dt><dd>20 horas</dd></div>
              <div><dt>Precio:</dt><dd>405 €</dd></div>
              <div><dt>Examen:</dt><dd>Sí</dd></div>
            </dl>
            <div class="course-information-actions">
              <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
              <a class="cta-button course-information-whatsapp" href="https://wa.me/34649230920">CONSULTAR POR WHATSAPP</a>
            </div>
            <a class="course-information-official" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Más información oficial en la DGT <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li class="course-information-item">
          <button class="course-information-trigger" type="button" aria-expanded="false" aria-controls="judicial-withdrawal-content">
            Retirada judicial del permiso <span class="course-link-note">SIN EXAMEN</span><span class="course-information-toggle" aria-hidden="true">+</span>
          </button>
          <div class="course-information-content" id="judicial-withdrawal-content" hidden>
            <p class="course-information-lead">¿Te han retirado el permiso de conducir por sentencia judicial?</p>
            <p>Debes realizar un curso de sensibilización y reeducación vial de 20 horas.</p>
            <p>Retirada de hasta 2 años: sin examen.</p>
            <p>Retirada superior a 2 años: con examen.</p>
            <dl class="course-information-details">
              <div><dt>Duración:</dt><dd>20 horas</dd></div>
            </dl>
            <div class="course-information-actions">
              <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
              <a class="cta-button course-information-whatsapp" href="https://wa.me/34649230920">CONSULTAR POR WHATSAPP</a>
            </div>
            <a class="course-information-official" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Más información oficial en la DGT <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li class="course-information-item">
          <button class="course-information-trigger" type="button" aria-expanded="false" aria-controls="exams-content">
            Exámenes y pruebas <span class="course-link-note">Gestiona el CENTRO</span><span class="course-information-toggle" aria-hidden="true">+</span>
          </button>
          <div class="course-information-content" id="exams-content" hidden>
            <p class="course-information-lead">No todos los cursos de recuperación requieren examen.</p>
            <dl class="course-information-details">
              <div><dt>Recuperación parcial de puntos:</dt><dd>sin examen.</dd></div>
              <div><dt>Recuperación del permiso:</dt><dd>con examen.</dd></div>
              <div><dt>Retirada judicial hasta 2 años:</dt><dd>sin examen.</dd></div>
              <div><dt>Retirada judicial superior a 2 años:</dt><dd>con examen.</dd></div>
            </dl>
            <p>Cuando sea necesario realizar examen, el centro te informará y gestionará los pasos correspondientes.</p>
            <div class="course-information-actions">
              <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
              <a class="cta-button course-information-whatsapp" href="https://wa.me/34649230920">CONSULTAR POR WHATSAPP</a>
            </div>
            <a class="course-information-official" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Más información oficial en la DGT <span aria-hidden="true">→</span></a>
          </div>
        </li>
        <li class="course-information-item">
          <button class="course-information-trigger" type="button" aria-expanded="false" aria-controls="official-regulations-content">
            Normativa oficial <span class="course-link-note">DGT · BOE</span><span class="course-information-toggle" aria-hidden="true">+</span>
          </button>
          <div class="course-information-content" id="official-regulations-content" hidden>
            <p class="course-information-lead">Los cursos de sensibilización y reeducación vial están regulados oficialmente y su contenido, duración y requisitos se ajustan a la normativa vigente.</p>
            <p>La información de esta página está presentada de forma resumida para ayudarte a identificar fácilmente el curso que necesitas.</p>
            <div class="course-information-actions">
              <a class="cta-button" href="https://puntosnavarra.com/">PRÓXIMOS CURSOS</a>
              <a class="cta-button course-information-whatsapp" href="https://wa.me/34649230920">CONSULTAR POR WHATSAPP</a>
            </div>
            <a class="course-information-official" href="https://www.dgt.es/nuestros-servicios/permisos-de-conducir/tus-puntos-y-tus-permisos/recupera-tus-puntos/" target="_blank" rel="noopener noreferrer">Información oficial en la DGT <span aria-hidden="true">→</span></a>
            <a class="course-information-official" href="https://www.boe.es/eli/es/o/2024/09/02/int914/con" target="_blank" rel="noopener noreferrer">Consultar normativa en el BOE <span aria-hidden="true">→</span></a>
          </div>
        </li>
      </ul>
    </nav>
  </section>
</main>
`

document.querySelectorAll('.course-information-trigger').forEach((trigger) => {
  const content = document.getElementById(trigger.getAttribute('aria-controls'))
  const toggle = trigger.querySelector('.course-information-toggle')

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

    trigger.setAttribute('aria-expanded', String(!isExpanded))
    content.hidden = isExpanded
    trigger.closest('.course-information-item').classList.toggle('is-open', !isExpanded)
    toggle.textContent = isExpanded ? '+' : '−'
  })
})
