import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PgKit from 'pg-kit'

createApp(App).use(PgKit).mount('#app')
