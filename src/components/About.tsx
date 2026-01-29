
import Image from 'next/image';

export default function About() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side (Profile) - KEEP COLOR */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800">
                            <Image
                                src="/images/about-profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle Vignette */}
                            <div className="absolute inset-0 ring-1 ring-white/10" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-7/12 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
                            信頼できるパートナーとして。
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                「AIを使えば、何でもできる」<br />
                                そう言われていますが、実際にビジネスに導入するのは容易ではありません。
                            </p>
                            <p>
                                私は現役の情報系大学生として、最先端の技術を学び続けています。<br />
                                エンジニアとしての<span className="text-purple-400 font-bold">「確かな技術力」</span>と、
                                若さゆえの<span className="text-purple-400 font-bold">「柔軟な発想・フットワーク」</span>で、
                                あなたのビジネスに革命を起こします。
                            </p>
                            <p>
                                ただの開発者ではなく、共にビジネスを成長させるパートナーとして。<br />
                                まずは、あなたの「困りごと」を聞かせてください。
                            </p>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://coconala.com/users/5520731?ref=service_main_column"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-white/20 hover:border-purple-500 bg-white/5 hover:bg-purple-500/10 text-white px-10 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                            >
                                プロフィールを見る
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
