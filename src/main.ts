import { createApp } from 'vue'

import router from './router'

import '@/index.scss'

import '@/core/index.ts'

import App from './App.vue'

//打包时会自动按需引入加载
import Antd from 'ant-design-vue';


const app = createApp(App)

app.use(router)

app.use(Antd)



app.mount('#app')
