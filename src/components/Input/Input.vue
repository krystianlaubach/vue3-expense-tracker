<template>
  <div class="container">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :placeholder="placeholder" :value="value" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup lang="ts">
  import type { InputProps } from '@/components/Input/types';

  defineProps<InputProps>();
</script>

<style scoped>
  .container {
    margin-bottom: 32px;
  }

  label {
    display: inline-block;
    margin-bottom: 8px;
  }

  input[type='text'],
  input[type='number'] {
    border: 1px solid #dedede;
    border-radius: 8px;
    display: block;
    font-size: 16px;
    padding: 16px;
    width: 100%;
  }
</style>
