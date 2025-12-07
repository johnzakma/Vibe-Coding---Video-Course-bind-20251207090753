# Ship Vibe-Coded Real Applications
## COOKBOOK: Phase 3 — Build & Ship (Progressive Projects)

This cookbook provides step-by-step instructions for building three projects using Bind AI. Follow each step exactly to reproduce the results.

---

# PROJECT 1: Static Landing Page

**Time Required:** 30-45 minutes  
**What You'll Build:** A professional SaaS landing page  
**Prerequisites:** Bind AI account

---

## Step 1: Access Bind AI

1. Open your browser and navigate to **ide.getbind.co**
2. Log in to your Bind AI account
3. You'll see the Bind AI IDE interface

## Step 2: Create a New Project

1. Click **"Projects"** in the left sidebar
2. Click **"New Project"** or **"+"**
3. Name your project: `flowtask-landing`
4. Press Enter or click Create

## Step 3: Select Your AI Model

1. Look at the bottom of the chat panel
2. Click the **model dropdown** (shows current model name)
3. Select **"Gemini 3.0 Pro"** (best for design-to-code) or your preferred model
4. The model is now active for your session

## Step 4: Generate the Landing Page

Copy and paste this exact prompt into the chat:

```
Create a landing page for "FlowTask" — a project management SaaS for remote teams.

Target audience: Small business owners and team leads

Include these sections:
1. Hero with headline, subheadline, CTA button, and a product mockup image
2. Logos section showing "trusted by" company logos (use placeholder logos)
3. Three feature cards with icons highlighting key benefits
4. How it works section with 3 numbered steps
5. Testimonial section with 2-3 customer quotes with photos
6. Pricing with 3 tiers (Starter $9/mo, Pro $29/mo, Enterprise $99/mo)
7. FAQ accordion with 5 questions about the product
8. Footer with links and newsletter signup form

Design requirements:
- Modern, clean, professional aesthetic
- Primary color: Indigo (#6366f1)
- Secondary: Slate grays
- Generous whitespace
- Smooth hover effects on buttons and cards

Technical requirements:
- Next.js with App Router
- Tailwind CSS for styling
- shadcn/ui components
- Responsive design (mobile-first)
- Use lucide-react for icons
```

Press **Enter** or click **Send**.

## Step 5: Wait for Generation

1. Bind AI will process your request (30-60 seconds)
2. Watch the Files panel on the left populate with new files
3. The chat will show progress and completion message
4. A preview will appear in the Preview pane

## Step 6: Review the Generated Files

Click through the files in the Files panel to understand the structure:

```
flowtask-landing/
├── app/
│   ├── layout.tsx       ← Root layout with fonts and metadata
│   ├── page.tsx         ← Main landing page component
│   └── globals.css      ← Global styles and Tailwind
├── components/
│   ├── Hero.tsx         ← Hero section component
│   ├── Features.tsx     ← Feature cards
│   ├── HowItWorks.tsx   ← Steps section
│   ├── Testimonials.tsx ← Customer quotes
│   ├── Pricing.tsx      ← Pricing tiers
│   ├── FAQ.tsx          ← Accordion FAQ
│   └── Footer.tsx       ← Footer with links
├── package.json         ← Dependencies
└── tailwind.config.ts   ← Tailwind configuration
```

## Step 7: View the Preview

1. Click **"Preview"** button in the top navigation bar
2. The landing page renders in the preview pane
3. Test responsiveness by resizing the preview window
4. Click around to test interactions (FAQ accordion, buttons)

## Step 8: Iterate on the Design

If you want changes, type follow-up prompts. Examples:

**Make the hero more impactful:**
```
Update the hero section:
- Make the headline text larger (text-5xl on mobile, text-7xl on desktop)
- Add a gradient to the headline text (from indigo-600 to purple-600)
- Add a secondary "Watch Demo" button with outline style next to the primary CTA
- Add subtle floating UI elements/shapes in the background
```

