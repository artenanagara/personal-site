import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion';
import { createHead } from '@unhead/vue/client'
import { vMagnetic } from './directives/magnetic'

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(MotionPlugin);
app.use(head);
app.directive('magnetic', vMagnetic);
app.mount('#app');
