import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'

import router from '@/router'
import App from '@/App.vue'

import '@styles/style.scss'

router.afterEach((to: RouteLocationNormalized) => {
	document.title = (to.meta.title as string) || 'document'
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')