**Add animations:**
```
Add scroll animations to the page:
- Fade in sections as they enter the viewport
- Slide up feature cards with staggered delay
- Add a subtle scale effect on testimonial cards on hover
- Smooth scroll when clicking navigation links
```

**Fix mobile issues:**
```
Improve mobile responsiveness:
- Stack the hero content vertically on screens under 768px
- Make the pricing cards scrollable horizontally on mobile
- Increase tap target sizes to at least 44px
- Reduce padding on mobile to maximize content space
```

## Step 9: Save a Version

1. Bind AI automatically saves versions when you make significant changes
2. To manually checkpoint: Click **"Version History"** at the top of the IDE
3. Note the current version number for reference

## Step 10: (Optional) Design-to-Code Alternative

If you have design images from Figma:

1. Click **"Upload"** in the left sidebar
2. Select your design image(s) (PNG, JPG, or Figma export)
3. Wait for upload to complete
4. Send this prompt:

```
I've uploaded my landing page design. Please:

1. Analyze the visual structure, layout, hierarchy, and styling carefully
2. Generate pixel-perfect React/Next.js code that matches the design exactly
3. Use Tailwind CSS for all styling
4. Match the exact colors, spacing, fonts, and proportions from the image
5. Create a complete Next.js project structure

Focus on accurately replicating:
- Typography sizes and weights
- Color values
- Spacing and padding
- Border radius and shadows
- Layout structure
```

---

## Checkpoint: What You Should Have

After completing Project 1:
- [ ] A complete landing page in the Bind AI preview
- [ ] Multiple component files organized in /components
- [ ] Responsive design that works on mobile and desktop
- [ ] Working FAQ accordion
- [ ] All sections from the original prompt

---

# PROJECT 2: Full-Stack E-Commerce with Supabase

**Time Required:** 60-90 minutes  
**What You'll Build:** A coffee e-commerce store with products, cart, and checkout  
**Prerequisites:** 
- Bind AI account
- Supabase account (free tier works)

---

## Step 1: Create a New Project

1. In Bind AI, click **"Projects"** in the left sidebar
2. Click **"New Project"** or **"+"**
3. Name your project: `coffee-store`
4. Press Enter

## Step 2: Create Your Supabase Project

1. Open a new browser tab
2. Go to **supabase.com**
3. Click **"Sign In"** or **"Start your project"**
4. Log in to your Supabase account
5. Click **"New Project"**
6. Fill in the details:
   - **Name:** `coffee-store`
   - **Database Password:** Create a strong password and **save it somewhere safe**
   - **Region:** Select the closest to you (e.g., "East US" or "Singapore")
7. Click **"Create new project"**
8. Wait 1-2 minutes for the project to initialize
9. You'll see "Project is ready" when complete

## Step 3: Get Your Supabase Credentials

1. In your Supabase project dashboard, click **"Project Settings"** (gear icon in left sidebar)
2. Click **"API"** in the settings menu
3. You'll see three values you need:

**Copy these one at a time:**

| Value | Where to Find It |
|-------|-----------------|
| **Project URL** | Under "Project URL" — starts with `https://` |
| **anon public** | Under "Project API keys" — the first key shown |
| **service_role** | Under "Project API keys" — click "Reveal" to see it |

**Keep this tab open** — you'll need these values in the next step.

## Step 4: Connect Supabase to Bind AI

1. Switch back to your Bind AI tab
2. Scroll down in the chat panel area
3. Find the **"Connect Supabase"** box (blue button)
4. Click **"Connect"**
5. A popup appears with three input fields:

Fill in each field:
- **Project URL:** Paste your Supabase project URL
- **Anon Key:** Paste the anon public key  
- **Service Role Key:** Paste the service_role key

6. Double-check each field is correct (they look similar!)
7. Press **Enter** or click **Connect**
8. Wait for "Connected to Supabase" confirmation

## Step 5: Generate the Application with Full Stack Agent

Copy and paste this exact prompt:

