"use client";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect } from "wagmi";
import { useEffect, useCallback, useState, memo, useMemo } from 'react';
import { Connector } from 'wagmi';
import { ArrowRightIcon, LockIcon, SendIcon, NetworkIcon } from "lucide-react";
import { FadeInAnimation, HoverScaleAnimation } from "@/components/animations";

const Vortex = dynamic(() => import('@/components/ui/vortex').then((mod) => mod.Vortex), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const FeatureCard = memo(({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => {
  return (
    <HoverScaleAnimation>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
        <div className="flex justify-center items-center w-14 h-14 bg-gray-700 bg-opacity-50 rounded-full mb-4">
          <Icon className="text-purple-300" size={25} />
        </div>
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </HoverScaleAnimation>
  );
});
FeatureCard.displayName = 'FeatureCard';

const HomeContent = memo(({ handleConnect, connectors }: { handleConnect: (connector: Connector) => void, connectors: readonly Connector[] }) => {
  const MemoizedFeatureCards = useMemo(() => <FeatureCards />, []);
  return (
    <FadeInAnimation>
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-6">
          Aero<span className="text-gradient">dump</span><span className="text-purple-400">.</span>
        </h1>
        <p className="text-gray-300 text-xl md:text-3xl max-w-3xl mx-auto mb-12">
          Seamless, Secure, and Automated Multi-Network Token Distribution.
        </p>
        
        {MemoizedFeatureCards}
        <ConnectWallet handleConnect={handleConnect} connectors={connectors} />
        <LearnMore />
      </div>
    </FadeInAnimation>
  );
});
HomeContent.displayName = 'HomeContent';

const FeatureCards = memo(() => {
  return (
    <FadeInAnimation delay={0.3}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Secure Vault" 
          description="Lock your tokens safely across multiple chains with our state-of-the-art security measures."
          icon={LockIcon}
        />
        <FeatureCard 
          title="Easy Airdrop" 
          description="Distribute tokens effortlessly to multiple recipients with just a few clicks."
          icon={SendIcon}
        />
        <FeatureCard 
          title="Multi-Chain" 
          description="Operate seamlessly across various blockchain networks, expanding your reach."
          icon={NetworkIcon}
        />
      </div>
    </FadeInAnimation>
  );
});
FeatureCards.displayName = 'FeatureCards';

const ConnectWallet = memo(({ handleConnect, connectors }: { handleConnect: (connector: Connector) => void, connectors: readonly Connector[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <FadeInAnimation delay={0.6}>
      <div className="mb-12">
        <h3 className="text-white text-2xl mb-6">Connect Your Wallet</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {mounted && connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => handleConnect(connector)}
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 shadow-md rounded-full text-lg py-3 px-5 min-w-[150px]"
            >
              {connector.name}
            </button>
          ))}
        </div>
      </div>
    </FadeInAnimation>
  );
});
ConnectWallet.displayName = 'ConnectWallet';

const LearnMore = memo(() => {
  return (
    <FadeInAnimation delay={0.9}>
      <a href="#learn-more" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-lg group">
        Learn More 
        <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
      </a>
    </FadeInAnimation>
  );
});
LearnMore.displayName = 'LearnMore';

export default function Home() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    if (isConnected && isMounted) {
      router.push('/dashboard');
    }
    return () => {
      isMounted = false;
    };
  }, [isConnected, router]);

  const handleConnect = useCallback((connector: any) => {
    connect({ connector });
  }, [connect]);

  const MemoizedHomeContent = useMemo(() => (
    <HomeContent handleConnect={handleConnect} connectors={connectors} />
  ), [handleConnect, connectors]);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-black grid-background">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full min-h-screen"
        rangeY={180} particleCount={1000}
        rangeSpeed={1.7}
      >
        {MemoizedHomeContent}
      </Vortex>
    </div>
  );
}
Home.displayName = 'Home';