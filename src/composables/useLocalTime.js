import { ref, onMounted, onUnmounted } from 'vue';

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

// Current time in Surakarta (WIB), refreshed every 20 seconds.
export function useLocalTime() {
  const time = ref(formatter.format(new Date()));
  let timer;

  onMounted(() => {
    timer = setInterval(() => {
      time.value = formatter.format(new Date());
    }, 20000);
  });

  onUnmounted(() => clearInterval(timer));

  return { time };
}
