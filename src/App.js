import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Info from './pages/info'

function App() {
  return (
    <div className="App">
      <div id="header"></div>
      <div id="content">
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="info" element={<Info />}/>
          <Route path="pages" element={<div>pages</div>}/>
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
