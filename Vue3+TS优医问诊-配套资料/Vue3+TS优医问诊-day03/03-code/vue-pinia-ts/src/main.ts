import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// pinia加到应用中(插件的安装)

import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
