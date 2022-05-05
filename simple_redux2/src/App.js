import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Navbar from './components/navbar/Navbar';
import Update from './components/update/Update';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
