import { createClient } from "@supabase/supabase-js";

// TODO: replace with actual env variables in .env.local
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;

// Usage:
// import supabase from '../utils/supabaseClient';
// await supabase.auth.signInWithPassword({ email, password });
