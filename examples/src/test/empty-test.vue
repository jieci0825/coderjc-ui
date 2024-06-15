<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="container">
    <c-empty>
      <template #default>
        <c-button type="primary" size="small">按钮</c-button>
      </template>
    </c-empty>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 80vw;
  margin-top: 20px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
}
</style>
