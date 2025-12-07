# Ship Vibe-Coded Real Applications
## Complete Video Course Script

---

# COURSE INTRODUCTION

## Video Screen Suggestions:
- Animated course logo/title card
- Split screen showing: messy code on left, clean AI-generated code on right
- Quick montage of finished apps being built

---

### INTRO SCRIPT

[Warm, welcoming tone - like meeting a mentor for coffee]

Welcome to Ship Vibe-Coded Real Applications.

I'm genuinely excited to have you here, because what we're about to learn together represents a fundamental shift in how software gets built.

[Pause for emphasis]

Let me paint a picture for you.

A few years ago, if you wanted to build a web application, you had two choices. Either spend months, sometimes years, learning to code from scratch. Or hire developers and spend thousands of dollars.

Today? Today you can describe what you want in plain English, and an AI will write the code for you.

This is called vibe coding. And it's not a gimmick. It's how real applications are being built right now, by people who never wrote a line of code before.

[Shift to slightly more serious tone]

But here's the problem I've seen.

Many people jump into vibe coding tools, prompt their way through an app, and then... they get stuck. They don't understand what the AI generated. They can't fix bugs. They can't make meaningful changes. They're completely dependent on the AI to do everything.

That's not building. That's hoping.

[Encouraging tone]

This course exists to make sure that doesn't happen to you.

By the time we're done, you will understand what's happening under the hood. You'll know why the code works, not just that it works. You'll be able to step in, make changes, and ship real applications to real users.

We're going to cover the foundations first. JavaScript, React, Next.js, databases, authentication. Not to make you an expert in each, but to give you the vocabulary and mental models you need to prompt effectively and debug confidently.

Then we'll dive into the vibe coding tools themselves. Bind AI, Cursor, and how they fit together in a professional workflow.

And finally, we'll build. We'll take a project from a simple prompt all the way to a production-ready application deployed on the internet.

[Warm closing]

So whether you're at a bootcamp, just starting your developer journey, or you're not a coder at all but want to build real things, you're in the right place.

Let's get started.

---

# PHASE 1: THE FOUNDATIONS

---

# CHAPTER 1: THE MODERN WEB STACK

## Video Screen Suggestions:
- Animated diagram showing layers: Browser → JavaScript → React → Next.js
- Code editor with simple examples

---

## 1.1 JavaScript Refresher

### Opening

[Friendly, teacher-like tone]

Before we let AI write code for us, we need to understand what that code actually does.

Think of it like this. You could ask someone to build you a house, but if you don't understand the difference between a load-bearing wall and a partition wall, you might accidentally ask them to remove something that makes the whole structure collapse.

JavaScript is the foundation of everything we'll build. Every web application, every interactive feature, every piece of AI-generated code in this course runs on JavaScript.

So let's make sure we have a solid foundation.

---

### Variables and Data Types

[Screen: Code editor showing variable declarations]

Variables are containers for storing data. In modern JavaScript, we declare variables using three keywords: const, let, and var.

```javascript
const name = "Sarah";
let age = 28;
var oldWay = "we don't use this anymore";
```

Here's the simple rule: use const by default. It means the value won't change. Use let when you know the value will change. And var? Forget it exists. It's from an older version of JavaScript and causes problems we don't need.

[Pause]

Now, what can we store in these variables?

Strings, which are text wrapped in quotes.
Numbers, which are exactly what they sound like.
Booleans, which are true or false values.
Arrays, which are lists of things.
And objects, which are collections of related data.

```javascript
const user = {
  name: "Sarah",
  age: 28,
  isActive: true,
  hobbies: ["coding", "hiking", "photography"]
};
```

This object represents a user. It has properties: name, age, whether they're active, and a list of hobbies.

When AI generates code for you, you'll see objects everywhere. User objects, product objects, configuration objects. Understanding this structure is essential.

---

### Functions and ES6 Syntax

[Screen: Side-by-side comparison of old vs. arrow functions]

Functions are reusable blocks of code. You define them once, then call them whenever you need that functionality.

Here's the traditional way:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

And here's the modern way, using arrow functions:

```javascript
const greet = (name) => {
  return `Hello, ${name}`;
};
```

Notice two things. First, the arrow syntax. It's more concise. Second, I'm using backticks and dollar sign curly braces. This is called a template literal, and it lets us embed variables directly in strings.

Arrow functions aren't just shorter. They behave differently with something called "this", but that's an advanced topic we don't need right now.

For vibe coding, just know that when you see the arrow syntax, it's a function. And that's what you'll see in most AI-generated code.

---

### Destructuring and Spread Operators

[Screen: Visual breakdown of destructuring]

Destructuring is a way to unpack values from arrays or properties from objects.

Instead of writing:

```javascript
const name = user.name;
const age = user.age;
```

You can write:

```javascript
const { name, age } = user;
```

Same result, less code. You're pulling out the name and age properties from the user object in a single line.

This pattern is everywhere in React code. When AI generates components, you'll see props being destructured constantly.

The spread operator, three dots, lets you copy or combine arrays and objects:

```javascript
const newUser = { ...user, age: 29 };
```

This creates a new user object with all the same properties, but with age updated to 29. The original user object stays unchanged.

This is called immutability, and it's a core concept in React development.

---

### Async/Await and Promises

[Screen: Diagram showing synchronous vs asynchronous code flow]

Here's where it gets interesting.

JavaScript runs one line at a time. But what happens when you need to fetch data from a server? That takes time. You don't want your entire application to freeze while waiting.

This is where asynchronous code comes in.

A Promise is JavaScript's way of saying "I'll give you this value later, I promise."

```javascript
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Sarah" });
    }, 1000);
  });
};
```

But working with Promises directly can get messy. So modern JavaScript gives us async and await:

```javascript
const getUser = async () => {
  const user = await fetchUser();
  console.log(user.name);
};
```

The async keyword tells JavaScript this function will do asynchronous work. The await keyword pauses execution until the Promise resolves.

[Slightly emphatic]

This pattern is critical. Every time your application talks to a database, calls an API, or fetches anything from the internet, you'll use async and await.

When you prompt an AI to add data fetching, the generated code will use these keywords. Now you know what they mean.

---

### Advanced: Closures, Event Loop, and TypeScript Basics

[Screen: Animated visualization of event loop]

Let's touch on a few advanced concepts. You don't need to master these, but knowing they exist will help you understand AI-generated code.

**Closures** happen when a function remembers variables from its outer scope, even after that outer function has finished running.

```javascript
const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();
counter(); // 1
counter(); // 2
```

The inner function "closes over" the count variable. This is why state management works in React.

**The Event Loop** is how JavaScript handles asynchronous code. JavaScript is single-threaded, meaning it can only do one thing at a time. The event loop is what allows it to handle multiple operations by queuing tasks and processing them in order.

When you see code executing "out of order," the event loop is why.

**TypeScript** is JavaScript with types. Instead of just declaring variables, you explicitly say what type of data they hold:

```typescript
const name: string = "Sarah";
const age: number = 28;

interface User {
  name: string;
  age: number;
  isActive: boolean;
}
```

TypeScript catches errors before your code runs. Most professional codebases use it, and AI tools work extremely well with TypeScript because the types give them more context about your code.

You'll encounter TypeScript in many AI-generated projects. When you see colons after variable names or the interface keyword, that's TypeScript doing its thing.

---

## 1.2 React Essentials

