import os
import json
import uuid
import re

# Output path settings
OUTPUT_SLIDES_DIR = "artifacts/task-summary/src/pages/slides"
OUTPUT_MANIFEST_PATH = "artifacts/task-summary/src/data/slides-manifest.json"

def clean_filename(title):
    # Remove non-alphanumeric chars and capitalize words
    clean = re.sub(r'[^a-zA-Z0-9 ]', '', title)
    return ''.join(word.capitalize() for word in clean.split())

def generate_title_slide(config, filename="Slide01Title.tsx"):
    title = config.get("title", "TASK SUMMARY")
    date_str = config.get("date", "June 2026")
    teams = config.get("teams", ["Aisle", "Arike", "Vernacs"])
    
    # Split title into two words for the two-tone gradient design
    words = title.split()
    word1 = words[0] if len(words) > 0 else "TASK"
    word2 = ' '.join(words[1:]) if len(words) > 1 else "SUMMARY"
    
    teams_jsx = ""
    for idx, team in enumerate(teams):
        bg = "#91366C" if team.lower() == "aisle" else ("#FACB10" if team.lower() == "arike" else "#00A896")
        color = "#0C0C15" if team.lower() == "arike" else "#fff"
        teams_jsx += f'          <span style={{{{ background: "{bg}", color: "{color}", padding: "0.7vh 2vw", borderRadius: "100px", fontSize: "1.8vw", fontWeight: 700 }}}}>{team}</span>\n'

    content = f"""import React from "react";

const base = import.meta.env.BASE_URL;

export default function Slide01Title() {{
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties => isExport
    ? {{ opacity: 1 }}
    : {{ opacity: 0, animation: `${{anim}} 0.8s cubic-bezier(0.22,1,0.36,1) forwards ${{delay}}s` }};

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{{{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}}}>
      {/* Background image */}
      <img src={`${{base}}title-bg.jpg`} alt="" crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{{ opacity: 0.18 }}} />

      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0" style={{{ background: "linear-gradient(135deg, rgba(145,54,108,0.25) 0%, rgba(51,35,115,0.35) 45%, #0C0C15 80%)" }}} />

      {/* Right decorative panel */}
      <div className="absolute right-0 top-0 bottom-0" style={{{ width: "38vw", background: "linear-gradient(135deg, rgba(145,54,108,0.08), rgba(51,35,115,0.15))", borderLeft: "1px solid rgba(145,54,108,0.18)" }}}>
        <div className="absolute" style={{{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "28vw", height: "28vw", borderRadius: "50%", border: "1px solid rgba(145,54,108,0.15)" }}} />
        <div className="absolute" style={{{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "18vw", height: "18vw", borderRadius: "50%", border: "1px solid rgba(51,35,115,0.25)" }}} />
        <div className="absolute" style={{{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "9vw", height: "9vw", borderRadius: "50%", background: "rgba(145,54,108,0.08)", border: "1px solid rgba(145,54,108,0.3)" }}} />
      </div>

      {/* Scattered iPhone-style App Icons on the right side */}
      <div className="absolute" style={{{ right: 0, top: 0, bottom: 0, width: "38vw", pointerEvents: "none" }}}>
        {/* Aisle Icon */}
        <div style={{{
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
        }}}>
          <img src={`${{base}}aisle-app-icon.webp`} alt="Aisle Icon" style={{{ width: "100%", height: "100%", objectFit: "cover" }}} />
        </div>

        {/* Arike Icon */}
        <div style={{{
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
        }}}>
          <img src={`${{base}}arike-app-icon.webp`} alt="Arike Icon" style={{{ width: "100%", height: "100%", objectFit: "cover" }}} />
        </div>

        {/* Anbe Icon */}
        <div style={{{
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
        }}}>
          <img src={`${{base}}anbe-app-icon.webp`} alt="Anbe Icon" style={{{ width: "100%", height: "100%", objectFit: "cover" }}} />
        </div>

        {/* Neene Icon */}
        <div style={{{
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
        }}}>
          <img src={`${{base}}neene-app-icon.webp`} alt="Neene Icon" style={{{ width: "100%", height: "100%", objectFit: "cover" }}} />
        </div>

        {/* Neetho Icon */}
        <div style={{{
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
        }}}>
          <img src={`${{base}}neetho-app-icon.webp`} alt="Neetho Icon" style={{{ width: "100%", height: "100%", objectFit: "cover" }}} />
        </div>
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0" style={{{ width: "0.5vw", background: "linear-gradient(to bottom, #91366C, #332373)", transformOrigin: "top", animation: isExport ? "none" : "barGrow 0.9s ease forwards 0s" }}} />

      {/* Content */}
      <div className="absolute flex flex-col justify-center" style={{{ top: 0, left: "6vw", right: "40vw", bottom: 0 }}}>
        <p style={{{ ...s(0.15), fontFamily: "var(--font-body-family)", fontSize: "1.7vw", letterSpacing: "0.35em", color: "#91366C", fontWeight: 500, textTransform: "uppercase", marginBottom: "2vh" }}}>
          Engineering Team
        </p>

        {/* Animated accent line */}
        <div style={{{ height: "0.35vh", background: "linear-gradient(90deg, #91366C, #332373)", marginBottom: "3vh", ...(isExport ? {{ width: "20vw" }} : {{ width: 0, animation: "lineExpand 1s ease forwards 0.3s" }}) }}} />

        <h1 style={{{ ...s(0.35), fontSize: "10vw", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}}>{word1}</h1>
        <h1 style={{{ ...s(0.5), fontSize: "10vw", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em", background: "linear-gradient(90deg, #91366C, #7B47CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0 }}}>{word2}</h1>

        <p style={{{ ...s(0.7, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "#7B7F9A", marginTop: "3.5vh", marginBottom: "4vh" }}}>{date_str}</p>

        {/* Product badges */}
        <div style={{{ ...s(0.85, "fadeInUp"), display: "flex", gap: "1.2vw" }}}>
{teams_jsx}        </div>
      </div>
    </div>
  );
}}
"""
    with open(os.path.join(OUTPUT_SLIDES_DIR, filename), "w") as f:
        f.write(content)

