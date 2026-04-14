import React from "react";

// Course color mapping using object (key-value pairs)
const courseColorMap = {
  "React JS": "#61dafb",
  "Node.js": "#8cc84b",
  "MongoDB": "#4db33d",
  "Express.js": "#f5a623",
  "TypeScript": "#3178c6",
  "Full Stack MERN": "#e535ab",
  "Python": "#ffd43b",
  "Data Structures": "#ff6b6b",
};

// Single learner card
function LearnerCard({ learner, onRemove }) {
  const accentColor = courseColorMap[learner.courseName] || "#a78bfa";
  const isEligible = learner.learnerAge >= 20; // conditional

  return (
    <div className="learner-card" style={{ "--accent": accentColor }}>
      <div className="card-top">
        <div className="card-avatar" style={{ background: accentColor }}>
          {learner.learnerName.charAt(0).toUpperCase()}
        </div>
        <div className="card-info">
          <p className="card-name">{learner.learnerName}</p>
          <p className="card-course">{learner.courseName}</p>
        </div>
        <button
          className="remove-btn"
          onClick={() => onRemove(learner.id)}
          title="Remove learner"
        >
          ✕
        </button>
      </div>
      <div className="card-bottom">
        <span className="card-age">Age: {learner.learnerAge}</span>
        {/* Conditional rendering */}
        <span className={`eligibility-badge ${isEligible ? "badge-ok" : "badge-no"}`}>
          {isEligible ? "✓ Eligible" : "✗ Under Age"}
        </span>
      </div>
    </div>
  );
}

// StudentList component – uses map() to display all learners
export default function StudentList({ learners, onRemove }) {
  if (learners.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">◌</span>
        <p>No learners match your filters.</p>
      </div>
    );
  }

  return (
    <div className="learner-grid">
      {/* map() – display student list dynamically */}
      {learners.map((learner) => (
        <LearnerCard key={learner.id} learner={learner} onRemove={onRemove} />
      ))}
    </div>
  );
}
