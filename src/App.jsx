import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StatsBar from "./components/StatsBar";
import "./App.css";

// Async simulation – fake API call using Promise + async/await
const simulateFetchLearners = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, learnerName: "Jaswant Sharma", learnerAge: 22, courseName: "React JS" },
        { id: 2, learnerName: "Piyush Gupta", learnerAge: 17, courseName: "Node.js" },
        { id: 3, learnerName: "Mayank Tomar", learnerAge: 25, courseName: "MongoDB" },
      ]);
    }, 1200);
  });
};

export default function App() {
  const [enrolledLearners, setEnrolledLearners] = useState([]);
  const [showAdultsOnly, setShowAdultsOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickCounter, setClickCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [nextId, setNextId] = useState(4);

  // Async/Await – load initial data on mount
  useEffect(() => {
    const loadInitialLearners = async () => {
      try {
        const fetchedLearners = await simulateFetchLearners();
        setEnrolledLearners(fetchedLearners);
      } catch (err) {
        console.error("Failed to load learners:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadInitialLearners();
  }, []);

  // Arrow function – register a new learner (form submission handler)
  const registerLearner = (formData) => {
    // Validation: age >= 20 (modified from assignment default of >18)
    if (!formData.learnerName.trim() || !formData.courseName.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.learnerAge < 20) {
      alert("Learner must be at least 20 years old to enroll.");
      return;
    }

    const newLearner = {
      // ES6 spread operator to build new learner object
      ...formData,
      id: nextId,
    };

    setEnrolledLearners((prev) => [...prev, newLearner]); // spread to update array
    setNextId((prev) => prev + 1);
    setClickCounter((prev) => prev + 1);
  };

  // Arrow function – remove a learner
  const removeLearner = (learnerId) => {
    setEnrolledLearners((prev) => prev.filter((l) => l.id !== learnerId));
  };

  // filter() – adults only (age >= 20)
  const visibleLearners = enrolledLearners
    .filter((l) => (showAdultsOnly ? l.learnerAge >= 20 : true))
    .filter((l) =>
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
            <span className="brand-icon">◈</span>
            <span className="brand-name">CodeCraze</span>
            <span className="brand-tag">Academy</span>
          </div>
          <h1 className="app-title">Learner Management Portal</h1>
          <p className="app-subtitle">Enrollment Dashboard · Day 1 Assignment</p>
        </div>
      </header>

      <main className="app-main">
        <StatsBar
          total={enrolledLearners.length}
          eligible={enrolledLearners.filter((l) => l.learnerAge >= 20).length}
          clickCounter={clickCounter}
          isLoading={isLoading}
        />

        <div className="workspace">
          <section className="panel form-panel">
            <h2 className="panel-title">
              <span className="panel-icon">✦</span> Enroll New Learner
            </h2>
            <StudentForm onRegister={registerLearner} />
          </section>

          <section className="panel list-panel">
            <div className="list-header">
              <h2 className="panel-title">
                <span className="panel-icon">❖</span> Enrolled Learners
              </h2>
              <div className="list-controls">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by name or course…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    checked={showAdultsOnly}
                    onChange={(e) => setShowAdultsOnly(e.target.checked)}
                  />
                  <span className="toggle-text">Age ≥ 20 only</span>
                </label>
              </div>
            </div>

            {isLoading ? (
              <div className="loader-wrap">
                <div className="loader" />
                <p className="loader-text">Fetching learners via async API…</p>
              </div>
            ) : (
              <StudentList learners={visibleLearners} onRemove={removeLearner} />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
