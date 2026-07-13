import React from "react";

const PhotoSlot = ({ label }: { label: string }) => (
  <div style={{ border: "2px dashed rgba(255,255,255,0.16)", borderRadius: "0.8vw", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, minHeight: "10vh" }}>
    <svg width="2.4vw" height="2.4vw" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.35vw", marginTop: "0.6vh", fontFamily: "var(--font-body-family)", textAlign: "center" }}>{label}</p>
  </div>
);

export default function Slide13OngoingAisle() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInUp"): React.CSSProperties =>
    isExport ? { opacity: 1 } : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.7s ease forwards" }} />
      <div style={{ position: "absolute", top: "-5vh", left: "0", width: "60vw", height: "40vh", background: "radial-gradient(ellipse at left, rgba(145,54,108,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ position: "absolute", top: "4.5vh", left: "6vw", right: "5vw" }}>
        <div style={{ ...s(0.05, "fadeInLeft"), display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1.2vh" }}>
          <span style={{ background: "#91366C", color: "#fff", padding: "0.35vh 1.4vw", borderRadius: "100px", fontSize: "1.5vw", fontWeight: 700 }}>AISLE</span>
          <span style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>Ongoing</span>
        </div>
        <h2 style={{ ...s(0.18, "fadeInLeft"), fontSize: "4.8vw", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 1.2vh 0" }}>
          Ongoing — Aisle
        </h2>
        <div style={{ height: "0.3vh", background: "linear-gradient(90deg, #91366C, rgba(145,54,108,0))", ...(isExport ? { width: "40vw" } : { width: 0, animation: "lineExpand 0.9s ease forwards 0.32s" }) }} />
      </div>

      {/* Three task columns */}
      <div style={{ position: "absolute", top: "20vh", left: "6vw", right: "5vw", bottom: "4vh", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw" }}>

        {/* Web CheckOut Aisle */}
        <div style={{ ...s(0.35), background: "linear-gradient(160deg, rgba(145,54,108,0.14), rgba(51,35,115,0.08))", border: "1px solid rgba(145,54,108,0.22)", borderRadius: "1.2vw", padding: "2.2vh 1.8vw", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#F59E0B", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", padding: "0.3vh 1.1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, alignSelf: "flex-start", marginBottom: "1.5vh" }}>In Progress</span>
          <h3 style={{ fontSize: "2vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.2vh 0" }}>Web CheckOut Aisle</h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", lineHeight: 1.45, margin: "0 0 1.5vh 0", flex: 1 }}>Payment flow, promo templates, experiment conditions, MBG handling, and checkout messaging.</p>
          <div style={{ display: "flex", gap: "1vw", flex: "0 0 auto" }}>
            <PhotoSlot label="Photo 1 of 2" />
            <PhotoSlot label="Photo 2 of 2" />
          </div>
        </div>

        {/* Inform Deleted Matches */}
        <div style={{ ...s(0.48), background: "linear-gradient(160deg, rgba(145,54,108,0.14), rgba(51,35,115,0.08))", border: "1px solid rgba(145,54,108,0.22)", borderRadius: "1.2vw", padding: "2.2vh 1.8vw", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#F59E0B", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", padding: "0.3vh 1.1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, alignSelf: "flex-start", marginBottom: "1.5vh" }}>In Progress</span>
          <h3 style={{ fontSize: "2vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.2vh 0" }}>Inform — Deleted Matches</h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", lineHeight: 1.45, margin: "0 0 1.5vh 0", flex: 1 }}>UI and backend handling so deleted, disabled, or banned matches don't silently disappear from chats.</p>
          <div style={{ display: "flex", gap: "1vw", flex: "0 0 auto" }}>
            <PhotoSlot label="Photo 1 of 2" />
            <PhotoSlot label="Photo 2 of 2" />
          </div>
        </div>

        {/* Multi Comment UX */}
        <div style={{ ...s(0.61), background: "linear-gradient(160deg, rgba(145,54,108,0.14), rgba(51,35,115,0.08))", border: "1px solid rgba(145,54,108,0.22)", borderRadius: "1.2vw", padding: "2.2vh 1.8vw", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#9CA3AF", background: "rgba(156,163,175,0.1)", border: "1px solid rgba(156,163,175,0.25)", padding: "0.3vh 1.1vw", borderRadius: "100px", fontSize: "1.35vw", fontWeight: 600, alignSelf: "flex-start", marginBottom: "1.5vh" }}>Open</span>
          <h3 style={{ fontSize: "2vw", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.2vh 0" }}>Multi Comment UX</h3>
          <p style={{ fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "#7B7F9A", lineHeight: 1.45, margin: "0 0 1.5vh 0", flex: 1 }}>Comments tab redesign with unified iOS/Android tech planning and animation reference for like/pass actions.</p>
          <div style={{ display: "flex", gap: "1vw", flex: "0 0 auto" }}>
            <PhotoSlot label="Photo 1 of 2" />
            <PhotoSlot label="Photo 2 of 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
