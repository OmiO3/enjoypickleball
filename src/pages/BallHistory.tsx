import { motion } from "framer-motion";
import { Sun, Moon, ArrowLeft, CircleDashed } from "lucide-react";
import { Link } from "wouter";

export default function BallHistory() {
  const ballTypes = [
    {
      type: "アウトドア球",
      icon: Sun,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      features: [
        { label: "穴の数", value: "40個 (小さめ)" },
        { label: "硬さ", value: "硬い・風の影響を受けにくい" },
        { label: "スピード", value: "速い・ラリーのテンポが上がる" }
      ]
    },
    {
      type: "インドア球",
      icon: Moon,
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      features: [
        { label: "穴の数", value: "26個 (大きめ)" },
        { label: "硬さ", value: "柔らかい・コントロールしやすい" },
        { label: "スピード", value: "少し遅め・ラリーが続きやすい" }
      ]
    }
  ];

  return (
    <div className="pb-24 min-h-screen bg-muted/30">
      <div className="bg-primary pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-primary-foreground mb-2">ボールの秘密</h1>
        <p className="text-primary-foreground/80 font-medium">なぜ穴が開いているの？屋内と屋外の違いは？</p>
      </div>

      <div className="px-6 space-y-8">
        
        {/* Basic Info */}
        <section>
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-5">
              <CircleDashed className="w-48 h-48" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-card-foreground">ボールの基本データ</h2>
            <p className="text-sm text-muted-foreground mb-4 font-medium leading-relaxed">
              プラスチック製の穴あきボール。野球のウィッフルボールに似ていますが、ピックルボール専用に設計されています。テニスボールの約半分の重さで、当たっても痛くありません。
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted rounded-2xl p-3 text-center">
                <div className="text-xs text-muted-foreground font-bold mb-1">直径</div>
                <div className="text-lg font-black text-foreground">7.4〜7.6<span className="text-xs font-normal ml-1">cm</span></div>
              </div>
              <div className="bg-muted rounded-2xl p-3 text-center">
                <div className="text-xs text-muted-foreground font-bold mb-1">重量</div>
                <div className="text-lg font-black text-foreground">22〜26<span className="text-xs font-normal ml-1">g</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Indoor vs Outdoor */}
        <section>
          <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2">
            屋内外でボールが変わる？
          </h2>
          <div className="grid gap-4">
            {ballTypes.map((ball, idx) => {
              const Icon = ball.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-3xl p-6 shadow-sm border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${ball.color} flex items-center justify-center text-white shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-bold text-xl ${ball.textColor}`}>{ball.type}</h3>
                  </div>
                  <ul className="space-y-3">
                    {ball.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground font-medium">{feature.label}</span>
                        <span className="font-bold text-foreground">{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-border">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full"></span>
            ボール進化の歩み
          </h3>
          <ul className="space-y-4">
            <li className="relative pl-4 border-l-2 border-muted pb-2">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted border-2 border-background"></span>
              <span className="text-xs font-bold text-muted-foreground">1965年〜</span>
              <p className="text-sm font-medium mt-1">おもちゃの「ウィッフルボール」をそのまま流用してプレー。</p>
            </li>
            <li className="relative pl-4 border-l-2 border-muted pb-2">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted border-2 border-background"></span>
              <span className="text-xs font-bold text-muted-foreground">1980年代</span>
              <p className="text-sm font-medium mt-1">ピックルボール専用設計のボールが開発され始める。</p>
            </li>
            <li className="relative pl-4 border-l-2 border-muted pb-2">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted border-2 border-background"></span>
              <span className="text-xs font-bold text-muted-foreground">1990〜2000年代</span>
              <p className="text-sm font-medium mt-1">環境に合わせて「アウトドア用」「インドア用」が明確に分化し標準化。</p>
            </li>
            <li className="relative pl-4">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-sm"></span>
              <span className="text-xs font-bold text-primary">現在</span>
              <p className="text-sm font-medium mt-1">均一な穴配置、高耐久性、耐寒・耐熱性を備えたハイテクボールへ。サステナブル素材への挑戦も。</p>
            </li>
          </ul>
        </section>

        <div className="pt-6 pb-4">
          <Link href="/" className="flex items-center justify-center w-full bg-muted text-muted-foreground p-5 rounded-2xl font-bold active:scale-95 transition-transform" data-testid="link-back-home">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>ホームに戻る</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
