# Ship Vibe-Coded Real Applications
## Master NextJS, Supabase, and AI-Native Development with Bind AI & Cursor

---

## Course Overview
**Target Audience:** Early career developers, bootcamp students, and non-coders who want to build real, complex applications using AI-assisted development while understanding the fundamentals.

**Course Promise:** By the end of this course, you will not blindly vibe code. You will understand what's happening under the hood, make informed technical decisions, and build production-ready applications.

**Estimated Duration:** 8-10 hours of video content

---

## Phase 1: The Foundations (Under the Hood)
**Goal:** Before using AI to write code, understand what the code does. Establish the vocabulary needed to "prompt" effectively.

### Chapter 1: The Modern Web Stack

#### 1.1 JavaScript Refresher
- Variables and Data Types
- Functions and ES6 Syntax (Arrow functions, Template literals)
- Destructuring and Spread Operators
- Async/Await and Promises
- **Advanced Sub-section:** Closures, The Event Loop, and TypeScript Basics

#### 1.2 React Essentials
- What is React and Why It Matters
- Components: The Building Blocks
- Props: Passing Data Down
- State (useState): Making Things Interactive
- Effects (useEffect): Side Effects and Lifecycle

#### 1.3 Next.js Framework
- Why Next.js? The Full-Stack React Framework
- App Router Basics: Files = Routes
- Server vs. Client Components: The Mental Model
- **Advanced Sub-section:** Server Actions and Middleware

#### 1.4 Figma for Developers
- Reading a Design File: Frames, Components, and Variants
- Extracting Design Tokens: Colors, Spacing, Typography
- Exporting Assets: Images, Icons, and SVGs
- Developer Handoff: Inspecting Properties

#### 1.5 GitHub (The Source of Truth)
- What is Version Control and Why It Matters
- Git Fundamentals: Commits as Snapshots
- Repositories: Your Project's Home
- Branches: Parallel Universes of Code
- Pull Requests: Collaborative Code Review (Conceptual)

#### 1.6 Vercel (The Platform)
- 1.6.1 Why Vercel? Frontend Cloud vs. Traditional Hosting
- 1.6.2 Infrastructure as Code: Next.js + Vercel Zero Config
- 1.6.3 Core Concepts: Serverless Functions vs. Edge Functions
- 1.6.4 The Dashboard Tour: Projects, Deployments, and Preview URLs

---

### Chapter 2: The Backend & Data

#### 2.1 Supabase Basics
- What is Backend-as-a-Service (BaaS)?
- The Supabase Stack: Database, Auth, Storage, Functions
- Why Supabase for Vibe Coding?

#### 2.2 Database 101
- Tables, Rows, and Columns: The Spreadsheet Analogy
- Primary Keys and Foreign Keys
- Relationships: One-to-Many, Many-to-Many
- SQL Basics: SELECT, INSERT, UPDATE, DELETE

#### 2.3 Authentication
- How Auth Works: The Big Picture
- Sessions vs. Tokens (JWTs)
- OAuth: "Sign in with Google"
- **Advanced Sub-section:** Row Level Security (RLS) and Edge Functions

---

## Phase 2: The Vibe Coding Revolution
**Goal:** Understand the new workflow where AI does the heavy lifting.

### Chapter 3: The Vibe Coding Ecosystem

