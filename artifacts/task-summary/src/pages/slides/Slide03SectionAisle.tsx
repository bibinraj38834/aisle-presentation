import React from "react";

const base = import.meta.env.BASE_URL;

export default function Slide03SectionAisle() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ fontFamily: "var(--font-display-family)" }}>
      {/* Full gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #91366C 0%, #5C1F49 40%, #332373 100%)" }} />

      {/* Noise/texture overlay */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)" }} />

      {/* Large decorative circle */}
      <div className="absolute" style={{ right: "-8vw", top: "50%", transform: "translateY(-50%)", width: "55vw", height: "55vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)" }} />
      <div className="absolute" style={{ right: "-4vw", top: "50%", transform: "translateY(-50%)", width: "40vw", height: "40vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div className="absolute" style={{ right: "8vw", top: "50%", transform: "translateY(-50%)", width: "22vw", height: "22vw", borderRadius: "50%", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={`${base}aisle-logo.png`} alt="Aisle Logo" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
      </div>

      {/* Left content */}
      <div className="absolute flex flex-col justify-center" style={{ top: 0, left: "7vw", right: "45vw", bottom: 0 }}>
        <p style={{ ...s(0.1), fontSize: "1.6vw", letterSpacing: "0.4em", color: "rgba(255,255,255,0.55)", fontWeight: 500, textTransform: "uppercase", marginBottom: "2.5vh" }}>
          Section 01
        </p>

        <h1 style={{ ...s(0.25), fontSize: "2.2vw", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Major Tasks
        </h1>

        {/* Accent line */}
        <div style={{ height: "0.4vh", background: "rgba(255,255,255,0.3)", marginBottom: "3vh", ...(isExport ? { width: "14vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.4s" }) }} />

        <h2 style={{ ...s(0.45, "fadeInUp"), fontSize: "12vw", fontWeight: 800, color: "#fff", lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0 }}>
          AISLE
        </h2>

        {/* Task pills */}
        <div style={{ ...s(0.65, "fadeInUp"), display: "flex", flexDirection: "column", gap: "1.2vh", marginTop: "4vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>CleverTap Integration</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>Date Feedback</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>SmartPicks Aisle</span>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div style={{ ...s(0.8, "fadeInUp"), position: "absolute", bottom: "4vh", left: "7vw" }}>
        <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>3 Features</span>
      </div>
    </div>
  );
}
