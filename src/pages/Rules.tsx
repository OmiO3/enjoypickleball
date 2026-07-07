import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Rules() {
  const rules = [
    {
      title: "サーブのルール",
      desc: "サーブは下から打つのが基本です。",
      points: [
        "腰より下の位置で打つ",
        "対角線のサービスコートへ打つ",
        "サーブのチャンスは1回のみ（フォルトで即交代）"
      ]
    },
    {
      title: "ツーバウンドルール",
      desc: "ラリーの最初はバウンドさせなければなりません。",
      points: [
        "リターン（2打目）は必ずバウンドさせる",
        "サードショット（3打目）も必ずバウンドさせる",
        "4打目以降はボレー（ノーバウンド）OK!"
      ]
    },
    {
      title: "キッチン（ノンボレーゾーン）",
      desc: "ネット際の特別なエリアのルールです。",
      points: [
        "ネットから両側2.13mのエリアを指す",
        "キッチン内でノーバウンドボレーは禁止",
        "バウンドしたボールならキッチン内で打ってもOK"
      ]
    },
    {
      title: "得点ルール",
      desc: "得点の入り方にも特徴があります。",
      points: [
        "サーブ権がある側だけが得点できる",
        "11点先取で勝利",
        "ただし2点差をつける必要がある"
      ]
    }
  ];

  const faults = [
    "サーブがネットにかかる、またはアウトになる",
    "ツーバウンドルールを破る（2打目、3打目をボレーする）",
    "キッチン内でボレーする",
    "ボールがコート外に出る（アウト）",
    "ボールがネットの下をくぐる"
  ];

  return (
    <div className="pb-10 min-h-screen bg-muted/30">
      <div className="bg-blue-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">基本ルール</h1>
        <p className="text-blue-100 font-medium">これだけ覚えれば試合に出られます！</p>
      </div>

      <div className="px-6 space-y-6">
        {rules.map((rule, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card rounded-3xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <h2 className="text-xl font-bold text-card-foreground">{rule.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{rule.desc}</p>
            <ul className="space-y-2">
              {rule.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-destructive/10 rounded-3xl p-6 border border-destructive/20 mt-8"
        >
          <h2 className="text-xl font-bold text-destructive flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6" />
            主なフォルト（反則）
          </h2>
          <ul className="space-y-3">
            {faults.map((fault, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm font-medium text-destructive/80">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0"></span>
                <span>{fault}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="pt-8 pb-4">
          <Link href="/court" className="flex items-center justify-between w-full bg-primary text-primary-foreground p-5 rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform" data-testid="link-to-court">
            <span>次は「コートを知ろう」へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
