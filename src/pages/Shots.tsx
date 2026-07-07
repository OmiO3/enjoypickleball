import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RefreshCcw, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface Shot {
  id: string;
  name: string;
  num: string;
  desc: string;
  tips: string[];
  gradient: string;
  lightBg: string;
  accentText: string;
  borderColor: string;
}

const shots: Shot[] = [
  {
    id: "serve",
    name: "サーブ",
    num: "01",
    desc: "ゲームの始まりの一打。下から打ちます。",
    tips: [
      "確実に入れることが最優先。速さは二の次",
      "速さよりも「深さ」—相手コートの奥に届ければOK",
      "ネットに触れて入った場合はそのままプレー続行",
    ],
    gradient: "from-pink-500 to-rose-500",
    lightBg: "bg-pink-50 dark:bg-pink-950",
    accentText: "text-pink-600 dark:text-pink-400",
    borderColor: "border-pink-200 dark:border-pink-800",
  },
  {
    id: "return",
    name: "リターン",
    num: "02",
    desc: "相手のサーブを打ち返す2打目。",
    tips: [
      "深く返して、相手が前へ来る時間を奪う",
      "打った後は素早く前（キッチンライン）へ走る",
      "ゆっくり山なりに返すだけでOK、決めにいかない",
    ],
    gradient: "from-sky-500 to-blue-500",
    lightBg: "bg-sky-50 dark:bg-sky-950",
    accentText: "text-sky-600 dark:text-sky-400",
    borderColor: "border-sky-200 dark:border-sky-800",
  },
  {
    id: "dink",
    name: "ディンク",
    num: "03",
    desc: "ピックルボールの代名詞！キッチン際での柔らかい攻防。",
    tips: [
      "相手のキッチンへふわりと落とす—強打はNG",
      "下から打たせると相手は強打できない",
      "上級者ほどここが上手い、忍耐の勝負",
    ],
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50 dark:bg-emerald-950",
    accentText: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
  {
    id: "third-shot",
    name: "サードショットドロップ",
    num: "04",
    desc: "3打目に後方から打つ、ふんわりとしたショット。",
    tips: [
      "相手のキッチンへ山なりに落とす",
      "自分が前へ出るための「つなぎ」の一打",
      "初心者は「こういうものがある」と知るだけでOK",
    ],
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50 dark:bg-amber-950",
    accentText: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    id: "volley",
    name: "ボレー",
    num: "05",
    desc: "ノーバウンドで打ち返す攻撃的なショット。",
    tips: [
      "キッチンラインの「外側」に立って打つ（中は反則！）",
      "ラケットを大きく振らず、ブロックするイメージ",
      "ネット際の速いボレー戦（ハンドバトル）は最大の見どころ",
    ],
    gradient: "from-violet-500 to-purple-500",
    lightBg: "bg-violet-50 dark:bg-violet-950",
    accentText: "text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-200 dark:border-violet-800",
  },
];

function ShotCard({ shot, idx }: { shot: Shot; idx: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="rounded-3xl overflow-hidden shadow-sm border border-border cursor-pointer select-none active:scale-[0.98] transition-transform"
        onClick={() => setIsFlipped(!isFlipped)}
        data-testid={`shot-card-${shot.id}`}
      >
        <div className={`h-1.5 w-full bg-gradient-to-r ${shot.gradient}`} />

        <AnimatePresence mode="wait" initial={false}>
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="bg-card p-6"
            >
              <div className={cn("text-xs font-black mb-1 tracking-widest uppercase", shot.accentText)}>
                SHOT {shot.num}
              </div>
              <h2 className="text-2xl font-black text-card-foreground mb-2 leading-tight">{shot.name}</h2>
              <p className="text-sm text-muted-foreground font-medium mb-5">{shot.desc}</p>
              <div className="flex justify-end">
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground/60 bg-muted/60 px-3 py-1.5 rounded-full">
                  <RefreshCcw className="w-3 h-3" />
                  <span>タップして裏返す</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className={cn("p-6 border-t-0", shot.lightBg)}
            >
              <div className={cn("text-sm font-black mb-4 flex items-center gap-2", shot.accentText)}>
                <span className={cn("inline-block w-1.5 h-5 rounded-full bg-gradient-to-b shrink-0", shot.gradient)} />
                {shot.name}のコツ
              </div>
              <ul className="space-y-3 mb-5">
                {shot.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-bold text-foreground/80 leading-snug">
                    <CheckCircle2 className={cn("w-4 h-4 shrink-0 mt-0.5", shot.accentText)} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground/50 bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full">
                  <RefreshCcw className="w-3 h-3" />
                  <span>タップして戻す</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Shots() {
  return (
    <div className="pb-10 min-h-screen bg-muted/30">
      <div className="bg-gradient-to-br from-pink-500 to-rose-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">5つの基本ショット</h1>
        <p className="text-pink-100 font-medium">カードをタップして「コツ」をチェック！</p>
      </div>

      <div className="px-6 space-y-5">
        {shots.map((shot, idx) => (
          <ShotCard key={shot.id} shot={shot} idx={idx} />
        ))}

        <div className="pt-4 pb-4">
          <Link
            href="/tactics"
            className="flex items-center justify-between w-full bg-primary text-primary-foreground p-5 rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform"
            data-testid="link-to-tactics"
          >
            <span>次は「初日から効く戦術」へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
