<script setup lang="ts">
import { ref } from 'vue'

const check = ref(true)
const disabled = ref(false)
const indeterminate = ref(false)

const onChange = (val: boolean) => {
  console.log('parent: ', val)
}

const checkedCities = ref(['Shanghai', 'Beijing'])
// const checkedCities = ref(['Shanghai--@@', 'Beijing--@@'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleGroupChange = (val: any) => {
  console.log('handleGroupChange', val)
}
</script>

<template>
  <div class="container">
    <!-- <c-checkbox
      @change="onChange"
      v-model="check"
      :disabled="disabled"
      :indeterminate="indeterminate"
      label="node"
      :value="111"
    >
    </c-checkbox> -->
    <h3>{{ JSON.stringify(checkedCities) }}</h3>
    <br />

    <c-checkbox-group v-model="checkedCities" @change="handleGroupChange">
      <c-checkbox
        v-for="city in cities"
        :key="city"
        :label="city"
        :value="city"
      >
      </c-checkbox>
    </c-checkbox-group>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  margin-top: 100px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
}
</style>
