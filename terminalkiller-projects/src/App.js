import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
