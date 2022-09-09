import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Quiz from "./Pages/Quiz";
import Welcome from "./Pages/Welcome";
import Result from "./Pages/Result";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
Quiz App Todos:
- Complete quiz page
- Add result page
- Refine the UI and add colors

# Complete the UI first before moving on to integration
*/
