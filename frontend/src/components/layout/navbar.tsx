"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const baseNavItems = [
  { label: "Colleges", href: "/colleges" },
  { label: "Rankings", href: "/rankings" },
  { label: "Compare", href: "/compare" },
  { label: "Predictor", href: "/predictor" },
  { label: "Articles", href: "/articles" },
  { label: "Q&A", href: "/qa" }
];

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(Boolean(data.session));
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session));
    });

    return () => subscription.unsubscribe();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-brand-700">
          <Image
            src="/img.png"
            alt="CollegeCompass Logo"
            width={1024}
            height={1024}
            className="h-8 w-8"
          />
          CollegeCompass
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
            {baseNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-600">
                {item.label}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="hover:text-brand-600">
                  Dashboard
                </Link>
                <Link href="/logout" className="hover:text-brand-600">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-brand-600">
                  Login
                </Link>
                <Link href="/signup" className="hover:text-brand-600">
                  Signup
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm`}> 
        <nav className="container-app flex flex-col gap-2 py-3 text-sm font-medium text-slate-700">
          {baseNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 hover:bg-slate-50"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="rounded-lg px-3 py-2 hover:bg-slate-50" onClick={closeMenu}>
                Dashboard
              </Link>
              <Link href="/logout" className="rounded-lg px-3 py-2 hover:bg-slate-50" onClick={closeMenu}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-lg px-3 py-2 hover:bg-slate-50" onClick={closeMenu}>
                Login
              </Link>
              <Link href="/signup" className="rounded-lg px-3 py-2 hover:bg-slate-50" onClick={closeMenu}>
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