```
Create a coffee e-commerce store with:

- Homepage showing all coffee products in a grid
- Product detail page with description, price, and add to cart button
- User authentication (sign up, login, logout)
- Shopping cart that persists for logged-in users
- Checkout page with order summary
- Order confirmation page
- User account page showing order history

The store should sell different types of coffee beans with:
- Product name
- Description
- Price
- Image
- Category (Light Roast, Medium Roast, Dark Roast, Decaf)
- Stock quantity

Design: Clean, modern, coffee-shop aesthetic. Use warm browns and cream colors with good typography.

Use Next.js, Tailwind CSS, and shadcn/ui components.
```

Press **Enter** and wait for Bind AI to generate.

## Step 6: Locate and Copy the SQL

After generation completes:

1. Scroll through the chat response
2. Find the **SQL code block** — it will be labeled something like "Run this SQL in Supabase"
3. The SQL will look similar to this:

```sql
-- Products table
CREATE TABLE public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category TEXT CHECK (category IN ('light_roast', 'medium_roast', 'dark_roast', 'decaf')),
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User profiles (extends Supabase auth)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Shopping carts
CREATE TABLE public.cart_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Orders
CREATE TABLE public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items
CREATE TABLE public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) NOT NULL,
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL
);

-- Enable Row Level Security on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Products: Anyone can view
CREATE POLICY "Anyone can view products" ON public.products
  FOR SELECT USING (true);

-- Profiles: Users can view and update their own
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Cart: Users can manage their own cart
CREATE POLICY "Users can view own cart" ON public.cart_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can add to own cart" ON public.cart_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cart" ON public.cart_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete from own cart" ON public.cart_items
  FOR DELETE USING (auth.uid() = user_id);

-- Orders: Users can view and create their own
CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Order items: Users can view items from their orders
CREATE POLICY "Users can view own order items" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items" ON public.order_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample products
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url) VALUES
  ('Ethiopian Yirgacheffe', 'Bright, fruity, and floral with notes of blueberry and citrus', 18.99, 'light_roast', 50, 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'),
  ('Colombian Supremo', 'Well-balanced with caramel sweetness and nutty undertones', 15.99, 'medium_roast', 75, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'),
  ('Sumatra Mandheling', 'Full-bodied, earthy, with low acidity and chocolate notes', 17.99, 'dark_roast', 40, 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400'),
  ('Swiss Water Decaf', 'Smooth and mellow, chemical-free decaffeination process', 16.99, 'decaf', 30, 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'),
  ('Guatemala Antigua', 'Rich, velvety body with smoky, spicy complexity', 19.99, 'medium_roast', 45, 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400'),
  ('Kenya AA', 'Wine-like acidity with blackcurrant and tomato notes', 21.99, 'light_roast', 35, 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400');
```

4. **Select and copy** the entire SQL code block (Cmd+C / Ctrl+C)

## Step 7: Run the SQL in Supabase

1. Switch to your Supabase browser tab
2. In the left sidebar, click **"SQL Editor"**
3. Click **"New query"** (+ button)
4. **Paste** the SQL code (Cmd+V / Ctrl+V)
5. Click **"Run"** button (or press Cmd+Enter / Ctrl+Enter)
6. Wait for "Success. No rows returned" message (this is correct!)

## Step 8: Verify Tables Were Created

1. In Supabase left sidebar, click **"Table Editor"**
2. You should see these tables:
   - `products` (with 6 sample products)
   - `profiles`
   - `cart_items`
   - `orders`
   - `order_items`
3. Click on **"products"** to see the sample data
4. You should see 6 coffee products listed

## Step 9: Test the Application

1. Switch back to Bind AI
2. Click **"Preview"** button
3. You should see the coffee store with products displayed

**Test the signup flow:**
1. Click "Sign Up" or "Get Started"
2. Enter a test email: `test@example.com`
3. Enter a password: `TestPassword123!`
4. Click Sign Up
5. **Check Supabase:** Go to Authentication → Users
6. Your test user should appear in the list

**Test adding to cart:**
1. Log in with your test account
2. Click on a product
3. Click "Add to Cart"
4. **Check Supabase:** Go to Table Editor → cart_items
5. Your cart item should appear

