<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router';
import { DebugFrame } from '../components'

export default defineComponent({
    setup() {
        const menuItems = ref([
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: 'Posts', path: '/posts' },
            { label: 'Product', path: '/product' },
        ]);
        const navIsCollapsed = ref(true);
        const windowWidth = ref(window.innerWidth);
        function collapseNav() {
            navIsCollapsed.value = true;
        }
        function toggleNav() {
            navIsCollapsed.value = !navIsCollapsed.value;
        }
        return {
            collapseNav,
            menuItems,
            navIsCollapsed,
            toggleNav,
            windowWidth
        };
    },
    components: { DebugFrame, RouterLink }
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
          <RouterLink :to="item.path">
            <DebugFrame label=".Header--nav-list a" position="right" />
            {{ item.label }}
          </RouterLink>
        </li>
        <li class="Header--nav-item">
          <a
            href="https://github.com/Socio-Development"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DebugFrame label=".Header--nav-list a" position="right" />
            GitHub
          </a>
        </li>
      </ul>
    </nav>

  </div>
</header>
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
.Header--content-wide {}

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
  position: relative;
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
