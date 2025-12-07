# Ship Vibe-Coded Real Applications
## Master NextJS, Supabase, and AI-Native Development with Bind AI & Cursor

### Version 1.2 — Updated with Accurate Bind AI Features & Workflows

---

## Course Overview

**Target Audience:** Early career developers, bootcamp students, and non-coders who want to build real, complex applications using AI-assisted development while understanding the fundamentals.

**Course Promise:** By the end of this course, you will not blindly vibe code. You will understand what's happening under the hood, make informed technical decisions, and build production-ready applications.

**Learning Philosophy:** We believe in "just-in-time" learning. You'll learn concepts right before you need them, and immediately apply them through AI-assisted building.

**Estimated Duration:** 10-12 hours of video content

---

# PHASE 1: THE FOUNDATIONS (Under the Hood)

**Goal:** Before using AI to write code, understand what the code does. Establish the vocabulary and mental models needed to prompt effectively and debug confidently.

---

## Chapter 1: Understanding Web Applications

### 1.1 How the Web Works (The Big Picture)
- What happens when you visit a website?
- Client vs. Server: The two halves of every web app
- The request-response cycle explained simply
- Static websites vs. Dynamic web applications
- Where does your code actually run? (Browser vs. Server)

### 1.2 The Modern Web Technology Stack
- What is a "tech stack" and why does it matter?
- Frontend vs. Backend: Clear definitions and responsibilities
- The layers: HTML (structure), CSS (styling), JavaScript (behavior)
- Why we need frameworks (and what problems they solve)
- The stack we'll use: Next.js + React + Supabase + Vercel

### 1.3 Types of Web Applications
- Static sites (portfolios, blogs, landing pages)
- Single Page Applications (SPAs) — Gmail, Trello
- Server-rendered applications — E-commerce, dashboards
- Full-stack applications — SaaS products, marketplaces
- **When to use what:** Decision framework for your projects

---

## Chapter 2: JavaScript — The Language of the Web

