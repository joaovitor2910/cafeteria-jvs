import { Route, Routes } from "react-router-dom";
import Sobre from "../components/Sobre";
import Home from "../Containers/Home";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/endereco" element={<Home />}/>
        </Routes>
    )
}

export default Router