**Test the checkout flow:**
1. Go to your cart
2. Click "Checkout"
3. Complete the checkout
4. **Check Supabase:** Go to Table Editor → orders
5. Your order should appear

## Step 10: Add More Features

**Add product search:**
```
Add a search bar to the products page:
- Search input in the header with a magnifying glass icon
- Filter products by name as the user types
- Debounce the search (300ms delay)
- Show "No products found" message when no results
- Clear button to reset search
```

**Add category filtering:**
```
Add category filter tabs to the products page:
- Tab options: All, Light Roast, Medium Roast, Dark Roast, Decaf
- Clicking a tab filters the product grid
- Show product count next to each category
- Combine with search (search within selected category)
- Update URL with selected category for bookmarking
```

**Add product reviews:**
```
Add a review system for products:
- Users can leave a 1-5 star rating and text review
- Show average rating on product cards
- Display all reviews on product detail page sorted by newest
- Users can only review products they've purchased
- Users can edit or delete their own reviews

Please generate the SQL for the reviews table with RLS policies.
```

When Bind AI generates new SQL, copy and run it in Supabase SQL Editor just like before.

---

## Checkpoint: What You Should Have

After completing Project 2:
- [ ] Supabase project created and connected to Bind AI
- [ ] All database tables created (products, profiles, cart_items, orders, order_items)
- [ ] Sample products visible in the store
- [ ] Working user signup and login
- [ ] Add to cart functionality
- [ ] Checkout and order creation
- [ ] Data visible in Supabase Table Editor

---

# PROJECT 3: Task Management Application

**Time Required:** 45-60 minutes  
**What You'll Build:** A Kanban-style task board like Trello  
**Prerequisites:** 
- Bind AI account
- Supabase account (can reuse from Project 2 or create new)

---

## Step 1: Create New Supabase Project (Recommended)

For a clean database:

1. Go to **supabase.com**
2. Click **"New Project"**
3. Name: `taskflow`
4. Set a database password (save it!)
5. Select your region
6. Wait for initialization

## Step 2: Create Bind AI Project

1. In Bind AI, click **"Projects"**
2. Click **"New Project"**
3. Name: `taskflow-app`
4. Press Enter

## Step 3: Connect Supabase

1. Get your credentials from Supabase (Project Settings → API)
2. In Bind AI, click **"Connect Supabase"**
3. Enter:
   - Project URL
   - Anon Key
   - Service Role Key
4. Press Enter to connect

## Step 4: Generate the Task Manager

Copy and paste this exact prompt:

```
Create a task management application called "TaskFlow" for organizing work.

Features:
1. User authentication (signup, login, logout)
2. Users can create multiple projects/boards
3. Each project has a Kanban board with 3 columns: To Do, In Progress, Done
4. Tasks are cards that can be in any column
5. Tasks have: title, description, priority (low/medium/high), due date
6. Users can drag tasks between columns (or use dropdown to change status)
7. Users can only see their own projects and tasks

UI Requirements:
- Clean, minimal design similar to Notion or Linear
- Sidebar showing list of projects
- Main area showing the selected project's board
- Task cards show title, priority badge, and due date
- Empty states when no projects/tasks exist

Technical:
- Next.js with App Router
- Tailwind CSS and shadcn/ui
- Supabase for database and auth

Generate all necessary SQL including tables, RLS policies, and sample data.
```

Press Enter and wait for generation.

## Step 5: Run the Generated SQL

Bind AI will generate SQL similar to:

