// src/components/Footer.tsx
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Meedo. All rights reserved.</p>
      </div>
    </footer>
  );
}
