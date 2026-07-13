import React from "react";

const base = import.meta.env.BASE_URL;

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ borderRadius: "1vw", overflow: "hidden", flex: 1, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
  </div>
);

export default function Slide06SmartPicksAisle() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.7s ease forwards" }} />
      <div style={{ position: "absolute", bottom: "-8vh", left: "-5vw", width: "45vw", height: "45vh", background: "radial-gradient(ellipse, rgba(145,54,108,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "6vw", right: "5vw", bottom: "4vh", display: "flex", flexDirection: "column" }}>
        <div style={{ ...s(0.1, "fadeInUp"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
          <span style={{ background: "#91366C", color: "#fff", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.05em" }}>AISLE</span>
          <span style={{ color: "#60A5FA", background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.4)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Complete</span>
        </div>

        <h2 style={{ ...s(0.25), fontSize: "5vw", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2vh 0" }}>
          SmartPicks Aisle
        </h2>

        <p style={{ ...s(0.4, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", lineHeight: 1.55, maxWidth: "72vw", margin: "0 0 4vh 0" }}>
          Curated Smart Picks for female users, surfacing relevant male profiles that need more exposure. Improves like distribution while maintaining recommendation relevance.
        </p>

        <div style={{ ...s(0.55, "fadeInUp"), flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vh 2vw" }}>
          <Img src={`${base}smartpicks-aisle-1.png`} alt="SmartPicks Aisle screen 1" />
          <Img src={`${base}smartpicks-aisle-2.png`} alt="SmartPicks Aisle screen 2" />
        </div>
      </div>

      <div style={{ position: "absolute", top: "4vh", right: "4vw" }}>
        <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(145,54,108,0.5)", letterSpacing: "0.15em", fontWeight: 600 }}>MAJOR TASK</span>
      </div>
    </div>
  );
}
