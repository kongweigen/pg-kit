import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default function copeTpl(template) {
  const root = process.cwd()
  const renameFiles = {
    _gitignore: '.gitignore'
  }
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