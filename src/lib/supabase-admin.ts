import { createClient } from '@supabase/supabase-js'

// Uses service_role key to bypass RLS for admin reads.
// Falls back to anon key at build time (no data returned).
// Add SUPABASE_SERVICE_ROLE_KEY to .env.local and Vercel env vars.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  (process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_ANON_KEY)!,
)
