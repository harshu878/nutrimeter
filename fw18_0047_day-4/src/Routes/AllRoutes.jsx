import { Route, Routes } from "react-router-dom";
import Faq from "../pages/Faq";
import Help from "../pages/Help";
import Mobile from "../pages/Mobile";
import Prof from "../pages/Prof";
import Support from "../pages/Support";
import Web from "../pages/Web";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/web_version" element={<Web />} />
            <Route path="/mob_version" element={<Mobile />} />
            <Route path="/professional_version" element={<Prof />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/help" element={<Help />} />
        </Routes>
    )
}

export default AllRoutes