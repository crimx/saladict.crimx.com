const webstore = {
  chrome: {
    chs: {
      title: 'Chrome 网上应用店',
      url:
        'https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg/reviews?hl=zh',
    },
    en: {
      title: 'Chrome Web Store',
      url:
        'https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg/reviews?hl=en',
    },
  },
  firefox: {
    chs: {
      title: 'Firefox 扩展',
      url: 'https://addons.mozilla.org/zh/firefox/addon/ext-saladict/',
    },
    en: {
      title: 'Firefox',
      url: 'https://addons.mozilla.org/en/firefox/addon/ext-saladict/',
    },
  },
  edge: {
    chs: {
      title: 'Microsoft Edge 外接程序',
      url:
        'https://microsoftedge.microsoft.com/addons/detail/idghocbbahafpfhjnfhpbfbmpegphmmp',
    },
    en: {
      title: 'Microsoft Edge Addons',
      url:
        'https://microsoftedge.microsoft.com/addons/detail/idghocbbahafpfhjnfhpbfbmpegphmmp',
    },
  },
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/**
 * High-performance carousel which displays random testimonials,
 * implemented with F.L.I.P animation technique.
 */
export async function testimonials() {
  const testimonials = document.querySelector('.testimonials')
  if (!testimonials) return

  const isEng = location.pathname.startsWith('/en/')

  const data = await fetch(
    `/assets/testimonials/${isEng ? 'en' : 'zh-cn'}.json`
  )
    .then((t) => t.json())
    .catch(() => [])

  if (!data || data.length <= 0) return

  const getTestimonial = buildGetTestimonial()

  const [prev, next, slide] = testimonials.children
  const testimonial = {
    next: slide.children[0],
    real: slide.children[1],
    prev: slide.children[2],
  }

  testimonial.real.innerHTML = getTestimonial()

  testimonials.classList.add('is-active')

  let autoMoveTimeout
  let isMouseInSlide = false

  prev.addEventListener('click', movePrev)
  next.addEventListener('click', moveNext)

  prev.addEventListener('mouseleave', blur)
  next.addEventListener('mouseleave', blur)

  slide.addEventListener('mouseenter', () => {
    isMouseInSlide = true
  })
  slide.addEventListener('mouseleave', () => {
    isMouseInSlide = false
  })

  autoMoveTimeout = setTimeout(moveNext, 2000)

  function blur(event) {
    event.currentTarget.blur()
  }

  function movePrev(event) {
    if (event) {
      event.preventDefault()
      console.log(event.buttons)
    }
    clearTimeout(autoMoveTimeout)
    autoMoveTimeout = setTimeout(moveNext, 5000)
    if (!isMouseInSlide) {
      move('prev')
    }
  }

  function moveNext(event) {
    if (event) {
      event.preventDefault()
    }
    clearTimeout(autoMoveTimeout)
    autoMoveTimeout = setTimeout(moveNext, 5000)
    if (!isMouseInSlide) {
      move('next')
    }
  }

  function move(direction) {
    testimonial[direction].innerHTML = testimonial.real.innerHTML
    testimonial.real.innerHTML = getTestimonial(direction)

    slide.classList.add(`is-move-${direction}-start`)

    // trigger redraw
    slide.offsetHeight

    slide.classList.remove(`is-move-${direction}-start`)
  }

  function buildGetTestimonial() {
    let unsortedStart = 0
    let unsortedEnd = data.length - 1
    let i = NaN

    return (direction = 'next') => {
      if (isNaN(i)) {
        // initial
        i = 0
      } else if (direction === 'next') {
        i = (i + 1) % data.length
      } else {
        i = (i - 1 + data.length) % data.length
      }

      if (i >= unsortedStart && i <= unsortedEnd) {
        // swap a random one with current slot
        const pick = Math.floor(
          Math.random() * (unsortedEnd - unsortedStart + 1) + unsortedStart
        )
        const t = data[i]
        data[i] = data[pick]
        data[pick] = t

        // mark current slot as sorted
        if (i === unsortedStart) {
          unsortedStart += 1
        } else {
          unsortedEnd -= 1
        }
      }

      const item = data[i]
      const date = new Date(item.date)
      let dateString = ''
      let sourceString = ''

      if (isEng) {
        dateString =
          `${months[date.getUTCMonth()]} ` +
          `${date.getUTCDate()}, ` +
          `${date.getUTCFullYear()}`

        const source = webstore[item.source].en
        sourceString = `From <a href="${source.url}">${source.title}</a>`
      } else {
        dateString =
          `${date.getUTCFullYear()}年` +
          `${date.getUTCMonth() + 1}月` +
          `${date.getUTCDate()}日`

        const source = webstore[item.source].chs
        sourceString = `留言自 <a href="${source.url}">${source.title}</a>`
      }

      return `
      <div class="container">
        <div class="testimonial-main">
          <p title="${
            item.content
          }" class="testimonial-content is-size-4-tablet">
            “ ${item.content.split('\n').join('<br>')} ”
          </p>
          <p class="is-size-6 has-text-right">—— ${item.author}</p>
          <p class="is-size-7 has-text-right">${dateString} · ${sourceString}</p>
        </div>
      </div>
      `
    }
  }
}
