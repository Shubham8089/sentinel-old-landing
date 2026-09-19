const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: unknown }>(event)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a valid email address.' })
  }

  // TODO(waitlist-sink): NOT PERSISTED YET.
  // For now the signup is only written to the server log (Vercel runtime logs).
  // Wire a real sink here, e.g. a Supabase `waitlist` table:
  //   create table waitlist (id uuid primary key default gen_random_uuid(),
  //     email text unique not null, created_at timestamptz default now());
  // then insert with a server-only key from runtime config. Do not expose that key to the client.
  console.info('[waitlist] signup (not persisted):', email)

  return { ok: true, persisted: false }
})
