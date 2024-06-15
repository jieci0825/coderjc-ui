<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('')

const flag = ref(false)

watchEffect(() => {
  console.log('value: ', value.value)
})
</script>

<template>
  <div class="container">
    <c-button>注册</c-button>
    <c-checkbox label="11" value="222" v-model="flag">111</c-checkbox>
    <div>
      <c-input
        v-model="value"
        show-word-limit
        minlength="10"
        maxlength="20"
        placeholder="please input..."
        clearable
      ></c-input>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  margin-top: 20px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
}
</style>
