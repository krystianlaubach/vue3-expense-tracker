<template>
  <div class="container">
    <button class="button" :type="type" @click="$event.target.blur()">{{ text }}</button>
  </div>
</template>

<script setup lang="ts">
  import type { ButtonProps } from '@/components/Button/types';

  withDefaults(defineProps<ButtonProps>(), {
    type: 'submit',
  });
</script>

<style scoped>
  .container {
    margin: 0;
  }

  .button {
    cursor: pointer;
    background-color: var(--vt-c-accent);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    color: var(--color-text);
    text-transform: uppercase;
    font-weight: 600;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 16px;
    width: 100%;
  }

  .button:focus {
    outline: 0;
    box-shadow: none;
  }
</style>
