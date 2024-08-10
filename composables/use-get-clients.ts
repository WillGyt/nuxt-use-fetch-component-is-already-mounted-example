export function useGetClients() {
  return useFetch('/api/clients', { key: 'clients' })
}
