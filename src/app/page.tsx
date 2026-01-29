
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Hero />
      <Problem />
      <Solutions />
      <About />

      {/* Footer (Simple) */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} AI Partner. All rights reserved.</p>
      </footer>
    </main>
  );
}
