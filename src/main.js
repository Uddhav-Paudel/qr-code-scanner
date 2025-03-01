import './assets/main.css'
import '@fontsource/manrope'
import { createApp } from 'vue'
import { VueQrcodeReader } from 'vue-qrcode-reader'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQrcodeReader)
app.mount('#app')
