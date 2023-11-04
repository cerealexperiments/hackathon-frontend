import { useRouter } from 'next/router';
import { useEffect } from 'react';

const checkAuthentication = () => {
  if(!localStorage.getItem("token")) {
    return false
  }
  return true
}

const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = checkAuthentication(); 
    if (!isAuthenticated) {
      router.push('/signIn');
    }
  }, []);
  return children;
};

export default ProtectedRoute;
