
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full relative z-10">

        {/* Text Side (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            AI実装力で、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              ビジネスを加速させる。
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            単純作業はAIに任せ、あなたは創造的な仕事へ。<br />
            確かな技術力で、御社のDXを強力にサポートします。
          </p>
          <a
            href="https://coconala.com/users/5520731?ref=service_main_column"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-purple-600 px-8 font-medium text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
          >
            <span className="mr-2">ココナラで相談する</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Visual Side (Right) */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-full relative flex items-center justify-center mt-12 lg:mt-0">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-600/30 blur-[100px] rounded-full animate-pulse-slow" />

          {/* Hero Image */}
          <div className="relative w-full h-full max-h-[600px] flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="AI Engineer developed by Antigravity"
              fill
              className="object-contain drop-shadow-2xl z-10"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Particles/Grid (Optional decoration) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </section>
  );
}
