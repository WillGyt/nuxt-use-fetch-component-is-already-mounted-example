<script setup lang="ts">
definePageMeta({ colorMode: 'light' });

const { data: clients } = useGetClients();
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[400px] flex flex-col gap-y-2 pt-16">
      <h2 class="font-bold text-xl">Clients</h2>
      <div
        v-for="client in clients"
        class="flex justify-between"
      >
        <p>{{ client.name }}</p>
        <EditClientButton :client="client" />
      </div>
    </div>
  </div>
</template>
