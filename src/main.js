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

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      area_of_expertise: 'Area of Expertise',
      contact: 'Contact',
      description: 'Description',

      language: 'Language',
      skill: 'Skill',
      work: 'Working Experience',
      education: 'Education',

      hokkien: 'Hokkien',
      english: 'English',
      chinese: 'Chinese',
      malay: 'Malay',
      cantonese: 'Cantonese',

      familiar: 'Familiar',
      foundation: 'Foundation',
      advanced: 'Advanced',
      msg_advanced: 'High proficiency, applied in real-world projects',
      msg_foundation: 'Working knowledge, able to implement common tasks',
      msg_familiar: 'Basic understanding, requires refresh before active use',

      reading: 'reading',
      listening: 'listening',

      months: 'months',
      years: 'years',

      Jan: 'Jan',
      Feb: 'Feb',
      Mar: 'Mar',
      Apr: 'Apr',
      May: 'May',
      Jun: 'Jun',
      Jul: 'Jul',
      Aug: 'Aug',
      Sep: 'Sep',
      Oct: 'Oct',
      Nov: 'Nov',
      Dec: 'Dec',

      error: 'Error',
      msg_visit_later: 'Sorry, please visit later.',

      loading: 'Loading',
      msg_loading: 'please wait patiently',
    },

    'zh-CN': {
      area_of_expertise: '专业领域',
      contact: '联系',
      description: '简介',

      language: '语言',
      skill: '技能',
      work: '工作经验',
      education: '教育背景',

      hokkien: '福建话',
      english: '英语',
      chinese: '中文',
      malay: '马来语',
      cantonese: '粤语',

      familiar: '熟悉',
      foundation: '基础',
      advanced: '高级',
      msg_advanced: '高熟练度，已应用于实际项目',
      msg_foundation: '具备工作层面的基础知识，能够完成常见任务',
      msg_familiar: '基础理解，需复习后才能再次使用',

      reading: '阅读',
      listening: '听力',

      months: '个月',
      years: '年',

      Jan: '1月',
      Feb: '2月',
      Mar: '3月',
      Apr: '4月',
      May: '5月',
      Jun: '6月',
      Jul: '7月',
      Aug: '8月',
      Sep: '9月',
      Oct: '10月',
      Nov: '11月',
      Dec: '12月',

      error: '错误',
      msg_visit_later: '抱歉，请稍后再访问。',

      loading: '加载中',
      msg_loading: '请耐心等待',
    },

    'zh-TW': {
      area_of_expertise: '專業領域',
      contact: '聯繫',
      description: '簡介',

      language: '語言',
      skill: '技能',
      work: '工作經驗',
      education: '教育背景',

      hokkien: '福建話',
      english: '英語',
      chinese: '中文',
      malay: '馬來語',
      cantonese: '粵語',

      familiar: '熟悉',
      foundation: '基礎',
      advanced: '進階',
      msg_advanced: '高熟練度，已應用於實際專案',
      msg_foundation: '具備工作層面的基礎知識，能夠完成常見任務',
      msg_familiar: '基礎理解，需複習後才能再次使用',

      reading: '閱讀',
      listening: '聽力',

      months: '個月',
      years: '年',

      Jan: '1月',
      Feb: '2月',
      Mar: '3月',
      Apr: '4月',
      May: '5月',
      Jun: '6月',
      Jul: '7月',
      Aug: '8月',
      Sep: '9月',
      Oct: '10月',
      Nov: '11月',
      Dec: '12月',

      error: '錯誤',
      msg_visit_later: '抱歉，請稍後再訪問。',
      loading: '載入中',
      msg_loading: '請耐心等待',
    },
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
