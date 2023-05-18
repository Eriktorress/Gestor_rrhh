import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Dashboard from "containers/pages/Dashboard";
import Sidebar from "components/navigation/Siderbar";
import Trabajadores from "containers/pages/Trabajadores";
import Info_trabajador from "containers/pages/Info_trabajador";
import NewUser from "containers/pages/NewUser";



function AnimatedRoutes(){

    const location = useLocation()

    return(

      <Sidebar>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/trabajadores" element={<Trabajadores />} />
            <Route path="/Info_trabajador" element={<Info_trabajador/>}/>
            <Route path="/NewUser" element={<NewUser />}/>
          </Routes>

      </Sidebar>



    )
}
export default AnimatedRoutes