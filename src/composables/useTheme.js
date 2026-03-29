import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const theme = ref(localStorage.getItem(STORAGE_KEY) || 'dark')

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
}

// Aplica imediatamente ao carregar
applyTheme(theme.value)

// Sincroniza com o DOM e localStorage sempre que mudar
watch(theme, (value) => {
  applyTheme(value)
  localStorage.setItem(STORAGE_KEY, value)
})

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
