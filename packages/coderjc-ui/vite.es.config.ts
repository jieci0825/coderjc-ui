import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vueDefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  server: {
    port: 9527
  },
  plugins: [
    vueDefineOptions(),
    vue(),
    dts({
      // rollupTypes: true, // 把所有类型打包到一个文件中
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    outDir: 'dist/es',
    rollupOptions: {
      external: [
        'vue-loader',
        'vue',
        '@vitejs/plugin-vue',
        '@types/node',
        'vite-plugin-dts',
        'move-file-cli',
        'npm-run-all'
      ],
      output: {
        assetFileNames: chunkInfo => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name!
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'CoderjcUI',
      fileName: 'index',
      formats: ['es']
    }
  }
})
