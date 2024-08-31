"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

export function auth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuth(props: P) {
    const { isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
      if (!isConnected) {
        router.push('/');
      }
    }, [isConnected, router]);

    if (!isConnected) {
      return null; // Or a loading indicator
    }

    return <WrappedComponent {...props} />;
  };
}
