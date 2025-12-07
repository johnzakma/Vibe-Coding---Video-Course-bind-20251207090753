# Ship Vibe-Coded Real Applications
## Master NextJS, Supabase, and AI-Native Development with Bind AI & Cursor

### Version 1.2.1 — Updated with Automatic SQL Generation Examples

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
  - Built-in Supabase integration with automatic SQL generation
  - One-click Vercel deployment
  - GitHub import and push
  - Version history with automatic saves

### 8.2 Bind AI Interface Overview
```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]  Project Name ▾  │  ◇ Editor  ◎ Preview  │  Discord │ Deploy to Github │ Invite │ ↓ Download │ ◆ Deploy │
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
│             │   [Supabase Connection Box - when applicable]         │
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

### 8.3 Bind AI's Automatic SQL Generation

When you use the Full Stack Agent to create applications, Bind AI automatically:
1. **Designs the database schema** based on your app description
2. **Generates complete SQL scripts** including:
   - Table creation with proper data types
   - Primary and foreign key relationships
   - Row Level Security (RLS) policies
   - Indexes for performance
3. **Provides the SQL in a copyable code block** in the chat
4. **Explains what each part does** so you understand the structure

**You don't need to know what tables or fields you need** — just describe your app and Bind AI figures out the data model.

### 8.4 Cursor — AI-Native Code Editor
- **What it is:** AI-native code editor (VS Code fork)
- **Best for:** Editing existing code, refinement, complex logic
- **Workflow:** Open project → Use Tab/Cmd+K/Composer
- **Standout feature:** Understands your entire codebase

### 8.5 Other Tools
- **Lovable:** UI-focused, design-heavy projects
- **Replit:** Cloud IDE, great for learning
- **v0 by Vercel:** Individual component generation
- **Bolt.new:** Quick prototypes
- **Claude/ChatGPT:** Code explanations, debugging help

### 8.6 Strategic Tool Selection
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

### 8.7 The Recommended Workflow
```
1. Bind AI     → Generate initial application (Full Stack Agent)
                 OR Import existing repo from GitHub
2. Supabase    → Connect credentials, run generated SQL
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
1. Navigate to Bind AI IDE (ide.getbind.co)
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

### 9.4 Iteration Prompts

#### Improving the Hero:
```
Update the hero section:
- Make the headline larger and add a subtle gradient
- Add a secondary CTA button with outline style
- Include floating UI elements around the mockup for visual interest
- Add a subtle background pattern or gradient
```

#### Mobile Optimization:
```
Ensure the page is fully responsive:
- Stack the hero content vertically on mobile
- Make the pricing cards horizontal-scroll on mobile
- Collapse the FAQ into a proper accordion
- Ensure all tap targets are at least 44px
```

### 9.5 Using Version History

#### Automatic Saving:
- Bind AI **automatically saves** new versions when you make significant edits
- Access via **"Version History"** at the top of the IDE
- Last 5 versions are kept

#### Reverting Changes:
1. Click "Version History" button
2. Select the desired version from the dropdown
3. Click "Revert" to restore that state

**Chapter Outcome:** A polished, responsive landing page running in the browser preview

---

## Chapter 10: Project 2 — Full-Stack App with Supabase

**What We're Building:** A complete e-commerce coffee store with products, user accounts, and checkout

**Skills Practiced:** Full Stack Agent, Supabase integration, automatic SQL generation

### 10.1 Using the Full Stack Agent

The Full Stack Agent is designed to build complete applications automatically. You describe what you want, and it generates:
- All frontend pages and components
- Database schema and SQL
- API connections
- Authentication
- Payment integration (Stripe)

#### Switching to Full Stack Agent:
1. In Bind AI IDE, look at the chat panel
2. Click the **agent selector** (if visible) or the model dropdown
3. Choose **"Full Stack Agent"**

### 10.2 Generating a Complete Application

#### Simple App Description Prompt:
```
Create a coffee e-commerce store with:
- Product listings showing different coffee beans
- User accounts for customers
- Shopping cart functionality
- Checkout flow with order confirmation
```

