import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'
import axios from 'axios'
import resume from '@/assets/0502.json'

export const useUserData = defineStore('userdata', () => {
  const data = ref([])
  const errorMessage = ref([])

  async function getResume() {
    try {
      const res = await axios.get(
        'https://693ea10912c964ee6b6de8de.mockapi.io/api/v1/getresume/0502',
        { timeout: 5000 },
      )
      data.value = res.data
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        errorMessage.value = ['API 请求超时', '使用本地数据']
        getLocalResume()
      } else {
        errorMessage.value = ['API 发生错误', error.message]
        console.log('Error 0x001:', errorMessage.value)
      }
    }
  }

  const getLocalResume = () => {
    // use bundled JSON (no network)
    console.log('启动备用方案：本地文件读取')
    data.value = resume
    errorMessage.value = ''
  }

  return {
    data: readonly(data),
    errorMessage: errorMessage,
    getResume,
    getLocalResume,
  }
})
