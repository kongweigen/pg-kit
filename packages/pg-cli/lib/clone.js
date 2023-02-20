import { promisify } from 'util'
import download from 'download-git-repo'
import ora from 'ora'
export default async (repo, path) => {
  const process = ora(`下载.....${repo}`)
  process.start()
  await promisify(download)(repo, path)
  process.stop()
}