### 2.1 What is JavaScript?
- Why JavaScript matters (it's everywhere)
- JavaScript's role: Making websites interactive
- Where JavaScript runs: Browser, Server (Node.js), Mobile
- JavaScript vs. other languages: Why it won for the web
- The ecosystem: npm, packages, and libraries

### 2.2 JavaScript Core Concepts (What You'll See in AI-Generated Code)

#### 2.2.1 Variables and Data Types
- Declaring variables: `const`, `let`, and why not `var`
- Data types: strings, numbers, booleans, null, undefined
- Arrays: Lists of things
- Objects: Collections of related data
- **Recognition Pattern:** "When I see `const user = {...}`, I know this is an object storing user data"

#### 2.2.2 Functions
- What functions do: Reusable blocks of code
- Traditional functions vs. Arrow functions (`=>`)
- Parameters and return values
- **Recognition Pattern:** "When I see `const handleClick = () => {...}`, I know this is a function"

#### 2.2.3 Modern JavaScript (ES6+) Syntax
- Template literals: `` `Hello ${name}` ``
- Destructuring: Unpacking arrays and objects
- Spread operator: `...` for copying and combining
- Import/Export: Organizing code across files
- **Recognition Pattern:** "When I see `const { name, email } = user`, I know we're extracting properties"

#### 2.2.4 Asynchronous JavaScript
- Why async matters: Fetching data takes time
- Promises: "I'll give you this value later"
- Async/Await: Making async code readable
- **Recognition Pattern:** "When I see `async` and `await`, I know this code is waiting for something"

### 2.3 Advanced JavaScript (Reference Section)
- Closures: Functions that remember their environment
- The Event Loop: How JavaScript handles multiple tasks
- TypeScript basics: JavaScript with types
- **Note:** You don't need to master these, but knowing they exist helps when reading AI code

---

## Chapter 3: React — Building User Interfaces

### 3.1 What is React?
- The problem React solves: Managing complex UIs
- React's big idea: Components
- Virtual DOM: Why React is fast (simplified)
- React vs. other frameworks (Vue, Angular, Svelte)
- Who uses React: Facebook, Netflix, Airbnb, and thousands more
- **When to use React:** Interactive applications, dashboards, anything with dynamic content

### 3.2 The Component Mental Model
- Thinking in components: Breaking UI into pieces
- Components as LEGO blocks: Build once, use everywhere
- The component tree: Parent and child relationships
- File organization: One component per file

### 3.3 React Core Concepts (What You'll See in AI-Generated Code)

#### 3.3.1 JSX — HTML in JavaScript
- What JSX looks like and why it exists
- Differences from HTML: `className`, `onClick`, `{expressions}`
- Embedding JavaScript in JSX with `{curly braces}`
- **Recognition Pattern:** "When I see HTML-like code inside a JavaScript function, that's JSX"

#### 3.3.2 Components and Props
- Functional components: Functions that return JSX
- Props: Passing data from parent to child
- The one-way data flow principle
- **Recognition Pattern:** "When I see `<UserCard name="Sarah" />`, `name` is a prop being passed"

#### 3.3.3 State with useState
- What is state: Data that changes over time
- The `useState` hook: Declaring state
- Updating state: Why we use setter functions
- Re-rendering: What happens when state changes
- **Recognition Pattern:** "When I see `const [count, setCount] = useState(0)`, this is state"

#### 3.3.4 Effects with useEffect
- Side effects: Fetching data, subscriptions, document title
- The `useEffect` hook: Running code after render
- The dependency array: When to re-run effects
- Cleanup functions: Preventing memory leaks
- **Recognition Pattern:** "When I see `useEffect(() => {...}, [])`, this code runs after the component appears"

### 3.4 React Patterns You'll Encounter
- Conditional rendering: `{isLoggedIn && <Dashboard />}`
- Rendering lists: `{items.map(item => <Item key={item.id} />)}`
- Event handling: `onClick`, `onChange`, `onSubmit`
- Form handling: Controlled components
- **Quick Reference:** Common patterns with examples

---

## Chapter 4: Next.js — The React Framework

### 4.1 What is Next.js?
- The problem Next.js solves: React needs more to be a full app
- What you get out of the box: Routing, SSR, API routes, optimization
- Next.js vs. plain React: Why add a framework?
- The company behind it: Vercel (same company that hosts your apps)
- **When to use Next.js:** Pretty much any React project (it's the default choice)

### 4.2 How Next.js Works (The Mental Model)
- File-based routing: Your folder structure = your URLs
- The `app/` directory: The new way (App Router)
- Pages and layouts: Building the structure
- Server vs. Client: The hybrid approach

### 4.3 Next.js Core Concepts

#### 4.3.1 Routing and Pages
- Creating pages: `app/page.tsx` = homepage
- Dynamic routes: `app/blog/[slug]/page.tsx`
- Nested layouts: Shared UI that persists
- Navigation: The `<Link>` component
- **Recognition Pattern:** "File structure = URL structure"

#### 4.3.2 Server Components vs. Client Components
- Server Components (default): Run on server, great for data
- Client Components (`'use client'`): Run in browser, needed for interactivity
- When to use which: The decision framework
- Mixing them: The composition pattern
- **Recognition Pattern:** "If I see `'use client'` at the top, this component has interactivity"

#### 4.3.3 Data Fetching
- Fetching in Server Components: Direct database/API access
- Server Actions: Mutating data from client
- Loading states: `loading.tsx` files
- Error handling: `error.tsx` files

#### 4.3.4 Styling in Next.js
- Tailwind CSS: Utility-first styling (our choice)
- CSS Modules: Scoped stylesheets
- Global styles: `app/globals.css`

### 4.4 Next.js App Structure
```
my-app/
├── app/
│   ├── layout.tsx          # Root layout (wraps everything)
│   ├── page.tsx            # Homepage (/)
│   ├── globals.css         # Global styles
│   ├── dashboard/
│   │   ├── layout.tsx      # Dashboard layout
│   │   └── page.tsx        # Dashboard page (/dashboard)
│   └── api/
│       └── route.ts        # API endpoint
├── components/             # Reusable components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── package.json            # Dependencies
└── tailwind.config.ts      # Tailwind configuration
```

---

## Chapter 5: Development Tools & Infrastructure

### 5.1 Figma for Developers
- What is Figma: Where designers create visual blueprints
- Reading a design file: Frames, components, layers
- Extracting values: Colors, spacing, typography, sizes
- Exporting assets: Images as PNG, icons as SVG
- Developer handoff: Figma's Dev Mode
- **Practical Use:** Taking screenshots for AI prompts (Bind AI excels at design-to-code)

### 5.2 GitHub — Version Control & Collaboration
- What is version control: Tracking every change to your code
- What is Git: The system that tracks changes
- What is GitHub: Where your code lives online
- Core concepts:
  - Repositories: Your project's home
  - Commits: Snapshots with descriptions
  - Branches: Parallel versions of code
  - Pull Requests: Proposing and reviewing changes
- Why it matters for vibe coding: Safety net, collaboration, deployment source
- **Basic Commands Reference:**
  ```bash
  git init              # Start tracking a project
  git add .             # Stage all changes
  git commit -m "msg"   # Save a snapshot
  git push              # Upload to GitHub
  ```

### 5.3 Vercel — Deployment Platform
- What is Vercel: Where your app lives on the internet
- Traditional hosting vs. modern platforms
- Zero-config deployment: Push code, get a URL
- Key features:
  - Automatic builds from GitHub
  - Preview deployments for every branch
  - Global CDN distribution
  - Environment variables management
- Serverless vs. Edge functions: Running backend code
- **Practical Use:** One-click deploy from Bind AI, or connect GitHub repo

---

## Chapter 6: Backend & Database Fundamentals

### 6.1 What is a Backend?
- Frontend vs. Backend: Clear separation
- What the backend does: Data, authentication, business logic
- Traditional backends vs. Backend-as-a-Service
- Why Supabase: Fastest path for vibe coders

### 6.2 Supabase — Your Backend Platform
- What is Supabase: Open-source Firebase alternative
- The Supabase stack:
  - **Database:** PostgreSQL (industry standard)
  - **Auth:** User management and login
  - **Storage:** Files and images
  - **Edge Functions:** Custom server code
  - **Realtime:** Live data updates
- The Dashboard: Visual interface for everything
- **When to use Supabase:** Apps with users, data storage, or authentication

### 6.3 Database Fundamentals
- What is a database: Organized storage for your data
- Tables, rows, and columns: The spreadsheet analogy
- Data types: Text, numbers, booleans, timestamps
- Primary keys: Unique identifiers
- Foreign keys: Relationships between tables
- Common relationships:
  - One-to-many: User → Posts
  - Many-to-many: Users ↔ Likes ↔ Posts
- **SQL Quick Reference:**
  ```sql
  SELECT * FROM users;                    -- Get all users
  SELECT name, email FROM users WHERE age > 25;  -- Filter
  INSERT INTO users (name, email) VALUES ('Alex', 'alex@example.com');
  UPDATE users SET name = 'Alexander' WHERE id = 1;
  DELETE FROM users WHERE id = 1;
  ```

### 6.4 Authentication Fundamentals
- What is authentication: Verifying who someone is
- The auth flow: Login → Token → Verify → Access
- Sessions vs. Tokens (JWTs)
- OAuth: "Sign in with Google/GitHub"
- Row Level Security (RLS): Database-level permissions
- **Key Concept:** After login, users send a token (not password) with every request

---

# PHASE 2: THE VIBE CODING REVOLUTION

**Goal:** Understand the AI-assisted workflow and when to use which tools.

---

## Chapter 7: The Vibe Coding Mindset

### 7.1 What is Vibe Coding?
- The paradigm shift: From syntax to intent
- Writing prompts, not code
- The 80/20 rule: AI gets you 80%, you finish the 20%
- Why foundations matter even more now

### 7.2 When Vibe Coding Works Best
- ✅ New projects with common patterns
- ✅ Standard UI components and layouts
- ✅ Boilerplate and configuration
- ✅ Learning new technologies
- ✅ Rapid prototyping

### 7.3 When Vibe Coding Struggles
- ⚠️ Complex custom business logic
- ⚠️ Performance-critical code
- ⚠️ Security-sensitive implementations
- ⚠️ Large existing codebases
- ⚠️ Highly specialized domains

### 7.4 The Vibe Coder's Advantage
- Understanding lets you verify AI output
- Vocabulary helps you prompt precisely
- Debugging skills fix AI mistakes
- Foundations enable the last 20%

---

## Chapter 8: The Tool Landscape

### 8.1 Bind AI — Full-Stack Vibe Coding Platform
- **What it is:** Browser-based IDE with AI agents for complete application development
- **Best for:** Full-stack applications, design-to-code, rapid prototyping
- **Key Agents:**
  - **Full Stack Agent:** Generates complete apps with Next.js frontend + Supabase backend + Stripe payments
  - **Coding Agent:** Supports 70+ programming languages for diverse projects
- **Supported AI Models:** Gemini 3.0 Pro, Gemini 2.5 Flash, Claude 4.5 Sonnet (selectable from model dropdown)
- **Standout Features:**
  - Design-to-code: Upload images and get pixel-perfect React/Next.js code
  - Built-in Supabase integration
  - One-click Vercel deployment
  - GitHub import and push
  - Version history with automatic saves

### 8.2 Bind AI Interface Overview
```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]  Project Name ▾  │  ◇ Editor  ◎ Preview  │  Discord  │ Deploy to Github │ Invite Team │ ↓ Download │ ◆ Deploy │
├─────────────┬───────────────────────────────────────────────────────┤
│             │                                                       │
│  Projects   │   Files Panel          Code Editor / Preview          │
│             │   ─────────────        ────────────────────           │
│  { } Code   │   📁 Project Name      [Tab: filename.tsx]            │
│             │   ├── 📄 file.tsx                                     │
│  🖨 Upload   │   ├── 📄 file.tsx      Line numbers + code           │
│             │   └── 📁 folder/                                      │
│             │                                                       │
│             ├───────────────────────────────────────────────────────┤
│             │                                                       │
│             │   Chat Panel (Left)     >_ Terminal (Bottom)          │
│             │   ─────────────────                                   │
│             │   🧑 You: prompt...                                   │
│             │   🤖 Agent: response...                               │
│             │                                                       │
│             │   ┌─────────────────────────────────────────────┐     │
│             │   │ 💬 Message input     [Model ▾] [Send →]     │     │
│             │   └─────────────────────────────────────────────┘     │
└─────────────┴───────────────────────────────────────────────────────┘

Header Buttons (Top Right):
- Discord Support: Community help
- Deploy to Github: Push changes, create PR, merge
- Invite Team: Collaboration
- Download: Export project as ZIP
- Deploy: One-click Vercel deployment
```

### 8.3 Cursor — AI-Native Code Editor
- **What it is:** AI-native code editor (VS Code fork)
- **Best for:** Editing existing code, refinement, complex logic
- **Workflow:** Open project → Use Tab/Cmd+K/Composer
- **Standout feature:** Understands your entire codebase

### 8.4 Other Tools
- **Lovable:** UI-focused, design-heavy projects
- **Replit:** Cloud IDE, great for learning
- **v0 by Vercel:** Individual component generation
- **Bolt.new:** Quick prototypes
- **Claude/ChatGPT:** Code explanations, debugging help

### 8.5 Strategic Tool Selection
| Scenario | Recommended Tool |
|----------|------------------|
| Starting a new full-stack app | Bind AI (Full Stack Agent) |
| Design-to-code from Figma/images | Bind AI (with Gemini 3.0 Pro) |
| Beautiful UI/marketing sites | Bind AI or Lovable |
| Modifying existing code | Cursor |
| Single component needed | v0 |
| Learning/experimenting | Replit |
| Understanding code | Claude/ChatGPT |
| Importing & enhancing existing GitHub repos | Bind AI (GitHub Import) |

### 8.6 The Recommended Workflow
```
1. Bind AI     → Generate initial application (Full Stack Agent)
                 OR Import existing repo from GitHub
2. Supabase    → Connect database (via Bind AI integration)
3. Iterate     → Refine with AI chat in Bind AI
4. GitHub      → Push changes via "Deploy to GitHub" button
5. Cursor      → Clone locally for advanced refinement
6. Vercel      → Deploy via Bind AI's Deploy button
```

---

# PHASE 3: BUILD & SHIP (Progressive Projects)

**Goal:** Build real applications with increasing complexity, using specific prompts and workflows.

---

## Chapter 9: Project 1 — Static Landing Page

**What We're Building:** A professional landing page for a fictional SaaS product

**Skills Practiced:** Prompting, iteration, understanding generated structure, design-to-code

### 9.1 Getting Started with Bind AI

#### Accessing Bind AI:
1. Navigate to Bind AI IDE
2. Click **"Projects"** in the left sidebar
3. Choose to create a new project or import from GitHub

#### Selecting Your AI Model:
- Click the **model selector dropdown** at the bottom of the chat panel
- Choose from available models:
  - **Gemini 3.0 Pro** — Excellent for design-to-code
  - **Gemini 2.5 Flash** — Fast responses
  - **Claude 4.5 Sonnet** — Strong reasoning

### 9.2 Method 1: Prompt-Based Generation

#### The Prompt Framework
```
[CONTEXT] — What is this for? Who is the audience?
[TYPE] — Landing page, dashboard, form, etc.
[SECTIONS] — Specific components you want
[STYLE] — Design direction, colors, mood
[REFERENCE] — Screenshots, examples (optional)
```

#### Starter Prompt (Copy-Paste Ready):
```
Create a landing page for "FlowTask" — a project management SaaS for remote teams.

Target audience: Small business owners and team leads

Include these sections:
1. Hero with headline, subheadline, CTA button, and a product mockup image
2. Logos section showing "trusted by" company logos
3. Three feature cards with icons highlighting key benefits
4. How it works section with 3 steps
5. Testimonial section with 2-3 customer quotes
6. Pricing with 3 tiers (Starter, Pro, Enterprise)
7. FAQ accordion with 5 questions
8. Footer with links and newsletter signup

Design: Modern, clean, professional. Use indigo/purple as primary color with slate grays. Generous whitespace.

Use shadcn/ui components and Tailwind CSS.
```

### 9.3 Method 2: Design-to-Code (Bind AI's Superpower)

#### Uploading Design Images:
1. Click the **"Upload"** button in the left sidebar
2. Select your design images (Figma exports, screenshots, mockups)
3. Bind AI will process and analyze the visual structure

#### Design-to-Code Prompt:
```
I've uploaded my landing page designs. Please:

1. Analyze the visual structure, layout, hierarchy, and styling
2. Generate pixel-perfect React/Next.js code matching these designs
3. Use Tailwind CSS for styling
4. Create a complete Next.js project structure with:
   - Config files
   - Routes
   - Assets folder
   - Tailwind setup

Assemble the full landing page in the IDE environment.
```

#### What Bind AI Generates:
- High fidelity replication of your designs
- Functional React components
- Proper layout logic (flexbox, grid)
- Complete project structure on left side of IDE
- Live preview for immediate review

### 9.4 Iteration Prompts

#### Improving the Hero:
```
Update the hero section:
- Make the headline larger and add a subtle gradient
- Add a secondary CTA button with outline style
- Include floating UI elements around the mockup for visual interest
- Add a subtle background pattern or gradient
```

#### Enhancing Visual Appeal:
```
Improve the visual design:
- Add smooth scroll animations when sections come into view
- Include hover effects on all interactive elements
- Make the feature cards lift slightly on hover with shadow
- Add icon animations on the How It Works section
```

#### Mobile Optimization:
```
Ensure the page is fully responsive:
- Stack the hero content vertically on mobile
- Make the pricing cards horizontal-scroll on mobile
- Collapse the FAQ into a proper accordion
- Ensure all tap targets are at least 44px
```

### 9.5 Understanding What Was Generated

#### Exploring the File Tree:
After generation, look at the **Files panel** on the left side of the IDE:
```
FlowTask/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── public/
│   └── assets/
├── tailwind.config.ts
└── package.json
```

#### Using the Editor:
- Click any file in the Files panel to open it in the code editor
- Use the **"Editor"** button in the top navigation to see code
- Use the **"Preview"** button to see live rendering
- Multiple files can be open as tabs

### 9.6 Using Version History

#### Automatic Saving:
- Bind AI **automatically saves** new versions when you make significant edits
- Access via **"Version History"** at the top of the IDE
- Last 5 versions are kept

#### Reverting Changes:
1. Click "Version History" button
2. Select the desired version from the dropdown
3. Click "Revert" to restore that state

#### Experimenting with Subversions:
- When you continue working after reverting, Bind AI creates a **subversion**
- Think of it as a branch for experimentation
- Switch between subversions to compare approaches

**Chapter Outcome:** A polished, responsive landing page running in the browser preview

---

## Chapter 10: Project 2 — Adding a Database with Supabase

**What We're Building:** Extending our landing page with a waitlist signup that stores data

**Skills Practiced:** Supabase setup, Bind AI's Supabase integration, database schema

### 10.1 Setting Up Supabase (External Setup)

#### Step-by-Step in Supabase Dashboard:
1. Go to [supabase.com](https://supabase.com) and log in
2. Click **"Create a new project"**
3. Enter project name (e.g., "flowtask-waitlist")
4. Select your organization
5. Set a **secure database password** (save this!)
6. Choose the **closest region** to your users
7. Wait for project setup to complete

#### Getting Your Credentials:
1. Once project is ready, go to the dashboard
2. Click **"Project Settings"** in the left sidebar
3. Navigate to **"API"** section
4. Copy these three values:
   - **Project URL** — The unique address of your Supabase project
   - **Anon Key** — Public API key (safe for frontend)
   - **Service Role Key** — Secret key (server-side only, never expose!)

### 10.2 Connecting Supabase in Bind AI

#### Using Bind AI's Built-in Integration:
1. In Bind AI IDE, scroll down in the interface to find **"Connect Supabase"** box
2. Click **"Connect"**
3. A popup appears asking for:
   - Project URL
   - Anon Key
   - Service Role Key
4. Paste each credential in the correct field (double-check!)
5. Press Enter to confirm

#### What Happens:
- Bind AI establishes secure connection to your Supabase project
- Your project is now ready for backend operations
- The Full Stack Agent can now generate database-connected features

### 10.3 Database Integration with Full Stack Agent

#### Switch to Full Stack Agent:
1. Open the **agent selector** in Bind AI
2. Choose **"Full Stack Agent"**
3. This agent automatically handles Next.js + Supabase + Stripe

#### Database Setup Prompt:
```
Add Supabase integration to save waitlist signups.

Create a waitlist_signups table with:
- id (UUID, primary key)
- email (text, unique, required)
- name (text, optional)
- created_at (timestamp, default now)

Create a waitlist form component that:
- Has email input with validation
- Shows loading state while submitting
- Shows success message after signup
- Handles duplicate email errors gracefully

Replace the hero CTA with this inline email signup form.
```

### 10.4 Running the SQL Schema

#### What Bind AI Generates:
- SQL code block for creating the table
- TypeScript types for the table
- React component for the form
- Supabase client configuration

#### Executing SQL in Supabase:
1. Copy the SQL code block from Bind AI
2. Go to Supabase Dashboard → **SQL Editor**
3. Paste the SQL code
4. Click **"Run"**
5. Go to **"Table Editor"** to verify your table exists

**Important:** Without running the SQL, your backend won't know where to save data. Actions like signups won't be stored.

### 10.5 Testing the Integration

#### In Bind AI Preview:
1. Click **"Preview"** button to see your app
2. Enter a test email in the signup form
3. Submit the form

#### Verifying in Supabase:
1. Go to Supabase Dashboard → **Table Editor**
2. Select your `waitlist_signups` table
3. You should see the email you just submitted
4. **Success!** Your frontend and database are connected

### 10.6 Follow-up Prompts

#### Adding a Simple Admin View:
```
Create an admin page at /admin/waitlist that:
- Shows all waitlist signups in a table
- Displays total count at the top
- Allows searching by email
- Sorts by most recent first
- Is password-protected with a simple password check (password: "admin123")
```

#### Adding Email Field to Form:
```
Update the waitlist form to also collect:
- Full name (optional)
- Company name (optional)
- How they heard about us (dropdown: Twitter, LinkedIn, Friend, Other)

Update the database schema accordingly and provide the SQL.
```

**Chapter Outcome:** Data persists in a real database, visible in Supabase dashboard

---

## Chapter 11: Project 3 — Adding User Authentication

**What We're Building:** A protected dashboard area with user signup/login

**Skills Practiced:** Authentication flow, protected routes, Supabase Auth

### 11.1 Authentication Setup with Full Stack Agent

#### Authentication Prompt:
```
Add user authentication with Supabase Auth:

1. Create auth pages:
   - /login — Email/password login form
   - /signup — Registration form with name, email, password
   - /forgot-password — Password reset request

2. Create a protected /dashboard route that:
   - Redirects to /login if not authenticated
   - Shows user's email and a logout button
   - Has a simple welcome message

3. Add auth state management:
   - Create an auth context/provider
   - Add loading states during auth checks
   - Handle session persistence

4. Update the navigation:
   - Show "Login" link when logged out
   - Show "Dashboard" link when logged in
   - Add user avatar/menu when logged in

Use Supabase Auth helpers for Next.js.
```

### 11.2 Testing Authentication

#### In Bind AI Preview:
1. Navigate to /signup
2. Register a new account with email and password
3. Check Supabase Dashboard → **Authentication → Users**
4. Your test user should appear instantly

#### Understanding What Happens:
- Registration creates a user in Supabase's `auth.users` table
- Login returns a secure session token (JWT)
- The token keeps the user logged in across page refreshes
- Supabase Auth API handles all the security

### 11.3 Social Login Prompt

```
Add "Sign in with Google" option:

1. Add a Google OAuth button on login and signup pages
2. Add a divider with "or continue with email"
3. Handle the OAuth callback properly
4. Create user profile in database on first OAuth login

Style the Google button with their brand colors and logo from lucide-react.
```

**Note:** You'll need to configure Google OAuth in Supabase Dashboard → Authentication → Providers

### 11.4 Profile Management Prompt

```
Create a user profile system:

1. Create a profiles table:
   - id (references auth.users)
   - full_name (text)
   - avatar_url (text)
   - updated_at (timestamp)

2. Create /dashboard/settings page with:
   - Profile picture upload (to Supabase Storage)
   - Name editing
   - Email display (read-only)
   - Password change option

3. Set up Row Level Security:
   - Users can only read/update their own profile
   - Profiles are created automatically on signup

Provide the SQL for the table and RLS policies.
```

**Chapter Outcome:** Users can sign up, log in, and access protected pages

---

## Chapter 12: Project 4 — Full CRUD Application

**What We're Building:** A task management app with full create, read, update, delete functionality

**Skills Practiced:** Complex database relationships, real-time updates, advanced UI

### 12.1 Full-Stack App Generation

#### Using Full Stack Agent for Complete App:
```
Create a task management application called "TaskFlow" with:

**Database Schema:**
1. projects table:
   - id (UUID)
   - user_id (references auth.users)
   - name (text)
   - description (text, optional)
   - color (text, for UI labels)
   - created_at (timestamp)

2. tasks table:
   - id (UUID)
   - project_id (references projects)
   - title (text)
   - description (text, optional)
   - status (enum: 'todo', 'in_progress', 'done')
   - priority (enum: 'low', 'medium', 'high')
   - due_date (date, optional)
   - created_at (timestamp)

**Features:**
- User authentication (already have this)
- Dashboard showing all projects
- Project view with Kanban-style task board (To Do, In Progress, Done columns)
- Create, edit, delete projects and tasks
- Drag and drop tasks between columns (or dropdown to change status)

**Row Level Security:**
- Users can only CRUD their own projects
- Users can only CRUD tasks in their own projects

Use Supabase for backend, Next.js App Router, Tailwind CSS, and shadcn/ui.
```

### 12.2 What Full Stack Agent Generates

The Full Stack Agent automatically creates:
- All necessary pages and routes
- API endpoints/Server Actions
- Database connection and queries
- Authentication integration
- Complete UI components
- Proper file structure

### 12.3 Running Database Migrations

After generation, Bind AI provides SQL code. Execute it:

1. Copy the SQL code block
2. Supabase Dashboard → SQL Editor → Run
3. Verify tables in Table Editor
4. Check RLS policies are active

### 12.4 Enhancement Prompts

#### Adding Task Operations:
```
Enhance task functionality:

1. Add inline quick-add for tasks:
   - "+" button in each column header
   - Opens small form with just title field
   - Press Enter or click to create
   - Task appears immediately (optimistic update)

2. Task detail modal when clicking a card:
   - Edit all fields inline
   - Auto-save after 500ms debounce
   - Show "Saving..." indicator
   - Delete button with confirmation dialog

3. Add toast notifications:
   - "Task created" on success
   - "Task updated" on save
   - "Task deleted" on removal
   - Error toasts for failures
```

#### Adding Search and Filters:
```
Add filtering and search to the task board:

1. Search bar that filters tasks by title (real-time)
2. Filter dropdown for priority (All, Low, Medium, High)
3. Filter for status (All, To Do, In Progress, Done)
4. Date filter (Overdue, Today, This Week, All)
5. Show active filter count as badge
6. "Clear all filters" button

Keep filters in URL params so they persist on refresh.
```

#### Real-time Updates:
```
Add real-time sync so changes appear across tabs/devices:

1. Subscribe to tasks table changes for current project
2. Update local state when changes come from server
3. Handle conflicts (server wins)
4. Show subtle indicator when data syncs

Use Supabase Realtime subscriptions.
```

**Chapter Outcome:** A fully functional task management app with real-time data sync

---

## Chapter 13: Deployment — GitHub & Vercel

**What We're Building:** Taking our app from development to production

**Skills Practiced:** Version control, deployment, environment management

### 13.1 Method 1: Deploy Directly to Vercel (Quickest)

#### Using Bind AI's Deploy Button:
1. Click **"Deploy"** button in the top-right header
2. A popup appears asking for:
   - Project name (becomes part of URL)
   - Custom URL slug
3. Click **"Confirm"**
4. Wait for build process (usually under 2 minutes)
5. Click the deployment link when ready

#### What You Get:
- Live URL: `https://your-project.vercel.app`
- Instant deployment with global CDN
- Automatic HTTPS (secure connection)
- Zero-configuration hosting
- Built-in scaling for traffic spikes

**Important:** Make sure your Supabase credentials are connected before deploying!

### 13.2 Method 2: Push to GitHub First

#### Why Use GitHub?
- Version history beyond Bind AI's 5 versions
- Collaboration with team members
- Backup of your code
- CI/CD pipeline options
- Professional workflow

#### First-Time GitHub Setup in Bind AI:
1. Click **"Deploy to GitHub"** in the top header
2. If first time:
   - Enter your **GitHub username**
   - Enter your **Personal Access Token** (from GitHub Settings → Developer Settings)
   - Bind AI will sync and fetch your repositories

#### Importing Existing Repository (Alternative Start):
1. Click **"Projects"** in left sidebar
2. Select **"Import from GitHub"**
3. Select repository from your list
4. Choose branch (usually "main")
5. Click **"Start Import"**
6. Wait for import to complete (notification appears)

### 13.3 GitHub Push Workflow

#### Pushing Changes:
1. Click **"Deploy to GitHub"** button
2. Select **"Push Changes"**
3. **Enable Auto Push** (recommended):
   - Toggle this ON
   - Automatically pushes every time you accept AI changes
   - Saves significant time
4. Changes push to `bind-ai-staging` branch

#### Creating a Pull Request:
1. Click **"Deploy to GitHub"**
2. Select **"Create Pull Request"**
3. PR gathers all Bind AI changes into one reviewable set
4. Provides snapshot of what's about to be merged
5. Allows inspection of diff

#### Merging to Production:
1. Click **"Deploy to GitHub"**
2. Select **"Merge Pull Request"**
3. Choose the most recent PR from Bind AI
4. Select **"Merge and Deploy to Production"**
5. This:
   - Merges PR into production branch
   - Triggers deployment
   - Updates `bind-ai-prod` branch

#### Verifying on GitHub:
- Visit your GitHub repo page
- Check `bind-ai-prod` branch for final code
- File tree and commit history reflect all updates

### 13.4 Downloading Your Project

#### Using the Download Button:
1. Click **"Download"** in the top header
2. Wait for ZIP file to generate
3. Extract to your local machine

#### Why Download?
- Work offline
- Use advanced local tools (Cursor)
- Install npm packages not available in browser
- Full control over development environment

### 13.5 Environment Variables for Production

#### In Vercel Dashboard (if deploying separately):
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add required variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

#### Through Bind AI Deploy:
- If you connected Supabase in Bind AI, credentials are often auto-configured
- Double-check in Vercel dashboard after deployment

**Chapter Outcome:** Live application accessible via URL

---

## Chapter 14: The Eject & Refine Workflow

**What We're Building:** Setting up local development for advanced customization

**Skills Practiced:** Local environment, Cursor IDE, code refinement

### 14.1 When to Move Local

#### Stay in Bind AI When:
- Rapid prototyping and iteration
- AI-heavy code generation
- Quick fixes via chat
- Design-to-code workflows
- Deploying and testing

#### Move to Local/Cursor When:
- Installing specific npm packages
- Complex debugging with dev tools
- Using advanced Cursor AI features (MCP, codebase indexing)
- Offline development
- Team collaboration with Git
- Performance profiling

### 14.2 Local Environment Setup

#### Download from Bind AI:
1. Click **"Download"** button
2. Extract the ZIP file
3. Open terminal in that folder

#### Install and Run:
```bash
# Install dependencies
npm install

# Create local environment file
cp .env.example .env.local

# Add your Supabase credentials to .env.local
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 14.3 Cursor AI Workflow

#### Opening in Cursor:
1. Open Cursor IDE
2. File → Open Folder → Select your project
3. Cursor indexes your codebase automatically

#### Tab Completion:
- Just start typing
- Cursor suggests entire lines/functions
- Press Tab to accept
- Context-aware suggestions

#### Inline Edits (Cmd+K / Ctrl+K):
1. Select code you want to modify
2. Press Cmd+K (Mac) or Ctrl+K (Windows)
3. Type instruction: "add error handling" or "convert to TypeScript"
4. Review and accept changes

#### Composer Mode (Cmd+I / Ctrl+I):
1. Press Cmd+I to open Composer panel
2. Describe multi-file changes: "Add a notification system with toast messages"
3. Cursor identifies all files needing changes
4. Review each change before accepting

### 14.4 Refinement Prompts for Cursor

#### Code Quality:
```
Cmd+K on a component file:
"Refactor this component to:
- Extract reusable logic into custom hooks
- Add proper TypeScript types
- Add JSDoc comments for complex functions
- Handle loading and error states properly"
```

#### Performance:
```
"Optimize this component:
- Memoize expensive calculations with useMemo
- Prevent unnecessary re-renders with React.memo
- Add lazy loading for images
- Implement pagination for the task list"
```

### 14.5 Syncing Changes Back

After making local changes:

```bash
git add .
git commit -m "Refactored task components for better performance"
git push origin main
```

Vercel auto-deploys when you push to main!

**Chapter Outcome:** Full local development environment with AI assistance

---

## Chapter 15: Production Hardening

**What We're Building:** Transforming our app into a production-ready product

**Skills Practiced:** SEO, performance, security, error handling

### 15.1 SEO Optimization Prompts (in Bind AI)

```
Add comprehensive SEO to the application:

1. Metadata for all pages using Next.js Metadata API:
   - Unique titles and descriptions per page
   - OpenGraph images for social sharing
   - Twitter card metadata
   - Canonical URLs

2. For the landing page, add:
   - JSON-LD structured data (Organization schema)
   - Proper heading hierarchy (single h1)
   - Alt text for all images

3. Create:
   - /sitemap.xml (dynamic)
   - /robots.txt

Provide all necessary code changes.
```

### 15.2 Performance Optimization Prompts

```
Optimize the application for Core Web Vitals:

1. Replace all <img> tags with next/image:
   - Add proper width and height
   - Use priority for above-fold images
   - Add placeholder="blur" where appropriate

2. Optimize fonts:
   - Use next/font for custom fonts
   - Subset to only used characters

3. Add loading states:
   - Suspense boundaries for async components
   - Skeleton loaders for data fetching
   - Loading.tsx files for route transitions

4. Optimize bundle:
   - Dynamic imports for heavy components
   - Remove unused dependencies
```

### 15.3 Security Hardening Prompts

```
Add production security measures:

1. Create middleware.ts for route protection:
   - Protect all /dashboard/* routes
   - Redirect unauthenticated users to /login
   - Handle session refresh

2. Security headers:
   - Content Security Policy
   - X-Frame-Options
   - X-Content-Type-Options

3. Input validation:
   - Validate all form inputs server-side
   - Sanitize user-generated content
   - Rate limiting on auth endpoints

4. Review and update Supabase RLS policies:
   - Ensure all tables have appropriate policies
   - Test policies with different user scenarios

Provide the middleware code and SQL for RLS.
```

### 15.4 Error Handling Prompts

```
Add comprehensive error handling:

1. Create app/error.tsx for global errors:
   - User-friendly error message
   - "Try again" button
   - Link to go home
   - Console logging for debugging

2. Create app/not-found.tsx for 404 pages:
   - Friendly message
   - Search suggestion
   - Link back to home

3. Add error boundaries:
   - Wrap key features (task board, project list)
   - Graceful fallback UI
   - Option to retry

4. Toast notifications for user errors:
   - Form validation errors
   - Network failures
   - Permission denied
```

### 15.5 Final Deployment with Version History

#### Before Going Live:
1. Test all user flows in Preview
2. Check Supabase data is correct
3. Verify authentication works

#### Creating a Stable Version:
1. Use Bind AI's Version History to mark current state
2. Deploy this version to Vercel
3. Any version or subversion can be deployed directly

#### Post-Launch:
- Monitor with Vercel Analytics
- Watch Supabase logs for errors
- Iterate based on user feedback

**Chapter Outcome:** A production-ready application with proper SEO, security, and monitoring

---

# PHASE 4: ADVANCED MASTERY

**Goal:** Master advanced AI-assisted development workflows.

---

## Chapter 16: Cursor Deep Dive

### 16.1 Cursor Configuration

#### Custom Rules File (.cursorrules):
```
Create this file in your project root:

You are working on a Next.js 14 application with:
- App Router
- Supabase for backend
- TypeScript strict mode
- Tailwind CSS + shadcn/ui

Guidelines:
- Use Server Components by default
- Add 'use client' only when necessary
- Follow existing component patterns in /components
- Use the Supabase client from lib/supabase.ts
- Always handle loading and error states
- Write concise, readable code
```

### 16.2 Codebase Indexing
- How Cursor understands your project
- Using @-mentions for specific files
- Referencing documentation
- Chat with your entire codebase

### 16.3 Advanced Cursor Commands

```
Useful patterns:

"Explain how authentication works in this codebase"

"Find all places where we fetch tasks and ensure consistent error handling"

"Create a new feature following the same pattern as the projects feature"

"Refactor the dashboard to use the same data fetching pattern as the settings page"

"What files would need to change to add a comments feature to tasks?"
```

---

## Chapter 17: Model Context Protocol (MCP)

### 17.1 What is MCP?
- Plugins for AI that connect to external tools
- Read/write access to services like GitHub and Figma
- The future of AI-assisted development

### 17.2 GitHub MCP Setup

```bash
# Install GitHub MCP server
npm install -g @modelcontextprotocol/server-github

# Configure in Cursor settings with GitHub token
```

### 17.3 GitHub MCP Prompts

```
"Look at GitHub issue #15 and implement the feature request"

"Review the open pull requests and summarize changes in each"

"Create a new branch, implement the fix for issue #23, and prepare a PR description"

"Check the recent commits and identify any potential bugs introduced"
```

### 17.4 Figma MCP Setup

```bash
# Install Figma MCP server
npm install -g @anthropic/claude-figma-mcp

# Configure with Figma personal access token
```

### 17.5 Figma MCP Prompts

```
"Look at the 'Dashboard Redesign' frame in Figma and update our dashboard to match"

"Extract the Button component from Figma and create a matching React component"

"Compare our current implementation with the Figma design and list discrepancies"

"Implement the new card design from Figma for our task cards"
```

---

## Chapter 18: The Complete Professional Workflow

### 18.1 Workflow Summary

```
📝 IDEATION
└── Sketch ideas, define requirements

🎨 DESIGN (Optional)
└── Create/receive Figma designs
    └── Export screenshots for Bind AI

⚡ RAPID GENERATION (Bind AI)
└── Upload designs OR describe in prompt
└── Select AI model (Gemini 3.0 Pro for design-to-code)
└── Use Full Stack Agent for complete apps
└── Connect Supabase for backend
└── Iterate via chat until 80% complete

📦 VERSION CONTROL
└── Enable Auto Push in Bind AI
└── Changes go to bind-ai-staging branch
└── Create PR for review
└── Merge to bind-ai-prod

🔧 REFINEMENT (Cursor)
└── Download project or clone from GitHub
└── Use Composer for complex changes
└── Use MCP for external context
└── Push changes back to GitHub

🚀 DEPLOYMENT
└── Deploy via Bind AI's Deploy button
└── OR push to GitHub → auto-deploy on Vercel

🔄 ITERATION
└── Use Version History to experiment
└── Deploy any version/subversion
└── Repeat refinement and deployment
```

### 18.2 When to Use What

| Task | Tool | Bind AI Feature |
|------|------|-----------------|
| New full-stack app | Bind AI | Full Stack Agent |
| Design-to-code | Bind AI | Upload + Gemini 3.0 Pro |
| Import existing repo | Bind AI | GitHub Import |
| Connect database | Bind AI | Supabase Integration |
| Push to GitHub | Bind AI | Deploy to GitHub button |
| Deploy live | Bind AI | Deploy button |
| Track changes | Bind AI | Version History |
| Complex refactoring | Cursor | Composer mode |
| Issue-based work | Cursor | GitHub MCP |
| Design matching | Cursor | Figma MCP |

### 18.3 Bind AI Quick Reference

| Action | Location |
|--------|----------|
| Create project | Projects (left sidebar) |
| Import from GitHub | Projects → Import from GitHub |
| Upload designs | Upload (left sidebar) |
| Change AI model | Model dropdown (bottom of chat) |
| Switch agents | Agent selector (chat panel) |
| View code | Editor button (top nav) |
| Preview app | Preview button (top nav) |
| Push to GitHub | Deploy to GitHub (top header) |
| Download project | Download (top header) |
| Deploy to Vercel | Deploy (top header) |
| Version history | Version History (top of IDE) |
| Connect Supabase | Scroll to "Connect Supabase" box |

### 18.4 Common Pitfalls to Avoid

- ❌ Not running SQL migrations in Supabase
- ❌ Forgetting to connect Supabase credentials
- ❌ Skipping Row Level Security setup
- ❌ Not testing auth flow before deploying
- ❌ Ignoring Bind AI's version history
- ❌ Over-relying on AI for complex logic
- ❌ Not understanding generated code structure

### 18.5 The Vibe Coder's Checklist

- [ ] I can explain what the generated code does
- [ ] I've run all SQL migrations in Supabase
- [ ] I've tested signup/login flow
- [ ] Error states are handled gracefully
- [ ] The app is responsive on mobile
- [ ] RLS policies protect user data
- [ ] I've saved a stable version in Version History
- [ ] I know how to push to GitHub and deploy

---

# APPENDIX

## A. Prompt Templates Library

### Landing Page (Bind AI):
```
Create a landing page for [PRODUCT NAME] — [ONE-LINE DESCRIPTION].

Target audience: [WHO]

Sections: Hero, Features, How it Works, Pricing, FAQ, Footer

Design: [STYLE DESCRIPTION]

Use Next.js, Tailwind CSS, and shadcn/ui.
```

### Design-to-Code (Bind AI):
```
I've uploaded my design images. Please:

1. Analyze the visual structure, layout, and styling
2. Generate pixel-perfect React/Next.js code
3. Use Tailwind CSS for styling
4. Create complete project structure

Replicate: [SPECIFIC ELEMENTS TO FOCUS ON]
```

### Full-Stack App (Bind AI Full Stack Agent):
```
Create a [APP TYPE] application called "[NAME]" with:

**Database Schema:**
[LIST TABLES AND RELATIONSHIPS]

**Features:**
[LIST KEY FEATURES]

**User Authentication:** Yes/No

Use Supabase for backend, Next.js App Router, Tailwind CSS.
```

### Adding Database (Bind AI):
```
Add Supabase integration for [FEATURE].

Create [TABLE NAME] table with:
[LIST COLUMNS AND TYPES]

Create a component that:
[DESCRIBE FUNCTIONALITY]

Include Row Level Security for user data.
Provide the SQL to run in Supabase.
```

### Adding Auth (Bind AI):
```
Add authentication using Supabase Auth:

Pages needed: /login, /signup, /forgot-password
Protected routes: [LIST ROUTES]
Include: Loading states, error handling, session persistence

Use Supabase Auth helpers for Next.js.
```

## B. Supabase SQL Templates

### Basic Table with RLS:
```sql
-- Create table
CREATE TABLE public.items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own items
CREATE POLICY "Users can view own items" ON public.items
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can insert their own items
CREATE POLICY "Users can insert own items" ON public.items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own items
CREATE POLICY "Users can update own items" ON public.items
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy: Users can delete their own items
CREATE POLICY "Users can delete own items" ON public.items
  FOR DELETE USING (auth.uid() = user_id);
```

## C. Troubleshooting Common Issues

### "Supabase connection failed"
- Verify credentials in Bind AI's Supabase connection
- Check Supabase project is not paused (free tier pauses after inactivity)
- Ensure you copied the correct keys (URL, anon, service role)

### "Database table not found"
- Did you run the SQL migration in Supabase?
- Check Table Editor in Supabase to verify table exists
- Ensure RLS policies are set up correctly

### "Authentication not working"
- Check Supabase Auth settings (email enabled?)
- Verify callback URLs if using OAuth
- Test in Supabase Auth UI first

### "Deploy failing"
- Check for build errors in Vercel logs
- Ensure all environment variables are set
- Verify package.json has correct dependencies

### "Changes not pushing to GitHub"
- Re-enter GitHub token if expired
- Check you have write access to the repository
- Try refreshing the repository list

## D. Glossary

- **Anon Key:** Supabase public API key, safe for frontend use
- **Auto Push:** Bind AI feature that automatically pushes changes to GitHub
- **bind-ai-staging:** GitHub branch where Bind AI pushes changes
- **bind-ai-prod:** GitHub branch for merged/production code
- **Full Stack Agent:** Bind AI agent that generates complete apps with backend
- **RLS (Row Level Security):** Database-level access control in Supabase
- **Service Role Key:** Supabase secret key for server-only operations
- **Version History:** Bind AI feature tracking last 5 project versions
- **Subversion:** Branch-like experimental version in Bind AI

## E. Resource Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Bind AI YouTube Tutorials](https://www.youtube.com/@bindai)

---

## Version History

### v1.2 Changes from v1.1:
1. **Updated Bind AI sections with actual features:**
   - Full Stack Agent description and usage
   - Coding Agent for 70+ languages
   - Model selection (Gemini 3.0 Pro, Gemini 2.5 Flash, Claude 4.5 Sonnet)
   
2. **Added Bind AI Interface Overview:**
   - Visual diagram of IDE layout
   - Location of all buttons and panels
   - Quick reference table for actions

3. **Corrected GitHub workflow:**
   - GitHub Import feature for existing repos
   - Deploy to GitHub button workflow
   - Auto Push toggle
   - bind-ai-staging and bind-ai-prod branches
   - Pull Request creation and merging

4. **Added Supabase Integration section:**
   - Exact steps to connect Supabase in Bind AI
   - Three credentials explained (URL, anon key, service role key)
   - SQL execution workflow

5. **Added Design-to-Code workflow:**
   - Upload button usage
   - Model selection for best results
   - What Bind AI generates from designs

6. **Added Version History feature:**
   - Automatic saving (last 5 versions)
   - Reverting to previous versions
   - Subversions for experimentation
   - Deploying specific versions

7. **Updated deployment section:**
   - Direct Deploy button usage
   - GitHub push workflow
   - PR creation and merging
   - Download button for local work

8. **Added Bind AI Quick Reference table**
9. **Updated troubleshooting for Bind AI-specific issues**
10. **Added Bind AI-specific glossary terms**
