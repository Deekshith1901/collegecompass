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
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
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
    </header>
  );
};
