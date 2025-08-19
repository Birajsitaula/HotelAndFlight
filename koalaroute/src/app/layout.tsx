"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
          <h1 className="text-xl font-bold">KoalaRoute AI</h1>
          <nav className="flex items-center gap-6">
            <Link href="/" className="no-underline hover:underline">
              Home
            </Link>
            <Link href="/about" className="no-underline hover:underline">
              About
            </Link>

            {!isLoggedIn ? (
              <>
                <Link href="/login" className="no-underline hover:underline">
                  Login
                </Link>
                <Link href="/signup" className="no-underline hover:underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </nav>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
