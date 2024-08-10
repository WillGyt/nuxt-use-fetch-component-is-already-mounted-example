<script setup lang="ts">
import { EditClientModal } from '#components';
import type { Tables } from '~/types/database.types';
const { client } = defineProps<{ client: Tables<'clients'> }>();

const { open } = useModal();
function handleClick() {
  open(EditClientModal, { client: client });
}
</script>

<template>
  <UButton
    icon="i-heroicons-pencil"
    size="xs"
    variant="link"
    color="gray"
    @click="handleClick"
  ></UButton>
</template>
