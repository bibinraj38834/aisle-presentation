import React from "react";

export default function Slide11MinorAisle() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.7s ease forwards" }} />
      <div style={{ position: "absolute", top: "-5vh", right: "-5vw", width: "45vw", height: "55vh", background: "radial-gradient(ellipse, rgba(145,54,108,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ position: "absolute", top: "5vh", left: "6vw", right: "5vw" }}>
        <div style={{ ...s(0.05, "fadeInUp"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.5vh" }}>
          <span style={{ background: "#91366C", color: "#fff", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700 }}>AISLE</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>Minor Tasks</span>
        </div>
        <h2 style={{ ...s(0.2), fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 1.5vh 0" }}>
          Aisle Minor Tasks
        </h2>
        <div style={{ height: "0.3vh", background: "linear-gradient(90deg, #91366C, rgba(145,54,108,0))", marginBottom: "4vh", ...(isExport ? { width: "40vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.35s" }) }} />
      </div>

      {/* Task cards */}
      <div style={{ position: "absolute", top: "26vh", left: "6vw", right: "5vw", bottom: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3vw" }}>

        {/* Card 1 */}
        <div style={{ ...s(0.4, "scaleIn"), background: "linear-gradient(135deg, rgba(145,54,108,0.15), rgba(51,35,115,0.1))", border: "1px solid rgba(145,54,108,0.25)", borderRadius: "1.5vw", padding: "3vh 2.5vw" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
            <span style={{ color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.4)", padding: "0.3vh 1.2vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>In Prod</span>
          </div>
          <h3 style={{ fontSize: "2.5vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.5vh 0" }}>
            Tracking Repeated Discover Profiles
          </h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.8vw", color: "#7B7F9A", lineHeight: 1.5, margin: 0 }}>
            Added already_passed tracking for repeated Discover profiles across like, pass, and comment flows.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ ...s(0.55, "scaleIn"), background: "linear-gradient(135deg, rgba(145,54,108,0.15), rgba(51,35,115,0.1))", border: "1px solid rgba(145,54,108,0.25)", borderRadius: "1.5vw", padding: "3vh 2.5vw" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
            <span style={{ color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.4)", padding: "0.3vh 1.2vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>In Prod</span>
          </div>
          <h3 style={{ fontSize: "2.5vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.5vh 0" }}>
            DS Signal for Google Ads
          </h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.8vw", color: "#7B7F9A", lineHeight: 1.5, margin: 0 }}>
            Added AppsFlyer events for DS intent scores using existing marketing-signal collections and cron flow.
          </p>
        </div>
      </div>
    </div>
  );
}
