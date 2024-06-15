import { resolve } from 'path'

// root
export const root = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(root, 'packages')
export const cjcRoot = resolve(pkgRoot, 'coderjc-ui')
export const compRoot = resolve(pkgRoot, 'components')
export const utilRoot = resolve(pkgRoot, 'utils')

// output
export const output = resolve(cjcRoot, 'dist')
export const outputEsm = resolve(cjcRoot, 'es')
export const outputCjs = resolve(cjcRoot, 'lib')

// package
export const compPackage = resolve(cjcRoot, 'package.json')
