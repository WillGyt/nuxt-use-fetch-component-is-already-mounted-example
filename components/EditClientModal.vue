<script setup lang="ts">
import type { Tables } from '~/types/database.types';

const { client } = defineProps<{ client: Tables<'clients'> }>();

const newValue = ref(client.name);

const { add: addToast } = useToast();
const { close: closeModal } = useModal();

const { refresh } = useGetClients();

async function submit() {
  try {
    // Step 1: call the patch
    await $fetch(`/api/clients/${client.client_id}`, {
      method: 'patch',
      body: { name: newValue.value },
    });

    // Step 2: refresh the values
    await refresh();

    // Step 3: close the modal
    await closeModal();

    // (Optional): notify the change was ok
    addToast({ title: 'The name was modified' });
  } catch (error) {
    addToast({ title: 'Something went wrong', color: 'red' });
  }
}
</script>

<template>
  <UModal>
    <UCard>
      <p class="text-sm mb-3">Name edition</p>
      <UInput v-model="newValue"></UInput>
      <div class="flex justify-end mt-3">
        <UButton @click="submit">Submit</UButton>
      </div>
    </UCard>
  </UModal>
</template>
