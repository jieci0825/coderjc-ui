import type { InjectionKey, Ref } from 'vue'
import { NameType } from './collapse.type'

interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export const CollapseContextKey: InjectionKey<CollapseContext> =
  Symbol('CollapseContextKey')
