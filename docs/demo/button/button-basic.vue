<script setup lang="ts">
import { Alarm } from '@vicons/ionicons5'
</script>

<template>
  <div class="show-row">
    <c-button>Default</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button type="success">Success</c-button>
    <c-button type="info">Info</c-button>
    <c-button type="warning">Warning</c-button>
    <c-button type="danger">Danger</c-button>
  </div>

  <div class="show-row">
    <c-button plain>Plain</c-button>
    <c-button type="primary" plain>Primary</c-button>
    <c-button type="success" plain>Success</c-button>
    <c-button type="warning" plain>Warning</c-button>
    <c-button type="danger" plain>Danger</c-button>
    <c-button type="info" plain>Info</c-button>
  </div>

  <div class="show-row">
    <c-button round>Round</c-button>
    <c-button type="primary" round>Primary</c-button>
    <c-button type="success" round>Success</c-button>
    <c-button type="warning" round>Warning</c-button>
    <c-button type="danger" round>Danger</c-button>
    <c-button type="info" round>Info</c-button>
  </div>

  <div class="show-row">
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
</template>