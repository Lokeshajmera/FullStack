import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are valid and not placeholders
const isValid = supabaseUrl && 
                supabaseUrl !== 'your_supabase_url_here' && 
                supabaseAnonKey && 
                supabaseAnonKey !== 'your_supabase_anon_key_here';

if (!isValid) {
  console.warn('Supabase credentials missing or invalid. Contact form will be disabled.');
}

export const supabase = isValid ? createClient(supabaseUrl, supabaseAnonKey) : null;
