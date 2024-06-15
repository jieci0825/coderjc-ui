<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@vicons/ionicons5'

const value = ref('')
</script>

<template>
  <div class="show-row">
    <c-input v-model="value" style="width: 350px" placeholder="Please input">
      <template #prepend>
        <div class="btn">http://</div>
      </template>
    </c-input>
  </div>

  <div class="show-row">
    <c-input v-model="value" style="width: 350px" placeholder="Please input">
      <template #append>
        <div class="btn">
          <c-icon :icon="Search" size="18"></c-icon>
        </div>
      </template>
    </c-input>
  </div>

  <div class="show-row">
    <c-input v-model="value" style="width: 350px" placeholder="Please input">
      <template #prepend>
        <div class="btn">start</div>
      </template>
      <template #append>
        <div class="btn">end</div>
      </template>
    </c-input>
  </div>
</template>

<style scoped>
.btn {
  padding: 0 10px;
}
</style>
