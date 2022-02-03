<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  type BtnShape =
    | 'pill'
    | 'rounded'
    | 'soft'
    | 'square'
  
  type BtnSize =
    | 'lg'
    | 'md'
    | 'sm'

  type BtnTheme =
    | 'danger'
    | 'link'
    | 'primary'
    | 'secondary'
    | 'success'

  export default defineComponent({
    props: {
      label: {
        required: true,
        type: String
      },
      shape: String as PropType<BtnShape>,
      size: String as PropType<BtnSize>,
      theme: String as PropType<BtnTheme>
    }
  })
</script>

<template>
  <button
    :class="[
      'shape-' + (shape || 'soft'),
      'size-' + (size || 'md'),
      'theme-' + (theme || 'secondary')
    ]"
  >
    {{ label }}
  </button>
</template>

<style scoped>
button {
  --color-text: #fff;

  border: 1px solid transparent;
  color: var(--color-text);
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
  width: fit-content;
}
button:disabled {
  opacity: .65;
  pointer-events: none;
}
button:hover {
  filter: brightness(110%);
}

.shape-pill {
  border-radius: 10rem;
}
.shape-rounded {
  border-radius: .75rem;
}
.shape-soft {
  border-radius: .25rem;
}
.shape-square {
  border-radius: 0;
}

.size-lg {
  font-size: 1rem;
  padding: .75rem 1.5rem;
}
.size-md {
  font-size: .875rem;
  padding: .6875rem 1.25rem;
}
.size-sm {
  font-size: .75rem;
  padding: .625rem 1rem;
}

.theme-danger {
  background-color: var(--danger);
  border-color: var(--danger);
}
.theme-link {
  background-color: transparent;
  color: var(--link);
  padding: 0;
  text-decoration: underline;
}
.theme-primary {
  background-color: var(--primary);
  border-color: var(--primary);
}
.theme-secondary {
  background-color: var(--secondary);
  border-color: var(--secondary);
}
.theme-success {
  background-color: var(--success);
  border-color: var(--success);
}
</style>
