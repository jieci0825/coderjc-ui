<script setup lang="ts">
import { ref } from 'vue'
import { Alarm } from '@vicons/ionicons5'

const value = ref([])
</script>

<template>
  <c-collapse v-model="value">
    <c-collapse-item title="标题1" name="1">
      <template #title>
        <c-icon :size="20" :icon="Alarm" color="#37a6a6" />
        <span> 这个标题我想换一下口味</span>
      </template>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit
        illum consequuntur, totam porro repudiandae quo nisi facilis!
        Reprehenderit maiores possimus odit in obcaecati eum aliquid veritatis
        et nisi suscipit!
      </p>
    </c-collapse-item>
    <c-collapse-item title="标题2" name="2">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        excepturi natus error quam aperiam consequatur dolores amet reiciendis
        provident aspernatur, sit veritatis consectetur cumque dicta debitis
        nihil omnis fugit alias.
      </p>
    </c-collapse-item>
    <c-collapse-item title="标题3" name="3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        perferendis, repudiandae molestiae quaerat et labore animi facere quos
        consequuntur in repellat corrupti iusto totam omnis enim reprehenderit
        quo asperiores accusantium.
      </p>
    </c-collapse-item>
  </c-collapse>
</template>

<style scoped></style>
