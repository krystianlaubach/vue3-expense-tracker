<template>
  <header>
    <img v-if="includeLogo" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>{{ title }}</h1>
    <nav>
      <RouterLink to="/">Expenses</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import type { HeaderProps } from '@/components/Header/types';
  import { RouterLink } from 'vue-router';

  withDefaults(defineProps<HeaderProps>(), {
    title: 'Expense Tracker',
    includeLogo: true,
  });
</script>

<style scoped>
  header {
    text-align: center;
    display: block;
    margin: 0 auto 32px;
  }
  .logo {
    display: block;
    margin: 0 auto;
  }

  nav {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-top: 16px;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
</style>
