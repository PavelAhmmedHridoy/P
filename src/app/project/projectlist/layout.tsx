"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function ProjectListLayout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation - sticky */}
      <header className="sticky top-0 w-full p-4 sm:p-6 md:p-8 flex justify-start items-center bg-[#1a1f3a]/90 backdrop-blur-md border-b border-gray-700 shadow-sm z-50">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all"
        >
          ← Back
        </button>
      </header>

      {/* Main Content - scrollable */}
      <main className="flex-1 w-full overflow-y-auto flex flex-col items-center justify-start p-4 sm:p-6 md:p-10 gap-6 sm:gap-8">
        {children}
      </main>
    </div>
  );
}