# Ship Vibe-Coded Real Applications
## Master NextJS, Supabase, and AI-Native Development with Bind AI & Cursor

### Version 1.1 — Improved Foundation Flow + Practical Prompts

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
- **Practical Use:** Taking screenshots for AI prompts

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

### 8.1 Bind AI
- **What it is:** Full-stack vibe coding platform
- **Best for:** Complete applications, greenfield projects
- **Workflow:** Prompt → Generate → Preview → Iterate → Deploy
- **Standout feature:** Browser-based full development environment

### 8.2 Cursor
- **What it is:** AI-native code editor (VS Code fork)
- **Best for:** Editing existing code, refinement, complex logic
- **Workflow:** Open project → Use Tab/Cmd+K/Composer
- **Standout feature:** Understands your entire codebase

### 8.3 Other Tools
- **Lovable:** UI-focused, design-heavy projects
- **Replit:** Cloud IDE, great for learning
- **v0 by Vercel:** Individual component generation
- **Bolt.new:** Quick prototypes
- **Claude/ChatGPT:** Code explanations, debugging help

### 8.4 Strategic Tool Selection
| Scenario | Recommended Tool |
|----------|------------------|
| Starting a new app from scratch | Bind AI |
| Beautiful UI/marketing sites | Lovable or Bind AI |
| Modifying existing code | Cursor |
| Single component needed | v0 |
| Learning/experimenting | Replit |
| Understanding code | Claude/ChatGPT |

### 8.5 The Recommended Workflow
```
1. Bind AI     → Generate initial application
2. GitHub      → Sync for version control
3. Cursor      → Refine and customize
4. Vercel      → Deploy and iterate
```

---

# PHASE 3: BUILD & SHIP (Progressive Projects)

**Goal:** Build real applications with increasing complexity, using specific prompts and workflows.

---

## Chapter 9: Project 1 — Static Landing Page

**What We're Building:** A professional landing page for a fictional SaaS product

**Skills Practiced:** Prompting, iteration, understanding generated structure

### 9.1 Crafting Your First Prompt

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

### 9.2 Iteration Prompts

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

### 9.3 Understanding What Was Generated
- File structure overview
- Component breakdown
- Tailwind classes explained
- Where to make manual tweaks

### 9.4 Alternative: Building in Lovable
- Same prompt, different tool
- Comparing outputs
- When to choose Lovable

**Chapter Outcome:** A polished, responsive landing page running in the browser

---

## Chapter 10: Project 2 — Adding a Database with Supabase

**What We're Building:** Extending our landing page with a waitlist signup that stores data

**Skills Practiced:** Supabase setup, database schema, environment variables

### 10.1 Setting Up Supabase

#### Step-by-Step Guide:
1. Create Supabase account and new project
2. Navigate to Project Settings → API
3. Copy Project URL and anon key
4. Understanding these credentials

### 10.2 Database Integration Prompt

#### Initial Database Setup:
```
Add Supabase integration to save waitlist signups.

1. Create a waitlist_signups table with:
   - id (UUID, primary key)
   - email (text, unique, required)
   - name (text, optional)
   - created_at (timestamp)

2. Create a waitlist form component that:
   - Has email input with validation
   - Shows loading state while submitting
   - Shows success message after signup
   - Handles duplicate email errors gracefully

3. Set up the Supabase client in lib/supabase.ts

Environment variables needed:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
```

#### Adding the Form to Hero:
```
Replace the hero CTA button with an inline email signup form:
- Email input with placeholder "Enter your email"
- Submit button "Join Waitlist"
- Small text below: "Join 2,000+ others. No spam, ever."
- Success state shows: "You're on the list! 🎉"
```

### 10.3 Verification Steps
- Checking data in Supabase Table Editor
- Running SQL queries to verify
- Reading Supabase logs for debugging

### 10.4 Follow-up Prompts

#### Adding Email Notifications:
```
Set up a Supabase Edge Function that:
- Triggers when a new waitlist signup is created
- Sends a welcome email using Resend
- Includes the user's position in the waitlist
```

