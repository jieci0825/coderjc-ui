import { FormItemContext, FormItemRule, LabelPositionType } from './types'

// 转换属性值
export function toJustifyContentProp(position: LabelPositionType) {
  switch (position) {
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end'
    case 'top':
      return undefined
  }
}

// 过滤掉不需要的字段上下文
export function filterFields(
  fields: FormItemContext[],
  formItemFields: string[]
) {
  return fields.filter(
    field => field.prop && formItemFields.includes(field.prop)
  )
}

// 检测当前规则中是否存在必填规则
export function isExistRequiredRule(rules: FormItemRule[]): boolean {
  for (let rule of rules) {
    if (rule.required) {
      return true
    }
  }
  return false
}
