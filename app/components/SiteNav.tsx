"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteNav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.dataset.theme = "dark";
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    setDark(nextDark);

    document.documentElement.dataset.theme = nextDark
      ? "dark"
      : "light";

    localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo">
        AYLAR FAKHERIAN
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/design">Design</Link>
        <Link href="/research">Research</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {dark ? "☼" : "◐"}
      </button>
    </nav>
  );
}