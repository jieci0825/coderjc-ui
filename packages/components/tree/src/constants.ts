import type { InjectionKey } from 'vue'
import type { RootTreeType } from './tree.type'

export const RootTreeKey: InjectionKey<RootTreeType> = Symbol('RootTreeKey')
