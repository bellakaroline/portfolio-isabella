import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-locale'
const locale = ref(localStorage.getItem(STORAGE_KEY) || 'pt')

watch(locale, (value) => {
  localStorage.setItem(STORAGE_KEY, value)
})

export function useLocale() {
  function toggle() {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
  }

  return { locale, toggle }
}
