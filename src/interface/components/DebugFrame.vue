<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

type TextAlign = 'center' | 'left' | 'right'

export default defineComponent({
  props: {
    label: {
      type: String
    },
    position: {
      default: 'center',
      required: false,
      type: String as PropType<TextAlign>
    }
  },
  setup() {
    const showingLabel = ref(false)

    function hideLabel() {
      showingLabel.value = false
    }
    function showLabel() {
      showingLabel.value = true
    }
    return {
      hideLabel,
      showingLabel,
      showLabel
    }
  }
})
</script>

<template>
<div
  v-if="$route.query.debug === 'true'"
  class="DebugFrame"
  @mouseenter="showLabel"
  @mouseleave="hideLabel"
></div>
<p
  v-if="$route.query.debug === 'true' && showingLabel"
  :class="['DebugFrame--label', `DebugFrame--label-${position}`]"
>
  {{ label }}
</p>
</template>

<style scoped>
.DebugFrame {
  border: 6px solid salmon;
  opacity: 0;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 50;
}
.DebugFrame:hover {
  opacity: 1;
}
.DebugFrame--label {
  background-color: salmon;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  padding: .2rem .4rem;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: fit-content;
  z-index: 51;
}
.DebugFrame--label-center {
  left: 0;
  right: 0;
  margin: 0 auto;
}
.DebugFrame--label-left {
  left: 0;
}
.DebugFrame--label-right {
  right: 0;
}
</style>
