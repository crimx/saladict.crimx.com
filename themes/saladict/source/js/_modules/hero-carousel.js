export function heroCarousel() {
  const carousel = document.querySelector('.hero-carousel')
  if (!carousel) return

  const slides = carousel.querySelectorAll('.hero-carousel-slide')
  const dots = carousel.querySelectorAll('.hero-carousel-dot')
  if (slides.length < 2) return

  let current = 0
  let autoTimer = setTimeout(next, 3000)

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i !== current) goTo(i)
    })
  })

  function next() {
    goTo((current + 1) % slides.length)
  }

  function goTo(index) {
    slides[current].classList.remove('is-active')
    dots[current].classList.remove('is-active')
    current = index
    slides[current].classList.add('is-active')
    dots[current].classList.add('is-active')

    clearTimeout(autoTimer)
    autoTimer = setTimeout(next, 3000)
  }
}
