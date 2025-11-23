import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database Types (same as website)
export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  skills: string;
  phone?: string;
  birthday?: string;
  avatar_url?: string;
  created_at: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  paid_by: string;
  category: string;
  date: string;
  split_among: string[];
  created_at: string;
  created_by: string;
}

export interface Gallery {
  id: string;
  title: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail_url?: string;
  uploaded_by: string;
  likes: number;
  date: string;
  created_at: string;
}

export interface EducationMaterial {
  id: string;
  title: string;
  type: 'note' | 'practical' | 'marksheet';
  subject: string;
  file_url: string;
  uploaded_by: string;
  downloads: number;
  created_at: string;
}
