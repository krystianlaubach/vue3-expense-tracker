<template>
  <div class="container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+£{{ Math.abs(income).toFixed(2) }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-£{{ Math.abs(expense).toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IncomeExpenseProps } from '@/components/IncomeExpense/types';

  defineProps<IncomeExpenseProps>();
</script>

<style scoped>
  .container {
    background-color: var(--vt-c-white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    color: var(--vt-c-indigo);
  }

  .container > div {
    flex: 1;
    text-align: center;
  }

  .container > div:first-of-type {
    border-right: 1px solid var(--vt-c-divider-light-1);
  }

  .money {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 5px 0;
  }

  .money.plus {
    color: var(--vt-c-text-accent);
  }

  .money.minus {
    color: var(--vt-c-text-warning);
  }
</style>
