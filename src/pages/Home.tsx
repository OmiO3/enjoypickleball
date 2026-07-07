import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Map, Users, Target, ShieldQuestion, BookA, Clock, Layers, Circle } from "lucide-react";

const menuItems = [
  { path: "/rules", icon: BookOpen, label: "基本ルール", desc: "これだけ読めばOK", gradient: "from-sky-400 to-blue-500", textColor: "text-sky-50" },
  { path: "/court", icon: Map, label: "コートを知ろう", desc: "各エリアの役割", gradient: "from-emerald-400 to-teal-500", textColor: "text-emerald-50" },
  { path: "/doubles", icon: Users, label: "ダブルスの流れ", desc: "スコアコールの謎", gradient: "from-orange-400 to-amber-500", textColor: "text-orange-50" },
  { path: "/shots", icon: Target, label: "5つのショット", desc: "打ち方のコツ", gradient: "from-pink-400 to-rose-500", textColor: "text-pink-50" },
  { path: "/tactics", icon: ShieldQuestion, label: "初日の戦術", desc: "勝つためのヒント", gradient: "from-violet-400 to-purple-500", textColor: "text-violet-50" },
  { path: "/glossary", icon: BookA, label: "用語とマナー", desc: "フェスの前に", gradient: "from-fuchsia-400 to-pink-500", textColor: "text-fuchsia-50" },
  { path: "/history", icon: Clock, label: "歴史と起源", desc: "犬のピクルス？", gradient: "from-amber-400 to-orange-500", textColor: "text-amber-50" },
  { path: "/paddle-history", icon: Layers, label: "パドルの進化", desc: "木からカーボンへ", gradient: "from-slate-500 to-zinc-600", textColor: "text-slate-50" },
  { path: "/ball-history", icon: Circle, label: "ボールの進化", desc: "穴あきの秘密", gradient: "from-lime-400 to-green-500", textColor: "text-lime-50" },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden rounded-b-[3rem]"
        style={{ background: "linear-gradient(135deg, #84cc16 0%, #22c55e 40%, #06b6d4 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <div className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-black tracking-widest mb-6 border border-white/30 backdrop-blur-sm uppercase shadow">
            JAPAN PICKLEBALL FESTA 2026
          </div>
          <h1 className="text-5xl font-display font-black text-white leading-tight mb-4 drop-shadow-lg">
            ピックルボール<br/>はじめてガイド
          </h1>
          <p className="text-white/90 font-bold text-base max-w-[280px] mx-auto leading-relaxed drop-shadow">
            フェスの待ち時間でサクッと予習。<br/>コートに出る準備はいい？
          </p>
        </motion.div>

        {/* Decorative blobs */}
        <div className="absolute top-4 -left-12 w-52 h-52 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-12 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Goal Card */}
      <section className="px-6 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg rotate-3">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
          <div>
            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-0.5">今日の目標</p>
            <p className="text-lg font-black text-zinc-800 dark:text-white leading-tight">
              笑顔でラリーを <span className="text-lime-500">10回続ける!</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quick intro */}
      <section className="px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-5 border-2 border-sky-100 dark:border-sky-900"
          style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%)" }}
        >
          <h2 className="text-base font-black mb-2 text-sky-800 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-500 rounded-full inline-block" />
            30秒でわかる魅力
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">
            テニス・バドミントン・卓球のいいとこ取りをした、いま世界で一番急成長中のスポーツ。コートが小さくボールが遅めなので、<strong className="text-sky-700">初日からラリーが続く</strong>のが最大の魅力です。
          </p>
        </motion.div>
      </section>

      {/* Navigation Grid */}
      <section className="px-6 mt-8 mb-8">
        <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2">
          <span className="w-1.5 h-6 bg-lime-400 rounded-full inline-block" />
          コンテンツを選ぶ
        </h2>

        <motion.div
          className="grid grid-cols-2 gap-3"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              variants={itemVariants}
              className={index === 0 ? "col-span-2" : "col-span-1"}
            >
              <Link href={item.path} data-testid={`menu-${item.path.replace('/','')}`}>
                <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-5 shadow-md hover:shadow-xl transition-all hover:scale-[1.03] active:scale-[0.98] group h-full flex flex-col justify-between min-h-[110px] cursor-pointer`}>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
                      <item.icon className={`w-5 h-5 ${item.textColor}`} />
                    </div>
                    <ArrowRight className={`w-4 h-4 ${item.textColor} opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`} />
                  </div>
                  <div>
                    <h3 className={`font-black text-base ${item.textColor} mb-0.5 leading-tight`}>{item.label}</h3>
                    <p className={`text-xs ${item.textColor} opacity-80 font-medium`}>{item.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
