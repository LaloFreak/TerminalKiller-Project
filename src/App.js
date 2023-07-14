import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { LandingPage } from './pages/LandingPage';
import { Developers } from './components/Developers';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/developers'>
          <Developers/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
