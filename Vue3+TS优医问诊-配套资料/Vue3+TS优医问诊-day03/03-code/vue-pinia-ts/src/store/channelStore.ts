// 1. 定义store结构

import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// 2. 实现需求

export const useChannelStore = defineStore('channel', () => {
  // 1. 定义类型
  type ChannelItem = {
    id: number
    name: string
  }
  type ResData = {
    data: {
      channels: ChannelItem[]
    }
    message: string
  }

  // 2. 定义响应式数据 (state)
  const list = ref<ChannelItem[]>([])

  // 3. axios获取数据 (异步action)
  const getList = async () => {
    const res = await axios.request<ResData>({
      url: 'http://geek.itheima.net/v1_0/channels',
    })
    list.value = res.data.data.channels
  }

  // 重要
  return {
    list,
    getList,
  }
})
