import { ref, onMounted, onUnmounted } from 'vue';

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

// Current time in Surakarta (WIB), refreshed every 20 seconds.
export function useLocalTime() {
  // Same placeholder on the server and on hydration, so the static HTML never shows the build time
  const time = ref('--:--');
  let timer;

  onMounted(() => {
    time.value = formatter.format(new Date());
    timer = setInterval(() => {
      time.value = formatter.format(new Date());
    }, 20000);
  });

  onUnmounted(() => clearInterval(timer));

  return { time };
}
