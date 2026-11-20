// components/PlayerCard.tsx
import React from "react";

// 1. กำหนดโครงสร้างข้อมูล (Interface) ที่จะรับเข้ามาเป็น Props
export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  goals: number;
  imageUrl: string;
}

interface PlayerCardProps {
  player: Player;
}

// 2. สร้าง Component โดยรับค่า { player } ผ่าน Props
export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "12px",
        border: "1px solid #333",
        alignItems: "center",
      }}
    >
      {/* รูปภาพนักเตะ */}
      <img
        src={player.imageUrl}
        alt={player.name}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* รายละเอียดและสถิติ */}
      <div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "4px" }}>
          {player.name}
        </h2>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "8px" }}>
          สโมสร: {player.team} | ตำแหน่ง: {player.position}
        </p>
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            backgroundColor: "#2563eb",
            color: "#fff",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: "bold",
          }}
        >
          ⚽ ยิงไปแล้ว {player.goals} ประตู
        </span>
      </div>
    </div>
  );
}