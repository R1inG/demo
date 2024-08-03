import './assets/main.css' // 导入全局样式

import { createApp } from 'vue'
import App from './App.vue'

// 导入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 导入Element Plus的样式

// 创建Vue应用实例
const app = createApp(App)

// 使用Element Plus
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
   