def generate_summary_table_slide(config, filename="Slide02SummaryTable.tsx"):
    tasks = config.get("tasks", [])
    
    rows_jsx = ""
    for idx, t in enumerate(tasks):
        title = t.get("title", "")
        app = t.get("app", "")
        category = t.get("category", "")
        status = t.get("status", "Completed")
        
        status_bg = "rgba(16,185,129,0.15)" if status.lower() == "completed" else ("rgba(245,158,11,0.15)" if status.lower() == "in progress" else "rgba(239,68,68,0.15)")
        status_color = "#10B981" if status.lower() == "completed" else ("#F59E0B" if status.lower() == "in progress" else "#EF4444")
        
        app_bg = "rgba(145,54,108,0.15)" if app.lower() == "aisle" else ("rgba(250,203,16,0.15)" if app.lower() == "arike" else "rgba(0,168,150,0.15)")
        app_color = "#D27FB0" if app.lower() == "aisle" else ("#FACB10" if app.lower() == "arike" else "#2DD4BF")

        cat_bg = "rgba(255,255,255,0.06)" if category.lower() == "major" else "rgba(255,255,255,0.03)"
        cat_border = "rgba(255,255,255,0.12)" if category.lower() == "major" else "rgba(255,255,255,0.05)"
        cat_color = "#FFFFFF" if category.lower() == "major" else "rgba(255,255,255,0.5)"

        rows_jsx += f"""          <tr key={{{idx}}} style={{{{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}}}>
            <td style={{{{ padding: "1.6vh 2.5vw", fontSize: "1.4vw", fontWeight: 600, color: "#fff" }}}}>{title}</td>
            <td style={{{{ padding: "1.6vh 2.5vw" }}}}>
              <span style={{{{ background: "{app_bg}", color: "{app_color}", padding: "0.5vh 1.2vw", borderRadius: "6px", fontSize: "1.1vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}}}>{app}</span>
            </td>
            <td style={{{{ padding: "1.6vh 2.5vw" }}}}>
              <span style={{{{ background: "{cat_bg}", border: "1px solid {cat_border}", color: "{cat_color}", padding: "0.4vh 1vw", borderRadius: "4px", fontSize: "1.1vw", fontWeight: 600 }}}}>{category}</span>
            </td>
            <td style={{{{ padding: "1.6vh 2.5vw" }}}}>
              <span style={{{{ background: "{status_bg}", color: "{status_color}", padding: "0.5vh 1.2vw", borderRadius: "100px", fontSize: "1.1vw", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5vw" }}}}>
                <span style={{{{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "{status_color}" }}}} />
                {status}
              </span>
            </td>
          </tr>\n"""

    content = f"""import React from "react";

export default function Slide02SummaryTable() {{
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInUp"): React.CSSProperties =>
    isExport ? {{ opacity: 1 }} : {{ opacity: 0, animation: `${{anim}} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${{delay}}s` }};

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{{{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}}}>
      <div className="absolute inset-0" style={{{ background: "radial-gradient(circle at 80% 20%, rgba(145,54,108,0.06) 0%, transparent 50%)" }}} />

      {/* Header */}
      <div className="absolute" style={{{ top: "6vh", left: "6vw", right: "6vw" }}}>
        <div className="flex justify-between items-end">
          <div>
            <p style={{{ ...s(0.1, "fadeInDown"), fontSize: "1.3vw", letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: "0 0 1vh 0" }}}>Overview</p>
            <h1 style={{{ ...s(0.2, "fadeInDown"), fontSize: "3.2vw", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}}>Task Summary Table</h1>
          </div>
          <div style={{{ ...s(0.3, "fadeInDown"), paddingBottom: "0.5vh" }}}>
            <span style={{{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(255,255,255,0.3)" }}}>
              {len(tasks)} Tasks Cataloged
            </span>
          </div>
        </div>
        <div style={{{ height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)", marginTop: "2vh" }}} />
      </div>

      {/* Table Container */}
      <div className="absolute" style={{{ top: "20vh", left: "6vw", right: "6vw", bottom: "6vh", overflowY: "auto", ...(isExport ? {{}} : {{ opacity: 0, animation: "fadeInUp 0.9s ease forwards 0.4s" }}) }}}>
        <table className="w-full text-left" style={{{ borderCollapse: "collapse", fontFamily: "var(--font-body-family)" }}}>
          <thead>
            <tr style={{{ borderBottom: "2px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}}>
              <th style={{{ padding: "1.8vh 2.5vw", fontSize: "1.2vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}}>Task Name</th>
              <th style={{{ padding: "1.8vh 2.5vw", fontSize: "1.2vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}}>Platform</th>
              <th style={{{ padding: "1.8vh 2.5vw", fontSize: "1.2vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}}>Category</th>
              <th style={{{ padding: "1.8vh 2.5vw", fontSize: "1.2vw", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}}>Status</th>
            </tr>
          </thead>
          <tbody>
{rows_jsx}          </tbody>
        </table>
      </div>
    </div>
  );
}}
"""
    with open(os.path.join(OUTPUT_SLIDES_DIR, filename), "w") as f:
        f.write(content)

