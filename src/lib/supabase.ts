
import { supabase } from '@/integrations/supabase/client';

export type Employee = {
  id?: string; // Update to string since Supabase uses UUID (string) for IDs
  name: string;
  email: string;
  mobile: string;
  experience: number;
  created_at?: string;
  updated_at?: string;
};

export { supabase };
