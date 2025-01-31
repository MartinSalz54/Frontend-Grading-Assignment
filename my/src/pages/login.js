import React, { useState } from 'react';

const fakeUserData = {
  username: 'Macbeth',
  password: 'macbeth123',
};

const initialGradesData = [
  { course: 'INTRODUCTION TO COMPUTER SCIENCE', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  { course: 'OFFICE PRODUCTIVITY TOOLS', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  { course: 'MATHEMATICS FOR IT PROFESSIONALS', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  { course: 'INTRODUCTION TO ECONOMICS I', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  { course: 'INTRODUTION TO STATISTICS AND PROBABILITY', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  { course: 'CRITICAL THINKING AND PRACTICAL REASONING ', semester: 'FIRST SEMESTER 2021', academicYear: '2021' },
  // Add more courses of your choice
  { course: 'COMPUTER HARDWARE FUNDAMENTALS AND CIRCUIT', semester: 'SECOND SEMESTER 2021', academicYear: '2021' },
  { course: 'PROGRAMMING FUNDAMENTALS', semester: 'SECOND SEMESTER 2021', academicYear: '2021' },
  { course: 'INTRODUCTION TO ECONOMICS II', semester: 'SECOND SEMESTER 2021', academicYear: '2021' },
  { course: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', semester: 'SECOND SEMESTER 2021', academicYear: '2021' },
  { course: 'ACADEMIC WRITING I', semester: 'SECOND SEMESTER 2021', academicYear: '2021' },
  // Add more courses of your choice 
  { course: 'INTRODUCTION TO AFRICAN STUDIES', semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  { course: 'MOBILE APPLICATION DEVELOPMENT', semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  { course: 'DATA STRUCTURE AND ALGORITHM', semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  { course: 'SYSTEMS OF ADMINISTRATION', semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  { course: 'SOFTWARE ENGINEERING', semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  { course: 'INTERNSHIP' , semester: 'FIRST SEMESTER 2022', academicYear: '2022' },
  // Add More courses of your choice
  { course: 'GRAND RESEARCH CHALLENGES IN COMPUTER SCIENCE', semester: ' SECOND SEMESTER 2022', academicYear: '2022' },
  { course: 'EMERGING DATABASE MODELS', semester: 'SECOND SEMESTER 2022', academicYear: '2022' },
  { course: 'RESEARCH IN BIOINFORMATICS AND COMPUTER BIOLOGY', semester: 'SECOND SEMESTER 2022', academicYear: '2022' },
  { course: 'UBIQUITOS COMPUTING', semester: 'SECOND SEMESTER 2022', academicYear: '2022' },
  { course: 'DEVELOPMENT IN CYBERSECRITY AND NETWORKS', semester: 'SECOND SEMESTER 2022', academicYear: '2022' },
  { course: 'NEW DIRECTION IN ARTIFICIAL INTELLIGENCE' , semester: 'SECOND SEMESTER 2022', academicYear: '2022' },
];

const GradeReport = ({ grades, filter, setFilter }) => {
  const semesters = Array.from(new Set(grades.map((grade) => grade.semester)));
  const academicYears = Array.from(new Set(grades.map((grade) => grade.academicYear)));

  return (
    <div>
      <h2>Grade Report</h2>
      <div>
        <label>
          Filter by Semester or Academic Year:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            {semesters.map((semester, index) => (
              <option key={`semester-${index}`} value={semester}>
                {`Semester ${semester}`}
              </option>
            ))}
            {academicYears.map((year, index) => (
              <option key={`year-${index}`} value={year}>
                {`Academic Year ${year}`}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {`${grade.course} - ${grade.semester}, ${grade.academicYear}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MissingGradeForm = ({ onClose }) => {
  const [missingCourse, setMissingCourse] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = () => {
    // Perform any necessary validation and submission logic
    // For demonstration purposes, just set a confirmation message
    setConfirmationMessage('Missing grade reported successfully!');
    // Clear form fields
    setMissingCourse('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div>
      <h2>Missing Grade Form</h2>
      <form>
        <label>
          Course Name:
          <input type="text" value={missingCourse} onChange={(e) => setMissingCourse(e.target.value)} />
        </label>
        <br />
        <label>
          Instructor Name:
          <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
        </label>
        <br />
        <label>
          Expected Grade:
          <input type="text" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} />
        </label>
        <br />
        <label>
          Explanation:
          <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

const instructors = [
  {
    id: 1,
    name: 'Instructor 1',
    email: 'rascotty@gmail.com',
  },
  {
    id: 2,
    name: 'Instructor 2',
    email: 'danquiver@gmail.com.com',
  },
  // Add more instructors as needed
];

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent('');
  };

  const handleSendEmail = () => {
    // Simulate sending an email with the selected instructor and email content
    if (selectedInstructor && emailContent.trim() !== '') {
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):\n${emailContent}`);
    } else {
      alert('Please select an instructor and provide email content.');
    }
  };

  return (
    <div>
      <h2>Instructor Contact</h2>
      <div>
        <h3>Instructors</h3>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} onClick={() => handleInstructorClick(instructor)}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div>
          <h3>Contact Details</h3>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
        </div>
      )}

      {selectedInstructor && (
        <div>
          <h3>Send Email</h3>
          <textarea
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            placeholder="Enter your email content here..."
          ></textarea>
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grades, setGrades] = useState([]);
  const [showMissingGradeForm, setShowMissingGradeForm] = useState(false);
  const [showGradeReport, setShowGradeReport] = useState(false);
  const [showInstructorContact, setShowInstructorContact] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleLogin = () => {
    if (username === fakeUserData.username && password === fakeUserData.password) {
      setLoggedIn(true);
      setGrades([...initialGradesData]);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setGrades([]);
    setUsername('');
    setPassword('');
    setShowMissingGradeForm(false);
    setShowGradeReport(false);
    setShowInstructorContact(false);
  };

  const handleMissingGradeClick = () => {
    setShowMissingGradeForm(true);
    setShowGradeReport(false);
    setShowInstructorContact(false);
  };

  const handleGradeReportClick = () => {
    setShowGradeReport(true);
    setShowMissingGradeForm(false);
    setShowInstructorContact(false);
  };

  const handleInstructorContactClick = () => {
    setShowInstructorContact(true);
    setShowGradeReport(false);
    setShowMissingGradeForm(false);
  };

  const handleCloseForm = () => {
    setShowMissingGradeForm(false);
    setShowGradeReport(false);
    setShowInstructorContact(false);
  };

  const filteredCourses = grades.filter(
    (course) => showGradeReport && (course.semester === filter || course.academicYear === filter)
  );

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>WELCOME TO YOUR DASHBOARD, {username}!</h2>
          <h3>CURRENT GRADES</h3>
          <ul>
            <li>ACADEMIC WRITING II    <b>   A</b></li>
            <li>PROGRAMMING I      <b>   A</b></li>
            <li>DIGITAL AND LOGIC DESIGN  <b>  A+</b></li>
            <li>MULTIMEDIA AND WEB DESIGN  <b>  A+</b></li>
            <li> COMPUTER ORGANIZATION AND ARCHITECTURE    <b>    D+</b></li>
            <li>E-BUSINESS ARCHITECTURE     <b> C+</b></li>
          </ul>
          <p className="red-text">THERE IS NO MISSING GRADES</p>

          <h3>Filtered Courses</h3>
          <ul>
            {filteredCourses.map((course, index) => (
              <li key={index}>
                {`${course.course} - ${course.semester}, ${course.academicYear}`}
              </li>
            ))}
          </ul>

          <button onClick={handleLogout}>Logout</button>

          <nav>
            <ul>
              <li>
                <a href="#" onClick={handleGradeReportClick}>
                  Grade Report
                </a>
              </li>
              <li>
                <a href="#" onClick={handleMissingGradeClick}>
                  Missing Grade Form
                </a>
              </li>
              <li>
                <a href="#" onClick={handleInstructorContactClick}>
                  Instructor Contact
                </a>
              </li>
            </ul>
          </nav>
          <p>Choose instructor you want to Contact</p>

          {showGradeReport && <GradeReport grades={grades} filter={filter} setFilter={setFilter} />}
          {showMissingGradeForm && <MissingGradeForm onClose={handleCloseForm} />}
          {showInstructorContact && <InstructorContact />}
        </div>
      )}
    </div>
  );
};

export default App;

