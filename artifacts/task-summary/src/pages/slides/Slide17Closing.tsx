import React from "react";

export default function Slide17Closing() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInUp"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      {/* Three vertical color bands */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "33.33vw", background: "linear-gradient(160deg, rgba(145,54,108,0.22) 0%, rgba(51,35,115,0.14) 100%)" }} />
      <div style={{ position: "absolute", left: "33.33vw", top: 0, bottom: 0, width: "33.33vw", background: "rgba(250,203,16,0.07)" }} />
      <div style={{ position: "absolute", left: "66.66vw", top: 0, bottom: 0, width: "33.34vw", background: "rgba(0,168,150,0.07)" }} />

      {/* Top multi-color bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5vh", background: "linear-gradient(90deg, #91366C 0%, #332373 33%, #FACB10 66%, #00A896 100%)" }} />

      {/* Bottom multi-color bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.5vh", background: "linear-gradient(90deg, #91366C 0%, #332373 33%, #FACB10 66%, #00A896 100%)" }} />

      {/* Vertical separators */}
      <div style={{ position: "absolute", left: "33.33vw", top: "5vh", bottom: "5vh", width: "1px", background: "rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", left: "66.66vw", top: "5vh", bottom: "5vh", width: "1px", background: "rgba(255,255,255,0.07)" }} />

      {/* Central content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: "0 8vw" }}>
        <p style={{ ...s(0.1), fontFamily: "var(--font-body-family)", fontSize: "1.7vw", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "2.5vh" }}>July 2026</p>

        <h1 style={{ ...s(0.25), fontSize: "9vw", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", textAlign: "center", margin: "0 0 3.5vh 0", color: "#fff" }}>
          Keep Building.
        </h1>

        {/* Accent line */}
        <div style={{ height: "0.4vh", background: "linear-gradient(90deg, #91366C, #332373, #FACB10, #00A896)", marginBottom: "4vh", ...(isExport ? { width: "30vw" } : { width: 0, animation: "lineExpand 1.2s ease forwards 0.5s" }) }} />

        {/* Three product badges */}
        <div style={{ ...s(0.6), display: "flex", gap: "2.5vw", alignItems: "center", marginBottom: "6vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#91366C", margin: "0 auto 0.8vh" }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#91366C", fontWeight: 700 }}>Aisle</span>
          </div>
          <div style={{ width: "1px", height: "4vh", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#FACB10", margin: "0 auto 0.8vh" }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#FACB10", fontWeight: 700 }}>Arike</span>
          </div>
          <div style={{ width: "1px", height: "4vh", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#00A896", margin: "0 auto 0.8vh" }} />
            <span style={{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#00A896", fontWeight: 700 }}>Vernacs</span>
          </div>
        </div>

        {/* Stat summary */}
        <div style={{ ...s(0.75), display: "flex", gap: "4vw", alignItems: "flex-start" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display-family)", fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, margin: "0 0 0.5vh 0", letterSpacing: "-0.03em" }}>6</p>
            <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", margin: 0 }}>Major Tasks</p>
          </div>
          <div style={{ width: "1px", height: "9vh", background: "rgba(255,255,255,0.08)", alignSelf: "center" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display-family)", fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, margin: "0 0 0.5vh 0", letterSpacing: "-0.03em" }}>6</p>
            <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", margin: 0 }}>Minor Tasks</p>
          </div>
          <div style={{ width: "1px", height: "9vh", background: "rgba(255,255,255,0.08)", alignSelf: "center" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display-family)", fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, margin: "0 0 0.5vh 0", letterSpacing: "-0.03em" }}>10</p>
            <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", margin: 0 }}>Ongoing</p>
          </div>
          <div style={{ width: "1px", height: "9vh", background: "rgba(255,255,255,0.08)", alignSelf: "center" }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display-family)", fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, margin: "0 0 0.5vh 0", letterSpacing: "-0.03em" }}>2</p>
            <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", margin: 0 }}>Common</p>
          </div>
        </div>
      </div>
    </div>
  );
}
