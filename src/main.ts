import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ⬇️ v2'de doğru import yolu bu:
import { createHead } from '@unhead/vue/client'

import '@/styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
