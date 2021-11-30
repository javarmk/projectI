import System from './home/system/system';

import './App.css'

import View from './home/view';



import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <System>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<View/>}/>
          </Routes>
        </Router>
      </div>
    </System> 
  );
}

export default App;
