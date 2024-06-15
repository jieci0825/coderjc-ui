import { ExtractPropTypes } from 'vue'

export const emptyProps = {
  /**
   * @descripton 组件图像地址
   */
  image: {
    type: String
  },

  /**
   * @descripton 图像尺寸
   */
  imageSize: {
    type: Number,
    default: 280
  },

  /**
   * @descripton 描述文字
   */
  description: {
    type: String,
    default: '暂无数据'
  }
} as const
export const emptyEmits = {}

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
export type EmptyEmits = typeof emptyEmits
