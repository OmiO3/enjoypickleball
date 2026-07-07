import { motion } from "framer-motion";
import { Users, Volume2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Doubles() {
  return (
    <div className="pb-10 min-h-screen bg-muted/30">
      <div className="bg-orange-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">ダブルスの流れ</h1>
        <p className="text-orange-100 font-medium">スコアコールが言えれば一人前！</p>
      </div>

      <div className="px-6 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl p-6 shadow-sm border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-[100px] -z-0"></div>
          
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
              <Volume2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-card-foreground">スコアコールの仕組み</h2>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6">
            サーブを打つ前に、サーバーは必ず大きな声で3つの数字を言います。これが「スコアコール」です。
          </p>

          <div className="flex justify-between items-center gap-2 bg-muted/50 p-4 rounded-2xl mb-4">
            <div className="text-center flex-1">
              <div className="text-3xl font-black text-primary">4</div>
              <div className="text-[10px] font-bold text-muted-foreground mt-1">自チーム点</div>
            </div>
            <div className="text-muted-foreground font-bold">-</div>
            <div className="text-center flex-1">
              <div className="text-3xl font-black text-secondary">2</div>
              <div className="text-[10px] font-bold text-muted-foreground mt-1">相手点</div>
            </div>
            <div className="text-muted-foreground font-bold">-</div>
            <div className="text-center flex-1">
              <div className="text-3xl font-black text-orange-500">1</div>
              <div className="text-[10px] font-bold text-muted-foreground mt-1">サーバー順</div>
            </div>
          </div>

          <div className="bg-orange-500 text-white text-center p-3 rounded-xl font-bold font-display tracking-widest text-lg shadow-inner">
            "フォー・ツー・ワン"
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-6 shadow-sm border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-card-foreground">サーブ権の移り方</h2>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-blue-500 text-white font-bold shrink-0 z-10">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-muted/50 ml-4 border border-border">
                <h4 className="font-bold text-sm mb-1 text-card-foreground">第1サーバー</h4>
                <p className="text-xs text-muted-foreground">右コートからスタート。ラリーに勝てば得点し、左に移動してサーブ続行。</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-orange-500 text-white font-bold shrink-0 z-10">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-muted/50 ml-4 border border-border">
                <h4 className="font-bold text-sm mb-1 text-card-foreground">第2サーバー (パートナー)</h4>
                <p className="text-xs text-muted-foreground">ラリーに負けるとパートナーにサーブ権が移る。同様に得点を狙う。</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-destructive text-white font-bold shrink-0 z-10">交</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-destructive/10 ml-4 border border-destructive/20">
                <h4 className="font-bold text-sm mb-1 text-destructive">サイドアウト</h4>
                <p className="text-xs text-destructive/80">第2サーバーもラリーに負けると、相手チームにサーブ権が移る。</p>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-green-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 text-white/10 font-display font-black text-8xl">002</div>
          <h2 className="text-xl font-bold mb-3 relative z-10">特別ルール「0-0-2」</h2>
          <p className="text-sm text-primary-foreground/90 leading-relaxed font-medium relative z-10">
            ゲームの最初のサーブ権を持つチームは、<strong>1回負けただけで相手にサーブ権が移ります</strong>（有利になりすぎるのを防ぐため）。<br/><br/>
            そのため、最初のスコアコールは第2サーバーから始まる意味で「ゼロ・ゼロ・ツー」と言います。
          </p>
        </motion.div>

        <div className="pt-4 pb-4">
          <Link href="/shots" className="flex items-center justify-between w-full bg-primary text-primary-foreground p-5 rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform" data-testid="link-to-shots">
            <span>次は「5つのショット」へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
