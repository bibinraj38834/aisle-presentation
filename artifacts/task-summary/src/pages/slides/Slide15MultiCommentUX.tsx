import React from "react";

const PhotoSlot = ({ label }: { label: string }) => (
  <div style={{ border: "2px dashed rgba(255,255,255,0.18)", borderRadius: "1vw", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
    <svg width="3.5vw" height="3.5vw" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
    <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "1.5vw", marginTop: "1vh", fontFamily: "var(--font-body-family)", textAlign: "center" }}>{label}</p>
  </div>
);

export default function Slide15MultiCommentUX() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.7s ease forwards" }} />
      <div style={{ position: "absolute", top: "-10vh", left: "-5vw", width: "50vw", height: "50vh", background: "radial-gradient(ellipse, rgba(145,54,108,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "6vw", right: "5vw", bottom: "4vh", display: "flex", flexDirection: "column" }}>
        <div style={{ ...s(0.1, "fadeInUp"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
          <span style={{ background: "#91366C", color: "#fff", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.05em" }}>AISLE</span>
          <span style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>Ongoing</span>
          <span style={{ color: "#9CA3AF", background: "rgba(156,163,175,0.1)", border: "1px solid rgba(156,163,175,0.35)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>Open</span>
        </div>

        <h2 style={{ ...s(0.25), fontSize: "5vw", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2vh 0" }}>
          Multi Comment UX
        </h2>

        <p style={{ ...s(0.4, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", lineHeight: 1.55, maxWidth: "72vw", margin: "0 0 4vh 0" }}>
          Comments tab redesign with a unified iOS/Android tech plan and animation reference for like/pass actions. Covers scroll behaviour, reply threading, and cross-platform parity for the comment interaction surface.
        </p>

        <div style={{ ...s(0.55, "fadeInUp"), flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vh 2vw" }}>
          <PhotoSlot label="Photo 1 of 2" />
          <PhotoSlot label="Photo 2 of 2" />
        </div>
      </div>

      <div style={{ position: "absolute", top: "4vh", right: "4vw" }}>
        <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(145,54,108,0.5)", letterSpacing: "0.15em", fontWeight: 600 }}>ONGOING</span>
      </div>
    </div>
  );
}