def generate_section_slide(index, section_num, app, category, tasks, filename):
    is_aisle = app.lower() == "aisle"
    bg_style = 'linear-gradient(135deg, #91366C 0%, #5C1F49 40%, #332373 100%)' if is_aisle else '#0C0C15'
    
    # Extract task titles for this section
    task_pills_jsx = ""
    for idx, t in enumerate(tasks):
        task_pills_jsx += f"""          <div style={{{{ display: "flex", alignItems: "center", gap: "1.2vw" }}}}>
            <div style={{{{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "{'rgba(255,255,255,0.5)' if is_aisle else '#FACB10'}", flexShrink: 0 }}}} />
            <span style={{{{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}}}>{t.get('title')}</span>
          </div>\n"""
          
    # Right panel decoration depending on Aisle (glass icon badge) vs Arike (yellow sidebar with dark badge)
    if is_aisle:
        right_panel_jsx = """      {/* Large decorative circle */}
      <div className="absolute" style={{ right: "-8vw", top: "50%", transform: "translateY(-50%)", width: "55vw", height: "55vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)" }} />
      <div className="absolute" style={{ right: "-4vw", top: "50%", transform: "translateY(-50%)", width: "40vw", height: "40vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div className="absolute" style={{ right: "8vw", top: "50%", transform: "translateY(-50%)", width: "22vw", height: "22vw", borderRadius: "50%", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={`${base}aisle-logo.png`} alt="Aisle Logo" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
      </div>"""
    else:
        right_panel_jsx = """      {/* Yellow right panel */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42vw", background: "#FACB10" }}>
        {/* Geometric decoration inside yellow panel */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "30vw", height: "30vw", borderRadius: "50%", border: "2px solid rgba(0,0,0,0.08)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "20vw", height: "20vw", borderRadius: "50%", background: "#F4F4F5", border: "2px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img src={`${base}arike-logo.png`} alt="Arike Logo" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
        </div>
        {/* Section label inside yellow */}
        <div style={{ ...s(0.7, "fadeInRight"), position: "absolute", bottom: "5vh", right: "4vw", textAlign: "right" }}>
          <span style={{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em" }}>{features_count}</span>
        </div>
      </div>"""

    content = f"""import React from "react";

const base = import.meta.env.BASE_URL;

export default function {filename.replace('.tsx', '')}() {{
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? {{ opacity: 1 }} : {{ opacity: 0, animation: `${{anim}} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${{delay}}s` }};

  const features_count = "{len(tasks)} Features";

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{{{ background: "{bg_style}", fontFamily: "var(--font-display-family)" }}}}>
      {/* Highlight overlay */}
      <div className="absolute inset-0" style={{{ background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)" }}} />

{right_panel_jsx}

      {/* Left content */}
      <div className="absolute flex flex-col justify-center" style={{{ top: 0, left: "7vw", right: "45vw", bottom: 0 }}}>
        <p style={{{ ...s(0.1), fontSize: "1.6vw", letterSpacing: "0.4em", color: "{'rgba(255,255,255,0.55)' if is_aisle else '#FACB10'}", fontWeight: 600, textTransform: "uppercase", marginBottom: "2.5vh" }}}>
          Section {section_num:02d}
        </p>

        <h1 style={{{ ...s(0.25), fontSize: "2.2vw", fontWeight: 700, color: "{'rgba(255,255,255,0.6)' if is_aisle else 'rgba(255,255,255,0.55)'}", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5vh" }}}>
          {category} Tasks
        </h1>

        <div style={{{ height: "0.4vh", background: "{'rgba(255,255,255,0.3)' if is_aisle else '#FACB10'}", marginBottom: "3vh", ...(isExport ? {{ width: "14vw" }} : {{ width: 0, animation: "lineExpand 0.9s ease forwards 0.4s" }}) }}} />

        <h2 style={{{ ...s(0.45, "fadeInUp"), fontSize: "12vw", fontWeight: 800, color: "{'#fff' if is_aisle else '#FACB10'}", lineHeight: 0.88, letterSpacing: "-0.04em", margin: 0 }}}>
          {app.upper()}
        </h2>

        <div style={{{ ...s(0.65, "fadeInUp"), display: "flex", flexDirection: "column", gap: "1.2vh", marginTop: "4vh" }}}>
{task_pills_jsx}        </div>
      </div>

      {/* Bottom label */}
      {is_aisle && (
        <div style={{{ ...s(0.8, "fadeInUp"), position: "absolute", bottom: "4vh", left: "7vw" }}}>
          <span style={{{ fontFamily: "var(--font-body-family)", fontSize: "1.5vw", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}}>{len(tasks)} Features</span>
        </div>
      )}
    </div>
  );
}}
"""
    with open(os.path.join(OUTPUT_SLIDES_DIR, filename), "w") as f:
        f.write(content)

