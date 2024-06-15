<script setup lang="ts">
import { Alarm, Camera, CashSharp, Accessibility } from '@vicons/ionicons5'
import { CIcon } from '@coderjc-ui/components'
import { ref } from 'vue'

const loading = ref(false)
const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="container">
    <h2>图标</h2>
    <div class="item">
      <c-button type="primary" :icon="Alarm" />
      <c-button type="primary" :icon="Camera" />
      <c-button type="primary">
        <template #icon>
          <Accessibility />
        </template>
      </c-button>
      <c-button type="primary" :icon="CashSharp" icon-placement="right">
        primary
      </c-button>
      <c-button type="primary">
        primary <c-icon color="#ccc" :size="24"><Accessibility /></c-icon>
      </c-button>
    </div>

    <h2>尺寸</h2>
    <div class="item">
      <c-button size="large"> large </c-button>
      <c-button> default </c-button>
      <c-button size="small"> small </c-button>
      <c-button size="large" circle :icon="Alarm" />
      <c-button circle :icon="Alarm" />
      <c-button size="small" circle :icon="Alarm" />
    </div>

    <h2>类型</h2>
    <div class="item">
      <c-button> default </c-button>
      <c-button type="primary"> primary </c-button>
      <c-button type="success"> success </c-button>
      <c-button type="warning"> warning </c-button>
      <c-button type="danger"> danger </c-button>
      <c-button type="info"> info </c-button>
    </div>

    <h2>朴素</h2>
    <div class="item">
      <c-button plain> default </c-button>
      <c-button type="primary" plain> primary </c-button>
      <c-button type="success" plain> success </c-button>
      <c-button type="warning" plain> warning </c-button>
      <c-button type="danger" plain> danger </c-button>
      <c-button type="info" plain> info </c-button>
    </div>

    <h2>圆角</h2>
    <div class="item">
      <c-button round> default </c-button>
      <c-button type="primary" round> primary </c-button>
      <c-button type="success" round> success </c-button>
      <c-button type="warning" round> warning </c-button>
      <c-button type="danger" round> danger </c-button>
      <c-button type="info" round> info </c-button>
    </div>

    <h2>圆形</h2>
    <div class="item">
      <c-button circle :icon="Alarm" />
      <c-button type="primary" circle :icon="Alarm" />
      <c-button type="success" circle :icon="Alarm" />
      <c-button type="warning" circle :icon="Alarm" />
      <c-button type="danger" circle :icon="Alarm" />
      <c-button type="info" circle>
        <c-icon>
          <Alarm />
        </c-icon>
      </c-button>
    </div>

    <h2>加载中</h2>
    <div class="item">
      <c-button @click="handleClick" loading-text="load..." :loading="loading"
        >Click me</c-button
      >
      <c-button @click="handleClick" :loading="loading" type="primary"
        >Click me</c-button
      >
    </div>

    <h2>禁用</h2>
    <div class="item">
      <c-button disabled> default </c-button>
      <c-button type="primary" disabled> primary </c-button>
      <c-button type="success" disabled> success </c-button>
      <c-button type="warning" disabled> warning </c-button>
      <c-button type="danger" disabled> danger </c-button>
      <c-button type="info" disabled> info </c-button>
    </div>
    <div class="item">
      <c-button plain disabled> default </c-button>
      <c-button type="primary" plain disabled> primary </c-button>
      <c-button type="success" plain disabled> success </c-button>
      <c-button type="warning" plain disabled> warning </c-button>
      <c-button type="danger" plain disabled> danger </c-button>
      <c-button type="info" plain disabled> info </c-button>
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
  h2 {
    margin-bottom: 10px;
  }
  .item {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  & > .item:last-child {
    margin-bottom: 0;
  }
}
</style>
