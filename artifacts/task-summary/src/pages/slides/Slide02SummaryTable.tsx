import React from "react";

const statusStyle = (s: string): React.CSSProperties => {
  if (s === "In Prod") return { color: "#10B981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: "100px", fontSize: "1.35vw", padding: "0.1vh 0.9vw", fontWeight: 600, whiteSpace: "nowrap" as const };
  if (s === "In Progress") return { color: "#F59E0B", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: "100px", fontSize: "1.35vw", padding: "0.1vh 0.9vw", fontWeight: 600, whiteSpace: "nowrap" as const };
  if (s === "Complete") return { color: "#60A5FA", background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.35)", borderRadius: "100px", fontSize: "1.35vw", padding: "0.1vh 0.9vw", fontWeight: 600, whiteSpace: "nowrap" as const };
  if (s === "Open") return { color: "#9CA3AF", background: "rgba(156,163,175,0.1)", border: "1px solid rgba(156,163,175,0.25)", borderRadius: "100px", fontSize: "1.35vw", padding: "0.1vh 0.9vw", fontWeight: 600, whiteSpace: "nowrap" as const };
  return { color: "#6B7280", background: "rgba(107,114,128,0.1)", border: "1px solid rgba(107,114,128,0.2)", borderRadius: "100px", fontSize: "1.35vw", padding: "0.1vh 0.9vw", fontWeight: 600, whiteSpace: "nowrap" as const };
};

const Row = ({ name, status }: { name: string; status: string }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.7vh 0", borderBottom: "1px solid rgba(255,255,255,0.05)", gap: "1vw" }}>
    <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.6vw", color: "rgba(255,255,255,0.85)", fontWeight: 400, flex: 1, lineHeight: 1.2 }}>{name}</span>
    <span style={statusStyle(status)}>{status}</span>
  </div>
);

const SectionHeader = ({ label, color }: { label: string; color: string }) => (
  <div style={{ padding: "0.9vh 0 0.4vh", marginTop: "0.5vh" }}>
    <span style={{ fontFamily: "var(--font-display-family)", fontSize: "1.4vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color }}>{label}</span>
  </div>
);

export default function Slide02SummaryTable() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number): React.CSSProperties => isExport ? { opacity: 1 } : { opacity: 0, animation: `fadeInUp 0.7s ease forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      {/* Top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.45vh", background: "linear-gradient(90deg, #91366C 0%, #332373 50%, #FACB10 100%)" }} />

      {/* Header */}
      <div style={{ ...s(0), position: "absolute", top: "4vh", left: "5vw", right: "5vw", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ fontFamily: "var(--font-display-family)", fontSize: "3.2vw", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>Task Summary</h2>
        <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4vw", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "#91366C", fontWeight: 600 }}>
            <span style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#91366C", display: "inline-block" }} />Aisle
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4vw", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "#FACB10", fontWeight: 600 }}>
            <span style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#FACB10", display: "inline-block" }} />Arike
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4vw", fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "#00A896", fontWeight: 600 }}>
            <span style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#00A896", display: "inline-block" }} />Vernacs
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ position: "absolute", top: "12.5vh", left: "5vw", right: "5vw", height: "1px", background: "rgba(255,255,255,0.08)" }} />

      {/* Two columns */}
      <div style={{ ...s(0.15), position: "absolute", top: "13.5vh", left: "5vw", right: "5vw", bottom: "3vh", display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 2vw" }}>

        {/* LEFT COLUMN */}
        <div>
          <SectionHeader label="Major — Aisle" color="#91366C" />
          <Row name="CleverTap Integration" status="In Progress" />
          <Row name="Date Feedback" status="In Prod" />
          <Row name="SmartPicks Aisle" status="Complete" />

          <SectionHeader label="Major — Arike" color="#FACB10" />
          <Row name="Socket on Vernacs" status="In Prod" />
          <Row name="MBG Arike" status="In Prod" />
          <Row name="Support Lounge for Arike" status="In Progress" />

          <SectionHeader label="Minor — Aisle" color="rgba(145,54,108,0.7)" />
          <Row name="Tracking Repeated Discover Profiles" status="In Prod" />
          <Row name="DS Signal for Google Ads" status="In Prod" />

          <SectionHeader label="Minor — Arike" color="rgba(250,203,16,0.7)" />
          <Row name="Free for Female Phase 2 Events" status="In Prod" />
          <Row name="Pop-up after Images Uploaded" status="In Prod" />
          <Row name="Google Play Icon Visibility (BE)" status="In Prod" />
          <Row name="Chat Tracking Task" status="In Progress" />
        </div>

        {/* Divider */}
        <div style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* RIGHT COLUMN */}
        <div>
          <SectionHeader label="Ongoing — Aisle" color="#91366C" />
          <Row name="Web CheckOut Aisle" status="In Progress" />
          <Row name="Inform Users — Deleted Matches" status="In Progress" />
          <Row name="Multi Comment UX" status="Open" />

          <SectionHeader label="Ongoing — Arike" color="#FACB10" />
          <Row name="Web CheckOut Arike" status="In Progress" />
          <Row name="Arike SmartPicks" status="In Progress" />
          <Row name="Inform Users — Significant Blocking" status="In Progress" />
          <Row name="International Payment Gateway Arike" status="In Progress" />
          <Row name="90 Day Check on Arike" status="In Progress" />

          <SectionHeader label="Common" color="#7B7F9A" />
          <Row name="Hang Rate Improvements" status="Not Available" />
          <Row name="Shuffle Profile Photos for Passed Profiles" status="Not Available" />
        </div>
      </div>
    </div>
  );
}
