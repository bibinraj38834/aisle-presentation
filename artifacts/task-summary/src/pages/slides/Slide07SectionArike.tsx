import React from "react";

const base = import.meta.env.BASE_URL;

export default function Slide07SectionArike() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInRight"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      {/* Yellow right panel */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42vw", background: "#FACB10" }}>
        {/* Geometric decoration inside yellow panel */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "30vw", height: "30vw", borderRadius: "50%", border: "2px solid rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "20vw", height: "20vw", borderRadius: "50%", background: "#F4F4F5", border: "2px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img src={`${base}arike-logo.png`} alt="Arike Logo" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
        </div>
        {/* Section label inside yellow */}
        <div style={{ ...s(0.7, "fadeInRight"), position: "absolute", bottom: "5vh", right: "4vw", textAlign: "right" }}>
          <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em" }}>3 Features</span>
        </div>
      </div>

      {/* Left content */}
      <div className="absolute flex flex-col justify-center" style={{ top: 0, left: "7vw", right: "44vw", bottom: 0 }}>
        <p style={{ ...s(0.1, "fadeInLeft"), fontSize: "1.6vw", letterSpacing: "0.4em", color: "#FACB10", fontWeight: 600, textTransform: "uppercase", marginBottom: "2.5vh" }}>
          Section 02
        </p>

        <h1 style={{ ...s(0.25, "fadeInLeft"), fontSize: "2.2vw", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Major Tasks
        </h1>

        <div style={{ height: "0.4vh", background: "#FACB10", marginBottom: "3vh", ...(isExport ? { width: "14vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.4s" }) }} />

        <h2 style={{ ...s(0.45, "fadeInLeft"), fontSize: "12vw", fontWeight: 800, color: "#FACB10", lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0 }}>
          ARIKE
        </h2>

        <div style={{ ...s(0.65, "fadeInUp"), display: "flex", flexDirection: "column", gap: "1.2vh", marginTop: "4vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FACB10", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>Socket on Vernacs</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FACB10", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>MBG Arike</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#FACB10", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>Support Lounge for Arike</span>
          </div>
        </div>
      </div>
    </div>
  );
}
