import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pay from './components/Pay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pay />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
