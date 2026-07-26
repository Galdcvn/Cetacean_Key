import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database-generated'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env'
  )
}

const globalForSupabase = globalThis as unknown as {
  __supabaseClient: ReturnType<typeof createClient<Database>> | undefined
}

export const supabase =
  globalForSupabase.__supabaseClient ??
  createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })

if (!globalForSupabase.__supabaseClient) {
  globalForSupabase.__supabaseClient = supabase
}
