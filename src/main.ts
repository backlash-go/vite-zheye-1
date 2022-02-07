import { createApp } from 'vue'

import router from './router'

import '@/index.scss'

import '@/core/index.ts'

import App from './App.vue'

import Antd from 'ant-design-vue';


const app = createApp(App)

app.use(router)

app.use(Antd)



app.mount('#app')
