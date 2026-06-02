import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base transition-colors duration-500">
      {/* Premium Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content: Hero Section */}
      <main className="grow">
        <Hero />
        <About/>
        <Stack/>
      </main>
    </div>
  );
}
