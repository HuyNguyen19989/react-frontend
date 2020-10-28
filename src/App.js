import React from 'react';
import './App.css';
import './App.scss';
import LandingPage from './pages/LandingPage'
import Secdetail from './components/sec_detail';
import Detailpage from './pages/Detailpage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    
    <div className='p-0 div-main' >
           <BrowserRouter>
           <Switch>              
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/detail" component={Detailpage} />             
            </Switch>
            </BrowserRouter>
    </div>
    
  )
}

export default App;
