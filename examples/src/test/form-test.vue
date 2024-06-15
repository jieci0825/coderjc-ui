<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { FormInstance } from '@coderjc-ui/components'
import { SizeType } from '@coderjc-ui/components/form/src/types'

const ruleFormRef = ref<FormInstance>()

const formData = ref({
  name: '',
  password: '',
  address: '',
  hobby: []
})

const reset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  // formEl.resetFields('name')
  // formEl.resetFields(['name','password'])
  console.log('reset:', formData.value)
}

const clear = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.clearValidates()
  formEl.clearValidates('name')
  // formEl.clearValidates(['name','password'])
  console.log('clear:', formData.value)
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // try {
  //   await formEl.validate((valid, fields) => {
  //     console.log('App.vue:', valid, fields)
  //     if (valid) {
  //       console.log('submit!')
  //     } else {
  //       console.log('error submit!', fields)
  //     }
  //   })
  // } catch (error) {}
  try {
    const result = await formEl.validate()
    console.log('submit: ', result)
  } catch (error) {
    console.log('error submit:', error)
  }

  console.log('submit:', formData.value)
}

const validate1 = (_: any, value: any, callback: any) => {
  if (value.length <= 3) {
    callback()
  } else {
    callback(new Error('地址不能大于三个字'))
  }
}

const rules = {
  name: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ],
  address: { validator: validate1, trigger: 'change' }
}

const formSize = ref<SizeType>('default')

const hobbys = ref<string[]>(['睡觉', '吃饭', '打豆豆'])

watchEffect(() => {
  console.log('formSize:', formData.value.hobby)
})
</script>

<template>
  <div class="container">
    <div style="margin-bottom: 20px">
      <h3>尺寸</h3>
      <c-button @click="formSize = 'large'">large</c-button>
      <c-button @click="formSize = 'default'">default</c-button>
      <c-button @click="formSize = 'small'">small</c-button>
    </div>

    <c-form
      :size="formSize"
      ref="ruleFormRef"
      :model="formData"
      :label-width="60"
      label-position="right"
      :rules="rules"
    >
      <c-form-item
        required
        label="姓名"
        prop="name"
        :rules="[
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: ['change', 'blur']
          }
        ]"
      >
        <!-- <template #label>
        <span>sss</span>
      </template> -->
        <c-input v-model="formData.name" placeholder="请输入用户名"></c-input>
      </c-form-item>
      <c-form-item
        label="密码"
        prop="password"
        :rules="[
          {
            min: 8,
            max: 12,
            message: '长度在 8 到 12 个字符',
            trigger: 'blur'
          }
        ]"
      >
        <c-input
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
        ></c-input>
        <!-- <template #error="{ error }">
          <div>----{{ error }}</div>
        </template> -->
      </c-form-item>

      <c-form-item label="地址" prop="address">
        <c-input v-model="formData.address" placeholder="请输入地址"></c-input>
      </c-form-item>

      <c-form-item label="爱好" prop="hobby">
        <c-checkbox-group v-model="formData.hobby">
          <!-- <c-checkbox label="睡觉" value="睡觉"></c-checkbox>
          <c-checkbox label="吃饭" value="吃饭"></c-checkbox>
          <c-checkbox label="打豆豆" value="打豆豆"></c-checkbox> -->
          <c-checkbox
            v-for="h in hobbys"
            :key="h"
            :label="h"
            :value="h"
          ></c-checkbox>
        </c-checkbox-group>
      </c-form-item>

      <!-- 按钮 -->
      <c-form-item>
        <c-button plain @click="reset(ruleFormRef)">重置</c-button>
        <c-button type="primary" @click="submitForm(ruleFormRef)"
          >提交</c-button
        >
        <c-button type="success" @click="clear(ruleFormRef)">清空</c-button>
      </c-form-item>
    </c-form>
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
