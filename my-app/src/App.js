// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Homepage';
import NewPage from './NewPage'; // Import the new page component
import SecondPage from './SecondPage';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Page</Link>
            </li>
            <li>
              <Link to="/second">Second Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} /> {/* Add a new route for the new page */}
          <Route path="/second" element={<SecondPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
