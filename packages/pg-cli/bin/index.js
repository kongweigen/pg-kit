#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";
import prompts from 'prompts'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// 终端输出颜色
import {
  blue,
  cyan,
  green,
  lightRed,
  magenta,
  red,
  reset,
  yellow
} from 'kolorist'

const templates = [{ title: 'template-vue', value: 'vue' }, { title: 'template-doc', value: 'doc' }]
const renameFiles = {
  _gitignore: '.gitignore'
}
const root = process.cwd()
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
console.log('prompts res', res);

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
  init()
}, 500);

function init() {
  // 项目模板地址
  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    `../../template-${template}`
  )
  console.log(green(`项目地址${templateDir}`));
  const files = fs.readdirSync(templateDir)
  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }
  for (const file of files) {
    write(file)
  }

  function copy(src, dest) {
    const stat = fs.statSync(src)
    if (stat.isDirectory()) {
      copyDir(src, dest)
    } else {
      fs.copyFileSync(src, dest)
    }
  }

  /**
 * @param {string} srcDir
 * @param {string} destDir
 */
  function copyDir(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
      const srcFile = path.resolve(srcDir, file)
      const destFile = path.resolve(destDir, file)
      copy(srcFile, destFile)
    }
  }
}