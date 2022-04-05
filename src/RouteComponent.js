import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SingleAnime from "./pages/SingleAnime";

function RouteComponent() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}>
            </Route>
            <Route path="/anime/:animeid" element={<SingleAnime/>}>
            </Route>
        </Routes>
    );
}

export default RouteComponent;