def generate_task_slide(task, index, filename):
    title = task.get("title", "")
    app = task.get("app", "")
    category = task.get("category", "")
    status = task.get("status", "Completed")
    prd_points = task.get("prdPoints", [])
    screenshots = task.get("screenshots", [])
    
    # Layout colors depending on App
    is_aisle = app.lower() == "aisle"
    accent_color = "#91366C" if is_aisle else "#FACB10"
    accent_text_color = "#FACB10" if not is_aisle else "#D27FB0"
    
    prd_list_jsx = ""
    for pt in prd_points:
        prd_list_jsx += f"""            <li style={{{{ marginBottom: "1.5vh" }}}}>
              <strong>{pt.split(':')[0]}:</strong>{':'.join(pt.split('[^:]:')[1:]) if ':' in pt else pt}
            </li>\n"""
            
    # Compile screenshots
    screenshots_jsx = ""
    if len(screenshots) == 1:
        # Single mockup view
        screenshots_jsx = f"""          <div className="flex items-center justify-center h-full w-full">
            <div style={{{{ width: "100%", height: "100%", maxHeight: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}}}>
              <img
                src={`${{base}}{screenshots[0]}`}
                alt="Mockup"
                style={{{ opacity: 0, animation: "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.3s", maxHeight: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}}
              />
            </div>
          </div>"""
    elif len(screenshots) == 2:
        # Two screenshots stacked or side-by-side
        screenshots_jsx = f"""          <div className="flex gap-4 items-center justify-center h-full w-full">
            <div style={{{{ width: "50%", height: "100%", maxHeight: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}}}>
              <img
                src={`${{base}}{screenshots[0]}`}
                alt="Mockup 1"
                style={{{ opacity: 0, animation: "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.3s", maxHeight: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}}
              />
            </div>
            <div style={{{{ width: "50%", height: "100%", maxHeight: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}}}>
              <img
                src={`${{base}}{screenshots[1]}`}
                alt="Mockup 2"
                style={{{ opacity: 0, animation: "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.5s", maxHeight: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}}
              />
            </div>
          </div>"""
    elif len(screenshots) >= 3:
        # Multi screenshots flex grid
        images_code = ""
        for i, img in enumerate(screenshots[:4]): # limit to 4
            delay = 0.3 + (i * 0.15)
            width_pct = "48%" if len(screenshots) == 4 else "31%"
            images_code += f"""            <div style={{{{ width: "{width_pct}", height: "100%", maxHeight: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}}}>
              <img
                src={`${{base}}{img}`}
                alt="Screenshot {i+1}"
                style={{{{{ opacity: 0, animation: "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards {delay}s", maxHeight: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}}}}
              />
            </div>\n"""
        screenshots_jsx = f"""          <div className="flex flex-wrap gap-4 items-center justify-center h-full w-full">
{images_code}          </div>"""
    else:
        # Placeholder or empty space
        screenshots_jsx = """          <div className="flex items-center justify-center h-full w-full">
            <p className="text-gray-500 font-medium">No screenshots provided for this task.</p>
          </div>"""

    content = f"""import React from "react";

const base = import.meta.env.BASE_URL;

export default function {filename.replace('.tsx', '')}() {{
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInLeft"): React.CSSProperties =>
    isExport ? {{ opacity: 1 }} : {{ opacity: 0, animation: `${{anim}} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${{delay}}s` }};

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{{{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}}}>
      <div className="absolute inset-0" style={{{ background: "radial-gradient(circle at 10% 90%, rgba(145,54,108,0.06) 0%, transparent 60%)" }}} />

      {/* Slide Index Badge */}
      <div className="absolute" style={{{{ right: "6vw", top: "6vh", ...s(0.1, "fadeInDown") }}}}>
        <span style={{{{ fontSize: "1.4vw", fontWeight: 700, color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.15)", padding: "0.8vh 1.5vw", borderRadius: "100px" }}}}>
          {index:02d} / 22
        </span>
      </div>

      <div className="flex h-full w-full">
        {/* Left Columns - Text content */}
        <div className="flex flex-col justify-center h-full" style={{{ width: "45vw", paddingLeft: "6vw", paddingRight: "4vw", boxSizing: "border-box" }}}>
          <p style={{{ ...s(0.1), fontSize: "1.4vw", letterSpacing: "0.3em", color: "{accent_text_color}", fontWeight: 600, textTransform: "uppercase", marginBottom: "2vh" }}}>
            {app} — {category} Task
          </p>

          <h1 style={{{ ...s(0.2), fontSize: "4.2vw", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 2.5vh 0" }}}>
            {title}
          </h1>

          <div style={{{ height: "0.4vh", width: "12vw", background: "{accent_color}", marginBottom: "4vh", ...(isExport ? {{ width: "12vw" }} : {{ width: 0, animation: "lineExpand 1s ease forwards 0.3s" }}) }}} />

          <ul style={{{ ...s(0.4, "fadeInUp"), fontFamily: "var(--font-body-family)", fontSize: "1.55vw", color: "rgba(255,255,255,0.7)", listStyleType: "none", paddingLeft: 0, margin: 0 }}}>
{prd_list_jsx}          </ul>
        </div>

        {/* Right Column - Screenshot Mockups */}
        <div className="flex items-center justify-center h-full" style={{{ width: "55vw", paddingRight: "6vw", boxSizing: "border-box" }}}>
{screenshots_jsx}        </div>
      </div>
    </div>
  );
}}
"""
    with open(os.path.join(OUTPUT_SLIDES_DIR, filename), "w") as f:
        f.write(content)