### Video Screen Suggestions:
- Component tree visualization
- Live demo of React dev tools
- Before/after showing jQuery spaghetti vs React components

---

### What is React and Why It Matters

[Enthusiastic but measured tone]

React changed everything.

Before React, building interactive web pages meant writing tangled JavaScript that directly manipulated the page. Click a button? Write code to find that button, attach an event, then write more code to update some other element on the page.

It worked, but it didn't scale. As applications grew, the code became impossible to manage.

React introduced a revolutionary idea: components.

Instead of thinking about pages, you think about pieces. A navigation bar is a component. A user profile card is a component. A button is a component.

Each component manages its own logic and appearance. You compose them together like LEGO blocks to build your interface.

[Screen: Component tree diagram]

This is why AI tools love React. When you ask for a "user dashboard," the AI doesn't generate one giant file. It generates a Dashboard component that contains a Sidebar component, a Header component, a StatsCard component, and so on.

Understanding components is understanding how modern web development works.

---

### Components: The Building Blocks

[Screen: Simple component code example]

A React component is just a function that returns JSX, which looks like HTML but isn't quite.

```jsx
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};
```

That's it. That's a component.

JSX lets you write markup directly in your JavaScript. The angle brackets might look like HTML, but they're actually JavaScript function calls under the hood. React transforms this syntax into actual DOM elements.

[Pause]

Components can be as simple as a heading or as complex as an entire page. The key insight is that they're reusable. Define a Button component once, use it a hundred times.

```jsx
const Button = () => {
  return <button className="bg-blue-500 text-white px-4 py-2">Click Me</button>;
};
```

Notice I wrote className instead of class. That's because class is a reserved word in JavaScript. Small differences like this are common in JSX.

---

### Props: Passing Data Down

[Screen: Visual showing data flowing from parent to child]

Components become powerful when they can receive data. That's what props are for.

Props, short for properties, are how you pass information from a parent component to a child component.

```jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return <Greeting name="Sarah" />;
};
```

The App component passes the name prop to Greeting. Greeting receives it and uses it in the output.

[Important tone]

Data flows one direction in React: down. Parent to child. This is called unidirectional data flow, and it's what makes React applications predictable and debuggable.

When AI generates code, pay attention to the props. They show you how data moves through the application.

---

### State (useState): Making Things Interactive

[Screen: Counter example with state visualization]

Props come from outside a component. But what about data that originates inside a component and changes over time?

That's state.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

useState is a React hook. It returns two things: the current value, and a function to update that value.

When you call setCount, React re-renders the component with the new value. This is the magic of React. You don't manually update the DOM. You update the state, and React figures out what needs to change on screen.

[Emphasize]

This is fundamental. State makes your application interactive. Every form input, every toggle, every piece of dynamic content uses state.

---

### Effects (useEffect): Side Effects and Lifecycle

[Screen: Timeline showing component mount, update, unmount]

Sometimes components need to do things beyond just rendering. Fetch data when they appear. Set up a subscription. Update the document title.

These are called side effects, and useEffect handles them.

```jsx
import { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <h1>{user.name}</h1>;
};
```

The useEffect hook runs after the component renders. The array at the end, called the dependency array, tells React when to re-run the effect. If userId changes, fetch the new user.

[Practical tone]

When you ask AI to "fetch user data when the page loads" or "update the title based on the current page," the generated code will use useEffect. Now you know why.

---

## 1.3 Next.js Framework

### Video Screen Suggestions:
- Next.js website and documentation
- File system routing visualization
- Server vs client component diagram

---

### Why Next.js? The Full-Stack React Framework

[Screen: Next.js logo and feature list]

React is a library for building user interfaces. But to build a complete web application, you need more. Routing between pages. Server-side rendering. API endpoints. Image optimization.

You could assemble all these pieces yourself. Or you could use Next.js.

Next.js is a framework built on top of React. It provides structure, conventions, and a ton of built-in features that would take months to implement yourself.

[Practical tone]

More importantly for us, Next.js is what most AI tools generate by default. Bind AI, Cursor, v0, they all default to Next.js projects. Understanding Next.js means understanding the code AI produces.

---

### App Router Basics: Files = Routes

[Screen: File tree showing pages directory]

Next.js has an elegant approach to routing: your file structure is your routes.

Create a file at app/about/page.tsx, and you have a /about page. Create app/blog/[slug]/page.tsx, and you have dynamic blog routes.

```
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   └── [slug]/
│       └── page.tsx  → /blog/hello-world, /blog/my-post
└── layout.tsx        → Wraps all pages
```

The layout.tsx file defines shared UI, like navigation and footers, that persists across page changes.

[Encouraging tone]

This convention-based approach means less configuration and more building. When AI generates a Next.js project, study the file structure. It tells you everything about how the app is organized.

---

### Server vs. Client Components: The Mental Model

[Screen: Diagram splitting server and client rendering]

Here's where Next.js gets powerful, and potentially confusing.

By default, components in the App Router are Server Components. They run on the server, not in the browser.

Why does this matter? Server components can directly access databases. They can call APIs without exposing keys to users. They're faster because they don't ship JavaScript to the browser.

But server components can't use state, effects, or browser APIs. They can't handle click events.

For interactivity, you need Client Components. You mark them with 'use client' at the top of the file.

```jsx
'use client';

import { useState } from 'react';

const InteractiveButton = () => {
  const [clicked, setClicked] = useState(false);
  
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click me'}
    </button>
  );
};
```

[Mental model explanation]

Think of it this way: Server Components are for displaying data. Client Components are for interacting with users.

When AI generates code, it will mix both types. Server components fetch data and render the page structure. Client components handle forms, buttons, and animations.

Understanding this split helps you prompt more effectively: "Create a server component that fetches products and a client component for the add-to-cart button."

---

### Advanced: Server Actions and Middleware

[Screen: Code examples of server actions]

Server Actions let you run server-side code directly from client components, without building a separate API.

```jsx
'use server';

export const createUser = async (formData: FormData) => {
  const name = formData.get('name');
  await db.users.create({ name });
};
```

You can call this function directly from a form. Next.js handles the network request automatically.

Middleware runs before every request. It's perfect for authentication checks, redirects, and logging.

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

We'll use middleware later when we protect routes in our production application.

---

## 1.4 Figma for Developers

### Video Screen Suggestions:
- Screen recording of Figma interface
- Highlighting the Dev Mode features
- Exporting assets workflow

---

### Reading a Design File

[Screen: Figma interface with a sample design]

Figma is where designers create the visual blueprint for your application. As a developer, or someone using AI to generate code, you need to know how to read this blueprint.

When you open a Figma file, you'll see frames, which are like containers or artboards. Each frame might represent a page, a component, or a specific screen state.

Inside frames, you'll find layers: text, shapes, images, and nested components.

[Practical tone]

Here's what matters for vibe coding: when you take a screenshot of a Figma frame and paste it into Bind AI or Cursor, you're giving the AI visual context. The clearer and more complete that screenshot, the better the generated code.

---

### Extracting Design Tokens

[Screen: Highlighting colors, fonts, spacing in Figma]

Design tokens are the building blocks: colors, typography, spacing, and sizing.

In Figma's inspect panel, you can see the exact hex code for colors, the font family and size, the padding and margins.

When you see a button with background color #3B82F6, that's information you can include in your prompt: "Use blue-500 from Tailwind, which corresponds to this hex value."

