<template>
  <div class="view">
    <Balance :balance="balance" />
    <IncomeExpense :income="income" :expense="expense" />
    <TransactionList :transactions="transactions" @deleteTransaction="deleteTransaction"  />
    <AddTransaction @addTransaction="addTransaction" />
  </div>
</template>

<script setup lang="ts">
  import AddTransaction from '@/components/AddTransaction/AddTransaction.vue';
  import Balance from '@/components/Balance/Balance.vue';
  import IncomeExpense from '@/components/IncomeExpense/IncomeExpense.vue';
  import TransactionList from '@/components/TransactionList/TransactionList.vue';
  import type { TransactionType } from '@/components/Transaction/types';
  import { computed, onMounted, ref } from 'vue';
  import { useToast } from 'vue-toastification';

  const toast = useToast()
  const transactions: Array<TransactionType> = ref([]);

  const balance = computed(() => {
    return transactions.value.reduce((acc, transaction) => acc + transaction.value, 0);
  });

  const income = computed(() => {
    return transactions.value
      .filter(transaction => transaction.value > 0)
      .reduce((acc, transaction) => acc + transaction.value, 0);
  });

  const expense = computed(() => {
    return transactions.value
      .filter(transaction => transaction.value < 0)
      .reduce((acc, transaction) => acc + transaction.value, 0);
  });

  const addTransaction = (transaction: TransactionType) => {
    transactions.value = [...transactions.value, transaction];
    saveTransactions();
    toast.success('Transaction added');
  };

  const deleteTransaction = (id: number | string) => {
    transactions.value = transactions.value.filter(transaction => transaction.id !== id);
    saveTransactions();
    toast.success('Transaction deleted');
  };

  const saveTransactions = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
  };

  onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

    if (savedTransactions) {
      transactions.value = savedTransactions;
    }
  });
</script>
