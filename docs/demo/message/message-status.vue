<script setup lang="ts">
import { CMessage } from '@coderjc-ui/components'
import { h } from 'vue'

const showSuccess = () => {
  CMessage({
    message: '梨花院落溶溶月，柳絮池塘淡淡风',
    type: 'success'
  })
}

const showWarning = () => {
  CMessage({
    message: '人生若只如初见，何事秋风悲画扇',
    type: 'warning'
  })
}

const showError = () => {
  CMessage({
    message: '长相思兮长相忆，短相思兮无穷极',
    type: 'error'
  })
}

const showInfo = () => {
  CMessage({
    message: '晚云收，夕阳佳，一川枫叶，两岸芦花',
    type: 'info'
  })
}
</script>

<template>
  <div class="show-row">
    <c-button @click="showSuccess" type="success">成功</c-button>
    <c-button @click="showWarning" type="warning">警告</c-button>
    <c-button @click="showError" type="danger">错误</c-button>
    <c-button @click="showInfo" type="info">信息</c-button>
  </div>
</template>
