import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PgKit from 'pg-kit'
import "pg-kit/dist/index.css"
// import 'pg-kit/styles/button.scss'
// import "uno.css";

createApp(App).use(PgKit).mount('#app')
