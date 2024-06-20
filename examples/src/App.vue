<script setup lang="ts">
import { ref, watchEffect } from 'vue'

// const value = ref('1')
const value = ref(['1'])

watchEffect(() => {
  console.log(value.value)
})
</script>

<template>
  <div class="container">
    <c-collapse v-model="value" :accordion="true">
      <c-collapse-item title="测试标题-1" name="1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet
          sed voluptate fugit dolorem nemo pariatur nostrum deserunt esse
          voluptatibus possimus autem nesciunt ipsum similique quibusdam iste,
          vero libero. Harum.
        </p>
      </c-collapse-item>
      <c-collapse-item title="测试标题-2" name="2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A impedit
          minima rem consectetur? Reiciendis itaque eius voluptate, nihil
          laborum provident eum consectetur dolores, porro, obcaecati vel
          possimus et praesentium dolorum.
        </p>
      </c-collapse-item>
      <c-collapse-item title="测试标题-3" name="3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eum
          voluptatibus odit non nulla pariatur dolorum maiores quaerat labore
          aperiam, atque corrupti architecto. Sequi id eveniet aliquam
          reiciendis, illum iusto.
        </p>
      </c-collapse-item>
    </c-collapse>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  margin-top: 20px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
  user-select: none;
}
</style>
