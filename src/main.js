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

      technical_skill: 'Technical Skill',
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

      tools: 'Tools',
      msg_tools: 'Tools used for development and deployment',

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

      research_and_curiosity: 'Research & Curiosity',
      debugging: 'Debugging',
      learning_ability: 'Learning Ability',
      ai_assisted_development: 'AI-Assisted Development',
      unlockable_potential: 'Unlockable Potential',
      msg_research_and_curiosity:
        'Research-oriented mindset with interest in understanding how things work',
      msg_debugging: 'Able to analyze issues and debug problems in a structured manner', // reproduce → observe → narrow down → fix → verify
      msg_learning_ability:
        'Learns new frameworks by understanding core concepts before practical adoption',
      msg_ai_assisted_development:
        'Uses AI tools (ChatGPT, DeepSeek, Copilot, Gemini) to support development, debugging, and deployment workflows',
      msg_unlockable_potential: 'Current skill set unlocked — next levels available upon hiring',

      mobile_app_developer: 'Mobile App Developer',
      description_1:
        'Mobile App Developer who enjoys translating research into production results. Research-driven and focused on performance optimization, maintainable mobile architecture, and modern development practices.',
      description_2:
        'Experienced in Xamarin.Forms development and .NET MAUI migration research and implementation.',
      timetec_1:
        'Core contributor in a team-based cross-platform mobile app (Android, iOS, Huawei) built from scratch with Xamarin.Forms.',
      timetec_2:
        'Responsible for researching, planning, and implementing the migration from Xamarin.Forms to .NET MAUI.',
      timetec_3:
        'Conducted technical research and prototyping with the team to assess MAUI compatibility and migration risks.',
      timetec_4:
        'Leveraged AI tools (ChatGPT, DeepSeek, Copilot, Gemini, etc.) to improve workflow efficiency and accuracy.',
      freelance_1: 'Self-taught HTML, CSS, and JavaScript to deliver quality web tasks.',
      freelance_2: 'Performed optimizations using online resources for continuous improvement.',
    },

    'zh-CN': {
      area_of_expertise: '专业领域',
      contact: '联系',
      description: '简介',

      technical_skill: '技术技能',
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
      msg_advanced: '高熟练度, 已应用于实际项目',
      msg_foundation: '具备工作层面的基础知识, 能够完成常见任务',
      msg_familiar: '基础理解, 需复习后才能再次使用',

      tools: '工具',
      msg_tools: '用于开发与部署的工具',

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
      msg_visit_later: '抱歉, 请稍后再访问。',

      loading: '加载中',
      msg_loading: '请耐心等待',

      research_and_curiosity: '研究与好奇心',
      debugging: '问题排查',
      learning_ability: '学习能力',

      ai_assisted_development: 'AI 辅助开发',
      unlockable_potential: '可解锁潜力',

      msg_research_and_curiosity: '以研究为导向, 关注事物运作原理',
      msg_debugging: '能够以结构化方式分析并排查问题',
      msg_learning_ability: '通过理解核心概念来学习并实际采用新框架',
      msg_ai_assisted_development:
        '使用 AI 工具 (ChatGPT, DeepSeek, Copilot, Gemini) 辅助开发、除错与部署流程',
      msg_unlockable_potential: '当前技能已解锁, 入职即可开启下一阶段',

      mobile_app_developer: '移动应用开发工程师',
      description_1:
        '喜欢将研究转化为生产成果的移动应用开发工程师。以研究为驱动, 专注于性能优化、可维护的移动架构与现代开发实践。',
      description_2: '具有 Xamarin.Forms 开发经验, 并参与 .NET MAUI 迁移的研究与实施。',
      timetec_1:
        '作为核心贡献者, 参与团队式跨平台移动应用 (Android、iOS、Huawei), 使用 Xamarin.Forms 从零构建。',
      timetec_2: '负责研究、规划并实施从 Xamarin.Forms 到 .NET MAUI 的迁移。',
      timetec_3: '与团队共同进行技术研究与原型开发, 以评估 MAUI 的兼容性与迁移风险。',
      timetec_4: '利用 AI 工具 (ChatGPT、DeepSeek、Copilot、Gemini 等) 提升工作效率与准确性。',
      freelance_1: '自学 HTML、CSS 与 JavaScript, 完成高质量任务。',
      freelance_2: '通过网络资源进行优化, 实现持续改进。',
    },

    'zh-TW': {
      area_of_expertise: '專業領域',
      contact: '聯繫',
      description: '簡介',

      technical_skill: '技術技能',
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
      msg_advanced: '高熟練度, 已應用於實際專案',
      msg_foundation: '具備工作層面的基礎知識, 能夠完成常見任務',
      msg_familiar: '基礎理解, 需複習後才能再次使用',

      tools: '工具',
      msg_tools: '用於開發與部署的工具',

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
      msg_visit_later: '抱歉, 請稍後再訪問。',
      loading: '載入中',
      msg_loading: '請耐心等待',

      research_and_curiosity: '研究與好奇心',
      debugging: '問題排查',
      learning_ability: '學習能力',
      ai_assisted_development: 'AI 輔助開發',
      unlockable_potential: '可解鎖潛力',

      msg_research_and_curiosity: '以研究為導向, 關注事物運作原理',
      msg_debugging: '能以結構化方式分析並排查問題',
      msg_learning_ability: '透過理解核心概念來學習並實際採用新框架',
      msg_ai_assisted_development:
        '使用 AI 工具 (ChatGPT, DeepSeek, Copilot, Gemini) 輔助開發、除錯與部署流程',
      msg_unlockable_potential: '目前技能已解鎖, 入職即可開啟下一階段',

      mobile_app_developer: '行動應用開發工程師',
      description_1:
        '喜歡將研究轉化為生產成果的行動應用開發工程師。以研究為驅動, 專注於效能優化、可維護的行動架構與現代開發實踐。',
      description_2: '具有 Xamarin.Forms 開發經驗, 並參與 .NET MAUI 遷移的研究與實作。',
      timetec_1:
        '作為核心貢獻者, 參與團隊式跨平台行動應用 (Android、iOS、Huawei), 以 Xamarin.Forms 從零構建。',
      timetec_2: '負責研究、規劃並實施從 Xamarin.Forms 到 .NET MAUI 的遷移。',
      timetec_3: '與團隊共同進行技術研究與原型開發, 以評估 MAUI 的相容性與遷移風險。',
      timetec_4: '運用 AI 工具 (ChatGPT、DeepSeek、Copilot、Gemini 等) 提升工作效率與準確性。',
      freelance_1: '自學 HTML、CSS 與 JavaScript, 完成高品質任務。',
      freelance_2: '透過線上資源進行優化, 實現持續改進。',
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
