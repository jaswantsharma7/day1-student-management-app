# Day 1 Assignment – Student Management System
*CodeCraze Academy - MERN Stack & React JS Foundations*

## Concepts Covered

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
 13. Handle async response
 14. Capture form data 

## Bonus Features (All Implemented)
- Delete (remove) functionality
- Search by name or course
- Extra component: `StatsBar`

## Live Demo / Screenshots 
<img width="1659" height="874" alt="image" src="https://github.com/user-attachments/assets/18e578f8-1b0d-4cc4-b223-f83671dce8a9" />

Live : https://day1-student-management-app-six.vercel.app/

## 📁 Project Structure
```
day1-student-management-app/
├── public
    ├── index.html
├── src
    ├── components
            ├── StudentForm.jsx   ← Controlled form, validation, OOP class
            ├── StudentList.jsx   ← map() rendering, learner cards
            └── StatsBar.jsx      ← Extra component, stats display
    ├── App.jsx
    ├── App.jsx
    └── index.js                  ← Entry point
├── package.json
├── package-lock.json
└── README.md          

```
### Steps

```bash
# 1. Clone the repository
git clone https://github.com/jaswantsharma7/day1-student-management-app.git
cd day1-student-management-app

# 2. Install dependencies
npm install

# 3. Run the React app
npm start
