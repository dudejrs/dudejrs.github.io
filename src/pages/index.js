
import {Routes, Route} from 'react-router-dom';
import Info from './info'

function Pages() {
  return (
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="info" element={<Info />}/>
        <Route path="projects" element={<div>projects</div>}/>
        <Route path="/" default element={<div> 준비중입니다.. </div>}/>
      </Routes>
  );
}

export default Pages;