def generate_closing_slide(config, filename="Slide17Closing.tsx"):
    date_str = config.get("date", "June 2026")
    teams = config.get("teams", ["Aisle", "Arike", "Vernacs"])
    
    badges_jsx = ""
    for idx, team in enumerate(teams):
        bg = "#91366C" if team.lower() == "aisle" else ("#FACB10" if team.lower() == "arike" else "#00A896")
        badges_jsx += f"""          <div style={{{{ textAlign: "center" }}}}>
            <div style={{{{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "{bg}", margin: "0 auto 0.8vh" }}}} />
            <span style={{{{ fontFamily: "var(--font-body-family)", fontSize: "2vw", color: "{bg}", fontWeight: 700 }}}}>{team}</span>
          </div>\n"""

    content = f"""import React from "react";

export default function Slide17Closing() {{
  const isExport = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
  const s = (delay: number, anim = "fadeInUp"): React.CSSProperties =>
    isExport ? {{ opacity: 1 }} : {{ opacity: 0, animation: `${{anim}} 0.85s cubic-bezier(0.22,1,0.36,1) forwards ${{delay}}s` }};

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{{{ background: "#0C0C15", fontFamily: "var(--font-display-family)" }}}}>
      {/* Three vertical color bands */}
      <div style={{{ position: "absolute", left: 0, top: 0, bottom: 0, width: "33.33vw", background: "linear-gradient(160deg, rgba(145,54,108,0.22) 0%, rgba(51,35,115,0.14) 100%)" }}} />
      <div style={{{ position: "absolute", left: "33.33vw", top: 0, bottom: 0, width: "33.33vw", background: "rgba(250,203,16,0.07)" }}} />
      <div style={{{ position: "absolute", left: "66.66vw", top: 0, bottom: 0, width: "33.34vw", background: "rgba(0,168,150,0.07)" }}} />

      {/* Top multi-color bar */}
      <div style={{{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5vh", background: "linear-gradient(90deg, #91366C 0%, #332373 33%, #FACB10 66%, #00A896 100%)" }}} />

      {/* Bottom multi-color bar */}
      <div style={{{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.5vh", background: "linear-gradient(90deg, #91366C 0%, #332373 33%, #FACB10 66%, #00A896 100%)" }}} />

      {/* Vertical separators */}
      <div style={{{ position: "absolute", left: "33.33vw", top: "5vh", bottom: "5vh", width: "1px", background: "rgba(255,255,255,0.07)" }}} />
      <div style={{{ position: "absolute", left: "66.66vw", top: "5vh", bottom: "5vh", width: "1px", background: "rgba(255,255,255,0.07)" }}} />

      {/* Central content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{{ padding: "0 8vw" }}}>
        <p style={{{ ...s(0.1), fontFamily: "var(--font-body-family)", fontSize: "1.7vw", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "2.5vh" }}}>{date_str}</p>

        <h1 style={{{ ...s(0.25), fontSize: "9vw", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em", textAlign: "center", margin: "0 0 3.5vh 0", color: "#fff" }}}>
          Keep Building.
        </h1>

        {/* Accent line */}
        <div style={{{ height: "0.4vh", background: "linear-gradient(90deg, #91366C, #332373, #FACB10, #00A896)", marginBottom: "4vh", ...(isExport ? {{ width: "30vw" }} : {{ width: 0, animation: "lineExpand 1.2s ease forwards 0.5s" }}) }}} />

        {/* Product badges */}
        <div style={{{ ...s(0.6), display: "flex", gap: "2.5vw", alignItems: "center", marginBottom: "6vh" }}}>
{badges_jsx}        </div>
      </div>
    </div>
  );
}}
"""
    with open(os.path.join(OUTPUT_SLIDES_DIR, filename), "w") as f:
        f.write(content)

