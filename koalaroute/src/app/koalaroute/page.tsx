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
          router.push("/login");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [router]);

  return (
    <div>
      <h2 className="text-2xl font-bold">KoalaRoute Dashboard</h2>
      {data ? (
        <p className="mt-2">
          {data.msg} (User ID: {data.userId})
        </p>
      ) : (
        <p className="mt-2">Loading...</p>
      )}
    </div>
  );
}
