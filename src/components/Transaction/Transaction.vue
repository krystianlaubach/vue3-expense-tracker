<template>
  <li :key="transaction.id" :class="transaction.value < 0 ? 'minus' : 'plus'">
    {{ transaction.title }}
    <span>{{ transaction.value < 0 ? '-£' + Math.abs(transaction.value).toFixed(2) : '£' + Math.abs(transaction.value).toFixed(2) }}</span>
    <button class="delete-button" @click="deleteTransaction(transaction.id)">x</button>
  </li>
</template>

<script setup lang="ts">
  import type { TransactionProps } from '@/components/Transaction/types';

  defineProps<TransactionProps>();

  const emit = defineEmits(['deleteTransaction']);

  const deleteTransaction = (id: number | string) => {
    emit('deleteTransaction', id);
  };
</script>

<style scoped>
  li {
    background-color: var(--vt-c-white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    color: var(--vt-c-indigo);
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 16px;
    margin: 24px 0;
  }

  li.plus {
    border-left: 5px solid var(--vt-c-accent);
  }

  li.minus {
    border-left: 5px solid var(--vt-c-warning);
  }

  .delete-button {
    cursor: pointer;
    background-color: var(--vt-c-warning);
    border: 0;
    border-radius: 50%;
    color: var(--color-text);
    font-size: 20px;
    line-height: 20px;
    padding: 2px 8px 4px 8px;
    position: absolute;
    top: 0;
    right: -40px;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  li:hover .delete-button {
    opacity: 1;
  }

  .delete-button:focus {
    outline: 0;
  }
</style>
