import installer from './default'
export * from '@coderjc-ui/components'
export * from '@coderjc-ui/constants'
export * from '@coderjc-ui/utils'

import '@coderjc-ui/theme-chalk/src/index.scss'

export const install = installer.install
export default installer

import * as _dayjs from 'dayjs'
export const dayjs = _dayjs
