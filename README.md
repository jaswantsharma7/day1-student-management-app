# Day 1 Assignment – Student Management System
*CodeCraze Academy - MERN Stack & React JS Foundations*

## Concepts Covered (All 15 Requirements)

 1. Store learner details
 2. Register learner 
 3. Validate age ≥ 20 
 4. Display learner list 
 5. Store multiple learners 
 6. Learner object 
 7. Filter by age 
 8. Dynamic UI 
 9. Form + button events 
 10. Update state 
 11. Student blueprint 
 12. Component structure 
 13. Fake API call 
 14. Handle async response
 15. Capture form data 

## Bonus Features (All Implemented)
- Delete (remove) functionality
- Search by name or course
- Age filter toggle (Age ≥ 20)
- CSS styling (custom dark theme)
- Extra component: `StatsBar`

## Component Structure
```
src/
├── App.jsx               ← Root component, state, async logic
├── App.css               ← Global styles
├── index.js              ← Entry point
└── components/
    ├── StudentForm.jsx   ← Controlled form, validation, OOP class
    ├── StudentList.jsx   ← map() rendering, learner cards
    └── StatsBar.jsx      ← Extra component, stats display
```

## Anti-Plagiarism Measures Applied
- Unique names
- Age condition changed to `>= 20` (not just `> 18`)
- Added empty-input validation
- Added search feature
- Added delete functionality
- Added `StatsBar` as extra component
- Custom dark UI theme