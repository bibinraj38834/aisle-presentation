---
name: task-summary-deck-generator
description: Automatically generates and compiles a complete HTML/CSS/React slide presentation based on task requirements, screenshots, and ClickUp details.
---

# Reusable Task Presentation Generator

Use this skill when the user wants to add, modify, or completely generate task summary presentations. This skill automates the compilation of slides while preserving the visual theme, layout structure, responsive mockup viewport sizes, and slow-floating micro-animations.

## How It Works

1. **Input Requirements**:
   The user provides:
   * A task list (categorized under apps like Aisle or Arike, and priority levels like Major, Minor, or Ongoing).
   * Screenshot files representing the features in action.
   * Optional **ClickUp task links** (representing product requirements, description, or PRD).

2. **Parsing ClickUp Links**:
   * If a ClickUp link is provided, use search or fetch tools (like `read_browser_page` or search) to load the page content, extracting:
     * Feature specification details / key descriptions.
     * Technical scope points.
     * Use cases or target users.
   * If the link is private or inaccessible, ask the user to copy/paste the task descriptions directly in the chat, then extract the key bullet points for the presentation slide.

3. **Compiling the Slides**:
   * Create or update `slides-config.json` at the root of the workspace directory with the configuration.
   * Run the Python compiler script:
     ```bash
     python3 .agents/skills/task-summary-deck-generator/scripts/generate_deck.py
     ```
   * The script will automatically generate all necessary `.tsx` files in `artifacts/task-summary/src/pages/slides/` and regenerate `slides-manifest.json`.

---

## Configuration File Format (`slides-config.json`)

Create a `slides-config.json` file in the workspace root with the following structure:

```json
{
  "title": "Engineering Task Summary",
  "date": "June 2026",
  "teams": ["Aisle", "Arike", "Vernacs"],
  "tasks": [
    {
      "title": "CleverTap Integration",
      "app": "Aisle",
      "category": "Major",
      "status": "Completed",
      "prdPoints": [
        "Migrated SDK: Replaced heavy client-side SDK with lightweight HTTP endpoints to reduce download payload.",
        "Profile Syncing: Automated user segment properties synchronization in real-time.",
        "Event Tracking: Configured conversion event logging for premium subscriptions."
      ],
      "screenshots": [
        "clevertap-1.png",
        "clevertap-2.png"
      ]
    }
  ]
}
```

---

## Layout and Styling Guidelines

Keep the design premium and consistent with the established theme:
- **Title Slide**: Scattered iPhone app icons (`borderRadius: "22%"`, border, shadow) floating slowly using separate keyframe animations.
- **Section Dividers**:
  * **Aisle**: Deep purple-pink gradient background, glassmorphic white circle logo badge centered on the right.
  * **Arike**: Black `#0C0C15` background, solid yellow right sidebar, light grey circular logo badge centered inside the yellow panel.
- **Task Detail Slides**:
  * Left side (45% width): Task title, app tag, accent bar, and list of PRD points.
  * Right side (55% width): Screenshots centered using `flex`, matching aspect ratios, and using `maxHeight: "75vh"`, `maxWidth: "100%"`, `objectFit: "contain"`, and padding to prevent cropping.
