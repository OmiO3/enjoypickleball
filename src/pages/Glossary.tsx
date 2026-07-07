import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Heart, ShieldQuestion } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");

  const manners = [
    {
      title: "試合後のパドルタッチ",
      desc: "試合が終わったら、ネット越しに相手と自分のパドルを軽く合わせ、「グッドゲーム！」と声をかけます。握手の代わりの素敵な習慣です。"
    },
    {
      title: "セルフジャッジ",
      desc: "ラインのイン・アウト判定は、基本的に自分たちのコート側は自分たちで行います。「迷ったらイン（相手に有利な判定）」が紳士淑女のマナーです。"
    },
    {
      title: "隣コートのボール",
      desc: "隣のコートからボールが転がってきたら、「ボール！」と声をかけてプレーを止め、危険を防ぎます。拾ったボールは相手に打ち返さず、手で優しくトスして返しましょう。"
    }
  ];

  const glossaryItems = [
    {
      term: "キッチン",
      desc: "ネット両側のノンボレーゾーンのこと。ここでノーバウンドでボールを打つと反則になります。"
    },
    {
      term: "ディンク",
      desc: "キッチン際から相手のキッチンへ、ふわりと落とす柔らかいショット。我慢比べ。"
    },
    {
      term: "サイドアウト",
      desc: "サーブ権が相手チームに移ること。ダブルスでは、両方のサーバーがミスするとサイドアウトになります。"
    },
    {
      term: "フォルト",
      desc: "反則のこと。サーブミス、アウト、ネット、キッチン内でのボレーなどがあります。"
    },
    {
      term: "ハンドバトル",
      desc: "キッチンラインを挟んで、至近距離でのボレーの打ち合い（速いラリー）のこと。ファイヤーファイトとも。"
    },
    {
      term: "ゼロゼロツー (0-0-2)",
      desc: "ゲーム開始時の最初のスコアコール。最初だけ、サーブ権が1回で相手に移るための特別ルール。"
    },
    {
      term: "パドル",
      desc: "ピックルボールで使うラケットのこと。ガットはなく、板状の構造です。"
    },
    {
      term: "アウトドア球 / インドア球",
      desc: "屋外用（穴が小さく40個・硬くて重い）と、屋内用（穴が大きく26個・柔らかくて軽い）の2種類のボールがあります。"
    }
  ];

  const filteredGlossary = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-24 min-h-screen bg-muted/30">
      <div className="bg-teal-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">マナーと用語</h1>
        <p className="text-teal-100 font-medium">言葉を知れば、もっと楽しくなる！</p>
      </div>

      <div className="px-6 space-y-10">
        
        {/* Manners Section */}
        <section>
          <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            大切なマナー
          </h2>
          <div className="space-y-4">
            {manners.map((manner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900 rounded-2xl p-5"
              >
                <h3 className="font-bold text-pink-600 dark:text-pink-400 mb-2">{manner.title}</h3>
                <p className="text-sm text-foreground/80 font-medium leading-relaxed">{manner.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Glossary Section */}
        <section>
          <h2 className="text-xl font-display font-black mb-5 text-foreground flex items-center gap-2">
            <ShieldQuestion className="w-6 h-6 text-teal-500" />
            用語辞典
          </h2>
          
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="用語を検索..."
              className="pl-10 h-12 rounded-xl bg-card border-border shadow-sm text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="glossary-search"
            />
          </div>

          <div className="grid gap-3">
            {filteredGlossary.length > 0 ? (
              filteredGlossary.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl p-5 shadow-sm border border-border"
                >
                  <h3 className="font-bold text-lg text-card-foreground mb-1">{item.term}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                <p>見つかりませんでした</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
