import { createApp } from 'vue'
import App from './app/App.vue'
import { key, store } from './app/store'
import router from './router'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