#### Creating an Admin View:
```
Create an admin page at /admin/waitlist that:
- Shows all waitlist signups in a table
- Displays total count at the top
- Allows searching by email
- Is password-protected (simple password check for now)
```

**Chapter Outcome:** Data persists in a real database, visible in Supabase dashboard

---

## Chapter 11: Project 3 — Adding User Authentication

**What We're Building:** A protected dashboard area with user signup/login

**Skills Practiced:** Authentication flow, protected routes, session management

### 11.1 Authentication Setup Prompt

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

4. Update the landing page:
   - Change CTA to "Get Started Free"
   - Add Login link in the navigation
   - Show Dashboard link if user is logged in

Use Supabase Auth helpers for Next.js.
```

### 11.2 Social Login Prompt

```
Add "Sign in with Google" option:

1. Add a Google OAuth button on login and signup pages
2. Add a divider with "or continue with email"
3. Handle the OAuth callback properly
4. Create user profile in database on first OAuth login

Style the Google button with their brand colors and logo.
```

### 11.3 Profile Management Prompt

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
```

### 11.4 Understanding the Generated Auth Flow
- How sessions work in Next.js
- Where tokens are stored
- The authentication middleware
- Server vs. client auth checks

**Chapter Outcome:** Users can sign up, log in, and access protected pages

---

## Chapter 12: Project 4 — Full CRUD Application

**What We're Building:** A task management app with full create, read, update, delete functionality

**Skills Practiced:** Complex database relationships, real-time updates, advanced UI

### 12.1 Database Schema Prompt

```
Create a task management database schema:

Tables needed:
1. projects
   - id (UUID)
   - user_id (references auth.users)
   - name (text)
   - description (text, optional)
   - color (text, for UI)
   - created_at (timestamp)

2. tasks
   - id (UUID)
   - project_id (references projects)
   - title (text)
   - description (text, optional)
   - status (enum: 'todo', 'in_progress', 'done')
   - priority (enum: 'low', 'medium', 'high')
   - due_date (date, optional)
   - created_at (timestamp)

Set up Row Level Security:
- Users can only CRUD their own projects
- Users can only CRUD tasks in their own projects

Create database indexes for performance on user_id and project_id.
```

### 12.2 Dashboard UI Prompt

```
Create the main dashboard UI:

1. Sidebar:
   - User avatar and name
   - "My Projects" section with project list
   - Each project shows name and task count
   - "Add Project" button
   - Settings and Logout at bottom

2. Main Content Area:
   - Header with current project name and actions
   - Task board with 3 columns: To Do, In Progress, Done
   - Tasks as cards showing title, priority badge, due date
   - Empty state when no tasks exist

3. Interactions:
   - Click project in sidebar to view its tasks
   - Click task card to open detail modal
   - Drag and drop tasks between columns (if possible, otherwise use dropdown)

Use a clean, Notion-like aesthetic with good whitespace.
```

### 12.3 Task Operations Prompts

#### Create Task:
```
Add task creation functionality:

1. "Add Task" button in each column header
2. Quick-add inline form with just title input + Enter to save
3. Full task form in modal with all fields:
   - Title (required)
   - Description (rich text optional)
   - Status (dropdown)
   - Priority (button group: low/medium/high)
   - Due date (date picker)

4. Task should appear immediately in the UI (optimistic update)
5. Show toast notification on success
```

#### Update Task:
```
Add task editing:

1. Click task card to open detail modal
2. All fields editable inline
3. Auto-save changes after 500ms debounce
4. Show "Saving..." indicator during save
5. "Delete Task" button with confirmation
```

#### Real-time Updates:
```
Add real-time sync so changes appear across tabs/devices:

1. Subscribe to tasks table changes for current project
2. Update local state when changes come from server
3. Handle conflicts gracefully (server wins)
4. Show indicator when another device makes changes
```

### 12.4 Advanced Features Prompts

