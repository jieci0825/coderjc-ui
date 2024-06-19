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
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    outDir: 'dist/umd',
    rollupOptions: {
      external: [
        'vue-loader',
        'vue',
        '@vitejs/plugin-vue',
        '@types/node',
        'vite-plugin-dts',
        'move-file-cli',
        'npm-run-all',
        /\.(spec|test)\.(js|txs|ts)?$/
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
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
      formats: ['umd']
    }
  }
})
