// Vue3 + PrimeVue v4.5 + TailwindCSS 4.1
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { definePreset } from '@primeuix/themes'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'

import en from './locales/en.js'
import zhCN from './locales/zh-CN.js'
import zhTW from './locales/zh-TW.js'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)

/**
 * 1) primary
 * Used for buttons, links, focus rings, active states.
 * 2) surface
 * Used for backgrounds, cards, panels, inputs.
 * 3) highlight
 * Used for selected rows, selected items, active menu states.
 * 4) info / success / warning / danger
 * Used for messages, toasts, badges, alerts.
 * 5) form states
 * Used for input error borders, focus shadows, etc.
 * 6) typography
 * Text color, muted text, disabled text.
 **/
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
    /* Surface/background colors */
    surface: {
      0: '{zinc.0}', // pure white
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },

    /* Highlight color (selected rows, active items) */
    highlight: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },

    /* Text colors */
    colorScheme: {
      light: {
        surface: {
          ground: '{zinc.100}', // main background : light
        },
        text: '{zinc.800}',
        textMuted: '{zinc.500}',
        extend: {
          box: '#ffffff',
          hint: '{zinc.600}',
          content: '{zinc.700}',
          title: '{sky.800}',
          titleMuted: '{sky.500}',
          divider: '{zinc.200}',
          coding: '{zinc.600}',
        },
      },
      dark: {
        surface: {
          ground: '{zinc.800}', // main background : dark
        },
        text: '{zinc.300}',
        textMuted: '{zinc.400}',
        extend: {
          box: '#000000',
          hint: '{zinc.500}',
          content: '{zinc.200}',
          title: '{sky.200}',
          titleMuted: '{sky.400}',
          divider: '{zinc.600}',
          coding: '{zinc.300}',
        },
      },
    },
  },
})
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'cz',
      darkModeSelector: '.cz-app-dark',
      //“Auto-detect dark/light mode using the user’s system setting.”
      // If system = dark → Aura dark mode
      // If system = light → Aura light mode
      // Later, you can change this to 'class' if you want a toggle button.

      cssLayer: false,
      // Tailwind has layers, but PrimeVue theme CSS does not need a layer.
      // Without a layer, your Tailwind classes usually override PrimeVue more easily.
    },
  },
})

import '@/assets/base.css'
app.mount('#app')
