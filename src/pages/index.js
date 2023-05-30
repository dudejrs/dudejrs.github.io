
import {Routes, Route} from 'react-router-dom';
import Info from './info';
import Main from './main';

function Pages() {
  return (
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="" element={<Main />}/>
        <Route path="info" element={<Info />}/>
        <Route path="projects" >
          <Route path="cenema" element={<div> 준비중입니다.. </div>}/>
          <Route path="*" default element={<div> 준비중입니다.. </div>}/>
          <Route path="" element={<div> 준비중입니다.. </div>}/>
        </Route>
        <Route path="portfolio">
          <Route path="" element={<div> 준비중입니다... </div>}/>        
          <Route path="*" default element={<div> 준비중입니다.. </div>}/>
        </Route>
        <Route path="test">
          <Route path="" element={<div> 준비중입니다... </div>}/>        
          <Route path="*" default element={<div> 준비중입니다.. </div>}/>
        </Route>
        <Route path="practice">
          <Route path=""  element={<div>준비중입니다... </div>} />
          <Route path="*" default element={<div>준비중입니다..</div>} />
        </Route>
        <Route path="*" default element={<div> 준비중입니다.. </div>}/>
      </Routes>

  );
}

export default Pages;
