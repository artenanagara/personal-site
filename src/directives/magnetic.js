export const vMagnetic = {
  mounted(el, binding) {
    const strength = binding.value ?? 0.35

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }

    const onMouseEnter = () => {
      el.style.transition = 'transform 0.15s linear'
    }

    const onMouseLeave = () => {
      el.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.transform = 'translate(0px, 0px)'
    }

    el._magneticHandlers = { onMouseMove, onMouseEnter, onMouseLeave }
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)
  },

  unmounted(el) {
    const h = el._magneticHandlers
    if (!h) return
    el.removeEventListener('mousemove', h.onMouseMove)
    el.removeEventListener('mouseenter', h.onMouseEnter)
    el.removeEventListener('mouseleave', h.onMouseLeave)
  }
}
