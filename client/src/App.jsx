import React from 'react'

const App = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>LMS Portal</h1>
        <nav>
          <a href="#">Home</a> | 
          <a href="#">Courses</a> | 
          <a href="#">Dashboard</a> | 
          <a href="#">SignIn</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section>
        <h2>Learn Anytime, Anywhere</h2>
        <p>
          Improve your skills with high-quality courses and expert instructors.
        </p>
        <button>Explore Courses</button>
      </section>

      {/* Courses Section */}
      <section>
        <h2>Popular Courses</h2>

        <div>
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React</p>
          <p>Problem Solving </p>
          <p>Ai/ML</p>
          <p>Data Analyst </p>
        </div>

        <div>
          <h3>Programming Basics</h3>
          <p>C, Java, Python fundamentals</p>
        </div>

        <div>
          <h3>Data Science</h3>
          <p>Statistics, Python, Machine Learning</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 LMS System. All rights reserved. Samin.Dev</p>
      </footer>
    </div>
  )
}

export default App
