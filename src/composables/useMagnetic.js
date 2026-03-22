import { ref, onMounted, onUnmounted } from 'vue'

export function useMagnetic(strength = 0.35) {
  const el = ref(null)

  onMounted(() => {
    const node = el.value?.$el || el.value
    if (!node) return

    const onMouseMove = (e) => {
      const rect = node.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      node.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }

    const onMouseEnter = () => {
      node.style.transition = 'transform 0.15s linear'
    }

    const onMouseLeave = () => {
      node.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
      node.style.transform = 'translate(0px, 0px)'
    }

    node.addEventListener('mousemove', onMouseMove)
    node.addEventListener('mouseenter', onMouseEnter)
    node.addEventListener('mouseleave', onMouseLeave)
    node._magnetic = { onMouseMove, onMouseEnter, onMouseLeave }
  })

  onUnmounted(() => {
    const node = el.value?.$el || el.value
    if (!node?._magnetic) return
    const { onMouseMove, onMouseEnter, onMouseLeave } = node._magnetic
    node.removeEventListener('mousemove', onMouseMove)
    node.removeEventListener('mouseenter', onMouseEnter)
    node.removeEventListener('mouseleave', onMouseLeave)
  })

  return { el }
}
