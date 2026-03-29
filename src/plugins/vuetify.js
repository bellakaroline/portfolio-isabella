import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { vuetifyTheme } from '@/design-system/tokens/tokens.js'

export const vuetify = createVuetify({
  theme: vuetifyTheme,
})