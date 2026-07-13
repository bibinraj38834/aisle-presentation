const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties => isExport
    ? { opacity: 1 }
    : { opacity: 0, animation: `${anim} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s` };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}>
      {/* Background image */}
      <img src={`${base}title-bg.jpg`} alt="" crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18 }} />

      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(145,54,108,0.25) 0%, rgba(51,35,115,0.35) 45%, #0C0C15 80%)" }} />

      {/* Right decorative panel */}
      <div className="absolute right-0 top-0 bottom-0" style={{ width: "38vw", background: "linear-gradient(135deg, rgba(145,54,108,0.08), rgba(51,35,115,0.15))", borderLeft: "1px solid rgba(145,54,108,0.18)" }}>
        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "28vw", height: "28vw", borderRadius: "50%", border: "1px solid rgba(145,54,108,0.15)" }} />
        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "18vw", height: "18vw", borderRadius: "50%", border: "1px solid rgba(51,35,115,0.25)" }} />
        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "9vw", height: "9vw", borderRadius: "50%", background: "rgba(145,54,108,0.08)", border: "1px solid rgba(145,54,108,0.3)" }} />
      </div>

      {/* Scattered iPhone-style App Icons on the right side */}
      <div className="absolute" style={{ right: 0, top: 0, bottom: 0, width: "38vw", pointerEvents: "none" }}>
        {/* Aisle Icon */}
        <div style={{
          position: "absolute",
          top: "12vh",
          right: "22vw",
          width: "7vw",
          height: "7vw",
          borderRadius: "22%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 1vw 2vw rgba(0,0,0,0.4)",
          animation: isExport ? "none" : "float1 5s ease-in-out infinite",
          pointerEvents: "auto"
        }}>
          <img src={`${base}aisle-app-icon.webp`} alt="Aisle Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Arike Icon */}
        <div style={{
          position: "absolute",
          top: "32vh",
          right: "6vw",
          width: "8vw",
          height: "8vw",
          borderRadius: "22%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 1.2vw 2.5vw rgba(0,0,0,0.4)",
          animation: isExport ? "none" : "float2 6s ease-in-out infinite",
          pointerEvents: "auto"
        }}>
          <img src={`${base}arike-app-icon.webp`} alt="Arike Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Anbe Icon */}
        <div style={{
          position: "absolute",
          top: "54vh",
          right: "24vw",
          width: "6.5vw",
          height: "6.5vw",
          borderRadius: "22%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0.9vw 1.8vw rgba(0,0,0,0.4)",
          animation: isExport ? "none" : "float3 5.5s ease-in-out infinite",
          pointerEvents: "auto"
        }}>
          <img src={`${base}anbe-app-icon.webp`} alt="Anbe Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Neene Icon */}
        <div style={{
          position: "absolute",
          top: "68vh",
          right: "10vw",
          width: "7.5vw",
          height: "7.5vw",
          borderRadius: "22%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 1.1vw 2.2vw rgba(0,0,0,0.4)",
          animation: isExport ? "none" : "float4 4.8s ease-in-out infinite",
          pointerEvents: "auto"
        }}>
          <img src={`${base}neene-app-icon.webp`} alt="Neene Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Neetho Icon */}
        <div style={{
          position: "absolute",
          top: "20vh",
          right: "8vw",
          width: "6vw",
          height: "6vw",
          borderRadius: "22%",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0.8vw 1.6vw rgba(0,0,0,0.4)",
          animation: isExport ? "none" : "float5 5.8s ease-in-out infinite",
          pointerEvents: "auto"
        }}>
          <img src={`${base}neetho-app-icon.webp`} alt="Neetho Icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0" style={{ width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.9s ease forwards 0s" }} />

      {/* Content */}
      <div className="absolute flex flex-col justify-center" style={{ top: 0, left: "6vw", right: "40vw", bottom: 0 }}>
        <p style={{ ...s(0.15), fontFamily: "var(--font-body-family)", fontSize: "1.7vw", letterSpacing: "0.35em", color: "#91366C", fontWeight: 500, textTransform: "uppercase", marginBottom: "2vh" }}>
          Engineering Team
        </p>

        {/* Animated accent line */}
        <div style={{ height: "0.35vh", background: "linear-gradient(90deg, #91366C, #332373)", marginBottom: "3vh", ...(isExport ? { width: "20vw" } : { width: 0, animation: "lineExpand 1s ease forwards 0.3s" }) }} />

        <h1 style={{ ...s(0.35), fontSize: "10vw", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}>TASK</h1>
        <h1 style={{ ...s(0.5), fontSize: "10vw", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em", background: "linear-gradient(90deg, #91366C, #7B47CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}>SUMMARY</h1>

        <p style={{ ...s(0.7, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", marginTop: "3.5vh", marginBottom: "4vh" }}>June 2026</p>

        {/* Product badges */}
        <div style={{ ...s(0.85, "fadeInUp"), display: "flex", gap: "1.2vw" }}>
          <span style={{ background: "#91366C", color: "#fff", padding: "0.7vh 2vw", borderRadius: "100px", fontSize: "1.8vw", fontWeight: 700 }}>Aisle</span>
          <span style={{ background: "#FACB10", color: "#0C0C15", padding: "0.7vh 2vw", borderRadius: "100px", fontSize: "1.8vw", fontWeight: 700 }}>Arike</span>
          <span style={{ background: "#00A896", color: "#fff", padding: "0.7vh 2vw", borderRadius: "100px", fontSize: "1.8vw", fontWeight: 700 }}>Vernacs</span>
        </div>
      </div>
    </div>
  );
}
