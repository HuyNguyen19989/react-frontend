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
import Loginpage from './pages/Loginpage';
import AuthGuard from './pages/Authguard';



function App() {
  return (
    
    <div className='p-0 div-main' >
           <BrowserRouter>
           <Switch>              
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/detail">
                <AuthGuard exact path="/detail">
                  <Detailpage/>
                </AuthGuard>
              </Route>
              <Route exact path="/login" component={Loginpage} />                         
            </Switch>
            </BrowserRouter>
    </div>
    
  )
}

export default App;
