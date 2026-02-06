'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Auto-redirect if authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isLoading, isAuthenticated, router]);

  // Show loading while checking auth
  if (isLoading) {
    return null;
  }

  // Don't render if authenticated (will redirect)
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800">
      {/* Navbar Placeholder (Optional visual anchor) */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-slate-900">Todo.</div>
        <div className="hidden md:block text-sm font-medium text-slate-500">Simple by design.</div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* Hero Section */}
        <div className="w-full py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="text-left space-y-8">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide uppercase">
              New Version 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Organize your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                inner chaos.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Stop drowning in sticky notes. A task manager designed to be invisible until you need it.
            </p>
            
            <div className="flex flex-row gap-4 pt-2">
              <Link href="/signup">
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                  Start for free
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="secondary" className="rounded-full px-8 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Abstract Visual */}
          <div className="relative hidden md:flex justify-center items-center">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* Minimal Card Graphic */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
               <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-md"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg opacity-70">
                    <div className="w-5 h-5 border-2 border-blue-500 bg-blue-500 rounded-md"></div>
                    <div className="h-2 w-24 bg-slate-200 rounded line-through text-slate-300"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-md"></div>
                    <div className="h-2 w-40 bg-slate-200 rounded"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full py-20 border-t border-slate-100">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Capture</h3>
              <p className="text-slate-500 leading-relaxed">
                Don't let ideas escape. Capture tasks in milliseconds with our lightning-fast interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
              <p className="text-slate-500 leading-relaxed">
                Your data is yours alone. Encrypted at rest and in transit, ensuring total privacy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-lg bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sync Everywhere</h3>
              <p className="text-slate-500 leading-relaxed">
                Start on your phone, finish on your laptop. Seamless synchronization across all devices.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
