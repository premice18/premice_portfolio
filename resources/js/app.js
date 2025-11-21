// Gestion du thème sombre
const themeToggle = document.getElementById('themeToggle')
const html = document.documentElement

// Fonction pour appliquer le thème
function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.mobile-menu-link').forEach((link) => {
  link.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu')
    if (mobileMenu) {
      mobileMenu.classList.add('hidden')
    }
  })
})

// Vérifier la préférence utilisateur au chargement
function initTheme() {
  // Par défaut, on met en light pour voir le fond blanc
  if (!('theme' in localStorage)) {
    applyTheme('light')
    return
  }

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    applyTheme('dark')
  } else {
    applyTheme('light')
  }
}

// Initialiser le thème au chargement
document.addEventListener('DOMContentLoaded', initTheme)

// Basculer le thème
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark')
    applyTheme(isDark ? 'light' : 'dark')
  })
}

// Menu mobile
const mobileMenuButton = document.getElementById('mobileMenuButton')
const mobileMenu = document.getElementById('mobileMenu')

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

// Observer les éléments à animer
document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(20px)'
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  observer.observe(el)
})

// Gestion du formulaire de contact
const contactForm = document.querySelector('form')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Simulation d'envoi
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.textContent = 'Envoi en cours...'
    submitButton.disabled = true

    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert('Message envoyé avec succès !')
    contactForm.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  })
}

// Fermer le menu mobile en cliquant à l'extérieur
document.addEventListener('click', (e) => {
  if (
    mobileMenu &&
    mobileMenuButton &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuButton.contains(e.target)
  ) {
    mobileMenu.classList.add('hidden')
  }
})
