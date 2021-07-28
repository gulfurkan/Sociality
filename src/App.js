import './App.css';
import Sidebar from './components/Sidebar';
import {Title} from './components/Styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as M from './components/imports'

function App() {
  return (
    <Router>
      
     <Title to='/'><p className='title'><strong>sociality</strong>.io</p></Title>
      <Sidebar /> {/**/}
      <Switch>
        <Route path='/' exact component={M.Home} />
        <Route path='/notifications/current' component={M.Current} />
        <Route path='/notifications/passed' component={M.Passed} />
        <Route path='/summary/summary1' component={M.Summary1} />
        <Route path='/summary/summary2' component={M.Summary2} />
        <Route path='/summary/summary3' component={M.Summary3} />
        <Route path='/publish/compose' component={M.PublishC} />
        <Route path='/publish/feed' component={M.PublishF} />
        <Route path='/engage/engage1' component={M.Engage1} />
        <Route path='/engage/engage2' component={M.Engage2} />
        <Route path='/listen/listen1' component={M.Listen1} />
        <Route path='/listen/listen2' component={M.Listen2} />
        <Route path='/report/report1' component={M.Report1} />
        <Route path='/report/report2' component={M.Report2} />
      </Switch>
    </Router>
  );
}

export default App;