#### 3.1 What is Vibe Coding?
- The Paradigm Shift: Syntax Writing → Intent Engineering
- The 80/20 Rule of AI-Assisted Development
- When Vibe Coding Works (and When It Doesn't)

#### 3.2 The Tool Landscape
- **Bind AI:** Full-Stack Vibe (Design → Code → Deploy)
- **Cursor:** The AI-Native Code Editor
- **Lovable:** The UI Specialist
- **Replit:** The Cloud IDE
- **v0 by Vercel:** Component Generation

#### 3.3 Strategic Tool Selection
- Bind AI: Greenfield Projects, Speed, Prototyping
- Cursor: Refinement, Existing Codebases, Complex Logic
- The Handoff Pattern: Start Fast, Finish Precise

---

## Phase 3: Build & Ship (Progressive Projects)
**Goal:** Build one evolving application from static prototype to production-ready product.

### Chapter 4: Project Level 1 — The Static Vibe
**Topic:** Building a landing page from a prompt

#### 4.1 Crafting Effective Prompts
- The Anatomy of a Good Prompt
- Providing Context: Screenshots, References, Examples

#### 4.2 Bind AI Workflow
- Prompting Bind AI with a Figma Screenshot
- Iterating on Design via Chat
- Understanding Generated Code Structure

#### 4.3 Alternative: Lovable
- When to Choose Lovable Over Bind AI
- Quick Comparison Workflow

**Outcome:** A beautiful, responsive frontend running in the browser

---

### Chapter 5: Project Level 2 — Adding Intelligence (Supabase)
**Topic:** Connecting the frontend to a real backend

#### 5.1 Database Schema Design
- Planning Your Data Model
- Using Bind AI to Generate Supabase Schema

#### 5.2 Environment Configuration
- Setting Up Supabase API Keys
- Environment Variables: .env.local Explained
- Security: What Goes Where

#### 5.3 Implementing Authentication
- Sign Up / Login via AI Prompts
- Understanding the Generated Auth Flow

#### 5.4 Verification and Debugging
- Running Raw SQL in Supabase Dashboard
- Using the Table Editor
- Reading Logs and Error Messages

**Outcome:** A functional app with user authentication and data persistence

---

### Chapter 6: Project Level 3 — Deployment Phase A (GitHub)
**Topic:** Version Control and Source Code Management

#### 6.1 Method 1: Bind AI Direct Sync
- Using "Sync to GitHub" Feature
- Understanding What Gets Pushed

#### 6.2 Method 2: The Manual Approach
- Downloading Code Locally
- Initializing Git Repository
- Creating GitHub Repo and Pushing

#### 6.3 Repository Best Practices
- Writing Good Commit Messages
- .gitignore: What Not to Track
- README.md: Documenting Your Project

**Outcome:** Code is safe, versioned, and ready for collaboration

---

### Chapter 7: Project Level 4 — Deployment Phase B (Vercel)
**Topic:** Going Live to the World

#### 7.1 Method 1: Bind AI Direct Deploy
- One-Click Deploy to Vercel
- Understanding the Magic

#### 7.2 Method 2: Manual Vercel Setup
- Connecting GitHub Repo to Vercel
- Configuring Build Settings
- Setting Environment Variables in Vercel

#### 7.3 Domain and DNS
- Custom Domains (Brief Overview)
- Preview Deployments: Every Branch Gets a URL

**Outcome:** A live URL (e.g., my-app.vercel.app) to share with the world

---

### Chapter 8: Project Level 5 — The "Eject" & Refinement Workflow
**Topic:** Moving from "Prompting" to "Editing"

#### 8.1 The Bind AI Editor
- Using the Built-in Code Editor
- Fixing Small UI Glitches Without Re-prompting
- Understanding the File Structure

#### 8.2 The "Eject" Moment
- Why Download to Local Machine?
- When to Eject: Custom Packages, Deep Logic, Offline Work

#### 8.3 Setting Up Local Environment
- Opening Project in Cursor or VS Code
- Running npm install and npm run dev
- The localhost:3000 Development Experience

#### 8.4 Cursor AI Features
- Tab Autocomplete
- Inline Chat (Cmd+K)
- Composer Mode for Multi-File Edits

**Outcome:** Full control over the codebase with AI assistance

---

### Chapter 9: Project Level 6 — Production Hardening
**Topic:** Transforming prototype into professional product

#### 9.1 Search Engine Optimization (SEO)
- Next.js Metadata API
- Dynamic Titles and Descriptions
- OpenGraph Images for Social Sharing

#### 9.2 Performance Optimization
- next/image: Automatic Image Optimization
- next/font: Font Loading Best Practices
- Lazy Loading and Code Splitting (Conceptual)

#### 9.3 Route Protection with Middleware
- Creating middleware.ts
- Checking Supabase Sessions
- Redirecting Unauthenticated Users

#### 9.4 Error Handling
- Global error.tsx Page
- not-found.tsx for 404s
- Graceful Degradation Principles

#### 9.5 Analytics and Monitoring (Brief)
- Vercel Analytics
- Understanding User Behavior

**Outcome:** A production-ready application worthy of real users

---

## Phase 4: Advanced Mastery
**Goal:** Master the tools that separate hobbyists from professionals.

### Chapter 10: Cursor Deep Dive & GitHub MCP

#### 10.1 Cursor Mastery
- Composer Mode: Multi-File Orchestration
- Codebase Indexing: AI That Knows Your Project
- Custom Instructions and .cursorrules

#### 10.2 Model Context Protocol (MCP) Explained
- What is MCP? Giving AI Access to External Tools
- The Plugin Architecture for AI

#### 10.3 GitHub MCP Setup
- Installing GitHub MCP Server
- Authenticating with GitHub
- Practical Example: "Fix the bug in Issue #12"

#### 10.4 The Ultimate Workflow
- Start in Bind AI (Speed)
- Sync to GitHub (Version Control)
- Refine in Cursor with MCP (Precision)

---

### Chapter 11: Visual Intelligence — Cursor + Figma MCP
**Topic:** The ultimate Design-to-Code workflow

#### 11.1 Figma MCP Setup
- Installing Figma MCP Server
- Authenticating with Figma API
- Connecting Design Files

#### 11.2 The Workflow
- Referencing Specific Frames and Layers
- Translating Auto-Layouts to Tailwind CSS
- Maintaining Design Fidelity

#### 11.3 Component Extraction
- Isolating Design Elements
- Building Reusable React Components
- Design Systems via AI

**Outcome:** Pixel-perfect implementation without manual measurement

---

## Appendix

### A. Glossary of Terms
### B. Recommended Resources
### C. Troubleshooting Common Issues
### D. Course Project Source Code Links

---

## Changes Made to Original Outline:

1. **Added Course Overview section** with clear target audience and promise
2. **Restructured Chapter 1.1** to be more progressive for beginners
3. **Expanded Chapter 4** with "Crafting Effective Prompts" section - critical for vibe coding success
4. **Added Chapter 6.3** for repository best practices (commit messages, .gitignore, README)
5. **Split Chapter 8** more clearly into Bind AI editing vs. local development
6. **Added Cursor AI Features sub-section** in Chapter 8 since students will use it
7. **Added Analytics section (9.5)** for production apps
8. **Added Custom Instructions sub-section** in Chapter 10 for .cursorrules
9. **Fixed duplicate Chapter 8** numbering in original
10. **Added Appendix** for reference materials
11. **Added v0 by Vercel** to tool landscape (relevant competitor)
12. **Improved flow** from static → dynamic → deployed → refined → production
13. **Added "When Vibe Coding Works"** section to set realistic expectations
