import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Rules from "@/pages/Rules";
import Court from "@/pages/Court";
import Doubles from "@/pages/Doubles";
import Shots from "@/pages/Shots";
import Tactics from "@/pages/Tactics";
import Glossary from "@/pages/Glossary";
import History from "@/pages/History";
import PaddleHistory from "@/pages/PaddleHistory";
import BallHistory from "@/pages/BallHistory";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

function Router() {
  const [location] = useLocation();

  return (
    <div className="pb-20 md:pb-0 md:pl-20 min-h-[100dvh]">
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Switch location={location}>
            <Route path="/" component={Home} />
            <Route path="/rules" component={Rules} />
            <Route path="/court" component={Court} />
            <Route path="/doubles" component={Doubles} />
            <Route path="/shots" component={Shots} />
            <Route path="/tactics" component={Tactics} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/history" component={History} />
            <Route path="/paddle-history" component={PaddleHistory} />
            <Route path="/ball-history" component={BallHistory} />
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="bg-background min-h-[100dvh] font-sans overflow-x-hidden">
            <Navigation />
            <main className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl relative min-h-[100dvh] bg-card/30 md:border-x md:border-border shadow-xl">
              <Router />
            </main>
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
