import path from 'path'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import vueDefineOptions from 'unplugin-vue-define-options/rollup'
import esbuild from 'rollup-plugin-esbuild'
import {
  cjcRoot,
  compRoot,
  utilRoot,
  pkgRoot,
  outputEsm,
  outputCjs
} from '../utils/paths'
import { target, generateExternal, generatePaths } from '../utils/rollup'

export const buildModules = async () => {
  const input = [
    // root
    path.resolve(compRoot, 'index.ts'),
    path.resolve(utilRoot, 'index.ts')
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
      esbuild({
        target,
        sourceMap: true
      })
    ],
    treeshake: false,
    // external: [
    //   '@vitejs/plugin-vue',
    //   'vite-plugin-dts',
    //   'vue-loader',
    //   '@types/node',
    //   'vue'
    // ]
    external: generateExternal({ full: true }) // 外部模块，所有依赖都设置为外部模块
  })

  await Promise.all([
    bundle.write({
      format: 'esm',
      dir: outputEsm,
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: pkgRoot,
      sourcemap: true,
      entryFileNames: `[name].mjs`
    }),
    bundle.write({
      format: 'cjs',
      dir: outputCjs,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: pkgRoot,
      sourcemap: true,
      entryFileNames: `[name].js`,
      paths: generatePaths()
    })
  ])
}
