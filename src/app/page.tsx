import Image from "next/image";
import Navbar from "./components/Navbar";
import SectionLayout from "./components/SectionLayout";
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <main className="flex items-center justify-between w-full text-dark min-h-screen">
      <SectionLayout className="pt-0">
        <div className="flex items-center justify-between w-full bg-[url('/images/bg.jpg')] bg-cover">
          <div className="w-1/2">
            <Image src="/images/masque.png" alt="Masque Teke" className="w-full h-auto" width={500} height={500} />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <p className="font-bold">ASBL SANZA & GM PRODUCTION PRESENTE</p>
            <AnimatedText text="Lipanda ya Congo na Grèce" className="!text-6xl" />
            <p className="text-light bg-dark px-8 py-4 text-2xl font-black rounded-xl">Du 28 Au 30 Juin</p>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
}
