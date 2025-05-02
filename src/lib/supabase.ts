
import { supabase } from '@/integrations/supabase/client';

export type Employee = {
  id?: number;
  name: string;
  email: string;
  mobile: string;
  experience: number;
  created_at?: string;
};

export { supabase };
