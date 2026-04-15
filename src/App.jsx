import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StatsBar from "./components/StatsBar";
import "./App.css";

export default function App() {
  const [enrolledLearners, setEnrolledLearners] = useState([]);
  const [searchQuery, setSearchQuery]           = useState("");
  const [nextId, setNextId]                     = useState(1);

  // Register a new learner — validation is already handled inside StudentForm
  const registerLearner = (formData) => {
    setEnrolledLearners((prev) => [...prev, { ...formData, id: nextId }]);
    setNextId((prev) => prev + 1);
  };

  // Remove a learner by id
  const removeLearner = (learnerId) =>
    setEnrolledLearners((prev) => prev.filter((l) => l.id !== learnerId));

  // Filter by search query (name or course)
  const visibleLearners = enrolledLearners.filter((l) =>
    searchQuery
      ? l.learnerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.courseName.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-name">CodeCraze</span>
            <span className="brand-tag">Academy</span>
          </div>
          <h1 className="app-title">Student Management App</h1>
          <p className="app-subtitle">Enrollment Dashboard</p>
        </div>
      </header>

      <main className="app-main">
        <StatsBar total={enrolledLearners.length} />

        <div className="workspace">
          <section className="panel">
            <h2 className="panel-title">Enroll New Student</h2>
            <StudentForm onRegister={registerLearner} />
          </section>

          <section className="panel">
            <div className="list-header">
              <h2 className="panel-title">Enrolled Students</h2>
              <div className="list-controls">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by name or course…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <StudentList learners={visibleLearners} onRemove={removeLearner} />
          </section>
        </div>
      </main>
    </div>
  );
}
