const SUPABASE_URL = "https://dtjxcgzpwemdgdeinkcl.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0anhjZ3pwd2VtZGdkZWlua2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MDg0ODQsImV4cCI6MjA5MzQ4NDQ4NH0.kGjtOZfK7onzr-3FVMuSljiJ3emllxtGdepxrFVUPPM";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
