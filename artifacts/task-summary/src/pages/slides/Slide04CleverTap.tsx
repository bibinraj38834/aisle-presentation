import React from "react";

const base = import.meta.env.BASE_URL;

const PhotoSlot = ({ label }: { label: string }) => (
  <div style={{ border: "2px dashed rgba(255,255,255,0.18)", borderRadius: "1vw", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
    <svg width="3.5vw" height="3.5vw" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
    <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "1.5vw", marginTop: "1vh", fontFamily: "var(--font-body-family)", textAlign: "center" }}>{label}</p>
  </div>
);

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ borderRadius: "1vw", overflow: "hidden", flex: 1, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
  </div>
);

export default function Slide04CleverTap() {
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
          <span style={{ color: "#F59E0B", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)", padding: "0.4vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 600 }}>In Progress</span>
        </div>

        <h2 style={{ ...s(0.25), fontSize: "5vw", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2vh 0" }}>
          CleverTap Integration
        </h2>

        <p style={{ ...s(0.4, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", lineHeight: 1.55, maxWidth: "72vw", margin: "0 0 3vh 0" }}>
          Integrates CleverTap as analytics and engagement destination. Covers login, onboarding, profile views, likes, matches, payments, and more via Kafka events.
        </p>

        <div style={{ ...s(0.55, "fadeInUp"), flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2vh 2vw" }}>
          <PhotoSlot label="Photo 1 of 4" />
          <Img src={`${base}clevertap-2.png`} alt="CleverTap user activity" />
          <Img src={`${base}clevertap-3.png`} alt="CleverTap user profile" />
          <Img src={`${base}clevertap-4.png`} alt="CleverTap device details" />
        </div>
      </div>

      <div style={{ position: "absolute", top: "4vh", right: "4vw" }}>
        <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(145,54,108,0.5)", letterSpacing: "0.15em", fontWeight: 600 }}>MAJOR TASK</span>
      </div>
    </div>
  );
}
