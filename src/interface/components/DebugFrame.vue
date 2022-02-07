<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRoute } from 'vue-router'

type TextAlign = 'center' | 'left' | 'right'

export default defineComponent({
  data: () => ({
    debug: false,
    showingLabel: false
  }),
  methods: {
    hideLabel() {
      this.showingLabel = false
    },
    showLabel() {
      this.showingLabel = true
    }
  },
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
    const route = useRoute()
    if (route.query['debug'] === 'true') {
      return {
        debug: true
      }
    }
  }
})
</script>

<template>
<div
  v-if="debug"
  class="DebugFrame"
  @mouseenter="showLabel"
  @mouseleave="hideLabel"
></div>
<p
  v-if="debug && showingLabel"
  :class="['DebugFrame--label', `DebugFrame--label-${position}`]"
>
  {{ label }}
</p>
</template>

<style scoped>
.DebugFrame {
  border: 6px solid salmon;
  opacity: 0;
  pointer-events: all;
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