The more specific you are about design details, the closer the AI output will match the intended design.

---

### Exporting Assets

[Screen: Export dialog in Figma]

Sometimes you need actual files: images, icons, logos.

Select any element in Figma, and in the right panel, you can add export settings. Choose PNG for images, SVG for icons, and export at the size you need.

[Tip tone]

Pro tip: always export icons as SVG. They scale infinitely without losing quality, and AI tools can even inline them directly in your code.

---

### Developer Handoff

[Screen: Figma Dev Mode interface]

Figma's Dev Mode is specifically designed for developers. It shows CSS properties, spacing measurements, and component specifications.

When you're refining AI-generated code to match a design exactly, Dev Mode tells you the precise values to use.

---

## 1.5 GitHub (The Source of Truth)

### Video Screen Suggestions:
- GitHub interface tour
- Animated Git branching diagram
- VS Code Git integration

---

### What is Version Control and Why It Matters

[Foundational tone]

Imagine writing a ten-page essay. You make changes, realize they're wrong, but you've already saved over your original. The old version is gone.

Version control prevents this nightmare.

Git tracks every change you make to your code. Every save point, called a commit, is preserved forever. You can go back to any previous version at any time.

[Emphasize]

This isn't just about safety. Version control enables collaboration. Multiple people can work on the same codebase without overwriting each other's changes.

GitHub is where your Git repositories live online. It's the source of truth for your project.

---

### Git Fundamentals: Commits as Snapshots

[Screen: Timeline visualization of commits]

A commit is a snapshot of your entire project at a specific moment.

Each commit has a message describing what changed. Good messages look like:

- "Add user authentication flow"
- "Fix navigation bug on mobile"
- "Update database schema for posts"

Bad messages look like:

- "Fix stuff"
- "asdfasdf"
- "Changes"

[Practical advice]

When AI tools commit code to GitHub, they generate commit messages automatically. But when you're making changes manually, write clear messages. Future you will be grateful.

---

### Repositories, Branches, and Pull Requests

[Screen: GitHub repository interface]

A repository, or repo, is the home for your project's code. It contains all your files and the entire history of changes.

Branches let you work on new features without affecting the main codebase. Think of branches as parallel universes. You can experiment freely, and only merge changes when they're ready.

Pull requests are how changes from a branch get reviewed and merged into the main branch. In a team setting, this is where code review happens.

[Encouraging tone]

For now, you'll mostly work with a single branch: main. But understanding branches means understanding how professional teams work, and how you might collaborate in the future.

---

## 1.6 Vercel (The Platform)

### Video Screen Suggestions:
- Vercel dashboard tour
- Deployment flow animation
- Preview deployment demonstration

---

### Why Vercel? Frontend Cloud vs. Traditional Hosting

[Explanatory tone]

In the old days, deploying a website meant renting a server, configuring it manually, setting up SSL certificates, and hoping nothing crashed.

Vercel abstracts all of that away.

You push code to GitHub, and Vercel automatically builds and deploys it. Every branch gets its own preview URL. Production deployments happen with zero downtime.

[Screen: Vercel homepage]

Vercel is built by the same team that created Next.js. The integration is seamless. When you deploy a Next.js app to Vercel, it automatically optimizes images, handles server functions, and configures caching.

---

### Infrastructure as Code: Next.js + Vercel Zero Config

[Screen: vercel.json example, then crossing it out]

Here's the beautiful part: you probably don't need any configuration file.

Vercel reads your Next.js project structure and figures out everything automatically. The App Router pages become routes. API endpoints become serverless functions. Images get optimized.

This is called zero config, and it means you can focus on building features instead of fighting deployment.

---

### Core Concepts: Serverless Functions vs. Edge Functions

[Screen: Diagram showing serverless execution]

Traditional servers run 24/7, waiting for requests. Serverless functions spin up only when needed, execute, and disappear.

You pay for what you use. You don't worry about scaling. When traffic spikes, more functions spin up automatically.

Edge Functions are serverless functions that run at locations close to your users around the world. They're faster because the code runs geographically closer to whoever's making the request.

[Practical note]

For most applications, serverless functions are perfect. Edge functions become relevant when you're optimizing for milliseconds or handling global traffic.

---

### The Dashboard Tour

[Screen: Recording of Vercel dashboard navigation]

Let me walk you through the Vercel dashboard.

The Projects tab shows all your deployed applications. Each project is connected to a GitHub repository.

Inside a project, you see Deployments. Every push to GitHub creates a new deployment. The production deployment is live at your main URL. Preview deployments let you test changes before they go live.

Settings is where you configure environment variables, domains, and build options.

[Key concept]

Immutable deployments mean every deployment is permanent. If something breaks, you can instantly roll back to a previous working version. No rebuilding required.

---

# CHAPTER 2: THE BACKEND & DATA

## Video Screen Suggestions:
- Supabase dashboard tour
- Database table visualization
- Authentication flow diagram

---

## 2.1 Supabase Basics

### What is Backend-as-a-Service?

[Screen: Supabase logo and features overview]

Building a backend from scratch means setting up servers, databases, authentication, file storage, and APIs. It's weeks of work before you can build actual features.

Backend-as-a-Service providers like Supabase give you all of this, pre-built and hosted.

[Enthusiastic]

Supabase is phenomenal for vibe coding. You get:

- A PostgreSQL database with a visual editor
- Authentication with email, social providers, and magic links
- File storage for images and documents
- Real-time subscriptions for live updates
- Auto-generated APIs for your database

All accessible through a clean dashboard and simple JavaScript client.

---

### The Supabase Stack

[Screen: Diagram of Supabase components]

Let's break down what Supabase provides.

The database is PostgreSQL, which is industry-standard and incredibly powerful. Unlike NoSQL databases, PostgreSQL uses structured tables with relationships. This matters because AI tools generate better code when working with structured data.

Authentication handles user sign-up, login, password reset, and OAuth providers like Google and GitHub.

Storage provides a place for files: user avatars, document uploads, images.

Edge Functions let you run custom server-side code, similar to Vercel's serverless functions.

---

### Why Supabase for Vibe Coding?

[Practical tone]

Supabase has become the default backend for AI coding tools. Here's why:

First, it has excellent documentation and a consistent API. AI models are trained on this documentation, so they generate accurate Supabase code.

Second, the JavaScript client is intuitive. Fetching data looks like this:

```javascript
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId);
```

Readable, predictable, easy to modify.

Third, the dashboard lets you see and modify data directly. When AI generates code that doesn't work, you can check the dashboard to see if the data even exists.

---

## 2.2 Database 101

### Tables, Rows, and Columns

[Screen: Spreadsheet analogy visual]

If you've ever used Excel or Google Sheets, you already understand databases.

A table is like a spreadsheet. It has columns, which define what data is stored, and rows, which are individual records.

```
Users Table
┌────┬─────────┬────────┬───────────────────────┐
│ id │  name   │  age   │        email          │
├────┼─────────┼────────┼───────────────────────┤
│ 1  │ Sarah   │   28   │ sarah@example.com     │
│ 2  │ Marcus  │   34   │ marcus@example.com    │
│ 3  │ Priya   │   25   │ priya@example.com     │
└────┴─────────┴────────┴───────────────────────┘
```

Each column has a type: text for strings, integer for numbers, boolean for true/false, timestamp for dates.

---

### Primary Keys and Foreign Keys

