import { createClient } from "@supabase/supabase-js";

//const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
//const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const SUPABASE_URL = "https://fyxbkkxntodbrhkzutxk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5eGJra3hudG9kYnJoa3p1dHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNjkwMTQsImV4cCI6MjA1ODY0NTAxNH0.Fb10pg_tum0YCeMg_M6R2aEO2N8COrMV0mLAGqAvKgQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