```sql
-- Projects table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
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

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Projects RLS: Users can only access their own projects
CREATE POLICY "Users can view own projects" ON public.projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own projects" ON public.projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects" ON public.projects
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects" ON public.projects
  FOR DELETE USING (auth.uid() = user_id);

-- Tasks RLS: Users can only access tasks in their own projects
CREATE POLICY "Users can view tasks in own projects" ON public.tasks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = tasks.project_id
      AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create tasks in own projects" ON public.tasks
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = tasks.project_id
      AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update tasks in own projects" ON public.tasks
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = tasks.project_id
      AND projects.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete tasks in own projects" ON public.tasks
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = tasks.project_id
      AND projects.user_id = auth.uid()
    )
  );

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_tasks_updated_at
  BEFORE UPDATE ON public.tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

1. Copy the SQL from Bind AI's response
2. Go to Supabase → SQL Editor
3. Paste and click Run

## Step 6: Verify Database Setup

In Supabase Table Editor, confirm you have:
- `projects` table (empty)
- `tasks` table (empty)

## Step 7: Test the Application

1. In Bind AI, click **"Preview"**
2. Sign up with a test account
3. Create a new project (e.g., "Website Redesign")
4. Add tasks to the board
5. Verify data appears in Supabase Table Editor

## Step 8: Add Task Quick-Add

```
Add inline task creation to each column:

1. A "+" button in each column header
2. Clicking it opens a small inline form (not a modal)
3. The form has just a title input and submit button
4. Pressing Enter or clicking Add creates the task
5. The task appears at the top of that column immediately
6. Pressing Escape or clicking outside cancels
7. Show placeholder text: "Task title..."

The new task should:
- Inherit the status from the column it's added to
- Default priority to "medium"
- No due date by default
```

## Step 9: Add Task Detail Modal

```
When clicking a task card, show a detail/edit modal:

1. Modal with the task title as a large editable heading
2. Status dropdown (To Do, In Progress, Done)
3. Priority selector with colored badges (Low=green, Medium=yellow, High=red)
4. Due date picker
5. Description textarea with placeholder "Add a description..."
6. All fields auto-save after 500ms of no typing
7. Show a subtle "Saving..." indicator during save
8. Delete button at the bottom with red text
9. Clicking delete shows confirmation: "Are you sure? This cannot be undone."
10. Click outside modal or press Escape to close

Style the modal to slide in from the right side.
```

## Step 10: Add Real-Time Updates (Advanced)

```
Add real-time synchronization so changes appear across tabs:

1. Use Supabase Realtime to subscribe to task changes
2. When a task is created, updated, or deleted by another tab, update the UI immediately
3. Subscribe only to tasks in the currently viewed project
4. Show a subtle toast notification when a sync happens: "Board updated"
5. Handle the edge case where the user is editing a task that gets deleted

Use the Supabase JavaScript client's channel subscription.
```

---

## Checkpoint: What You Should Have

After completing Project 3:
- [ ] Kanban board with 3 columns working
- [ ] Create, edit, and delete tasks
- [ ] Projects sidebar with multiple projects
- [ ] Task quick-add in columns
- [ ] Task detail modal with all fields
- [ ] Data properly saved to Supabase

---

# DEPLOYMENT: Going Live

This section covers deploying any of the above projects.

---

## Method 1: One-Click Deploy from Bind AI (Fastest)

### Requirements:
- Completed project in Bind AI
- Supabase connected (if using database)

### Steps:

1. In Bind AI, click the **"Deploy"** button (top-right header)
2. A deployment dialog appears
3. Enter your project name (this becomes your URL):
   - Example: `coffee-store` → `coffee-store.vercel.app`
4. Click **"Confirm"**
5. Wait for deployment (1-3 minutes)
6. Click the URL when it appears to view your live site

### What Happens:
- Bind AI builds your Next.js project
- Deploys to Vercel's global CDN
- Configures HTTPS automatically
- Passes your Supabase credentials to Vercel

---

## Method 2: Deploy via GitHub (Recommended for Teams)

### Step 1: Connect GitHub to Bind AI

1. Click **"Deploy to GitHub"** button (top header)
2. If first time:
   - Enter your GitHub username
   - Create a Personal Access Token:
     1. Go to GitHub.com → Settings → Developer settings
     2. Click "Personal access tokens" → "Tokens (classic)"
     3. Click "Generate new token (classic)"
     4. Name: `bind-ai-access`
     5. Select scopes: `repo` (full control)
     6. Click "Generate token"
     7. **Copy the token immediately** (you won't see it again!)
   - Paste the token in Bind AI
3. Bind AI fetches your repositories

### Step 2: Push Your Code

1. Click **"Deploy to GitHub"**
2. Select **"Push Changes"**
3. Enable **"Auto Push"** (toggle ON) — recommended
4. Changes push to `bind-ai-staging` branch
5. You'll see a success message

### Step 3: Create a Pull Request

1. Click **"Deploy to GitHub"**
2. Select **"Create Pull Request"**
3. A PR is created on GitHub with all your changes
4. You can review the diff on GitHub

### Step 4: Merge and Deploy

1. Click **"Deploy to GitHub"**
2. Select **"Merge Pull Request"**
3. Choose **"Merge and Deploy to Production"**
4. Changes merge to `bind-ai-prod` branch
5. If Vercel is connected to this repo, it auto-deploys

### Setting Up Vercel with GitHub:

1. Go to **vercel.com** and sign in
2. Click **"Add New..." → "Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository
5. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `.` (default)
6. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
7. Click **"Deploy"**
8. Wait for build to complete
9. Your site is live at `your-repo-name.vercel.app`

---

## Method 3: Download and Deploy Manually

### Step 1: Download from Bind AI

1. Click **"Download"** button (top header)
2. Wait for ZIP file to download
3. Extract the ZIP to a folder on your computer

### Step 2: Set Up Local Environment

Open terminal in the extracted folder:

```bash
# Navigate to project folder
cd your-project-name

