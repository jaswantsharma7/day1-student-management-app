import React, { useState } from "react";

const INITIAL_FORM = { learnerName: "", learnerAge: "", courseName: "" };

const COURSE_OPTIONS = [
  "React JS",
  "Node.js",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Full Stack MERN",
  "Python",
  "Data Structures",
];

export default function StudentForm({ onRegister }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors]     = useState({});

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.learnerName.trim())
      newErrors.learnerName = "Name is required.";
    if (!formData.learnerAge)
      newErrors.learnerAge = "Age is required.";
    else if (Number(formData.learnerAge) < 20)
      newErrors.learnerAge = "Must be at least 20 years old.";
    else if (Number(formData.learnerAge) > 60)
      newErrors.learnerAge = "Enter a valid age (≤ 60).";
    if (!formData.courseName)
      newErrors.courseName = "Select a course.";
    return newErrors;
  };

  const handleEnrollClick = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onRegister({
      learnerName: formData.learnerName.trim(),
      learnerAge:  Number(formData.learnerAge),
      courseName:  formData.courseName,
    });
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <div className="student-form">
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
          className={`form-input ${errors.learnerName ? "input-error" : ""}`}
          type="text"
          name="learnerName"
          placeholder="e.g. John Doe"
          value={formData.learnerName}
          onChange={handleFieldChange}
        />
        {errors.learnerName && <span className="error-msg">{errors.learnerName}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Age</label>
        <input
          className={`form-input ${errors.learnerAge ? "input-error" : ""}`}
          type="number"
          name="learnerAge"
          placeholder="Minimum age: 20"
          value={formData.learnerAge}
          onChange={handleFieldChange}
          min={1}
          max={100}
        />
        {errors.learnerAge && <span className="error-msg">{errors.learnerAge}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Course</label>
        <select
          className={`form-input form-select ${errors.courseName ? "input-error" : ""}`}
          name="courseName"
          value={formData.courseName}
          onChange={handleFieldChange}
        >
          <option value="">— Select a course —</option>
          {COURSE_OPTIONS.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
        {errors.courseName && <span className="error-msg">{errors.courseName}</span>}
      </div>

      <button className="enroll-btn" onClick={handleEnrollClick}>
        Confirm Enrollment
      </button>
    </div>
  );
}
