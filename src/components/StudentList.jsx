import React from "react";

function LearnerCard({ learner, onRemove }) {
  return (
    <div className="learner-card">
      <div className="card-top">
        <div className="card-avatar">
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
    </div>
  );
}

export default function StudentList({ learners, onRemove }) {
  if (learners.length === 0) {
    return (
      <div className="empty-state">
        <p>No students match your filters.</p>
      </div>
    );
  }

  return (
    <div className="learner-grid">
      {learners.map((learner) => (
        <LearnerCard key={learner.id} learner={learner} onRemove={onRemove} />
      ))}
    </div>
  );
}
