import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LaloFreakCard } from './components/LaloFreakCard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/developers/LaloFreak'>
          <LaloFreakCard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
