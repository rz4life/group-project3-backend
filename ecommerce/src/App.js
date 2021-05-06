import './App.css';
import {Redirect, Route} from 'react-router-dom'
import Navbar from './navbar'
import Home from './componet/pages/home'
import Signup from './componet/pages/signup'
import Login from './componet/pages/login'
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState (null)

  const getUserInfo = async () =>{

    const userId = localStorage.getItem('userId')
    try {
       setUser('1')
    }  catch(error){
      console.log(error)
    }
  }
  useEffect (() =>{ getUserInfo()}, [])

  return (
    <div className="App">
      <Navbar/>


      <Route path = '/' exact render ={ () =>( <Home/>)}/>


      <Route path = '/signup'  render ={ () =>{ 
        if (user){
          return <Signup/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>
      <Route path = '/login' render ={ () =>{ 
        
        if (user){
          return <Login/>
        }else{
          return<Redirect to = '/login'/>
        }
      }}/>
    </div>
  )
}

export default App;
