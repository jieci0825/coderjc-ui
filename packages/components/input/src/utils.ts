export function calcTextareaHeight(
  targetElement: HTMLTextAreaElement,
  minRows = 1,
  maxRows?: number
): { minH: number; maxH: number } | null {
  if (targetElement) {
    const contentHeight = targetElement.scrollHeight
    const clientHeight = targetElement.clientHeight

    const computedStyle = window.getComputedStyle(targetElement)
    const h = +computedStyle.lineHeight.replace('px', '')
    const padding =
      +computedStyle.paddingTop.replace('px', '') +
      +computedStyle.paddingBottom.replace('px', '')

    let min = h * minRows + padding
    let max = h * (maxRows || minRows) + padding

    console.log(contentHeight, clientHeight)

    if (contentHeight - clientHeight >= h) {
      // max = min
    }

    return { minH: min, maxH: max }
  }
  return null
}
