"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import Footer from "./components/Footer"; // <-- import your Footer component

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(loggedIn);
    setUserEmail(email);

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserEmail(localStorage.getItem("userEmail"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail(null);
    router.push("/login");
  };

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 p-4 flex flex-wrap justify-between items-center text-white gap-2 md:gap-6">
          <h1 className="text-xl font-bold">KoalaRoute AI</h1>
          <nav className="flex flex-wrap items-center gap-2 md:gap-6">
            <Link href="/" className="hover:underline no-underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline no-underline">
              About
            </Link>

            {!isLoggedIn ? (
              <>
                <Link href="/login" className="hover:underline no-underline">
                  Login
                </Link>
                <Link href="/signup" className="hover:underline no-underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {userEmail && (
                  <span className="bg-white text-blue-600 px-2 py-1 rounded font-medium truncate max-w-[150px]">
                    {userEmail}
                  </span>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </header>
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
        {/* Footer */}
        <Footer /> {/* <-- Render Footer here */}
      </body>
    </html>
  );
}
