import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './navbar'
import Home from './componet/pages/home'
import Signup from './componet/pages/signup'
import Login from './componet/pages/login'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Route path = '/' exact render ={ () =>{ <Home/>}}/>
      <Route path = '/signup' exact render ={ () =>{ <Signup/>}}/>
      <Route path = '/login' exact render ={ () =>{ <Login/>}}/>

    </div>
  );
}

export default App;
