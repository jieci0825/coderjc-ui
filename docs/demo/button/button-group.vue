<script setup lang="ts">
import { Alarm, Boat, EarthSharp } from '@vicons/ionicons5'
import { ChevronLeft28Regular, ChevronRight28Regular } from '@vicons/fluent'
</script>

<template>
  <div class="show-row">
    <c-button-group type="primary">
      <c-button>
        <c-icon size="18">
          <ChevronLeft28Regular />
        </c-icon>
        上一页
      </c-button>
      <c-button>
        下一页
        <c-icon size="18">
          <ChevronRight28Regular />
        </c-icon>
      </c-button>
    </c-button-group>

    <c-button-group type="success">
      <c-button>
        <c-icon size="18">
          <Alarm />
        </c-icon>
      </c-button>
      <c-button>
        <c-icon size="18">
          <Boat />
        </c-icon>
      </c-button>
      <c-button>
        <c-icon size="18">
          <EarthSharp />
        </c-icon>
      </c-button>
    </c-button-group>
  </div>
</template>
