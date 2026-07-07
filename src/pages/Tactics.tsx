import { motion } from "framer-motion";
import { ShieldAlert, Crosshair, HeartHandshake, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Tactics() {
  const tactics = [
    {
      id: "01",
      title: "キッチンラインが「定位置」",
      desc: "ピックルボールは前に出たほうが圧倒的に有利なスポーツ。リターンやサードショットを打ったら、できるだけ早くキッチンラインまで上がりましょう。後退するのは相手にロブを打たれた時だけ！",
      icon: ShieldAlert,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      id: "02",
      title: "迷ったら「真ん中」を狙う",
      desc: "相手ペアの間に打つ「センターセオリー」は超有効。相手同士で「どっちが取る？」と迷わせたり、お互いのパドルがぶつかるのを嫌がってミスしやすくなります。",
      icon: Crosshair,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: "03",
      title: "決めにいかない勇気",
      desc: "テニスのように強いボールでエースを狙うより、「相手より1本多く返す」ことが勝つ秘訣。強打してネットにかけるくらいなら、ゆっくりでも相手コートの奥深くへ確実に返しましょう。",
      icon: HeartHandshake,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <div className="pb-10 min-h-screen bg-muted/30">
      <div className="bg-purple-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">初日から効く戦術</h1>
        <p className="text-purple-100 font-medium">これを知っていれば、初心者同士の試合で一歩リード！</p>
      </div>

      <div className="px-6 space-y-6">
        {tactics.map((tactic, idx) => {
          const Icon = tactic.icon;
          return (
            <motion.div
              key={tactic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-card rounded-3xl p-6 shadow-sm border-2 ${tactic.borderColor}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl ${tactic.bgColor} ${tactic.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${tactic.color} tracking-wider`}>TACTIC {tactic.id}</div>
                  <h2 className="text-lg font-bold text-card-foreground leading-tight">{tactic.title}</h2>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {tactic.desc}
              </p>
            </motion.div>
          )
        })}

        {/* Bonus Tactic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg mt-8 relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 opacity-10">
            <Lightbulb className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-primary-foreground/20 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-primary-foreground/20 backdrop-blur-sm">
              <Lightbulb className="w-3 h-3" />
              <span>おまけの戦術</span>
            </div>
            <h2 className="text-xl font-bold mb-2">パートナーと紐でつながる</h2>
            <p className="text-sm text-primary-foreground/90 leading-relaxed font-medium">
              ダブルスでは、パートナーと「見えないロープ」でつながっているイメージを持ちましょう。
              パートナーが右に動いたら自分も右へ、左に動いたら左へ一緒に動くことで、コートに穴（隙間）ができにくくなります。
            </p>
          </div>
        </motion.div>

        <div className="pt-6 pb-4">
          <Link href="/glossary" className="flex items-center justify-between w-full bg-card text-foreground border-2 border-border p-5 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform" data-testid="link-to-glossary">
            <span>次は「マナーと用語辞典」へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
