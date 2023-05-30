import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Dashboard from "containers/pages/Dashboard";

import Home from "containers/pages/Home";
import Sign from "containers/pages/Sign";
import Signup from "containers/pages/Signup";

import AddPersonalForm from "containers/pages/Personal/AddPersonalForm";
import PersonsList from "containers/pages/Personal/PersonsList";
import Personals from "containers/pages/Personal/Personals";

function AnimatedRoutes(){

    const location = useLocation()

    return(


          <Routes>

            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Sign />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route path="/home" element={<Home/>} />

  
            <Route exact path="/Personals" element={<Personals/>} />
            <Route exact path="/Form_persons" element={<AddPersonalForm/>} />
            <Route path="/listado_persons" element={<PersonsList/>} />


          </Routes>



    )
}
export default AnimatedRoutes