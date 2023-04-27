
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Info from './pages/info'
import Pages from './pages';
import NavigaionBar from './pages/components/navigationBar';


const navigationList = [
  {
    name : "Info",
    link : "/info"
  },
  {
    name : "Projects",
    link : "/projects",
    sublist : [
        {
          name : "Cenema",
          link : "/projects/cenema"
        },
        {
          name : "WearOS",
          link : "/projects/WearOS"
        }
      ]
  }

];

function App() {
  return (
    <div className="App">
      <div id="header">
        <NavigaionBar title={"dudejrs"} navigationList={navigationList} />
      </div>
      <div id="content">
        <Pages />
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
