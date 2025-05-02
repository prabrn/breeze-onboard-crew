
import { createClient } from '@supabase/supabase-js';

// These will be replaced with your actual Supabase URL and anon key
// after connecting your project to Supabase via the Lovable UI
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Employee = {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  experience: number;
  created_at?: string;
};
