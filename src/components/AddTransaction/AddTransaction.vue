<template>
  <div class="container">
    <h4>Add Transaction</h4>
    <form id="form" @submit="onSubmit">
      <Input id="title" v-model="title" type="text" placeholder="Enter title..." label="Title" :value="title" />
      <Input id="value" v-model="value" type="text" placeholder="Enter amount..." label="Amount (negative for expense, positive for income" :value="value" />
      <Button text="Add Transaction" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import Button from "@/components/Button/Button.vue";
  import Input from "@/components/Input/Input.vue";
  import type { TransactionType } from '@/components/Transaction/types';
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import { v4 as uuid } from 'uuid';

  const emit = defineEmits(['addTransaction']);
  const toast = useToast();

  const title = ref('');
  const value = ref('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (!title.value || !value.value) {
      toast.error('Please fill in all fields');

      return;
    }

    const transaction: TransactionType = {
      id: uuid(),
      title: title.value,
      value: parseFloat(value.value),
    };

    emit('addTransaction', transaction);

    title.value = '';
    value.value = '';
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
</style>
