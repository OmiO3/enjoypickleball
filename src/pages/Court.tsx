import CourtDiagram from "@/components/CourtDiagram";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Court() {
  return (
    <div className="pb-10 min-h-screen bg-muted/30">
      <div className="bg-green-500 pt-16 pb-12 px-6 rounded-b-[3rem] shadow-md mb-8">
        <h1 className="text-4xl font-display font-black text-white mb-2">コートを知ろう</h1>
        <p className="text-green-100 font-medium">テニスコートの約1/4サイズ。バドミントンとほぼ同じです。</p>
      </div>

      <div className="px-6 space-y-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-border">
          <CourtDiagram />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="text-xs text-muted-foreground font-bold mb-1">縦の長さ</div>
            <div className="text-2xl font-black text-foreground">13.41<span className="text-sm ml-1">m</span></div>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="text-xs text-muted-foreground font-bold mb-1">横の長さ</div>
            <div className="text-2xl font-black text-foreground">6.10<span className="text-sm ml-1">m</span></div>
          </div>
        </div>

        <div className="pt-4 pb-4">
          <Link href="/doubles" className="flex items-center justify-between w-full bg-primary text-primary-foreground p-5 rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform" data-testid="link-to-doubles">
            <span>次は「ダブルスの流れ」へ</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
