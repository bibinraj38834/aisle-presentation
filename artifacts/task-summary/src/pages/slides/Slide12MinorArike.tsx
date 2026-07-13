import React from "react";

const base = import.meta.env.BASE_URL;

const PhotoSlot = ({ label }: { label: string }) => (
  <div style={{ border: "2px dashed rgba(255,255,255,0.18)", borderRadius: "0.8vw", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "12vh" }}>
    <svg width="2.5vw" height="2.5vw" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.4vw", marginTop: "0.7vh", fontFamily: "var(--font-body-family)", textAlign: "center" }}>{label}</p>
  </div>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ borderRadius: "0.8vw", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", height: "12vh", background: "rgba(255,255,255,0.04)" }}>
    <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
  </div>
);

export default function Slide12MinorArike() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.5vw", background: "#FACB10", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.7s ease forwards" }} />
      <div style={{ position: "absolute", top: "-5vh", right: "-5vw", width: "45vw", height: "55vh", background: "radial-gradient(ellipse, rgba(250,203,16,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "6vw", right: "5vw" }}>
        <div style={{ ...s(0.05, "fadeInUp"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.5vh" }}>
          <span style={{ background: "#FACB10", color: "#0C0C15", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700 }}>ARIKE</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>Minor Tasks</span>
        </div>
        <h2 style={{ ...s(0.2), fontSize: "5.5vw", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 1.5vh 0" }}>
          Arike Minor Tasks
        </h2>
        <div style={{ height: "0.3vh", background: "linear-gradient(90deg, #FACB10, rgba(250,203,16,0))", marginBottom: "3vh", ...(isExport ? { width: "40vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.35s" }) }} />
      </div>

      {/* 4 task cards in 2x2 grid */}
      <div style={{ position: "absolute", top: "24vh", left: "6vw", right: "5vw", bottom: "4vh", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2vh 2.5vw" }}>

        {/* Card 1 */}
        <div style={{ ...s(0.35, "scaleIn"), background: "rgba(250,203,16,0.05)", border: "1px solid rgba(250,203,16,0.2)", borderRadius: "1.2vw", padding: "2vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2vh" }}>
            <h3 style={{ fontSize: "1.9vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: 0, flex: 1, paddingRight: "1vw" }}>Free for Female Phase 2 Events</h3>
            <span style={{ color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", padding: "0.2vh 1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, flexShrink: 0 }}>In Prod</span>
          </div>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.6vw", color: "#7B7F9A", lineHeight: 1.45, margin: 0, flex: 1 }}>Fixed missing iOS tracking for Free for Female success popup events; Android was already working.</p>
        </div>

        {/* Card 2 */}
        <div style={{ ...s(0.45, "scaleIn"), background: "rgba(250,203,16,0.05)", border: "1px solid rgba(250,203,16,0.2)", borderRadius: "1.2vw", padding: "2vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2vh" }}>
            <h3 style={{ fontSize: "1.9vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: 0, flex: 1, paddingRight: "1vw" }}>Pop-up after Images Uploaded</h3>
            <span style={{ color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", padding: "0.2vh 1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, flexShrink: 0 }}>In Prod</span>
          </div>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.6vw", color: "#7B7F9A", lineHeight: 1.45, margin: 0, flex: 1 }}>Added popup communication after image upload to inform users that photos go live after review.</p>

        </div>

        {/* Card 3 */}
        <div style={{ ...s(0.55, "scaleIn"), background: "rgba(250,203,16,0.05)", border: "1px solid rgba(250,203,16,0.2)", borderRadius: "1.2vw", padding: "2vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2vh" }}>
            <h3 style={{ fontSize: "1.9vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: 0, flex: 1, paddingRight: "1vw" }}>Google Play Icon Visibility</h3>
            <span style={{ color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", padding: "0.2vh 1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, flexShrink: 0 }}>In Prod</span>
          </div>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.6vw", color: "#7B7F9A", lineHeight: 1.45, margin: 0, flex: 1 }}>Added backend-controlled key to manage Google Play billing icon visibility for Indian users.</p>
        </div>

        {/* Card 4 */}
        <div style={{ ...s(0.65, "scaleIn"), background: "rgba(250,203,16,0.05)", border: "1px solid rgba(250,203,16,0.2)", borderRadius: "1.2vw", padding: "2vh 2vw", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2vh" }}>
            <h3 style={{ fontSize: "1.9vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, margin: 0, flex: 1, paddingRight: "1vw" }}>Chat Tracking Task</h3>
            <span style={{ color: "#F59E0B", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", padding: "0.2vh 1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, flexShrink: 0 }}>In Progress</span>
          </div>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.6vw", color: "#7B7F9A", lineHeight: 1.45, margin: 0, flex: 1 }}>Added chat tracking for Arike covering screen open, PubNub/backend request-response, chat display, and message storage events.</p>
        </div>
      </div>
    </div>
  );
}
