import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Dashboard from "containers/pages/Dashboard";

import Trabajadores from "containers/pages/Trabajadores";
import Sidebar from "components/navigation/Siderbar";
import Home from "containers/pages/Home";
import Sign from "containers/pages/Sign";
import Signup from "containers/pages/Signup";


function AnimatedRoutes(){

    const location = useLocation()

    return(


          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Sign />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/trabajadores" element={<Trabajadores />} />

          </Routes>



    )
}
export default AnimatedRoutes