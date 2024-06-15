// BEM 规范
// block element modifier state
// Button:
//  - c-button
//  - c-button__primary
//  - c-button__primary--disabled
//  - is-loading

export const PREFIX = 'c'

// 拼接字符生成BEM类名
function _bem(
  prefixName: string,
  block: string,
  element?: string,
  modifier?: string
) {
  let result = prefixName

  if (block) {
    result += `-${block}`
  }
  if (element) {
    result += `__${element}`
  }
  if (modifier) {
    result += `--${modifier}`
  }

  return result
}

// 创建BEM类名
function createBEM(prefixName: string) {
  const b = (block: string = '') => _bem(prefixName, block)
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element) : ''
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (block: string = '', element: string = '') => {
    return block && element ? _bem(prefixName, block, element) : ''
  }

  const em = (element: string = '', modifier: string = '') => {
    return element && modifier ? _bem(prefixName, '', element, modifier) : ''
  }

  const bem = (
    block: string = '',
    element: string = '',
    modifier: string = ''
  ) => {
    return block && element && modifier
      ? _bem(prefixName, block, element, modifier)
      : ''
  }

  const is = (name: string = '', state: boolean | string) =>
    state ? `is-${name}` : ''

  const cssVarBlockName = (name: string) => {
    return `--${prefixName}-${name}`
  }

  return { b, e, m, is, be, em, bem, cssVarBlockName }
}

// 创建命名空间
export function createNamespace(name: string) {
  const prefixName = `${PREFIX}-${name}`
  return createBEM(prefixName)
}