**What Happens:**
1. Bind AI analyzes your requirements
2. Automatically determines what database tables are needed
3. Generates the complete application structure
4. Provides SQL scripts for the database
5. Creates all necessary pages, components, and API routes

#### What Bind AI Automatically Generates:

**Database Tables (you don't need to specify these):**
- `products` — Coffee products with name, description, price, image
- `users` — Customer accounts (via Supabase Auth)
- `profiles` — Extended user information
- `carts` — Shopping cart items
- `orders` — Completed orders
- `order_items` — Individual items in each order

**Frontend Pages:**
- Homepage with product grid
- Product detail page
- Shopping cart page
- Checkout page
- User account/profile page
- Order history page

**Authentication:**
- Sign up / Login pages
- Protected routes for checkout and account

### 10.3 Setting Up Supabase

#### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and log in
2. Click **"New Project"**
3. Enter project name (e.g., "coffee-store")
4. Set a **secure database password** (save this!)
5. Choose the **closest region**
6. Wait for project to initialize (1-2 minutes)

#### Step 2: Get Your Credentials
1. In Supabase dashboard, click **"Project Settings"** (gear icon in sidebar)
2. Click **"API"** in the settings menu
3. Copy these three values:
   - **Project URL** (starts with `https://`)
   - **anon public** key (under "Project API keys")
   - **service_role** key (click "Reveal" to see it)

### 10.4 Connecting Supabase in Bind AI

1. In Bind AI IDE, scroll down in the chat area
2. Find the **"Connect Supabase"** box
3. Click **"Connect"**
4. A popup appears with three fields:
   - **Project URL** — Paste your Supabase URL
   - **Anon Key** — Paste the anon public key
   - **Service Role Key** — Paste the service_role key
5. Press **Enter** to confirm
6. Wait for "Connected" confirmation

### 10.5 Running the Generated SQL

After Bind AI generates your application, it provides SQL code in the chat. This SQL creates all the necessary database tables.

#### Example of Auto-Generated SQL:

Bind AI will generate something like this (actual output varies):

```sql
-- Create products table
CREATE TABLE public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  shipping_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create carts table
CREATE TABLE public.carts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  product_id UUID REFERENCES public.products(id) NOT NULL,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  status TEXT DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) NOT NULL,
  product_id UUID REFERENCES public.products(id) NOT NULL,
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for products (anyone can view)
CREATE POLICY "Anyone can view products" ON public.products
  FOR SELECT USING (true);

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for carts
CREATE POLICY "Users can manage own cart" ON public.carts
  FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for orders
CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for order_items
CREATE POLICY "Users can view own order items" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

#### How to Run the SQL:

1. **Copy** the entire SQL code block from Bind AI chat
2. Go to **Supabase Dashboard**
3. Click **"SQL Editor"** in the left sidebar
4. Click **"New query"**
5. **Paste** the SQL code
6. Click **"Run"** (or press Cmd/Ctrl + Enter)
7. Wait for "Success" message

#### Verify Tables Were Created:
1. In Supabase, click **"Table Editor"** in sidebar
2. You should see all your tables listed
3. Click on any table to see its columns

**Important:** Without running this SQL, your application will not work. The frontend will try to save/read data but the tables won't exist.

### 10.6 Testing the Application

#### In Bind AI Preview:
1. Click **"Preview"** button in top navigation
2. Browse the store, view products
3. Try signing up with a test email
4. Add items to cart
5. Go through checkout flow

#### Verify in Supabase:
1. After signup: Check **Authentication → Users**
2. After adding to cart: Check **Table Editor → carts**
3. After ordering: Check **Table Editor → orders**

### 10.7 Adding Features with Follow-up Prompts

#### Adding Product Categories:
```
Add category filtering to the products page:
- Show category tabs at the top (All, Light Roast, Medium Roast, Dark Roast, Decaf)
- Filter products when clicking a category
- Update the URL with the selected category
- Show product count per category
```

#### Adding Search:
```
Add a search bar to find products:
- Search input in the header
- Search by product name and description
- Show results as you type (debounced)
- "No results found" state
```

#### Adding Reviews:
```
Add a product review system:
- Users can leave star ratings (1-5) and text reviews
- Show average rating on product cards
- Display all reviews on product detail page
- Users can only review products they've purchased

Generate the SQL for the reviews table and update the UI.
```

**Bind AI will generate the additional SQL:**
```sql
-- Reviews table (auto-generated by Bind AI)
CREATE TABLE public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  product_id UUID REFERENCES public.products(id) NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create reviews" ON public.reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews" ON public.reviews
  FOR UPDATE USING (auth.uid() = user_id);
```

**Chapter Outcome:** A complete e-commerce application with database, auth, and all CRUD operations

---

## Chapter 11: Project 3 — Task Management Application

**What We're Building:** A Kanban-style task management app like Trello

**Skills Practiced:** Complex data relationships, real-time updates, drag-and-drop

### 11.1 Generating the Task Manager

#### Prompt for Full Stack Agent:
```
Create a task management application called "TaskFlow" for teams to organize their work.

Features needed:
- Users can create multiple projects/boards
- Each project has tasks organized in columns (To Do, In Progress, Done)
- Tasks can be dragged between columns
- Tasks have title, description, due date, and priority
- Users can only see their own projects and tasks

Make it look clean and modern like Notion or Linear.
```

### 11.2 Understanding the Auto-Generated Schema

Bind AI will automatically design and generate SQL for tables like:

```sql
-- Projects/Boards table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#6366f1',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tasks table
CREATE TABLE public.tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  due_date DATE,
  position INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Users can only access their own projects
CREATE POLICY "Users can CRUD own projects" ON public.projects
  FOR ALL USING (auth.uid() = user_id);

-- Users can only access tasks in their own projects
CREATE POLICY "Users can CRUD tasks in own projects" ON public.tasks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = tasks.project_id
      AND projects.user_id = auth.uid()
    )
  );
