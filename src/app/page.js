import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base transition-colors duration-500">
      {/* Premium Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content: Hero Section */}
      <main className="grow">
        <Hero />
        <About/>
      </main>
    </div>
  );
}
