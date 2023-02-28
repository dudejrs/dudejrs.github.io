import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>header</div>
      <div>
        <h1>content</h1>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="info" element={<div>info</div>}/>
          <Route path="pages" element={<div>pages</div>}/>
        </Routes>
      </div>
      <div>footer</div>
    </div>
  );
}

export default App;
