// app/page.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 border-b">
        <Link href="/" className="hover:underline font-medium">
          Home
        </Link>
        <Link href="/place-list" className="hover:underline font-medium">
          Players
        </Link>
      </nav>

      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
          6714421002
        </h1>

        <p style={{ textAlign: "center", marginBottom: "32px", opacity: 0.8 }}>
          ทรงกรด อบลา
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Link
            href="/place-list"
            style={{
              display: "block",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #333",
              textDecoration: "none",
            }}
          >
            <h2 style={{ marginBottom: "8px", fontSize: "1.25rem", fontWeight: "bold" }}>
               นักฟุตบอล
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
}