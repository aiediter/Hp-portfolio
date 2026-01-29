
import Image from 'next/image';

const problems = [
    {
        title: '終わらない単純作業',
        description: '書類作成やデータ入力に追われ、本来の業務に集中できない日々。',
        image: '/images/problem-paperwork.png',
    },
    {
        title: '作れないWebサイト',
        description: '技術的な壁にぶつかり、理想のサービスを形にできないもどかしさ。',
        image: '/images/problem-website.png',
    },
    {
        title: '思いつかないアイデア',
        description: 'ブレインストーミングに行き詰まり、革新的な解決策が見つからない。',
        image: '/images/problem-idea.png',
    },
];

export default function Problem() {
    return (
        <section className="py-20 bg-[#111111]">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                    こんな<span className="text-purple-500">悩み</span>、抱えていませんか？
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="group relative flex flex-col items-center">
                            {/* Circular Image with formatting */}
                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-gray-800 transition-transform duration-500 group-hover:scale-105 group-hover:border-purple-500 shadow-lg">
                                <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                                <Image
                                    src={problem.image}
                                    alt={problem.title}
                                    fill
                                    className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
                                {problem.title}
                            </h3>
                            <p className="text-gray-400 text-center text-sm leading-relaxed max-w-xs">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Arrow & Solution Lead-in */}
                <div className="mt-16 flex flex-col items-center">
                    <div className="animate-bounce mb-4 text-purple-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        AIなら、全て解決できます。
                    </p>
                </div>
            </div>
        </section>
    );
}
