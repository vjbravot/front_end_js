import { Route, Router, Routes} from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
            <Route path ="/" element = {<Home/>}/>
            <Route path ="about" element = {<About/>}/>
            </Routes>            
        </Router>
    )
}