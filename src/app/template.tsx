import Navbar from "./components/Navbar";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="w-full min-h-screen">
        <Navbar />
        <div className="">
            {children}
        </div>
      </main>
    );
  }