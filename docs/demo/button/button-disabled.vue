<script setup lang="ts"></script>

<template>
  <div class="show-row">
    <c-button disabled>Default</c-button>
    <c-button type="primary" disabled>Primary</c-button>
    <c-button type="success" disabled>Success</c-button>
    <c-button type="info" disabled>Info</c-button>
    <c-button type="warning" disabled>Warning</c-button>
    <c-button type="danger" disabled>Danger</c-button>
  </div>

  <div class="show-row">
    <c-button disabled plain>Default</c-button>
    <c-button type="primary" disabled plain>Primary</c-button>
    <c-button type="success" disabled plain>Success</c-button>
    <c-button type="info" disabled plain>Info</c-button>
    <c-button type="warning" disabled plain>Warning</c-button>
    <c-button type="danger" disabled plain>Danger</c-button>
  </div>
</template>