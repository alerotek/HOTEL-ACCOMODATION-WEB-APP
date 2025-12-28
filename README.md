Keyman Hotel — Project Scaffold
===============================
Starter scaffold for Keyman Hotel & Accommodation web app.

Structure:
- frontend: Next.js app (pages dir) with components and supabase client
- backend: Supabase Edge Functions (Node.js) and helpers
- database: SQL schema for Supabase/Postgres

Next steps:
- Fill in Supabase project credentials in `.env.local`.
- Implement Auth, Booking, Payments, Facilities, Reporting modules incrementally.

Developer notes:
- Keep `SUPABASE_SERVICE_ROLE_KEY` and `MPESA_*` secrets out of frontend.
