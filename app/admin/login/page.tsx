import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import LoginForm from './LoginForm';

export const metadata = {
  title: 'Login | AS Print Gallery',
  robots: 'noindex, nofollow'
};

export default async function LoginPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect('/admin');
  }

  return <LoginForm />;
}