[Screen: Visual showing key relationships]

Every table needs a primary key: a unique identifier for each row. Usually this is an id column that auto-increments or uses UUIDs.

Foreign keys create relationships between tables. If you have a Posts table and a Users table, the Posts table might have a user_id column that references the Users table.

```
Posts Table
┌────┬─────────────────┬─────────┐
│ id │     title       │ user_id │
├────┼─────────────────┼─────────┤
│ 1  │ My First Post   │    1    │  ← belongs to Sarah
│ 2  │ Another Post    │    2    │  ← belongs to Marcus
└────┴─────────────────┴─────────┘
```

This is how you model that "Sarah wrote this post."

---

### Relationships

[Screen: Entity relationship diagram]

One-to-many: One user has many posts. The foreign key lives in the posts table.

Many-to-many: Users can like many posts, and posts can have many likes. This requires a junction table.

```
Likes Table (junction)
┌────┬─────────┬─────────┐
│ id │ user_id │ post_id │
├────┼─────────┼─────────┤
│ 1  │    1    │    2    │  ← Sarah liked Marcus's post
│ 2  │    2    │    1    │  ← Marcus liked Sarah's post
└────┴─────────┴─────────┘
```

[Important tone]

Understanding relationships helps you prompt AI more effectively. Instead of vaguely asking for "a database for a blog," you can say "I need a users table, a posts table with user_id foreign key, and a likes junction table."

The AI will generate better schemas when you speak the language.

---

### SQL Basics

[Screen: SQL queries in Supabase]

SQL, Structured Query Language, is how you talk to databases.

```sql
-- Get all users
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Filter results
SELECT * FROM users WHERE age > 25;

-- Insert a new row
INSERT INTO users (name, age, email) 
VALUES ('Alex', 30, 'alex@example.com');

-- Update existing data
UPDATE users SET age = 31 WHERE name = 'Alex';

-- Delete a row
DELETE FROM users WHERE id = 4;
```

[Reassuring tone]

You don't need to memorize SQL syntax. AI tools will write SQL for you. But recognizing these patterns helps you verify that the generated queries are correct.

And Supabase's dashboard lets you run SQL directly, which is invaluable for debugging.

---

## 2.3 Authentication

### How Auth Works: The Big Picture

[Screen: Authentication flow diagram]

Authentication answers the question: who is this user?

Here's the flow:

1. User enters email and password
2. Server checks if credentials match a stored user
3. If yes, server creates a session or token
4. User's browser stores this token
5. Every future request includes the token
6. Server verifies the token to know who's making requests

[Pause]

The key insight is that after login, the user doesn't send their password again. They send a token that proves they already authenticated.

---

### Sessions vs. Tokens (JWTs)

[Screen: Visual comparing sessions and tokens]

Sessions store authentication state on the server. The user gets a session ID cookie, and the server looks up their information using that ID.

Tokens, specifically JWTs or JSON Web Tokens, contain the user's information encoded inside them. The server doesn't need to store anything. It verifies the token's signature to confirm it's legitimate.

```
JWT = header.payload.signature

Payload contains:
{
  "user_id": 1,
  "email": "sarah@example.com",
  "exp": 1699900000  // expiration time
}
```

[Practical note]

Supabase uses JWTs. When you call supabase.auth.getSession(), you're getting a JWT that contains your user's information. Understanding this helps when debugging authentication issues.

---

### OAuth: Sign in with Google

[Screen: OAuth flow diagram]

OAuth lets users sign in using existing accounts from providers like Google, GitHub, or Apple.

The flow involves redirects between your app, the provider, and back. Supabase handles all of this complexity. You configure the provider in the dashboard and call:

```javascript
await supabase.auth.signInWithOAuth({
  provider: 'google'
});
```

One line. Supabase handles the redirects, token exchange, and user creation.

---

### Advanced: Row Level Security and Edge Functions

[Screen: RLS policy example]

Row Level Security, or RLS, is a PostgreSQL feature that Supabase exposes beautifully.

Instead of checking permissions in your application code, you define policies at the database level.

```sql
-- Users can only see their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT
  USING (auth.uid() = id);
```

This policy ensures users can only select rows where the id matches their authenticated user ID. Even if your application code has a bug, the database enforces security.

[Important]

RLS is critical for production applications. We'll implement it when we harden our project later in the course.

Edge Functions let you run custom server-side logic in Supabase, similar to API routes. They're useful for webhooks, scheduled tasks, or complex operations that shouldn't happen in the browser.

---

# PHASE 2: THE VIBE CODING REVOLUTION

---

# CHAPTER 3: THE VIBE CODING ECOSYSTEM

## Video Screen Suggestions:
- Montage of vibe coding tools
- Side-by-side comparisons
- Workflow diagrams

---

## 3.1 What is Vibe Coding?

### The Paradigm Shift

[Reflective, slightly philosophical tone]

For decades, programming meant one thing: learning syntax.

You memorized keywords, wrestled with semicolons, debugged bracket mismatches. The barrier to entry was high, and it had nothing to do with the actual problem you were trying to solve.

[Pause]

Vibe coding flips this on its head.

Instead of writing code character by character, you describe what you want. The AI handles the syntax. You handle the intent.

[Screen: Before/after comparison]

Before: "How do I loop through an array in JavaScript and filter items?"

After: "Show me products where the price is under fifty dollars."

The second statement is what you actually care about. The AI translates it into the necessary code.

---

### The 80/20 Rule of AI-Assisted Development

[Practical tone]

Here's the reality: AI can get you 80% of the way there almost instantly.

A landing page? Done in minutes. Basic CRUD operations? Generated automatically. Standard UI patterns? The AI has seen thousands of examples.

But that last 20%? Custom business logic, edge cases, performance optimization, security hardening. That requires human understanding.

[Emphasize]

This course exists for that 20%. The foundations you're learning enable you to take AI-generated code across the finish line.

You're not replacing your brain with AI. You're augmenting it.

---

### When Vibe Coding Works (and When It Doesn't)

[Honest, balanced tone]

Vibe coding excels at:

- Greenfield projects with common patterns
- Prototyping and rapid iteration
- Standard UI components and layouts
- Boilerplate code and configuration
- Learning new frameworks or syntax

Vibe coding struggles with:

- Highly custom business logic
- Performance-critical code paths
- Complex state management across systems
- Security-sensitive implementations
- Maintaining large existing codebases

[Wisdom]

Knowing when to reach for AI and when to think through the problem yourself is a skill. This course helps you develop that judgment.

---

## 3.2 The Tool Landscape

### Bind AI: Full-Stack Vibe

[Screen: Bind AI interface]

Bind AI is designed for complete application development in the browser.

You describe what you want, and it generates an entire Next.js project. Frontend, backend connections, database schemas, deployment configuration. Everything.

The standout feature is the integrated development environment. You can see your app running, edit code, chat with the AI, and deploy, all without leaving the browser.

[Practical note]

Bind AI is perfect for going from zero to deployed application as quickly as possible. We'll use it extensively in Phase 3 of this course.

---

### Cursor: The AI-Native Code Editor

[Screen: Cursor interface]

Cursor looks like VS Code because it's built on VS Code. But it has AI woven into every interaction.

Tab completion suggests entire functions, not just words.
Cmd+K lets you give instructions inline: "refactor this to use async/await."
Composer mode orchestrates changes across multiple files.

