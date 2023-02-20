#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";
import prompts from 'prompts'
import copeTpl from '../lib/copeTpl.js'
import downloadTpl from "../lib/operate.js";
const templates = [{ title: 'template-vue', value: 'vue' }, { title: 'template-doc', value: 'doc' }]

// 用户选择模板
let res = await prompts([{
  type: 'select',
  name: 'template',
  message: '请选择模板',
  choices: templates
}], {
  onCancel: () => {
    throw new Error('x  操作终止')
  }
})

const { template } = res

// 打印欢迎画面
clear();
const logo = figlet.textSync(`create template ${template}!`, {
  // font: "Ghost",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);
setTimeout(() => {
  rainbow.stop(); // Animation stops
  // copeTpl()
  downloadTpl()
}, 500);