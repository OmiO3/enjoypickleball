import { motion } from "framer-motion";
import { ArrowRight, Drill, Layers, Zap, Rocket, Clock } from "lucide-react";
import { Link } from "wouter";

export default function PaddleHistory() {
  const materials = [
    {
      name: "木製 (Wood)",
      desc: "初期から存在する最も安価なパドル。重くて打感が硬いが、耐久性が高く初心者やレクリエーション向け。",
      icon: Drill,
      bg: "bg-amber-100",
      color: "text-amber-700"
    },
    {
      name: "グラスファイバー (Glass Fiber)",
      desc: "パワー重視のプレイヤーに人気。打感が柔らかくボールを弾き出す力が強い。ミドルレンジでバランスが良い。",
      icon: Layers,
      bg: "bg-blue-100",
      color: "text-blue-700"
    },
    {
      name: "カーボンファイバー (Carbon)",
      desc: "軽量で硬く、コントロール精度が非常に高い。ボールの滞空時間が長くスピンもかけやすい上級者向け。価格は高め。",
      icon: Rocket,
      bg: "bg-slate-200",
      color: "text-slate-800"
    }
  ];

  const timeline = [
    { year: "1965", title: "木製パドルの誕生", desc: "合板（コンパネ）を切り出して作った手作りの重いパドルからスタート。" },
    { year: "1980s", title: "ハニカムコアの導入", desc: "航空機技術を応用したアルミやノーメックス素材のハニカム（蜂の巣）構造コアが登場。大幅な軽量化と振動軽減を実現。" },
    { year: "2000s", title: "複合素材の時代", desc: "グラスファイバーや初期のカーボン素材がフェイス（表面）に採用され、パワーとコントロールが向上。" },
    { year: "2010s", title: "ポリマーコア革命", desc: "静音性とコントロール性に優れたポリマーコアが主流に。現代パドルのベースが完成。" },
    { year: "2020s", title: "ハイテクカーボン", desc: "T700などの高品質カーボン、サーモフォームド構造（熱成形）、さらにはセンサー内蔵スマートパドルまで登場。" }
  ];

  return (
    <div className="pb-24 min-h-screen bg-muted/30">
      <div className="bg-slate-800 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">パドルの進化</h1>
        <p className="text-slate-300 font-medium">木の板からハイテクカーボン素材へ</p>
      </div>

      <div className="px-6 space-y-8">
        
        {/* Basic Info */}
        <section>
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-bold mb-4 text-card-foreground">パドルの基本ルール</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-muted-foreground font-medium">構造</span>
                <span className="font-bold">ガットのない一枚板</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-muted-foreground font-medium">サイズ</span>
                <span className="font-bold">全長43cm以内 / 幅21.9cm以内</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">重量</span>
                <span className="font-bold">200〜250g (テニスより軽い)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Materials */}
        <section>
          <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            主な素材比較
          </h2>
          <div className="space-y-4">
            {materials.map((mat, idx) => {
              const Icon = mat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-2xl p-5 shadow-sm border border-border flex gap-4"
                >
                  <div className={`w-12 h-12 rounded-full ${mat.bg} ${mat.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">{mat.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{mat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2 mt-8">
            <Clock className="w-5 h-5 text-slate-500" />
            進化の歴史
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-border">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-slate-800 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                  <div className="text-sm font-black text-slate-500 mb-1">{item.year}</div>
                  <h3 className="font-bold text-base text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-4 pb-4">
          <Link href="/ball-history" className="flex items-center justify-between w-full bg-card text-foreground border-2 border-border p-5 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform" data-testid="link-to-ball-history">
            <span>ボールの進化の歴史へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
