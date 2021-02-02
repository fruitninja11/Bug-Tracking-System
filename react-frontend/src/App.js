import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'
import Logincomponent from './components/login/Logincomponent';
import WelcomeManager from './components/Manager/WelcomeManager';
import ListEmployee from './components/Manager/ListEmployee';
import ProjectsComponent from './components/Manager/Projects/ProjectsComponent';
import AddProject from './components/Manager/Projects/AddProject';
import AssignDeveloper from './components/Manager/Projects/AssignDeveloper';
import AssignTester from './components/Manager/Projects/AssignTester';
import EmployeeProjectList from './components/Manager/Projects/EmployeeProjectList';
import BugsList from './components/Manager/Bugs/BugsList';
import Addbugtoproject from './components/Manager/Bugs/Addbugtoproject';
import UpdateBug from './components/Manager/Bugs/UpdateBug';
import WelcomeDeveloper from './components/Developer/WelcomeDeveloper';
import ProjectBugs from './components/Developer/ProjectBugs';
import AddDevBug from './components/Developer/AddDevBug';
import DevUpdate from './components/Developer/DevUpdate';


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Logincomponent} />
    <Route path="/manager" component={WelcomeManager} />
    <Route path="/employeelist" component={ListEmployee}/>
    <Route path="/projects" component={ProjectsComponent}/>
    <Route path="/addproject" component={AddProject}/>
    <Route path="/assigndeveloper" component={AssignDeveloper}/> 
    <Route path="/assigntester" component={AssignTester}/>
    <Route path="/employeeproject" component={EmployeeProjectList}/>
    <Route path="/bugslist" component={BugsList}/>
    <Route path="/addbug" component={Addbugtoproject}/>
    <Route path="/updatebug/:bugid" component={UpdateBug}/>
    <Route path="/developerlogin/:empid" component={WelcomeDeveloper}/>
    <Route path="/projectbugs/:projectid" component={ProjectBugs}/>
    <Route path="/adddevbug/:projectid" component={AddDevBug} />
    <Route path="/updatedevbug/:bugid" component={DevUpdate}/>
    </BrowserRouter>
  );
}

export default App;
