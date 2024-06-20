import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'

import Collapse from '../src/collapse.vue'
import CollapseItem from '../src/collapse-item.vue'

describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['1']}>
          <CollapseItem title="标题-1" name="1">
            <p>aaa</p>
          </CollapseItem>
          <CollapseItem title="标题-2" name="2">
            <p>bbb</p>
          </CollapseItem>
          <CollapseItem title="标题-3" name="3" disabled>
            <p>ccc</p>
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['c-icon']
        },
        attachTo: document.body // 解决 dom 不更新
      }
    )

    // 查看生成的子标签数量是否正确
    const headers = wrapper.findAll('.c-collapse-item__header')
    const contents = wrapper.findAll('.c-collapse-item__wrap')
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    const firstHeader = headers[0]
    const firstContent = contents[0]

    // 查看渲染的内容是否正确
    expect(firstHeader.text()).toContain('标题-1')
    expect(firstContent.text()).toBe('aaa')

    // 默认打开了第一项，看看是否是可见的
    expect(firstContent.isVisible()).toBeTruthy()
    // 第二项应该是不可见的
    expect(contents[1].isVisible()).toBeFalsy()

    // 测试点击事件行为
    //  - 需要使用 await，等于与 await nextTIck()，（ expect()... ） 将在 Vue 更新 DOM 之前调用。
    await firstHeader.trigger('click')
    // 点击之后应该收起，表示不可见
    expect(firstContent.isVisible()).toBeFalsy()

    // 测试第二项
    await headers[1].trigger('click')
    // 第二项默认关闭，点击之后应该展开，表示可见
    expect(contents[1].isVisible()).toBeTruthy()

    // 测试第三项的 disabled
    const collapseItemContainers = wrapper.findAll('.c-collapse-item')
    const thirdItemContainer = collapseItemContainers[2]
    // 查看第三项上是否存在类名 is-disabled
    expect(thirdItemContainer.classes()).toContain('is-disabled')
    // 因为禁止，点击第三项也不会展开，即依然是不可见的
    await headers[2].trigger('click')
    expect(contents[2].isVisible()).toBeFalsy()
  })
})
