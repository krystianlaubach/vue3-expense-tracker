<template>
  <div class="container">
    <h4>Your Balance</h4>
    <h1 id="balance">{{ balance < 0 ? '-£' + Math.abs(balance).toFixed(2) : '£' + Math.abs(balance).toFixed(2) }}</h1>
  </div>
</template>

<script setup lang="ts">
  import type { BalanceProps } from '@/components/Balance/types';

  defineProps<BalanceProps>();
</script>

<style scoped>
  .container {
    text-align: left;
  }

  h4 {
    color: var(--vt-c-text-accent);
  }
</style>
