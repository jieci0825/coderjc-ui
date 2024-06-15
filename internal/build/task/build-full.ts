import path from 'path'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import vueDefineOptions from 'unplugin-vue-define-options/rollup'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { cjcRoot, output } from '../utils/paths'
import { target, generateExternal } from '../utils/rollup'
import { PKG_CAMELCASE_NAME } from '../utils/constants'

const build = async (minify: boolean) => {
  const input = [
    // root
    path.resolve(cjcRoot, 'index.ts')
  ]

  const bundle = await rollup({
    input,
    plugins: [
      // @ts-ignore
      vueDefineOptions(),
      // @ts-ignore
      vue(),
      // @ts-ignore
      nodeResolve(),
      commonjs(),
      esbuild({
        target,
        sourceMap: minify,
        treeShaking: true
      }),
      minify
        ? minifyPlugin({
            target,
            sourceMap: minify
          })
        : null
    ],
    treeshake: true,
    external: generateExternal({ full: false })
  })

  await Promise.all([
    bundle.write({
      format: 'esm',
      file: path.resolve(output, `index${minify ? '.min' : ''}.mjs`),
      exports: undefined,
      sourcemap: minify
    }),
    bundle.write({
      format: 'umd',
      file: path.resolve(output, `index${minify ? '.min' : ''}.js`),
      exports: 'named',
      sourcemap: minify,
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: 'Vue'
      }
    })
  ])
}

export const buildFull = async () => {
  await Promise.all([build(false), build(true)])
}
