import Begin from './Begin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Begin />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
