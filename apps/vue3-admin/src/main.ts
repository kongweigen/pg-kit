/*
 * @Author: kongweigen 421505648@qq.com
 * @Date: 2023-02-02 22:42:59
 * @LastEditors: kongweigen 421505648@qq.com
 * @LastEditTime: 2023-02-07 22:46:13
 * @FilePath: \webpack-learne:\webProject\Monerepo\pg-kit\apps\vue3-admin\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PgKit from 'pg-kit'
import 'pg-kit/styles/button.scss'

createApp(App).use(PgKit).mount('#app')
