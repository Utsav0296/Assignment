import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from './About';
import Home from './home';
import Loops from './loops';
import Component from './component'
import State from './state';
import Lifecycle from './lifecycle';
import Api from './api';
import Fetchapi from './fetchapi'
import Buttonclick from './buttonclick'
import Usestate from './function component/usestate'
import Usereducer from './function component/usereducer'
import Useeffect from './function component/useeffect'
import Useref from './function component/useref'
import Usecontext from './function component/usecontext'
import Funapi from './function component/funApi'
function Header(props) {
    const Numbers = {'/home':'Home','/about':'About','/loops':'Loops','/component':'Component','/state':'State' ,'/lifecycle':'Lifecycle',
                      '/api':'Api','/fetchapi':'Fetchapi','/buttonclick':'Buttonclick','/usestate':'Usestate','/usereducer':'Usereducer','/useeffect':'Useeffect',
                       '/useref':'Useref','/usecontext':'Usecontext','/funapi':'Funapi'}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return <li className="nav-item" key={i}>
          <Link className="nav-link" aria-current="page" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
      <>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav"> 
            {returndata}
             </ul>
          </div>
         </div>
        </nav>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/loops' element={<Loops/>}/>
            <Route path='/component' element={<Component/>}/>
            <Route path='/state' element={<State/>}/>
            <Route path='/lifecycle' element={<Lifecycle/>}/>
            <Route path='/api' element={<Api/>}/>
            <Route path='/fetchapi' element={<Fetchapi/>}/>
            <Route path='/buttonclick' element={<Buttonclick/>}/>
            <Route path='/usestate' element={<Usestate/>}/>
            <Route path='/usereducer' element={<Usereducer/>}/>
            <Route path='/useeffect' element={<Useeffect/>}/>
            <Route path='/useref' element={<Useref/>}/>
            <Route path='/usecontext' element={<Usecontext/>}/>
            <Route path='/funapi' element={<Funapi/>}/>
        </Routes>
        </Router>
      </>
    );
}

export default Header;