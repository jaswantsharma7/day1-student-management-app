import React from "react";

export default function StatsBar({ total }) {
  const stats = [
    { label: "Total Enrolled", value: total, icon: "" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div className="stat-tile" key={stat.label}>
          <span className="stat-icon">{stat.icon}</span>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
