import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Market from './components/Market';
import Basket from './components/Basket';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path="/Market">
          <Market />
        </Route>  
        <Route path="/basket">
          <Basket />
        </Route>     
      </Switch>      
    </Router>
  );
}

export default App;
