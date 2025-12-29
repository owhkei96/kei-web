import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useSetting() {
  const { locale } = useI18n()

  const isDark = ref(
    document.documentElement.classList.contains('cz-app-dark') ||
      window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ||
      false,
  )

  const items = computed(() => [
    {
      type: 'icon',
      label: isDark.value ? 'Dark' : 'Light',
      text: '',
      icon: isDark.value ? 'pi pi-star-fill' : 'pi pi-star',
      command: () => {
        isDark.value = !isDark.value
        document.documentElement.classList.toggle('cz-app-dark', isDark.value)
      },
    },
    {
      type: 'text',
      label: 'English',
      text: 'en',
      icon: '',
      command: () => {
        if (locale.value !== 'en') {
          locale.value = 'en'
        }
      },
    },
    {
      type: 'text',
      label: '中文 (简体)',
      text: '简',
      icon: '',
      command: () => {
        if (locale.value !== 'zh-CN') {
          locale.value = 'zh-CN'
        }
      },
    },
    {
      type: 'text',
      label: '中文 (繁體)',
      text: '繁',
      icon: '',
      command: () => {
        if (locale.value !== 'zh-TW') {
          locale.value = 'zh-TW'
        }
      },
    },
    {
      type: 'icon',
      label: 'Download',
      text: '',
      icon: 'pi pi-download',
      command: () => {
        const url =
          'https://drive.usercontent.google.com/download?id=1GHlFrlIEx8FKOWMD0jcRlz16Xfy5kqYw&export=download' // your link
        const a = document.createElement('a')
        a.href = url
        a.download = '' // force download
        a.click()
      },
    },
  ])

  return {
    items,
  }
}