[Strategic tone]

Cursor shines when you have existing code and need to modify, refactor, or extend it. The AI understands your entire codebase, not just the current file.

When Bind AI gets you the initial structure, Cursor is where you refine it.

---

### Other Tools: Lovable, Replit, v0

[Screen: Quick tour of each tool]

**Lovable** focuses on beautiful UI generation. It's particularly good at design-to-code workflows where aesthetics matter most.

**Replit** provides a cloud-based development environment with AI assistance. It's great for quick experiments and learning, with multiplayer collaboration built in.

**v0 by Vercel** generates individual React components from descriptions. It's focused and fast when you need a specific UI piece rather than a full application.

Each tool has its sweet spot. Professional workflows often combine several.

---

## 3.3 Strategic Tool Selection

### The Decision Framework

[Screen: Flowchart for tool selection]

Ask yourself these questions:

**Are you starting from scratch or modifying existing code?**
- From scratch → Bind AI or Lovable
- Existing code → Cursor

**Is this a complete application or a specific component?**
- Complete application → Bind AI
- Specific component → v0 or Cursor

**Do you need rapid prototyping or production-quality code?**
- Rapid prototype → Bind AI, Lovable
- Production quality → Cursor with manual review

**Are you learning or shipping?**
- Learning → Replit for its explanations
- Shipping → Bind AI + Cursor combination

---

### The Handoff Pattern

[Strategic tone]

Here's the workflow I recommend, and what we'll practice in this course:

1. **Bind AI** for initial generation: Describe your application, get a working prototype in minutes.

2. **GitHub** for version control: Sync your code so you have a safety net and can collaborate.

3. **Cursor** for refinement: Clone the repo locally, use Cursor's deep codebase understanding to make surgical improvements.

4. **Vercel** for deployment: Push changes, get automatic deployments.

This combines the speed of AI generation with the precision of focused editing.

---

# PHASE 3: BUILD & SHIP

---

# CHAPTER 4: PROJECT LEVEL 1 — THE STATIC VIBE

## Video Screen Suggestions:
- Bind AI interface demonstration
- Typing prompts in real-time
- Generated code and preview side-by-side

---

## 4.1 Crafting Effective Prompts

### The Anatomy of a Good Prompt

[Teaching tone]

The quality of AI output depends entirely on the quality of your input.

A vague prompt: "Make me a website."

What kind of website? For whom? What style? What features?

A specific prompt: "Create a landing page for a productivity app called FocusFlow. The target audience is remote workers. Use a clean, modern design with a hero section, three feature cards, a testimonial section, and a call-to-action for email signup. Use a blue and white color scheme."

[Screen: Side-by-side comparison of outputs]

The specific prompt generates something usable. The vague prompt generates something generic.

---

### The Prompt Framework

[Screen: Framework outline]

Use this structure:

1. **Context**: What is this for? Who is the audience?
2. **Type**: Landing page, dashboard, form, etc.
3. **Components**: List specific sections or features
4. **Style**: Design direction, colors, mood
5. **Reference**: Screenshots, examples, existing designs

Example:

```
Context: A SaaS tool for freelance writers to track their income
Type: Dashboard page
Components:
- Monthly earnings chart
- Recent payments list
- Pending invoices count
- Quick-add payment button
Style: Clean and professional, purple accent color
Reference: [Figma screenshot or similar dashboard example]
```

The more context you provide, the better the AI understands your intent.

---

### Providing Visual Context

[Screen: Dragging image into Bind AI]

AI tools excel when given visual references.

Take a screenshot from Figma. Paste it into the chat. Now the AI can see what you're trying to build.

You can also reference existing websites: "Similar to the pricing page on Linear.app" or "With the card style used by Stripe."

The AI has been trained on countless websites. Named references activate that knowledge.

---

## 4.2 Bind AI Workflow

### Creating Your First Project

[Screen: Recording of Bind AI interface]

Let's build a landing page together.

Open Bind AI. You'll see a chat interface with a preview pane.

Start with a prompt:

```
Create a landing page for "TaskFlow", a project management tool for small teams.

Include:
- A hero section with headline, subheadline, and two CTA buttons
- A section showcasing 4 key features with icons
- A pricing section with 3 tiers
- A footer with links and social icons

Design: Modern and clean, use indigo and slate colors
```

[Pause as AI generates]

Watch as Bind AI generates the files. It's creating a Next.js project with React components, Tailwind CSS for styling, and the folder structure we discussed earlier.

---

### Iterating on Design via Chat

[Interactive tone]

The first output is rarely perfect. That's expected.

Look at the preview and identify what needs to change.

"Make the hero headline larger and add a gradient to the text."

"Change the pricing cards to have rounded corners and a subtle shadow."

"Add an animation where the feature icons fade in when scrolling into view."

Each prompt refines the design. You're having a conversation with the AI, steering it toward your vision.

[Important note]

Be specific about what you don't like. "This doesn't look right" is unhelpful. "The spacing between the features section and pricing is too large, reduce it to 48 pixels" gives the AI actionable information.

---

### Understanding Generated Code

[Screen: Showing file structure]

Let's look at what Bind AI created.

```
├── app/
│   ├── layout.tsx      → The app shell
│   ├── page.tsx        → The landing page
│   └── globals.css     → Global styles
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── package.json        → Dependencies
└── tailwind.config.ts  → Tailwind configuration
```

The code is organized into components, exactly as we discussed in the React section.

Open Hero.tsx. You'll see a functional component returning JSX with Tailwind classes. You understand what this is now. That's the value of the foundations we covered.

---

## 4.3 Alternative: Lovable

### When to Choose Lovable

[Comparative tone]

Lovable excels at visually sophisticated designs. If your priority is pixel-perfect UI with complex animations and interactions, Lovable might produce better initial results.

The workflow is similar: describe what you want, iterate via chat, preview in real-time.

[Practical advice]

I recommend trying both tools with the same prompt and comparing outputs. Your preferred tool might depend on the specific project or your personal workflow.

For this course, we'll continue with Bind AI because it provides the most complete path from design to deployment.

---

### Chapter 4 Outcome

[Summarizing tone]

By the end of this chapter, you have a beautiful, responsive frontend running in the browser.

It's not connected to any backend yet. There's no real data, no user accounts, no persistence. It's a prototype, a starting point.

But it looks professional. And it took minutes, not days.

That's the power of vibe coding for static content. In the next chapter, we'll make it real.

---

# CHAPTER 5: PROJECT LEVEL 2 — ADDING INTELLIGENCE (SUPABASE)

## Video Screen Suggestions:
- Supabase dashboard tour
- Database table creation
- Environment variables configuration

---

## 5.1 Database Schema Design

### Planning Your Data Model

[Thoughtful tone]

Before asking AI to generate database code, take a moment to think about your data.

What entities exist in your application? For a project management tool:

- Users (people using the app)
- Projects (collections of tasks)
- Tasks (individual work items)

How do they relate?

- A user can have many projects
- A project belongs to one user
- A project can have many tasks
- A task belongs to one project

[Screen: Simple ERD diagram]

This mental model helps you prompt effectively and verify that the AI generated the correct schema.

---

### Using Bind AI for Schema Generation

[Screen: Bind AI with database prompt]

Now let's add a backend to our landing page.

```
Add Supabase integration to this project.

Create these database tables:
1. users (managed by Supabase Auth)
2. projects (id, user_id, name, description, created_at)
3. tasks (id, project_id, title, status, due_date, created_at)

Set up the Supabase client and create a hook for fetching user's projects.
```

[Pause for generation]

Bind AI creates several things:
- A Supabase client configuration file
- TypeScript types for your database tables
- A custom hook for data fetching
- Instructions for setting up environment variables

---

## 5.2 Environment Configuration

### Setting Up Supabase

[Screen: Supabase dashboard]

Open Supabase and create a new project.

In the project settings, find your API keys:
- **Project URL**: The endpoint for your database
- **Anon Key**: A public key for client-side requests
- **Service Role Key**: A secret key for server-side operations (never expose this)

[Warning tone]

The anon key is safe to use in browser code because Row Level Security protects your data. The service role key bypasses RLS entirely. Never put it in client-side code.

---

### Environment Variables Explained

[Screen: .env.local file]

Environment variables keep secrets out of your code.

Create a file called .env.local:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The NEXT_PUBLIC_ prefix means these variables are available in browser code. Without the prefix, they're server-only.

In Bind AI, add these variables in the settings panel. The AI will reference them in the generated code.

---

## 5.3 Implementing Authentication

### Sign Up and Login Flow

[Screen: Auth UI components]

Add authentication with a prompt:

```
Add authentication to the app using Supabase Auth.
- Create a login page at /login with email/password
- Create a signup page at /signup
- After login, redirect to /dashboard
- Add a logout button to the navigation
```

Bind AI generates:
- Login and signup page components
- Form handling with proper validation
- Supabase auth function calls
- Redirect logic using Next.js router

---

### Understanding the Generated Auth Flow

[Screen: Walking through auth code]

Let's trace through what happens when a user logs in.

```javascript
const handleLogin = async (e: FormEvent) => {
  e.preventDefault();
  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setError(error.message);
  } else {
    router.push('/dashboard');
  }
};
```

The form submits. We call Supabase's signInWithPassword method. If successful, we redirect to the dashboard.

[Educational moment]

Notice how readable this is? You understand every line because you know JavaScript, React hooks, and how authentication works conceptually.

The AI wrote the code, but you can verify it's correct.

---

## 5.4 Verification and Debugging

### Using the Supabase Dashboard

[Screen: Table editor in Supabase]

After signing up a test user, check the Supabase dashboard.

Go to Authentication → Users. You should see your test user listed.

Go to Table Editor. Once you create projects, they'll appear here. You can view, edit, and delete records directly.

This is invaluable for debugging. If your app isn't showing data, check if the data even exists in the database.

---

### Running SQL Queries

[Screen: SQL editor in Supabase]

Sometimes you need to query data directly.

In Supabase, go to SQL Editor and run:

```sql
SELECT * FROM projects WHERE user_id = 'your-user-id';
```

This shows exactly what the database contains. If your app queries aren't returning results but this query shows data, the problem is in your application code, not the database.

---

### Reading Logs

[Screen: Supabase logs panel]

Supabase provides logs for API calls, authentication events, and database operations.

When something doesn't work, check the logs. They show the actual requests and responses, which often reveal the problem.

[Practical advice]

"Check the logs" is the first step in any debugging process. Before asking AI to fix something, understand what's actually happening.

---

### Chapter 5 Outcome

[Milestone tone]

Your application is no longer static. It has:
- A real PostgreSQL database
- User authentication
- Data that persists between sessions

This is a functional application. Users can sign up, log in, and their data is saved.

Next, we'll save this code properly and prepare for deployment.

---

# CHAPTER 6: PROJECT LEVEL 3 — DEPLOYMENT PHASE A (GITHUB)

## Video Screen Suggestions:
- GitHub interface
- Bind AI sync feature
- Local Git commands in terminal

---

## 6.1 Method 1: Bind AI Direct Sync

### Using the Sync Feature

[Screen: Bind AI GitHub sync button]

Bind AI can push code directly to GitHub.

Click the GitHub sync button in the interface. Authorize access to your GitHub account if you haven't already.

Enter a repository name. Bind AI creates the repo and pushes all your code.

[Simple truth]

This is the fastest way to get your code into version control. For many projects, it's all you need.

---

### What Gets Pushed

[Screen: GitHub repo showing files]

Let's look at what Bind AI pushed.

The entire project structure is now in your GitHub repository. Every file, every component, every configuration.

Note the .gitignore file. This tells Git to ignore certain files:
- node_modules (installed packages, regenerated by npm install)
- .env.local (your secret keys)
- .next (build outputs)

These files don't belong in version control.

---

## 6.2 Method 2: The Manual Approach

### Why Go Manual?

[Practical tone]

Sometimes you want more control. Maybe you're working with an existing repository. Maybe you want to understand what's happening under the hood.

Here's the manual process.

---

### Downloading and Initializing

[Screen: Terminal commands]

First, download your code from Bind AI. You'll get a zip file.

Extract it and open a terminal in that folder.

```bash
git init
```

This creates a new Git repository.

```bash
git add .
```

This stages all files for commit.

```bash
git commit -m "Initial commit from Bind AI"
```

This creates your first commit with a message.

---

### Creating a GitHub Repo and Pushing

[Screen: GitHub new repository page]

On GitHub, click "New repository." Give it a name. Don't initialize with README since you already have files.

GitHub gives you commands to run:

```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

[Explaining]

The remote is the GitHub URL where your code will live.
We're naming the branch "main."
Push sends your commits to GitHub.

Refresh GitHub. Your code is there.

---

## 6.3 Repository Best Practices

### Writing Good Commit Messages

[Guidance tone]

Every commit tells a story. Good messages make that story readable.

Format:

```
<type>: <short description>

[optional longer description]
```

Types:
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Formatting, no logic change
- refactor: Code restructure without behavior change

Examples:
```
feat: add user authentication flow
fix: resolve login redirect loop on mobile
docs: update README with setup instructions
```

---

### The README File

[Screen: Example README]

Your repository should have a README.md that explains:
- What the project does
- How to install and run it
- Any environment variables needed
- How to contribute

This is the first thing people see when they visit your repository. Make it useful.

---

### Chapter 6 Outcome

[Checkpoint tone]

Your code is now safely stored in GitHub.

This means:
- You can't accidentally lose your work
- You can track every change over time
- You can collaborate with others
- You're ready to deploy

Speaking of which, let's go live.

---

# CHAPTER 7: PROJECT LEVEL 4 — DEPLOYMENT PHASE B (VERCEL)

## Video Screen Suggestions:
- Vercel dashboard
- Import project flow
- Environment variables configuration

---

## 7.1 Method 1: Bind AI Direct Deploy

### One-Click Deployment

[Screen: Bind AI deploy button]

Bind AI integrates with Vercel directly.

Click the deploy button. Authorize Vercel access if needed. Bind AI handles the rest.

[Pause for deployment]

Within minutes, you have a live URL. Your application is on the internet. Anyone in the world can access it.

---

### Understanding the Magic

[Educational tone]

What just happened?

Bind AI pushed your code to Vercel's build system. Vercel installed dependencies, ran the Next.js build process, and deployed the result to their global CDN.

Your static pages are cached at edge locations worldwide. Your API routes become serverless functions. Images are automatically optimized.

All of this from one button click.

---

## 7.2 Method 2: Manual Vercel Setup

### Connecting Your GitHub Repository

[Screen: Vercel import flow]

For more control, connect manually.

In Vercel, click "Add New Project." Select "Import Git Repository." Choose your GitHub repository.

Vercel detects it's a Next.js project and configures build settings automatically.

---

### Configuring Build Settings

[Screen: Vercel build settings]

The defaults usually work perfectly. But you can customize:

- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

For most Next.js projects, don't touch these.

---

### Setting Environment Variables

[Important tone]

Here's the critical step many people forget.

Your .env.local file doesn't exist on Vercel. You need to add those variables manually.

Go to Settings → Environment Variables.

Add:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

[Screen: Adding variables]

Without these, your application will build but fail to connect to Supabase.

---

## 7.3 Custom Domains

### Adding Your Domain

[Screen: Domain settings]

Your app is live at something like `your-project.vercel.app`. To use a custom domain:

1. Go to Settings → Domains
2. Enter your domain name
3. Vercel provides DNS records
4. Add those records at your domain registrar

Vercel automatically provisions SSL certificates. Your site is HTTPS from the start.

---

### Preview Deployments

[Powerful feature tone]

Every push to a branch creates a preview deployment.

Push to a feature branch? Vercel builds it and gives you a unique URL. You can test changes before merging to main.

This is immutable deployment in action. Every version exists independently.

---

### Chapter 7 Outcome

[Celebratory but measured]

Your application is live. You have a URL you can share.

Take a moment to appreciate what you've accomplished. You went from a prompt to a deployed application with authentication, a database, and version control.

But we're not done. The app works, but it's not yet production-ready. Let's continue.

---

# CHAPTER 8: PROJECT LEVEL 5 — THE "EJECT" & REFINEMENT WORKFLOW

## Video Screen Suggestions:
- Bind AI code editor
- Local VS Code/Cursor setup
- Split screen of both environments

---

## 8.1 The Bind AI Editor

### When to Edit In-Browser

[Practical tone]

Bind AI includes a built-in code editor. For quick fixes, this is convenient.

Click on any file in the file tree. The editor opens with syntax highlighting and basic autocomplete.

[Screen: Making a small edit]

Want to change a color? Adjust padding? Fix a typo? Do it directly here.

Save, and the preview updates immediately. No need to restart anything.

---

### Understanding File Structure

[Screen: Exploring the file tree]

Take time to explore the files Bind AI generated.

The `app/` directory contains your pages.
The `components/` directory holds reusable UI pieces.
The `lib/` directory has utility functions and configurations.

Navigating this structure helps you know where to make changes.

---

## 8.2 The "Eject" Moment

### Why Download Locally?

[Decision point tone]

The browser environment has limitations:
- Complex npm packages may not work
- You can't use all development tools
- Performance suffers with large codebases
- Offline work isn't possible

When your project outgrows the browser, it's time to eject.

---

### When to Eject

[Guidelines]

Download locally when you need to:
- Install packages that don't work in-browser
- Use advanced editor features
- Work without internet
- Integrate with other local tools
- Prepare for serious production work

For learning and prototyping, stay in the browser. For real applications, eject.

---

## 8.3 Setting Up Local Environment

### Opening in Cursor

[Screen: Cursor opening project]

Download your project from Bind AI.
Extract the zip file.
Open Cursor and select "Open Folder."

Cursor recognizes the Next.js project and configures itself appropriately.

---

### Running Locally

[Screen: Terminal in Cursor]

Open Cursor's terminal and run:

```bash
npm install
```

This downloads all the packages listed in package.json.

```bash
npm run dev
```

This starts the development server.

[Screen: Browser showing localhost:3000]

Your app is now running locally at localhost:3000. Changes you make update instantly thanks to hot reload.

---

## 8.4 Cursor AI Features

### Tab Completion

[Screen: Cursor autocomplete in action]

As you type, Cursor suggests entire lines or functions.

Press Tab to accept. The suggestions are context-aware, they understand what you're building.

---

### Inline Chat with Cmd+K

[Screen: Inline chat dialog]

Select any code and press Cmd+K (Ctrl+K on Windows).

Type an instruction: "Add error handling to this function."

Cursor modifies the selected code according to your instruction. Accept the changes or adjust and try again.

---

### Composer Mode

[Screen: Composer panel]

For changes spanning multiple files, use Composer.

Press Cmd+I to open. Describe what you want: "Add a dark mode toggle that persists user preference."

Cursor identifies all files that need changes and makes them simultaneously. Review each change before accepting.

[Powerful capability]

Composer is where Cursor shines. The AI understands your entire codebase and can orchestrate complex changes that would take hours to do manually.

---

### Chapter 8 Outcome

[Transition tone]

You now have:
- Full control of your codebase locally
- AI assistance within your editor
- The development environment professional teams use

The training wheels are off. You're not dependent on any single tool.

Now let's make this app production-worthy.

---

# CHAPTER 9: PROJECT LEVEL 6 — PRODUCTION HARDENING

## Video Screen Suggestions:
- Code examples for each feature
- Lighthouse performance audit
- Security best practices diagrams

---

## 9.1 Search Engine Optimization

### The Metadata API

[Screen: metadata export in page.tsx]

Search engines need to understand your pages. Next.js makes this easy.

```typescript
export const metadata = {
  title: 'TaskFlow - Project Management for Teams',
  description: 'Organize your projects, track progress, and collaborate with your team.',
};
```

Each page can export its own metadata. Next.js includes it in the HTML automatically.

---

### Dynamic Metadata

[Screen: generateMetadata function]

For dynamic pages like blog posts, use generateMetadata:

```typescript
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    },
  };
}
```

When someone shares your page on social media, OpenGraph data determines what preview appears.

---

## 9.2 Performance Optimization

### next/image

[Screen: Before/after image comparison]

Replace standard `<img>` tags with Next.js Image component:

```jsx
import Image from 'next/image';

<Image 
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
/>
```

Next.js automatically:
- Serves modern formats like WebP
- Resizes based on device
- Lazy loads off-screen images
- Prevents layout shift

One component, multiple optimizations.

---

### next/font

[Screen: Font configuration]

Custom fonts often cause performance issues. next/font fixes this:

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      {children}
    </html>
  );
}
```

Fonts are automatically optimized and self-hosted. No external requests, no flash of unstyled text.

---

## 9.3 Route Protection with Middleware

### Creating Middleware

[Screen: middleware.ts file]

Middleware runs before every request. Perfect for authentication checks.

```typescript
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

[Explaining]

The matcher specifies which routes trigger the middleware.
We check for a Supabase session.
No session on a protected route? Redirect to login.

This happens on the server, before the page even renders. Users can't access protected content by manipulating the client.

---

## 9.4 Error Handling

### Global Error Page

[Screen: error.tsx file]

When something crashes, show a graceful error page:

```tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try again
      </button>
    </div>
  );
}
```

The reset function attempts to re-render the failed component.

---

### Not Found Page

[Screen: not-found.tsx file]

For 404 errors:

```tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Go home
      </a>
    </div>
  );
}
```

Professional applications handle errors gracefully. Users should never see a broken page.

---

## 9.5 Analytics

### Vercel Analytics

[Screen: Vercel Analytics dashboard]

Understanding how users interact with your app is crucial.

In Vercel, enable Analytics in your project settings.

Add the component to your app:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Now you see page views, unique visitors, and core web vitals.

---

### Chapter 9 Outcome

[Achievement tone]

Your application is now production-ready:
- Search engines can find and index it
- Images and fonts are optimized
- Protected routes are actually protected
- Errors are handled gracefully
- You understand user behavior

This is no longer a prototype. This is a real application worthy of real users.

---

# PHASE 4: ADVANCED MASTERY

---

# CHAPTER 10: CURSOR DEEP DIVE & GITHUB MCP

## Video Screen Suggestions:
- Cursor settings panel
- MCP configuration
- GitHub integration demo

---

## 10.1 Cursor Mastery

### Custom Instructions

[Screen: .cursorrules file]

Create a .cursorrules file in your project root:

```
You are working on a Next.js 14 application with Supabase.
- Use TypeScript for all new files
- Use Tailwind CSS for styling
- Follow the existing file structure
- Prefer Server Components unless client interactivity is needed
```

Every AI interaction respects these rules. The AI stays consistent with your project's patterns.

---

### Codebase Indexing

[Screen: Cursor indexing indicator]

Cursor indexes your entire codebase. This means:
- The AI knows about files you're not currently viewing
- It can reference existing functions and components
- Suggestions align with your established patterns

For large projects, this is transformative. The AI doesn't just see one file; it sees everything.

---

## 10.2 Model Context Protocol Explained

### What is MCP?

[Conceptual explanation]

MCP, Model Context Protocol, lets AI tools access external systems.

Think of it as plugins for AI. Instead of copying information from GitHub and pasting it into your prompt, MCP lets the AI access GitHub directly.

It's read and write access to external tools, mediated by the AI.

---

### The Architecture

[Screen: MCP architecture diagram]

MCP servers are small programs that expose capabilities:
- "Read GitHub issues"
- "List pull requests"
- "Get file contents from Figma"

Cursor connects to these servers. When you ask about an issue, Cursor queries the server and incorporates the response into its understanding.

---

## 10.3 GitHub MCP Setup

### Installation

[Screen: Terminal and Cursor settings]

Install the GitHub MCP server:

```bash
npm install -g @modelcontextprotocol/server-github
```

In Cursor settings, add the server configuration with your GitHub token.

---

### Practical Example

[Screen: Cursor using GitHub context]

Now you can ask:

"Look at GitHub issue #23 and implement the feature request."

Cursor reads the issue description, understands the requirement, and generates code that addresses it.

"Show me the open pull requests and summarize what each one changes."

Cursor fetches PR data and provides a summary without you leaving the editor.

---

## 10.4 The Ultimate Workflow

### Putting It All Together

[Strategic summary]

1. **Start in Bind AI**: Quick generation, visual feedback, immediate results
2. **Sync to GitHub**: Version control, collaboration, backup
3. **Refine in Cursor**: Deep AI assistance, full codebase understanding
4. **Use MCP**: Connect GitHub issues directly, stay in flow
5. **Deploy via Vercel**: Automatic, reliable, global

This workflow combines the best of every tool. Speed when you need it, precision when you need it.

---

# CHAPTER 11: VISUAL INTELLIGENCE — CURSOR + FIGMA MCP

## Video Screen Suggestions:
- Figma MCP configuration
- Live design-to-code demo
- Component extraction workflow

---

## 11.1 Figma MCP Setup

### Configuration

[Screen: Figma developer settings]

Get your Figma personal access token from the settings page.

Install the Figma MCP server:

```bash
npm install -g @anthropic/claude-figma-mcp
```

Add the configuration to Cursor with your token.

---

### Connecting Design Files

[Screen: Cursor with Figma context]

Point the MCP server at your Figma file URL.

Now Cursor can see your design. Not a screenshot, but the actual design structure: frames, layers, properties.

---

## 11.2 The Workflow

### Referencing Specific Frames

[Screen: Cursor reading Figma frame]

Ask: "Look at the 'Dashboard Header' frame in Figma and create a React component that matches it."

Cursor reads the frame's properties: dimensions, colors, spacing, typography. It generates code using those exact values.

---

### Translating Auto-Layout to Tailwind

[Screen: Side-by-side Figma and code]

Figma's auto-layout corresponds to CSS flexbox. Cursor understands this translation:

- Auto-layout horizontal → flex-row
- Auto-layout vertical → flex-col
- Spacing → gap-4
- Padding → p-4

The AI isn't guessing. It's reading the design file's actual values.

---

## 11.3 Component Extraction

### Building Reusable Components

[Screen: Component isolation]

Select a button in Figma. Ask Cursor:

"Create a Button component based on the 'Primary Button' in Figma with hover and disabled states."

Cursor extracts:
- The button's dimensions and padding
- Background and text colors
- Border radius
- Hover state colors from Figma variants

The result is a properly styled, reusable React component.

---

### Design System via AI

[Closing vision]

Imagine your entire design system translated to code automatically.

Every button, card, input, and layout from Figma becomes a tested React component.

This isn't science fiction. With Figma MCP, it's your workflow.

---

## Course Conclusion

[Warm, reflective tone]

We've covered a lot of ground together.

You understand JavaScript, React, and Next.js well enough to read and modify AI-generated code. You know how databases and authentication work. You've built and deployed a real application.

More importantly, you understand the workflow. Start fast with Bind AI. Version control with GitHub. Refine with Cursor. Deploy with Vercel.

You're not blindly vibe coding anymore. You understand what's happening. You can step in when needed. You can ship real applications to real users.

[Encouraging close]

The tools will keep evolving. AI will get better. New platforms will emerge. But the foundations you've built in this course, those remain constant.

Go build something. The world needs what only you can create.

Thank you for learning with me.

---

# APPENDIX

## A. Video Screen Suggestions Summary

### Phase 1: Foundations
- Code editor with syntax highlighting
- Animated diagrams for abstract concepts
- Platform interfaces (Supabase, GitHub, Vercel)
- Visual representations of data flow

### Phase 2: Vibe Coding
- Tool interface tours
- Comparison layouts (split screen)
- Workflow diagrams

### Phase 3: Build
- Screen recordings in Bind AI
- Terminal commands
- Live preview of application development
- Dashboard interactions

### Phase 4: Advanced
- Cursor IDE deep dive
- MCP configuration screens
- Integration demonstrations

## B. Recording Notes

### For Compute Use Agent
- All tool interface tours
- Platform navigation (Supabase, Vercel, GitHub)
- Basic prompt → generation sequences in Bind AI

### For Manual Recording
- Conceptual explanations with diagrams
- Code walkthroughs where you want to emphasize specific lines
- Error debugging scenarios
- Final deployment celebration

### Animation/Graphics Needed
- Component tree diagrams
- Data flow illustrations
- Authentication flow
- MCP architecture
- Event loop visualization

## C. Voice Direction for AI Narration

### Overall Tone
- Warm and approachable, like a knowledgeable mentor
- Confident but not condescending
- Enthusiastic about possibilities, realistic about limitations

### Pace Markers
- [Pause] indicates a beat of silence for emphasis
- Section transitions should have brief pauses
- Code explanations should be slower and more deliberate

### Emphasis Patterns
- Technical terms should be stated clearly, not rushed
- Important concepts deserve weight
- Practical tips should sound like friendly advice

### Emotion Cues
- Foundations: Patient, thorough
- Vibe Coding introduction: Excited, forward-looking
- Building phases: Energetic, hands-on
- Advanced chapters: Confident, expert
- Conclusion: Warm, proud, encouraging
