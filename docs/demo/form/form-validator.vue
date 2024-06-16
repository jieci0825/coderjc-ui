<script setup lang="ts">
import type { FormInstance, FormDataRules } from 'coderjc-ui'
import { reactive, ref } from 'vue'

interface RuleForm {
  username: string
  password: string
  address: string
  hobbys: string[]
}

const formData = reactive<RuleForm>({
  username: '',
  password: '',
  address: '',
  hobbys: []
})

const ruleFormRef = ref<FormInstance>()

const rules: FormDataRules<typeof formData> = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度在3到10个字符', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度在6到16个字符', trigger: 'change' }
  ],
  address: [{ required: true, message: '请输入你的地址', trigger: 'blur' }],
  hobbys: [
    { type: 'array', required: true, message: '请选择爱好', trigger: 'change' }
  ]
})

const resetForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.clearValidates()
}

// 校验存在两种用法，根据你的喜好选择合适的即可
//  - 1. async await
const submitForm = async () => {
  if (!ruleFormRef.value) return

  try {
    const result = await ruleFormRef.value.validate()
    console.log('submit success: ', result, formData)
  } catch (error) {
    console.log('submit error', error)
  }
}
//  - 2. callback
// const submitForm = () => {
//   if (!ruleFormRef.value) return

//   ruleFormRef.value.validate((valid, fields) => {
//     if (valid) {
//       console.log('submit success: ', valid)
//     } else {
//       console.log('submit error: ', fields)
//     }
//   })
// }
</script>

<template>
  <c-form ref="ruleFormRef" :model="formData" :rules="rules" :label-width="60">
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
    <c-form-item label="地址" prop="address">
      <c-input
        v-model="formData.address"
        placeholder="please input age"
      ></c-input>
    </c-form-item>
    <c-form-item label="爱好" prop="hobbys">
      <c-checkbox-group v-model="formData.hobbys">
        <c-checkbox label="吃饭" value="吃饭"></c-checkbox>
        <c-checkbox label="睡觉" value="睡觉"></c-checkbox>
        <c-checkbox label="打豆豆" value="打豆豆"></c-checkbox>
      </c-checkbox-group>
    </c-form-item>
    <c-form-item>
      <c-button @click="resetForm">重置</c-button>
      <c-button type="primary" @click="submitForm"> 创建 </c-button>
    </c-form-item>
  </c-form>
</template>

<style scoped></style>
