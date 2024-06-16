<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  age: '',
  hobbys: ['睡觉']
})

const labelPosition = ref('top')

const handleClick = (pos: string) => {
  labelPosition.value = pos
}
</script>

<template>
  <div class="show-row">
    <c-button-group type="primary">
      <c-button @click="handleClick('left')"> Left </c-button>
      <c-button @click="handleClick('top')"> Top </c-button>
      <c-button @click="handleClick('right')"> Right </c-button>
    </c-button-group>
  </div>

  <c-form
    ref="form"
    :label-position="labelPosition"
    :model="formData"
    :label-width="60"
  >
    <c-form-item label="用户名" prop="username">
      <c-input
        v-model="formData.username"
        placeholder="please input username"
      ></c-input>
    </c-form-item>
    <c-form-item label="密码" prop="password">
      <c-input
        type="password"
        show-password
        v-model="formData.password"
        placeholder="please input possword"
      ></c-input>
    </c-form-item>
    <c-form-item label="年龄" prop="age">
      <c-input v-model="formData.age" placeholder="please input age"></c-input>
    </c-form-item>
    <c-form-item label="爱好" prop="hobbys">
      <c-checkbox-group v-model="formData.hobbys">
        <c-checkbox label="吃饭" value="吃饭"></c-checkbox>
        <c-checkbox label="睡觉" value="睡觉"></c-checkbox>
        <c-checkbox label="打豆豆" value="打豆豆"></c-checkbox>
      </c-checkbox-group>
    </c-form-item>
  </c-form>
</template>

<style scoped></style>
