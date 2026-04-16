import { useEffect, useState } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 700);
    const removeTimer = setTimeout(() => setVisible(false), 1100);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-card transition-opacity duration-400 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="animate-preloader-float text-4xl font-bold text-foreground mb-6">
        BB<span className="text-primary">.</span>
      </div>
      <div className="w-48 h-1 bg-border rounded-pill overflow-hidden">
        <div className="h-full bg-primary rounded-pill animate-[loading_0.8s_ease-in-out_forwards]" 
          style={{ animation: "loading 0.8s ease-in-out forwards" }} />
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
