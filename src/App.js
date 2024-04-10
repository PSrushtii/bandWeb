import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Reserve from './components/Home/Reserve';
import Card from './components/Home/Card';
import tour from './components/Home/tour'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/res' exact Component={Reserve}/>
          <Route path='/menu' exact Component={Card}/>
          <Route path='/tour' exact Component={tour}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
