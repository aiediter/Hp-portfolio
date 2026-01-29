
import Image from 'next/image';

const solutions = [
    {
        title: 'ルーチンワークを自動化',
        description: 'データ入力、集計、レポート作成...。毎日の単純作業はAIが代行します。',
        image: '/images/solution-automation.png',
        textPos: 'left',
    },
    {
        title: '24時間働く営業マンを構築',
        description: 'LP制作からチャットボット導入まで。眠らないWebサイトが、あなたの代わりに集客します。',
        image: '/images/solution-web.png',
        textPos: 'right',
    },
    {
        title: 'ブランド価値を高めるデザイン',
        description: '洗練されたビジュアルが、信頼を生む。AI×クリエイティブで、圧倒的な世界観を表現。',
        image: '/images/solution-creative.png',
        textPos: 'left',
    },
];

export default function Solutions() {
    return (
        <section className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white tracking-widest">
                    SOLUTIONS
                </h2>

                <div className="space-y-24">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.textPos === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-purple-600/20 blur-2xl rounded-full transform scale-75 transition-all duration-700 group-hover:scale-100 group-hover:bg-purple-600/30 -z-10`} />
                                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group-hover:border-purple-500/50 transition-colors duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="pt-4">
                                    <span className="text-purple-500 text-sm font-bold tracking-widest uppercase border-b border-purple-500 pb-1">
                                        Feature 0{index + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
