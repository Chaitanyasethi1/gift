import { createClient } from '@/utils/supabase/server';
import LoginForm from './LoginForm';

export const metadata = {
  title: 'Login | AS Print Gallery',
  robots: 'noindex, nofollow'
};

export default async function LoginPage() {
  const supabase = createClient();
  try {
    await supabase.auth.signOut();
  } catch {
    // ignore
  }

  return <LoginForm />;
}
