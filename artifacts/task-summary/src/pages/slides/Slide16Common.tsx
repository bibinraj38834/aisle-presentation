import React from "react";

export default function Slide16Common() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInUp"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      {/* Subtle gradient top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.45vh", background: "linear-gradient(90deg, #91366C, #332373, #FACB10, #00A896)" }} />

      {/* Decorative orbs */}
      <div style={{ position: "absolute", top: "20vh", right: "10vw", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(145,54,108,0.07) 0%, rgba(51,35,115,0.04) 60%, transparent 80%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", width: "25vw", height: "25vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(250,203,16,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ position: "absolute", top: "5vh", left: "6vw", right: "5vw" }}>
        <div style={{ ...s(0.05, "fadeInLeft"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.5vh" }}>
          <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.05em" }}>COMMON</span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>Cross-Platform</span>
        </div>
        <h2 style={{ ...s(0.2, "fadeInLeft"), fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 1.5vh 0" }}>
          Common Tasks
        </h2>
        <div style={{ height: "0.3vh", background: "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0))", ...(isExport ? { width: "35vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.35s" }) }} />
      </div>

      {/* Two task cards */}
      <div style={{ position: "absolute", top: "24vh", left: "6vw", right: "5vw", bottom: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3vw" }}>

        {/* Hang Rate Improvements */}
        <div style={{ ...s(0.4, "scaleIn"), background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5vw", padding: "4vh 3vw", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#6B7280", background: "rgba(107,114,128,0.12)", border: "1px solid rgba(107,114,128,0.25)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600, alignSelf: "flex-start", marginBottom: "2.5vh" }}>Not Available</span>
          <h3 style={{ fontSize: "3vw", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 2vh 0" }}>
            Hang Rate Improvements
          </h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", lineHeight: 1.55, margin: 0 }}>
            Ongoing performance and reliability work to reduce app hangs across Aisle and Arike platforms.
          </p>
          <div style={{ marginTop: "auto", paddingTop: "2.5vh" }}>
            <div style={{ display: "flex", gap: "0.8vw", flexWrap: "wrap" as const }}>
              <span style={{ background: "rgba(145,54,108,0.15)", color: "#91366C", border: "1px solid rgba(145,54,108,0.3)", padding: "0.3vh 1vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Aisle</span>
              <span style={{ background: "rgba(250,203,16,0.1)", color: "#FACB10", border: "1px solid rgba(250,203,16,0.25)", padding: "0.3vh 1vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Arike</span>
            </div>
          </div>
        </div>

        {/* Shuffle Profile Photos */}
        <div style={{ ...s(0.55, "scaleIn"), background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5vw", padding: "4vh 3vw", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#6B7280", background: "rgba(107,114,128,0.12)", border: "1px solid rgba(107,114,128,0.25)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600, alignSelf: "flex-start", marginBottom: "2.5vh" }}>Not Available</span>
          <h3 style={{ fontSize: "3vw", fontWeight: 700, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 2vh 0" }}>
            Shuffle Profile Photos
          </h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", lineHeight: 1.55, margin: 0 }}>
            Discovery and recommendation behavior work to shuffle photos for profiles users have previously passed.
          </p>
          <div style={{ marginTop: "auto", paddingTop: "2.5vh" }}>
            <div style={{ display: "flex", gap: "0.8vw", flexWrap: "wrap" as const }}>
              <span style={{ background: "rgba(145,54,108,0.15)", color: "#91366C", border: "1px solid rgba(145,54,108,0.3)", padding: "0.3vh 1vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Aisle</span>
              <span style={{ background: "rgba(250,203,16,0.1)", color: "#FACB10", border: "1px solid rgba(250,203,16,0.25)", padding: "0.3vh 1vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Arike</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
