import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

export default function CourtDiagram() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const areas = {
    kitchen: {
      id: "kitchen",
      title: "キッチン (ノンボレーゾーン)",
      desc: "ネット両側の2.13mのエリア。ここではボールをノーバウンドで打つこと（ボレー）が禁止されています。キッチン内で打つ場合は必ずワンバウンドさせましょう。",
      color: "fill-orange-400/80"
    },
    leftService: {
      id: "leftService",
      title: "左サービスコート",
      desc: "奇数得点時（1,3,5...）にサーバーが立つエリア。対角線の相手コートへサーブを打ちます。",
      color: "fill-blue-400/80"
    },
    rightService: {
      id: "rightService",
      title: "右サービスコート",
      desc: "偶数得点時（0,2,4...）にサーバーが立つエリア。ゲーム開始時は必ずここからサーブします。",
      color: "fill-blue-400/80"
    },
    net: {
      id: "net",
      title: "ネット",
      desc: "高さは中央で86cm、両端で91cm。テニスより少し低く設定されています。",
      color: "fill-slate-800"
    },
    baseline: {
      id: "baseline",
      title: "ベースライン",
      desc: "コートの最後方のライン。サーブを打つ時はこのラインの後ろに立たなければなりません。",
      color: "fill-white"
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[340px] aspect-[1/2] relative bg-emerald-500 p-4 rounded-xl shadow-inner overflow-hidden border-4 border-emerald-600">
        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-md">
          {/* Base Court */}
          <rect x="10" y="10" width="180" height="380" className="fill-emerald-400 stroke-white stroke-[4px]" />
          
          {/* Center Line */}
          <line x1="100" y1="10" x2="100" y2="390" className="stroke-white stroke-[2px]" />
          
          {/* Kitchen Lines */}
          <line x1="10" y1="150" x2="190" y2="150" className="stroke-white stroke-[2px]" />
          <line x1="10" y1="250" x2="190" y2="250" className="stroke-white stroke-[2px]" />
          
          {/* Clear center line inside kitchen */}
          <rect x="98" y="150" width="4" height="100" className="fill-emerald-400" />
          
          {/* Interactive Areas - Top Half (Opponent) */}
          <g>
            <rect x="10" y="10" width="90" height="140" 
              className={`transition-colors cursor-pointer ${activeArea === 'rightService' ? 'fill-blue-400/60' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('rightService')}
              data-testid="area-opp-right"
            />
            <rect x="100" y="10" width="90" height="140" 
              className={`transition-colors cursor-pointer ${activeArea === 'leftService' ? 'fill-blue-400/60' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('leftService')}
              data-testid="area-opp-left"
            />
            <rect x="10" y="150" width="180" height="48" 
              className={`transition-colors cursor-pointer ${activeArea === 'kitchen' ? 'fill-orange-400/60' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('kitchen')}
            />
          </g>

          {/* Interactive Areas - Bottom Half (Player) */}
          <g>
            <rect x="10" y="202" width="180" height="48" 
              className={`transition-colors cursor-pointer ${activeArea === 'kitchen' ? 'fill-orange-400/80' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('kitchen')}
              data-testid="area-player-kitchen"
            />
            <rect x="10" y="250" width="90" height="140" 
              className={`transition-colors cursor-pointer ${activeArea === 'leftService' ? 'fill-blue-400/80' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('leftService')}
              data-testid="area-player-left"
            />
            <rect x="100" y="250" width="90" height="140" 
              className={`transition-colors cursor-pointer ${activeArea === 'rightService' ? 'fill-blue-400/80' : 'fill-transparent hover:fill-white/20'}`}
              onClick={() => setActiveArea('rightService')}
              data-testid="area-player-right"
            />
          </g>

          {/* Net */}
          <rect x="5" y="198" width="190" height="4" 
            className={`transition-colors cursor-pointer ${activeArea === 'net' ? 'fill-black' : 'fill-slate-800'}`}
            onClick={() => setActiveArea('net')}
            data-testid="area-net"
          />
          
          {/* Baseline highlights */}
          <rect x="10" y="386" width="180" height="8" 
            className={`transition-colors cursor-pointer ${activeArea === 'baseline' ? 'fill-yellow-300' : 'fill-transparent'}`}
            onClick={() => setActiveArea('baseline')}
            data-testid="area-baseline"
          />

          {/* Labels for default view */}
          <text x="100" y="175" textAnchor="middle" className="fill-white/70 text-[12px] font-bold pointer-events-none">KITCHEN</text>
          <text x="100" y="230" textAnchor="middle" className="fill-white/70 text-[12px] font-bold pointer-events-none">KITCHEN</text>
          
          <text x="55" y="320" textAnchor="middle" className="fill-white/70 text-[12px] font-bold pointer-events-none">LEFT</text>
          <text x="145" y="320" textAnchor="middle" className="fill-white/70 text-[12px] font-bold pointer-events-none">RIGHT</text>
        </svg>

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">TAP</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 h-[160px]">
        <AnimatePresence mode="wait">
          {activeArea ? (
            <motion.div
              key={activeArea}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-card rounded-2xl p-5 shadow-lg border-2 border-primary/20"
            >
              <h3 className="font-bold text-lg mb-2 text-primary">{areas[activeArea as keyof typeof areas].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {areas[activeArea as keyof typeof areas].desc}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-muted/50 rounded-2xl p-5 border border-dashed border-border flex flex-col items-center justify-center text-center h-full"
            >
              <Info className="w-8 h-8 text-muted-foreground/50 mb-2" />
              <p className="text-sm font-medium text-muted-foreground">コートの各エリアをタップすると<br/>詳細が表示されます</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
