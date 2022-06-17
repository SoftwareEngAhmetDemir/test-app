import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from "../Components/Create";
import Detail from "../Components/Detail";
import Header from "../Components/Header";
import Home from "../Components/Home";

function RoutesIndex() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:category/:index" element={<Detail />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesIndex;