import { 
  Clock, 
  Download, 
  User, 
  Building2, 
  CheckCircle2, 
  BookOpen,
  FileText,
  Code2,
  Zap,
  Database,
  Rocket,
  Copy,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CookbookPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-6 py-4 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-gray-900">Bind AI</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-900">Resources</Link>
              <span>›</span>
              <span className="text-gray-900">Free Cookbook</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Green Theme for Free */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-full">
                  FREE RESOURCE
                </span>
                <span className="px-3 py-1 bg-emerald-700/50 text-emerald-200 text-xs font-medium rounded-full flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Cookbook / Guide
                </span>
                <span className="px-3 py-1 bg-emerald-700/50 text-emerald-200 text-xs font-medium rounded-full flex items-center gap-1">
                  <FileText className="w-3 h-3" /> PDF + Markdown
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                The Vibe Coding Cookbook
              </h1>
              
              <p className="text-xl text-emerald-100 mb-2">
                Step-by-Step Guide to Building Real Apps with AI
              </p>
              
              <p className="text-emerald-200 mb-8">
                Copy-paste prompts and exact instructions to build 3 complete projects
              </p>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">Free with Bind AI</span>
              </div>
            </div>

            {/* Right - Cookbook Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  FREE
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">B</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Bind AI</p>
                      <p className="font-bold text-gray-900">Cookbook</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Ship Vibe-Coded Real Applications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Terminal className="w-4 h-4 text-brand" />
                        <span>3 Complete Project Guides</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Copy className="w-4 h-4 text-brand" />
                        <span>Copy-Paste Prompts</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Database className="w-4 h-4 text-brand" />
                        <span>SQL Templates Included</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs text-gray-600">
                    <p className="text-gray-400"># Project 1: Landing Page</p>
                    <p>Create a landing page for</p>
                    <p>"FlowTask" — a project</p>
                    <p>management SaaS...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What's Inside */}
            <section className="bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">What's inside the cookbook</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Step-by-step instructions for building 3 complete projects from scratch</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Copy-paste prompts optimized for Bind AI's Full Stack Agent</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete SQL templates for Supabase database setup</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Deployment checklists for GitHub and Vercel</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Troubleshooting guide for common issues</span>
                </li>
              </ul>
            </section>

            {/* About This Cookbook */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">About this cookbook</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  <strong className="text-gray-900">The Vibe Coding Cookbook</strong> is a practical, hands-on guide 
                  designed to get you building real applications as quickly as possible. Unlike tutorials that explain 
                  theory, this cookbook gives you exact prompts and step-by-step instructions you can follow immediately.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Each project guide includes everything you need: the initial prompt to generate the application, 
                  follow-up prompts for adding features, SQL code for the database, and verification steps to ensure 
                  everything is working correctly.
                </p>

                <p className="text-gray-600 mb-6">
                  Whether you're learning to code, exploring AI development tools, or just want to quickly prototype 
                  an idea, this cookbook will help you ship working applications in hours, not weeks.
                </p>
              </div>
            </section>

            {/* The Three Projects */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">The three projects you'll build</h2>
              
              <div className="space-y-6">
                {/* Project 1 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-brand transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Project 1: Static Landing Page</h3>
                      <p className="text-sm text-gray-500 mb-3">30-45 minutes</p>
                      <p className="text-gray-600 text-sm">
                        Build a professional SaaS landing page with hero, features, pricing, FAQ, and footer. 
                        Learn prompt-based generation and design-to-code workflows.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-brand transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Project 2: E-Commerce Store</h3>
                      <p className="text-sm text-gray-500 mb-3">60-90 minutes</p>
                      <p className="text-gray-600 text-sm">
                        Create a full-stack coffee shop with products, cart, checkout, and user accounts. 
                        Connect Supabase, run SQL migrations, and implement authentication.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-brand transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Project 3: Task Management App</h3>
                      <p className="text-sm text-gray-500 mb-3">45-60 minutes</p>
                      <p className="text-gray-600 text-sm">
                        Build a Kanban-style task board like Trello. Projects, tasks, drag-and-drop columns, 
                        real-time sync, and advanced features like quick-add and task modals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sample Content */}
            <section className="bg-gray-900 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-6">Sample from the cookbook</h2>
              <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <p className="text-gray-400 mb-4"># Project 2: E-Commerce Store - Initial Prompt</p>
                <p className="text-emerald-400 mb-1">Create a coffee e-commerce store with:</p>
                <p className="text-gray-300">- Homepage showing all coffee products in a grid</p>
                <p className="text-gray-300">- Product detail page with description, price, add to cart</p>
                <p className="text-gray-300">- User authentication (sign up, login, logout)</p>
                <p className="text-gray-300">- Shopping cart that persists for logged-in users</p>
                <p className="text-gray-300">- Checkout page with order summary</p>
                <p className="text-gray-300 mb-4">- Order confirmation page</p>
                <p className="text-gray-400 text-xs">↳ Bind AI automatically generates: 6 database tables, auth flow, all pages...</p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                The cookbook includes 50+ prompts like this, plus all the SQL code you need.
              </p>
            </section>

            {/* Who Is This For */}
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Who is this for?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Developers wanting to accelerate with AI tools</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bootcamp students learning full-stack development</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entrepreneurs prototyping product ideas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Non-coders wanting to build real apps</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">FREE</span>
                    <span className="text-sm text-gray-500">Lead Magnet</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    The Vibe Coding Cookbook
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Get instant access to the complete cookbook
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>50+ Page Guide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Copy className="w-4 h-4 text-gray-400" />
                      <span>Copy-Paste Prompts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-gray-400" />
                      <span>3 Complete Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-gray-400" />
                      <span>SQL Templates</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Free with Scale Max */}
                  <div className="border-2 border-emerald-500 rounded-xl p-4 relative bg-emerald-50/50">
                    <div className="absolute -top-3 left-4 px-2 bg-white">
                      <span className="text-xs font-semibold text-emerald-600">GET FREE ACCESS</span>
                    </div>
                    <div className="absolute -top-3 right-4 px-2 py-0.5 bg-accent-orange text-white text-xs font-bold rounded">
                      50% OFF
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Start a free trial with Scale Max</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">$99</span>
                        <span className="text-gray-500">/mo</span>
                        <span className="text-sm text-gray-400 line-through">$199/mo</span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Get Cookbook Free
                    </button>
                    
                    <div className="mt-4 space-y-1.5">
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Instant cookbook download
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Unlimited AI code generation
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Full access to Bind AI IDE
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Cancel anytime
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-3">Limited time discount</p>
                  </div>

                  <div className="text-center">
                    <Link href="/course" className="text-sm text-brand hover:text-brand-dark font-medium inline-flex items-center gap-1">
                      Want the full video course? <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">2,500+ downloads</span>
                </div>
                <p className="text-xs text-gray-500">
                  Join developers who are building faster with AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the cookbook free and start shipping real applications today. 
            No credit card required to download.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Free Cookbook
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-gray-900">Bind AI</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 Bind AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
