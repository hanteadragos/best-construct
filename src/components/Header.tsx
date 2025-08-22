"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="laptop:px-20 container mx-auto px-4 py-3">
        <div
          className={`backdrop-blur-xs laptop:justify-around flex items-center justify-between rounded-xl bg-white px-4 py-2 transition-colors duration-300 ease-in-out ${isScrolled ? "border-1 border-gray-200/80" : "border border-transparent"} `}
        >
          <Link
            className="from-vertidigris-400 to-vertidigris-600 bg-gradient-to-b bg-clip-text text-lg font-medium text-transparent"
            href="/"
          >
            Best Construct.
          </Link>

          <div className="laptop:flex hidden items-center justify-center gap-4">
            <Link href="/">Acasa</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#reviews">Recenzii</Link>
            <Link href="#pricing">Planuri</Link>
          </div>

          <Link
            className="from-vertidigris-400 to-vertidigris-600 laptop:block hidden rounded-xl bg-gradient-to-b px-3 py-2 text-white"
            href="#contact"
          >
            Contactează-ne
          </Link>

          <div className="laptop:hidden">
            <button className="flex cursor-pointer flex-col gap-1">
              <span className="from-vertidigris-400 to-vertidigris-900 block h-0.5 w-5 rounded-lg bg-gradient-to-t"></span>
              <span className="from-vertidigris-400 to-vertidigris-900 block h-0.5 w-5 rounded-lg bg-gradient-to-t"></span>
              <span className="from-vertidigris-400 to-vertidigris-900 block h-0.5 w-5 rounded-lg bg-gradient-to-t"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
