import React from "react";

// Extra component added for structure variation. Displays the stats in a horizontal bar with icons and labels.

export default function StatsBar({ total, eligible, clickCounter, isLoading }) {
  
  // Array of stat objects (key-value pairs)
  const stats = [
    { label: "Total Enrolled", value: isLoading ? "…" : total, icon: "◈" },
    { label: "Eligible (Age ≥ 20)", value: isLoading ? "…" : eligible, icon: "✦" },
    { label: "Ineligible", value: isLoading ? "…" : total - eligible, icon: "◌" },
    { label: "Enrollments Added", value: clickCounter, icon: "❖" },
  ];

  return (
    <div className="stats-bar">
      {/* map() over stats array */}
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
