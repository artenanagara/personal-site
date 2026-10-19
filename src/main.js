import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'

const app = createApp(App);

// v-reveal: adds .is-in when the element enters the viewport.
// v-reveal="200" sets a delay in ms; v-reveal.lines animates child .line-mask spans only.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

app.directive('reveal', {
  mounted(el, binding) {
    if (binding.value != null) el.style.setProperty('--d', `${binding.value}ms`);
    if (!binding.modifiers.lines) el.classList.add('reveal');
    // v-reveal.load plays on page load instead of waiting for scroll (for above-the-fold content)
    if (binding.modifiers.load) {
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
      return;
    }
    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  },
});

app.use(router);
app.use(createHead());
app.mount('#app');
