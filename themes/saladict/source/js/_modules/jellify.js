export function jellify() {
  document.querySelectorAll('.jelly').forEach((el) => {
    let timeoutTicket
    const animate = () => {
      clearTimeout(timeoutTicket)

      el.classList.remove('jellify')
      el.scrollHeight
      el.classList.add('jellify')

      if (el.classList.contains('jelly-beat')) {
        timeoutTicket = setTimeout(animate, 3000)
      }
    }

    el.addEventListener('click', animate)
    el.addEventListener('mouseenter', animate)
    el.addEventListener('mouseleave', animate)

    if (el.classList.contains('jellify')) {
      timeoutTicket = setTimeout(animate, 3000)
    }
  })
}
