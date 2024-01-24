
import {Routes, Route} from 'react-router-dom';
import Info from './info';
import Main from './main';
import Programming from './programming';
import ProgrammingTest from './programming/test'
import ProgrammingPerLanguage from './programming/perLanguage'
import CodingTest from './components/codingTest';
import Resume from './resume';
import Component from './components'

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
        <Route path="resume">
          <Route path="" element={<Resume />}/>        
          <Route path="*" default element={<div> 준비중입니다.. </div>}/>
        </Route>
        <Route path="test">
          <Route path="programming" element={<ProgrammingTest />}/>
          <Route path="cote" element={<CodingTest />}/>
          <Route path="components" element= {<Component />}/>
          <Route path="*" default element={<div> 준비중입니다.. </div>}/>
        </Route>
        <Route path="practice">
          <Route path=""  element={<Programming />} />
          <Route path=":i" element={<ProgrammingPerLanguage />}/>
          <Route path="*" default element={<div>준비중입니다..</div>} />
        </Route>
        <Route path="*" default element={<div> 준비중입니다.. </div>}/>
      </Routes>

  );
}

export default Pages;