#### Task Filtering and Search:
```
Add filtering and search to the dashboard:

1. Search bar that filters tasks by title
2. Filter dropdown for priority (all/low/medium/high)
3. Filter for due date (overdue, today, this week, all)
4. Show active filter count as badge
5. "Clear filters" button
```

#### Project Settings:
```
Add project management:

1. Project settings modal with:
   - Rename project
   - Change project color
   - Delete project (with confirmation, cascades to tasks)

2. Archive completed tasks feature
3. Export project tasks as CSV
```

**Chapter Outcome:** A fully functional task management app with real-time data sync

---

## Chapter 13: Deployment — GitHub & Vercel

**What We're Building:** Taking our app from development to production

**Skills Practiced:** Version control, environment management, deployment

### 13.1 Method 1: Direct Deploy (Quick Path)

#### Bind AI to GitHub:
```
Instructions for syncing to GitHub:
1. Click the GitHub sync button
2. Authorize Bind AI to access GitHub
3. Enter repository name: "flowtask-app"
4. Choose public or private
5. Click Sync
```

#### Bind AI to Vercel:
```
Instructions for deploying to Vercel:
1. Click the Deploy button
2. Authorize Vercel access
3. Configure project name
4. Add environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
5. Click Deploy
```

### 13.2 Method 2: Manual Deployment (Full Control)

#### Download and Initialize Git:
```bash
# After downloading from Bind AI and extracting:
cd flowtask-app
git init
git add .
git commit -m "Initial commit: FlowTask app from Bind AI"
```

#### Create GitHub Repository:
```bash
# After creating empty repo on GitHub:
git remote add origin https://github.com/yourusername/flowtask-app.git
git branch -M main
git push -u origin main
```

#### Connect to Vercel:
```
1. Go to vercel.com/new
2. Select "Import Git Repository"
3. Choose your flowtask-app repo
4. Configure environment variables
5. Click Deploy
```

### 13.3 Environment Variables Checklist
```
Required for production:
✅ NEXT_PUBLIC_SUPABASE_URL
✅ NEXT_PUBLIC_SUPABASE_ANON_KEY

Optional (if using features):
☐ SUPABASE_SERVICE_ROLE_KEY (server-only operations)
☐ RESEND_API_KEY (email sending)
☐ GOOGLE_CLIENT_ID (OAuth)
☐ GOOGLE_CLIENT_SECRET (OAuth)
```

### 13.4 Post-Deployment Prompts

#### Custom Domain Setup:
```
Guide for adding custom domain:
1. In Vercel → Settings → Domains
2. Add your domain (e.g., flowtask.app)
3. Configure DNS records at your registrar
4. Wait for SSL certificate (automatic)
```

#### Setting Up Preview Deployments:
```
For team workflows:
1. Create a new branch: git checkout -b feature/new-feature
2. Make changes and push
3. Vercel automatically creates preview URL
4. Review changes at preview URL
5. Merge to main when ready
```

**Chapter Outcome:** Live application accessible via URL (e.g., flowtask.vercel.app)

---

## Chapter 14: The Eject & Refine Workflow

**What We're Building:** Setting up local development for advanced customization

**Skills Practiced:** Local environment, Cursor IDE, code refinement

### 14.1 When to Move Local
- Installing npm packages that don't work in browser
- Complex debugging with dev tools
- Using advanced Cursor AI features
- Offline development
- Preparing for team collaboration

### 14.2 Local Environment Setup

