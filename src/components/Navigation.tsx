import { Link, useLocation } from "wouter";
import { Home, BookOpen, Map, Target, BookA, Users, ShieldQuestion, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "ホーム", activeColor: "bg-lime-400 text-lime-900", dotColor: "bg-lime-400" },
  { path: "/rules", icon: BookOpen, label: "ルール", activeColor: "bg-sky-400 text-sky-900", dotColor: "bg-sky-400" },
  { path: "/court", icon: Map, label: "コート", activeColor: "bg-emerald-400 text-emerald-900", dotColor: "bg-emerald-400" },
  { path: "/shots", icon: Target, label: "ショット", activeColor: "bg-pink-400 text-pink-900", dotColor: "bg-pink-400" },
  { path: "/glossary", icon: BookA, label: "用語", activeColor: "bg-violet-400 text-violet-900", dotColor: "bg-violet-400" },
];

const allNavItems = [
  ...navItems,
  { path: "/doubles", icon: Users, label: "ダブルス", activeColor: "bg-orange-400 text-orange-900", dotColor: "bg-orange-400" },
  { path: "/tactics", icon: ShieldQuestion, label: "戦術", activeColor: "bg-red-400 text-red-900", dotColor: "bg-red-400" },
  { path: "/history", icon: Clock, label: "歴史", activeColor: "bg-amber-400 text-amber-900", dotColor: "bg-amber-400" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-4 mb-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 dark:border-zinc-700/60 px-2 py-2">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const isActive = location === item.path;
              const Icon = item.icon;
              return (
                <Link key={item.path} href={item.path} data-testid={`nav-${item.path.replace('/', '') || 'home'}`}>
                  <div className={cn(
                    "flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 relative",
                    isActive ? `${item.activeColor} shadow-lg scale-105 -translate-y-1` : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  )}>
                    <Icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-[1.8px]")} />
                    <span className={cn("text-[9px] mt-0.5 font-bold tracking-tight", isActive ? "opacity-100" : "opacity-60")}>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-r border-zinc-100 dark:border-zinc-800 z-50 py-6 items-center gap-2">
        <div className="w-11 h-11 bg-lime-400 rounded-2xl flex items-center justify-center text-lime-900 font-black text-base shadow-lg mb-4 rotate-3">
          PB
        </div>
        {allNavItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          return (
            <Link key={item.path} href={item.path} data-testid={`nav-desktop-${item.path.replace('/', '') || 'home'}`}>
              <div className={cn(
                "flex flex-col items-center justify-center w-13 h-13 p-3 rounded-2xl transition-all duration-300 group relative",
                isActive ? `${item.activeColor} shadow-md scale-110` : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-200 hover:scale-105"
              )}>
                <Icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-[1.8px]")} />
                <span className={cn("text-[8px] mt-1 font-bold leading-none", isActive ? "opacity-100" : "opacity-50")}>{item.label}</span>
                {isActive && (
                  <span className={`absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 ${item.dotColor} rounded-full`} />
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