def build_manifest_list(config):
    tasks = config.get("tasks", [])
    
    # We will order the slides in this sequence:
    # 1. Title
    # 2. Summary Table
    # 3. Section dividers & task slides grouped by:
    #    - Aisle Major
    #    - Arike Major
    #    - Aisle Minor
    #    - Arike Minor
    #    - Ongoing
    # 4. Closing slide
    
    # Group tasks
    groups = {
        ("Aisle", "Major"): [],
        ("Arike", "Major"): [],
        ("Aisle", "Minor"): [],
        ("Arike", "Minor"): [],
        ("Aisle", "Ongoing"): [],
        ("Arike", "Ongoing"): [],
    }
    
    for t in tasks:
        app = t.get("app", "")
        category = t.get("category", "")
        # normalize ongoing
        if category.lower() == "ongoing":
            category = "Ongoing"
        key = (app, category)
        if key in groups:
            groups[key].append(t)
        else:
            # fallback/create dynamic group
            groups[key] = [t]
            
    # Start compiling slide files & entries
    manifest_entries = []
    current_position = 1
    
    # Clear out existing slide files to avoid duplicate code modules
    for fn in os.listdir(OUTPUT_SLIDES_DIR):
        if fn.endswith(".tsx") and fn.startswith("Slide"):
            os.remove(os.path.join(OUTPUT_SLIDES_DIR, fn))
            
    # 1. Title Slide
    title_filename = "Slide01Title.tsx"
    generate_title_slide(config, title_filename)
    manifest_entries.append({
        "id": str(uuid.uuid4()),
        "position": current_position,
        "filepath": f"src/pages/slides/{title_filename}",
        "title": "Title",
        "description": f"Engineering Task Summary — {config.get('date')}",
        "speakerNotes": ""
    })
    current_position += 1
    
    # 2. Summary Table Slide
    table_filename = "Slide02SummaryTable.tsx"
    generate_summary_table_slide(config, table_filename)
    manifest_entries.append({
        "id": str(uuid.uuid4()),
        "position": current_position,
        "filepath": f"src/pages/slides/{table_filename}",
        "title": "Task Summary",
        "description": "All tasks cataloged by category and status",
        "speakerNotes": ""
    })
    current_position += 1
    
    # Group Order sequence
    group_order = [
        ("Aisle", "Major", "Section 01"),
        ("Arike", "Major", "Section 02"),
        ("Aisle", "Minor", "Section 03"),
        ("Arike", "Minor", "Section 04"),
        ("Aisle", "Ongoing", "Section 05"),
        ("Arike", "Ongoing", "Section 06")
    ]
    
    section_index = 1
    for app, cat, label in group_order:
        group_tasks = groups.get((app, cat), [])
        if len(group_tasks) == 0:
            continue
            
        # Generate Section Divider Slide
        divider_filename = f"Slide{current_position:02d}Section{cat}{app}.tsx"
        generate_section_slide(current_position, section_index, app, cat, group_tasks, divider_filename)
        manifest_entries.append({
            "id": str(uuid.uuid4()),
            "position": current_position,
            "filepath": f"src/pages/slides/{divider_filename}",
            "title": f"{cat} — {app}",
            "description": f"Section divider: {len(group_tasks)} {cat.lower()} {app} features",
            "speakerNotes": ""
        })
        current_position += 1
        section_index += 1
        
        # Generate individual task slides
        for task in group_tasks:
            clean_name = clean_filename(task.get("title"))
            task_filename = f"Slide{current_position:02d}{clean_name}.tsx"
            generate_task_slide(task, current_position, task_filename)
            manifest_entries.append({
                "id": str(uuid.uuid4()),
                "position": current_position,
                "filepath": f"src/pages/slides/{task_filename}",
                "title": task.get("title"),
                "description": f"Detailed mockup overview of {task.get('title')}",
                "speakerNotes": ""
            })
            current_position += 1
            
    # 4. Closing Slide
    closing_filename = f"Slide{current_position:02d}Closing.tsx"
    generate_closing_slide(config, closing_filename)
    manifest_entries.append({
        "id": str(uuid.uuid4()),
        "position": current_position,
        "filepath": f"src/pages/slides/{closing_filename}",
        "title": "Closing",
        "description": "Keep Building",
        "speakerNotes": ""
    })
    
    # Save the manifest
    with open(OUTPUT_MANIFEST_PATH, "w") as f:
        json.dump(manifest_entries, f, indent=2)
        
    print(f"Generated {len(manifest_entries)} slides successfully in {OUTPUT_SLIDES_DIR}.")

if __name__ == "__main__":
    config_path = "slides-config.json"
    if os.path.exists(config_path):
        with open(config_path, "r") as f:
            config = json.load(f)
        build_manifest_list(config)
    else:
        print(f"Error: {config_path} config file not found. Please create one.")
