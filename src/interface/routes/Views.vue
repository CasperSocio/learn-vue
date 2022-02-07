<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import DebugFrame from '../components/DebugFrame.vue'

export default defineComponent({
  components: {
    RouterLink,
    DebugFrame
  },
  setup() {
    const menuItems = ref([
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' }
    ])
    const navIsCollapsed = ref(true)
    const windowWidth = ref(window.innerWidth)

    function collapseNav() {
      navIsCollapsed.value = true
    }
    function openNav() {
      navIsCollapsed.value = false
    }
    function toggleNav() {
      navIsCollapsed.value = !navIsCollapsed.value
    }
    return {
      collapseNav,
      menuItems,
      navIsCollapsed,
      openNav,
      toggleNav,
      windowWidth
    }
  }
})
</script>

<template>
<header class="Header Header-wide">
  <DebugFrame label=".Header" />

  <div class="Header--content Header--content-wide">
    <DebugFrame label=".Header--content" />

    <!-- Brand name -->
    <RouterLink to="/" class="Header--brand">
      <DebugFrame label=".Header--brand" position="left" />
      <h1 class="Header--brand-name">Socio</h1>
    </RouterLink>

    <!-- Nav -->
    <nav class="Header--nav">

      <!-- Menu collapse button -->
      <button
        class="Header--nav-btn"
        @click="toggleNav"
      >
        <DebugFrame label=".Header--nav-btn" position="right" />

        <!-- Hamburger icon -->
        <img
          class="Header--nav-icon"
          src="/src/assets/icons/hamburger.svg"
          alt="Menu icon"
        >
      </button>

      <!-- Menu -->
      <ul
        v-if="!navIsCollapsed || windowWidth > 916"
        class="Header--nav-list"
        @mouseleave="collapseNav"
      >
        <li v-for="item in menuItems" class="Header--nav-item">
          <DebugFrame label=".Header--nav-list li" position="right" />
          <RouterLink :to="item.path">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </nav>

  </div>
</header>

<div class="Wrapper">
  <DebugFrame label=".Wrapper" />

  <main class="Wrapper--content">
    <DebugFrame label=".Wrapper--content" />
  </main>
</div>

<footer class="Footer">
  <DebugFrame label=".Footer" />

  <div class="Footer--content">
    <DebugFrame label=".Footer--content" />

  </div>
</footer>
</template>

<style scoped>
.Header {
  background-color: var(--primary);
  color: white;
  min-height: var(--header-height);
  position: relative;
  width: 100%;
}
.Header--brand {
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 0 1rem;
  position: relative;
  width: fit-content;
}
.Header--brand:hover {
  text-decoration: none;
}
.Header--brand-name {
  font-size: 1.8rem;
  white-space: nowrap;
}

.Header--content {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
.Header--content-default {
  margin: 0 auto;
  max-width: var(--page-width);
}
.Header--content-wide {

}

.Header--nav {
  height: 100%;
  max-width: fit-content;
  min-width: var(--header-height);
  position: relative;
}
.Header--nav-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  padding: 0;
  width: 100%;
  transition: .2s;
}
.Header--nav-btn:hover {
  background-color: rgba(255, 255, 255, .1);
}
.Header--nav-icon {
  display: block;
  height: 100%;
  width: auto;
}
.Header--nav-item {
  position: relative;
}
.Header--nav-item:hover {
  text-decoration: underline;
}
.Header--nav-item a {
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.Header--nav-list {
  background-color: white;
  color: black;
  margin: 0;
  max-width: calc(var(--page-width) / 2);
  min-width: fit-content;
  width: 50vw;
  position: absolute;
  top: var(--header-height); right: 0;
  z-index: 100;
}

.Wrapper {
  height: 100%;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}
.Wrapper--content {
  background-color: skyblue;
  height: 100%;
  margin: 0 auto;
  max-width: var(--page-width);
  position: relative;
  width: 100%;
}

.Footer {
  background-color: aquamarine;
  height: 120px;
  margin-top: auto;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}
.Footer--content {
  background-color: rgba(0, 0, 0, .1);
  height: 100%;
  margin: 0 auto;
  max-width: var(--page-width);
  position: relative;
  width: 100%;
}

@media screen and (min-width: 916px) {
  .Header--content-default .Header--brand {
    padding: 0;
  }

  .Header--nav-btn {
    display: none;
  }

  .Header--nav-list {
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: none;
    position: static;
    width: 100%;
  }
  .Header--nav-item {
    top: none; right: none;
    z-index: 100;
  }
  .Header--nav-item a {
    align-items: center;
    height: 100%;
    padding: 1rem;
  }
  .Header--nav-item:hover {
    text-decoration: none;
  }
}
</style>
