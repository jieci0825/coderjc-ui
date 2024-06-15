import * as fs from 'fs'
import * as path from 'path'

// 定义源目录和目标目录
const sourceDir = path.join(__dirname, 'dist/types/coderjc-ui')
const targetDir = path.join(__dirname, 'dist/types')

;(function () {
  // 确保目标目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  // 读取源目录中的所有文件
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('读取源目录失败:', err)
      return
    }

    files.forEach(file => {
      const sourceFile = path.join(sourceDir, file)
      const targetFile = path.join(targetDir, file)

      // 移动文件
      fs.rename(sourceFile, targetFile, err => {
        if (err) {
          console.error(`移动文件 ${file} 失败:`, err)
        } else {
          console.log(`文件 ${file} 已移动到 ${targetDir}`)
        }
      })
    })

    // 删除空的源目录
    fs.rmdir(sourceDir, err => {
      if (err) {
        console.error('删除源目录失败:', err)
      } else {
        console.log(`源目录 ${sourceDir} 已删除`)
      }
    })
  })
})()
