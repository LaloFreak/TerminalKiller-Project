import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
