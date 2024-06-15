<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { Search, CalendarNumberSharp } from '@vicons/ionicons5'

const value = ref('')
const password = ref('')
const textarea = ref(``)
const value1 = ref('')

watchEffect(() => {
  // console.log('textarea', textarea.value)
})
</script>

<template>
  <div class="container">
    <div>
      <c-input
        v-model="value"
        style="width: 300px"
        placeholder="请输入..."
        name="name"
        clearable
        :disabled="false"
      >
        <template #prepend>
          <div class="btn">start</div>
        </template>
        <template #prefix>
          <c-icon :icon="Search"> </c-icon>
        </template>
        <template #suffix>
          <!-- <c-icon style="margin-left: 10px">
            <CalendarNumberSharp />
          </c-icon> -->
        </template>
        <template #append>
          <div class="btn">end</div>
        </template>
      </c-input>
    </div>

    <!-- size -->
    <div>
      <c-input style="width: 100px" placeholder="large" size="large"> </c-input>
      <c-input style="width: 100px" placeholder="default"> </c-input>
      <c-input style="width: 100px" placeholder="small" size="small"> </c-input>
    </div>

    <!-- password -->
    <div>
      <c-input
        type="password"
        style="width: 240px"
        v-model="password"
        placeholder="请输入密码"
        show-password
      >
      </c-input>
    </div>

    <!-- textarea and length-->
    <div>
      <c-input
        style="width: 240px"
        v-model="value1"
        maxlength="10"
        placeholder="长度限制"
        show-word-limit
      >
      </c-input>
    </div>

    <div>
      <c-input
        style="width: 400px"
        type="textarea"
        v-model="textarea"
        placeholder="请输入内容..."
        :rows="2"
        resize="none"
      >
      </c-input>
    </div>

    <div>
      <c-input
        style="width: 400px"
        type="textarea"
        v-model="textarea"
        placeholder="请输入内容..."
        show-word-limit
        maxlength="200"
      >
      </c-input>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 80vw;
  margin-top: 20px;
  border: 1px solid #999;
  overflow: auto;
  padding: 20px;
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .btn {
    padding: 0 12px;
  }
}
</style>
