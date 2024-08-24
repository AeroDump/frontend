"use client";
import { useWeb3Auth } from "@/config/web3AuthProvider";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  const { loggedIn, login } = useWeb3Auth();

  const unloggedInView = (
    <button onClick={login} className="bg-white p-2 rounded-md">
      Login
    </button>
  );

  return (
    <div className="w-full rounded-md h-[100vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        rangeY={180} particleCount={1000}
        rangeSpeed={1.7}
      >
        <h2 className="text-white text-2xl md:text-8xl font-bold text-center">
          Aerodump.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Seamless, Secure, and Automated Multi-Network Token Distribution.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <div className="grid">{!loggedIn && unloggedInView}</div>
        </div>
      </Vortex>
    </div>
  );
}
