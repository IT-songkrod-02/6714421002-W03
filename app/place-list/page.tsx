// app/place-list/page.tsx
import React from "react";
import Link from "next/link";
import PlayerCard, { Player } from "../../components/PlayerCard";

// ชุดข้อมูลใหม่ที่ออกแบบโครงสร้างเอง
const playersData: Player[] = [
  {
    id: 1,
    name: "คริสเตียโน โรนัลโด",
    team: "Al-Nassr",
    position: "กองหน้า (Forward)",
    goals: 900,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6EAflyGzumaS1seA1jl-5FxDiHrk0NAB9Ym7RmD9Mw&s=10",
  },
  {
    id: 2,
    name: "ลิโอเนล เมสซิ",
    team: "Inter Miami",
    position: "กองหน้า / ปีกขวา",
    goals: 850,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFI30J7tKOJnwcnSuJ81IFf8ICEJxmiJMXLsIqSRLQw&s=10",
  },
  {
    id: 3,
    name: "เนย์มาร์ จูเนียร์",
    team: "Santos FC",
    position: "ปีกซ้าย / กองหน้าตัวต่ำ",
    goals: 440,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQito4XquCpSroHFAataHj_H2jkRcStrPdpP9jEohMVsw&s=10",
  },
];

export default function PlayersPage() {
  return (
    <div>
      {/* แถบเมนูด้านบน */}
      <nav className="flex flex-row gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 border-b">
        <Link href="/" className="hover:underline font-medium">
          Home
        </Link>
        <Link href="/place-list" className="hover:underline font-medium">
          Players
        </Link>
      </nav>

      {/* เนื้อหาหลัก */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "24px", fontSize: "1.5rem", fontWeight: "bold" }}>
          ทำเนียบดาวยิงระดับโลก
        </h1>

        {/* 3. วนลูปส่งข้อมูลทีละคนเข้าไปใน Component ผ่าน Props ชื่อ player */}
        {playersData.map((item) => (
          <PlayerCard key={item.id} player={item} />
        ))}
      </main>
    </div>
  );
}