```bash
# Clone your repository
git clone https://github.com/yourusername/flowtask-app.git
cd flowtask-app

# Install dependencies
npm install

# Create local environment file
cp .env.example .env.local
# Add your Supabase credentials

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### 14.3 Cursor AI Workflow

#### Tab Completion:
```
Just start typing and Cursor suggests completions.
Press Tab to accept.
Works for entire functions, not just words.
```

#### Inline Edits (Cmd+K):
```
1. Select code you want to modify
2. Press Cmd+K (Ctrl+K on Windows)
3. Type instruction: "add error handling"
4. Review and accept changes
```

#### Composer Mode (Cmd+I):
```
For multi-file changes:
1. Press Cmd+I to open Composer
2. Describe what you want: "Add a notification system with toast messages throughout the app"
3. Cursor identifies all files that need changes
4. Review changes file by file
5. Accept or modify
```

### 14.4 Refinement Prompts for Cursor

#### Code Quality:
```
Cmd+K on a file:
"Refactor this component to:
- Extract reusable logic into custom hooks
- Add proper TypeScript types
- Add JSDoc comments for complex functions
- Handle loading and error states"
```

#### Performance:
```
"Optimize this component:
- Memoize expensive calculations with useMemo
- Prevent unnecessary re-renders with React.memo
- Add lazy loading for images
- Implement virtual scrolling for the task list"
```

#### Accessibility:
```
"Improve accessibility:
- Add proper ARIA labels
- Ensure keyboard navigation works
- Add focus indicators
- Include skip links
- Test with screen reader"
```

**Chapter Outcome:** Full local development environment with AI assistance

---

## Chapter 15: Production Hardening

**What We're Building:** Transforming our app into a production-ready product

**Skills Practiced:** SEO, performance, security, error handling

### 15.1 SEO Optimization Prompts

```
Add comprehensive SEO:

1. Metadata for all pages using Next.js Metadata API:
   - Unique titles and descriptions per page
   - OpenGraph images for social sharing
   - Twitter card metadata
   - Canonical URLs

2. Create a dynamic sitemap.xml
3. Add robots.txt
4. Implement JSON-LD structured data for the landing page
```

### 15.2 Performance Optimization Prompts

```
Optimize for Core Web Vitals:

1. Replace all <img> tags with next/image:
   - Add proper width/height
   - Use priority for above-fold images
   - Add placeholder="blur" where appropriate

2. Implement next/font for custom fonts
3. Add loading="lazy" to below-fold components
4. Implement Suspense boundaries with loading UI
5. Add proper caching headers for static assets
```

### 15.3 Security Hardening Prompts

```
Add production security measures:

1. Create middleware.ts for route protection:
   - Protect all /dashboard routes
   - Redirect unauthenticated users to /login
   - Handle session refresh

2. Set up Content Security Policy headers
3. Add rate limiting for auth endpoints
4. Implement proper CORS configuration
5. Ensure all API routes validate input
6. Add Supabase RLS policies review
```

### 15.4 Error Handling Prompts

```
Add comprehensive error handling:

1. Create app/error.tsx for global errors:
   - User-friendly error message
   - "Try again" button
   - Option to go home
   - Error logging to console (or service)

2. Create app/not-found.tsx for 404 pages:
   - Friendly message
   - Search suggestion
   - Link back to home

3. Add error boundaries around key features
4. Implement toast notifications for user errors
5. Add Sentry or similar for error tracking (optional)
```

### 15.5 Analytics and Monitoring

```
Add analytics and monitoring:

1. Integrate Vercel Analytics:
   - Add Analytics component
   - Enable Web Vitals tracking

2. Add custom event tracking for:
   - User signups
   - Task creation
   - Project creation
   - Feature usage

3. Create a simple admin dashboard at /admin showing:
   - Total users
   - Tasks created today
   - Active projects
```

**Chapter Outcome:** A production-ready application with proper SEO, security, and monitoring

---

# PHASE 4: ADVANCED MASTERY

**Goal:** Master advanced AI-assisted development workflows.

---

## Chapter 16: Cursor Deep Dive

### 16.1 Cursor Configuration

#### Custom Rules File:
```
Create .cursorrules in project root:

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

⚡ RAPID PROTOTYPING
└── Bind AI: Generate initial application
    └── Iterate via chat until 80% complete

📦 VERSION CONTROL
└── Sync to GitHub

🔧 REFINEMENT
└── Cursor: Clone locally
    └── Use Composer for complex changes
    └── Use MCP for external context

🚀 DEPLOYMENT
└── Push to GitHub → Auto-deploy to Vercel

