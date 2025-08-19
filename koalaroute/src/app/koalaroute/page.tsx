"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface DashboardData {
  msg: string;
  userId: string;
}

export default function KoalaRoutePage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetch("http://localhost:5000/api/koalaroute/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userEmail");
          router.push("/login");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [router]);

  return (
    <div className="flex justify-center p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          KoalaRoute Dashboard
        </h2>
        {data ? (
          <p className="text-gray-700 text-center">
            {data.msg}{" "}
            <span className="font-medium">(User ID: {data.userId})</span>
          </p>
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
