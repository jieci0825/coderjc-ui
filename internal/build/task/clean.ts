import fs from 'fs'
import path from 'path'
import { output, outputEsm, outputCjs } from '../utils/paths'

async function remove(dirPath: string) {
  try {
    const stats = await fs.promises.lstat(dirPath)

    if (stats.isDirectory()) {
      const files = await fs.promises.readdir(dirPath)
      await Promise.all(files.map(file => remove(path.join(dirPath, file))))
      await fs.promises.rmdir(dirPath)
    } else {
      await fs.promises.unlink(dirPath)
    }
  } catch (err: any) {
    console.log('🚢 ~ 当前打印的内容 ~ err:', err)
    throw new Error('无法删除目录！！！')
  }
}

export const clean = async () => {
  await Promise.all([remove(output), remove(outputEsm), remove(outputCjs)])
}
