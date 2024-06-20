<script setup lang="ts">
import { ref } from 'vue'

// 手风琴模式下，你可以设置一个数组，但是只会存在一个选中的 name
// const value = ref(['1'])
// 也可以直接写一个单字符
// 一般我们更推荐你使用单字符
const value = ref('1')
</script>

<template>
  <c-collapse v-model="value" accordion>
    <c-collapse-item title="标题1" name="1">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        neque exercitationem qui dolore, ipsa iste? Perspiciatis explicabo quae
        nihil aspernatur quidem velit dolore numquam nostrum, reiciendis
        mollitia quaerat exercitationem ducimus.
      </p>
    </c-collapse-item>
    <c-collapse-item title="标题2" name="2">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia quam sint sit? Iste sapiente consequatur neque deleniti dolorum
        culpa dolore nihil pariatur vero! Nemo quae nam quia dolorem repellat?
      </p>
    </c-collapse-item>
    <c-collapse-item title="标题3" name="3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis
        repellat nulla debitis cum iure dolorum! Nesciunt, harum, optio eum
        libero quisquam explicabo in facere eius culpa mollitia tempore!
        Corrupti.
      </p>
    </c-collapse-item>
  </c-collapse>
</template>

<style scoped></style>
