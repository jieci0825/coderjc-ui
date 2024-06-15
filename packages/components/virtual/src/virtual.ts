import { PropType } from 'vue'

export const virtualProps = {
  /**
   * @description 每条数据高度
   */
  itemHeight: {
    type: Number,
    default: 30
  },

  /**
   * @description 总数据量
   */
  remain: {
    type: Number,
    default: 8
  },

  /**
   * @description 为了更好的渲染效果预先多多少条数据
   */
  cache: {
    type: Number,
    default: 0
  },

  /**
   * @description 渲染的数据
   */
  data: {
    type: Array as PropType<Array<any>>,
    default: []
  }
}

export type VirtualProps = Partial<typeof virtualProps>