```

### 11.3 Adding Real-Time Updates

```
Add real-time sync so when I update a task in one browser tab, it updates in another tab automatically.

Use Supabase Realtime subscriptions to:
- Listen for changes to tasks in the current project
- Update the UI immediately when changes occur
- Show a subtle "syncing" indicator when updates happen
```

### 11.4 Enhancement Prompts

#### Quick Add Tasks:
```
Add inline task creation:
- "+" button in each column header
- Clicking opens a small form with just the title field
- Press Enter to create the task
- Task appears immediately at the top of the column
- Cancel by pressing Escape or clicking outside
```

#### Task Details Modal:
```
When clicking a task card, show a detail modal with:
- Editable title (click to edit)
- Description with markdown support
- Due date picker
- Priority selector (Low, Medium, High with colors)
- Delete button with confirmation
- Auto-save changes after 500ms of no typing
- Show "Saving..." indicator during save
```

#### Keyboard Shortcuts:
```
Add keyboard shortcuts:
- "N" to create new task in first column
- "E" to edit selected task
- Arrow keys to navigate between tasks
- "D" to mark as done
- "Delete" to delete with confirmation
- Show keyboard shortcut hints in the UI
```

**Chapter Outcome:** A fully functional task management app with real-time sync

---

## Chapter 12: Deployment — GitHub & Vercel

**What We're Building:** Taking our app from development to production

**Skills Practiced:** Version control, deployment, environment management

### 12.1 Method 1: Deploy Directly to Vercel (Quickest)

#### Using Bind AI's Deploy Button:
1. Click **"Deploy"** button in the top-right header
2. A popup appears asking for:
   - Project name (becomes part of URL)
   - Custom URL slug (optional)
3. Click **"Confirm"**
4. Wait for build process (usually under 2 minutes)
5. Click the deployment link when ready

#### What You Get:
- Live URL: `https://your-project.vercel.app`
- Automatic HTTPS
- Global CDN distribution
- Auto-scaling

**Important:** Ensure Supabase is connected before deploying — credentials are passed to Vercel automatically.

### 12.2 Method 2: Push to GitHub

#### First-Time GitHub Setup:
1. Click **"Deploy to GitHub"** in the top header
2. Enter your **GitHub username**
3. Enter your **Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token with `repo` scope
   - Copy and paste into Bind AI
4. Bind AI syncs your repositories

