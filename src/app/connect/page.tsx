"use client";
import dynamic from "next/dynamic";

// Dynamically import ConnectComponent and disable SSR
const ConnectComponent = dynamic(
  () => import("../components/connect/page"),
  { ssr: false }
);

export default function ConnectPage() {
  return <ConnectComponent />;
}