# Install dependencies
npm install

# Create environment file
touch .env.local

# Open .env.local and add:
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 3: Test Locally

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Step 4: Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit from Bind AI"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### Step 5: Deploy to Vercel

1. Go to vercel.com
2. Import your GitHub repository
3. Add environment variables
4. Deploy

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Homepage loads correctly
- [ ] Authentication works (signup/login)
- [ ] Data saves to Supabase
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Mobile responsiveness works
- [ ] HTTPS is active (lock icon in browser)

---

## Troubleshooting Common Issues

### "Failed to fetch" errors
- **Cause:** Supabase credentials not set in Vercel
- **Fix:** Go to Vercel → Project → Settings → Environment Variables and add your Supabase URL and anon key

### "Invalid API key" in console
- **Cause:** Wrong Supabase key copied
- **Fix:** Double-check you copied the correct key from Supabase (anon key, not service role for frontend)

### Tables not found
- **Cause:** SQL migrations weren't run
- **Fix:** Go to Supabase SQL Editor and run the SQL code from Bind AI

### RLS policy errors
- **Cause:** Row Level Security blocking requests
- **Fix:** Ensure you're logged in, or check the RLS policies are correctly set up

### Build fails on Vercel
- **Cause:** Missing dependencies or syntax errors
- **Fix:** Check the build logs in Vercel for specific error messages

### "Module not found" errors
- **Cause:** Missing import or incorrect file path
- **Fix:** Verify all imports in the error file match existing files

---

## Quick Reference: Bind AI Buttons

| Button | Location | Purpose |
|--------|----------|---------|
| Projects | Left sidebar | Create/manage projects |
| Upload | Left sidebar | Upload images for design-to-code |
| Editor | Top nav | View and edit code files |
| Preview | Top nav | See live app preview |
| Deploy to GitHub | Top header | Push code, create PR, merge |
| Download | Top header | Export project as ZIP |
| Deploy | Top header | One-click Vercel deployment |
| Version History | Top of IDE | View/restore previous versions |
| Model dropdown | Bottom of chat | Select AI model |
| Connect Supabase | Chat area | Connect database credentials |

---

# Summary: What You've Learned

After completing this cookbook, you can:

1. **Create landing pages** with Bind AI using prompts or design images
2. **Set up Supabase** projects and connect them to Bind AI
3. **Understand auto-generated SQL** and run it in Supabase
4. **Build full-stack apps** with authentication, databases, and CRUD operations
5. **Deploy applications** via one-click deploy, GitHub workflow, or manual download
6. **Iterate and enhance** apps with follow-up prompts
7. **Use Version History** to manage changes safely
8. **Debug common issues** with Supabase and deployment

You're now ready to build your own applications!