#### Pushing Changes:
1. Click **"Deploy to GitHub"**
2. Select **"Push Changes"**
3. Enable **"Auto Push"** (recommended) — automatically pushes when you accept AI changes
4. Changes go to `bind-ai-staging` branch

#### Creating a Pull Request:
1. Click **"Deploy to GitHub"**
2. Select **"Create Pull Request"**
3. PR contains all your changes for review

#### Merging to Production:
1. Click **"Deploy to GitHub"**
2. Select **"Merge Pull Request"**
3. Choose **"Merge and Deploy to Production"**
4. Changes merge to `bind-ai-prod` branch

### 12.3 Downloading Your Project

1. Click **"Download"** in the top header
2. Wait for ZIP file to generate
3. Extract to your local machine for:
   - Local development
   - Advanced Cursor editing
   - Custom npm packages
   - Git version control

**Chapter Outcome:** Live application accessible via URL

---

## Chapter 13: The Eject & Refine Workflow

**What We're Building:** Setting up local development for advanced customization

**Skills Practiced:** Local environment, Cursor IDE, code refinement

### 13.1 When to Move Local

**Stay in Bind AI for:**
- Rapid prototyping
- AI-heavy generation
- Quick iterations
- Deploying and testing

**Move to local/Cursor for:**
- Specific npm packages
- Complex debugging
- Cursor's MCP features
- Team Git workflow

### 13.2 Local Setup

```bash
# After downloading and extracting from Bind AI:
cd your-project

# Install dependencies
npm install

# Create environment file
touch .env.local

# Add your Supabase credentials:
# NEXT_PUBLIC_SUPABASE_URL=your-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

# Start development server
npm run dev

# Open http://localhost:3000
```

### 13.3 Cursor AI Workflow

- **Tab** — Accept AI completions
- **Cmd+K** — Inline edit selected code
- **Cmd+I** — Composer for multi-file changes

**Chapter Outcome:** Full local development environment with AI assistance

---

## Chapter 14: Production Hardening

**What We're Building:** Making the app production-ready

**Skills Practiced:** SEO, performance, security, error handling

### 14.1 SEO Prompt
```
Add SEO optimization:
- Metadata API for all pages
- OpenGraph images
- Dynamic sitemap
- robots.txt
```

### 14.2 Performance Prompt
```
Optimize performance:
- Replace <img> with next/image
- Use next/font
- Add loading states with Suspense
- Lazy load heavy components
```

### 14.3 Security Prompt
```
Add security measures:
- Middleware for route protection
- Validate all form inputs
- Review RLS policies
- Add rate limiting
```

### 14.4 Error Handling Prompt
```
Add error handling:
- Global error.tsx page
- not-found.tsx for 404s
- Toast notifications for errors
- Error boundaries for key features
```

**Chapter Outcome:** Production-ready application

---

# PHASE 4: ADVANCED MASTERY

**Goal:** Master advanced AI-assisted development workflows.

---

## Chapter 15: Cursor Deep Dive & MCP

### 15.1 Custom Rules (.cursorrules)
### 15.2 GitHub MCP Setup and Prompts
### 15.3 Figma MCP Setup and Prompts

---

## Chapter 16: The Complete Professional Workflow

### 16.1 Workflow Summary
### 16.2 When to Use What
### 16.3 Bind AI Quick Reference
### 16.4 Common Pitfalls
### 16.5 The Vibe Coder's Checklist

---

# APPENDIX

## A. Prompt Templates Library
## B. Troubleshooting Common Issues
## C. Glossary
## D. Resource Links

---

## Version History

### v1.2.1 Changes from v1.2:
1. **Added automatic SQL generation explanation** — Clarified that Bind AI automatically designs database schema
2. **Added example of auto-generated SQL** — Full coffee store schema example
3. **Reorganized Phase 3** — Changed from waitlist → auth → CRUD to Full Stack Agent flow
4. **Emphasized "you don't need to know tables"** — Multiple mentions that Bind AI figures out the data model
5. **Added follow-up prompts with SQL** — Shows how Bind AI generates additional SQL for new features
6. **Simplified chapters** — Condensed for clearer flow while maintaining detail