🔄 ITERATION
└── Repeat refinement and deployment
```

### 18.2 When to Use What

| Task | Tool |
|------|------|
| New project from scratch | Bind AI |
| UI iteration | Bind AI chat |
| Bug fixing | Cursor inline (Cmd+K) |
| New feature | Cursor Composer |
| Matching design | Cursor + Figma MCP |
| Issue tracking | Cursor + GitHub MCP |
| Deployment | Vercel (automatic) |
| Learning | Ask Claude/ChatGPT |

### 18.3 Common Pitfalls to Avoid
- Vibe coding without understanding output
- Not using version control
- Skipping error handling
- Ignoring security basics
- Over-relying on AI for complex logic

### 18.4 The Vibe Coder's Checklist
- [ ] I can explain what the generated code does
- [ ] I've tested the main user flows
- [ ] Error states are handled gracefully
- [ ] The app is responsive on mobile
- [ ] Authentication protects sensitive routes
- [ ] Environment variables are properly configured
- [ ] I have version control set up
- [ ] I know how to deploy updates

---

# APPENDIX

## A. Prompt Templates Library

### Landing Page:
```
Create a landing page for [PRODUCT NAME] — [ONE-LINE DESCRIPTION].

Target audience: [WHO]

Sections: Hero, Features, How it Works, Pricing, FAQ, Footer

Design: [STYLE DESCRIPTION]
```

### Adding Database:
```
Add [DATABASE PROVIDER] integration for [FEATURE].

Tables needed:
[LIST TABLES AND FIELDS]

Include:
- Schema creation
- TypeScript types
- Basic CRUD operations
- Row Level Security
```

### Adding Auth:
```
Add authentication using [PROVIDER]:

Pages: /login, /signup, /forgot-password
Protected routes: [LIST ROUTES]
Include: Loading states, error handling, session persistence
```

### New Feature:
```
Add [FEATURE NAME] feature:

User Story: As a [USER], I want to [ACTION] so that [BENEFIT]

Requirements:
[LIST REQUIREMENTS]

UI: [DESCRIBE UI]
```

## B. Troubleshooting Common Issues

### "Supabase connection failed"
- Check environment variables are set
- Verify Supabase project is not paused
- Confirm correct URL and anon key

### "Page not found after deploy"
- Clear Vercel build cache
- Check file naming (case sensitivity)
- Verify dynamic routes syntax

### "Authentication not working"
- Check Supabase Auth settings
- Verify callback URLs in OAuth config
- Check middleware is correctly configured

## C. Glossary

- **API:** Application Programming Interface — how software talks to other software
- **CRUD:** Create, Read, Update, Delete — basic database operations
- **JWT:** JSON Web Token — a secure way to transmit user identity
- **RLS:** Row Level Security — database-level access control
- **SSR:** Server-Side Rendering — generating HTML on the server
- **ORM:** Object-Relational Mapping — code that talks to databases

## D. Resource Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vercel Documentation](https://vercel.com/docs)

---

## Version History

### v1.1 Changes from v1.0:
1. **Added Chapter 1 "Understanding Web Applications"** — Foundational context before diving into code
2. **Restructured JavaScript chapter** — Now starts with "What is JavaScript?" before concepts
3. **Restructured React chapter** — Explains what React is and when to use it first
4. **Restructured Next.js chapter** — Explains the "why" before the "how"
5. **Added "Recognition Patterns"** — Helps users identify code patterns visually
6. **Moved all tool chapters together** — Figma, GitHub, Vercel in one infrastructure chapter
7. **Added comprehensive prompts** — Every build chapter now has copy-paste ready prompts
8. **Added iteration prompts** — Follow-up prompts for enhancing each feature
9. **Added CRUD project chapter** — Full task management app build
10. **Added Prompt Templates Library** — Appendix with reusable prompt structures
11. **Added Troubleshooting section** — Common issues and solutions
12. **Improved flow** — Concepts → Tools → Build → Refine → Harden → Master
13. **Added "When to use" guidance** — Decision frameworks throughout
