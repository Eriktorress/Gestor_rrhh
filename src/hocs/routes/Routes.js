import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Dashboard from "containers/pages/Dashboard";

import Trabajadores from "containers/pages/Trabajadores";
import Sidebar from "components/navigation/Siderbar";



function AnimatedRoutes(){

    const location = useLocation()

    return(


          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" component={Sidebar} element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/trabajadores" element={<Trabajadores />} />

          </Routes>



    )
}
export default AnimatedRoutes