import { motion } from "framer-motion";
import { Clock, MapPin, Globe, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function History() {
  const events = [
    {
      year: "1965",
      title: "すべては退屈しのぎから",
      desc: "米ワシントン州ベインブリッジ島で誕生。ジョエル・プリチャード（元下院議員）らが、子供たちの退屈しのぎにバドミントンコートとピンポン球、手作りの木の板を使って遊んだのが始まり。",
      icon: MapPin,
      color: "bg-amber-500"
    },
    {
      year: "名前の由来",
      title: "犬のピクルス？",
      desc: "名前の由来は2説。①プリチャード家の愛犬「ピクルス」がボールを追いかけたから。②様々なスポーツの要素を混ぜ合わせたことから、混合クルーボート「ピクルボート」にちなんだという説。",
      icon: Clock,
      color: "bg-orange-500"
    },
    {
      year: "1967",
      title: "最初の専用コート",
      desc: "最初の常設ピックルボールコートが作られ、スポーツとしての形が整い始める。",
      icon: Clock,
      color: "bg-amber-600"
    },
    {
      year: "1984",
      title: "USAPA設立",
      desc: "アメリカ・ピックルボール協会（USAPA）が設立され、公式ルールが制定される。",
      icon: Trophy,
      color: "bg-blue-500"
    },
    {
      year: "2000年代",
      title: "シニア層で火がつく",
      desc: "身体への負担が少ないことから、アメリカの退職者コミュニティを中心に爆発的な人気となる。",
      icon: Globe,
      color: "bg-teal-500"
    },
    {
      year: "2020年〜",
      title: "コロナ禍で急成長",
      desc: "ソーシャルディスタンスを保てるアウトドアスポーツとして全世代で大流行。全米で最も急成長中のスポーツに。",
      icon: Globe,
      color: "bg-green-500"
    },
    {
      year: "2023年",
      title: "プロリーグ(MLP)の躍進",
      desc: "有名アスリートやセレブがこぞってチームのオーナーになり、メジャーリーグ・ピックルボール(MLP)が急成長。",
      icon: Trophy,
      color: "bg-yellow-500"
    },
    {
      year: "現在",
      title: "世界的な広がり、そして日本へ",
      desc: "世界60カ国以上でプレーされ、日本でも競技人口が急増中。未来のオリンピック種目候補とも言われている。",
      icon: Globe,
      color: "bg-primary"
    }
  ];

  return (
    <div className="pb-24 min-h-screen bg-muted/30">
      <div className="bg-amber-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">歴史と起源</h1>
        <p className="text-amber-100 font-medium">裏庭の遊びから、世界最速で成長するスポーツへ</p>
      </div>

      <div className="px-6 relative">
        {/* Timeline Line */}
        <div className="absolute left-[39px] top-4 bottom-0 w-1 bg-amber-200/50 rounded-full"></div>

        <div className="space-y-8 relative">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex gap-4"
              >
                <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center shrink-0 shadow-md border-2 border-background z-10 mt-1`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                
                <div className="bg-card rounded-2xl p-5 shadow-sm border border-border flex-1 hover:shadow-md transition-shadow">
                  <div className={`text-sm font-black ${event.color.replace('bg-', 'text-')} mb-1 tracking-wider`}>
                    {event.year}
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-10 pb-4">
          <Link href="/paddle-history" className="flex items-center justify-between w-full bg-card text-foreground border-2 border-border p-5 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform" data-testid="link-to-paddle-history">
            <span>パドルの進化の歴史へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
