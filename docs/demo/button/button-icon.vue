<script setup lang="ts">
import { Alarm, Search, Airplane } from '@vicons/ionicons5'
import { AddCircle32Filled, SubtractCircle32Filled } from '@vicons/fluent'
</script>

<template>
  <div class="show-row">
    <c-button type="primary" :icon="Alarm" circle></c-button>
    <c-button type="primary" :icon="Search">搜索</c-button>
    <c-button type="primary" :icon="Search" icon-placement="right"
      >搜索</c-button
    >
    <c-button type="primary">
      <c-icon :size="18"> <AddCircle32Filled /> </c-icon>
      增加
    </c-button>
    <c-button type="primary">
      减少
      <c-icon :size="18"> <SubtractCircle32Filled /> </c-icon>
    </c-button>
    <c-button type="primary" icon-placement="right">
      <template #icon>
        <Airplane />
      </template>
      出行
    </c-button>
  </div>
</template>


