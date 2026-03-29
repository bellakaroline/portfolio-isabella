import { computed } from 'vue'
import { useLocale } from './useLocale'
import { messages } from '@/i18n/index'

export function useI18n() {
  const { locale } = useLocale()

  // Reactive object — auto-switches when locale changes
  const i18n = computed(() => messages[locale.value])

  return { i18n, locale }
}
