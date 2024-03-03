<template>
  <div v-if="transactions.length > 0" class="container">
    <h4>Transactions</h4>
    <ul id="list" class="list">
      <Transaction v-for="transaction in transactions" :transaction="transaction" @deleteTransaction="deleteTransaction" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import Transaction from '@/components/Transaction/Transaction.vue';
  import type { TransactionListProps } from '@/components/TransactionList/types';

  defineProps<TransactionListProps>();

  const emit = defineEmits(['deleteTransaction']);

  const deleteTransaction = (id: number | string) => {
    emit('deleteTransaction', id);
  };
</script>

<style scoped>
  .container {
    text-align: left;
    margin-top: 32px;
  }

  h4 {
    color: var(--vt-c-text-accent);
  }

  .list {
    list-style-type: none;
    padding: 0;
  }
</style>
