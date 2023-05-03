import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";


function AnimatedRoutes(){

    const location = useLocation()

    return(
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
          </Routes>
    )
}
export default AnimatedRoutes