import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
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

export interface Poll {
  id: string;
  question: string;
  options: { id: string; text: string; votes: number }[];
  created_by: string;
  created_at: string;
  ends_at: string;
}

export interface Meme {
  id: string;
  image_url: string;
  caption: string;
  uploaded_by: string;
  likes: number;
  created_at: string;
}
