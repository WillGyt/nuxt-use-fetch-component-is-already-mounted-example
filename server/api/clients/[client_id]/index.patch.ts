import { serverSupabaseClient } from '#supabase/server'
import { Database } from '~/types/database.types'
import z from 'zod'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)

  const params = await getValidatedRouterParams(event, (params) =>
    z.object({ client_id: z.coerce.string() }).parse(params)
  )

  const body = await readValidatedBody(event, (body) =>
    z.object({ name: z.string() }).parse(body)
  )

  await client
    .from('clients')
    .update(body)
    .eq('client_id', params.client_id)
    .select()
    .single()
    .throwOnError()
})

