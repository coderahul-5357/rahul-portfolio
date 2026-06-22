# Antigravity UI Clone Implementation Plan

You've requested to change the UI to be a clone of **Antigravity** (my interface). Since Antigravity operates as an AI assistant within an IDE environment, an "Antigravity Clone" usually implies a radical shift from a traditional scrolling website to an interactive, application-like experience.

## User Review Required

> [!IMPORTANT]  
> Please confirm which interpretation of "Antigravity Clone" you prefer before I rewrite the UI:
> 
> **Option A: The "IDE / Code Editor" Look (Recommended)**
> - A left sidebar acting as a "File Explorer" (e.g., `hero.tsx`, `projects.json`, `experience.md`).
> - Clicking a file in the sidebar opens it in the main editor area.
> - Content is styled with syntax highlighting, line numbers, and a sleek dark theme (`#1e1e1e` background).
> 
> **Option B: The "AI Chat" Look**
> - The portfolio acts like a chat interface.
> - The user sees prompts like `> tell me about Rahul` and the UI types out the response.
> - Projects and Experience are presented as "Artifacts" or markdown messages.
> 
> **Option C: Just the Aesthetic (Keep it a scrolling website)**
> - Keep the current layout but change the colors, borders, and fonts to match the exact dark, minimalist, and utilitarian design of the Antigravity chat window.

---

## Proposed Changes (Assuming Option A: IDE/App Layout)

If we go with the IDE/App layout, here is how the architecture will change:

### 1. Global Layout & Theme (`app/layout.tsx` & `globals.css`)
- Remove the smooth-scrolling and radial gradients.
- Enforce a strict `h-screen` layout with no window scrolling (overflow is handled within specific panels).
- Update color variables to match VS Code / Antigravity dark mode (Background: `#18181b`, Sidebar: `#09090b`, Borders: `#27272a`).

### 2. Layout Structure (`app/page.tsx`)
- Divide the screen into a **Sidebar (Left)** and an **Editor/Main View (Right)**.
- **Sidebar**: Will list sections as clickable "files".
- **Editor**: Will display the active section with "tabs" at the top.

### 3. Rewriting Sections
- **Hero / About**: Formatted like a `.md` readme file or a `.json` configuration file.
- **Skills**: Displayed like a `package.json` dependencies list or colored terminal output.
- **Projects**: Displayed as a grid of "Artifacts" or interactive code snippets.
- **Contact**: A terminal-like command input or a clean settings-form UI.

## Verification Plan
1. Completely replace the current UI components.
2. Verify that state management (switching between files/tabs) works flawlessly without hydration errors.
3. Ensure the mobile view gracefully collapses the sidebar into a hamburger menu while preserving the "App" feel.
