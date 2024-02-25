import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LayoutMain from "./pages/LayoutMain";
import PrihodiPage from "./pages/PrihodiPage";
import Login from "./pages/Login";
import LayoutYear from "./pages/LayoutYear";
import PregledGodinePage from "./pages/PregledGodinePage";
import DashboardPage from "./pages/DashboardPage";
import RashodiPage from "./pages/RashodiPage";
import RadPage from "./pages/RadPage";
import BerbaPage from "./pages/BerbaPage";
import PreradaPage from "./pages/PreradaPage";
import DeletedPage from "./pages/DeletedPage";
import { useState } from "react";

// const ProtectedRoute = ({ element }) => {
//   const loggedIn = window.sessionStorage.getItem("MY_APP_STATE");
//   return loggedIn ? element() : <Navigate to={"/login"} />;
// };

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route
          path="login"
          element={<Login user={user} setUser={setUser} />}
        ></Route>
        <Route element={<ProtectedRoute user={user} />}>
          {/* <Route path="/" element={<ProtectedRoute element={LayoutMain} />}>
            <Route path="/" element={<ProtectedRoute element={LayoutYear} />}> */}
          <Route path="/" element={<LayoutMain />}>
            <Route path="/" element={<LayoutYear />}>
              <Route index element={<PregledGodinePage />}></Route>
              <Route path="prihodi" element={<PrihodiPage />}></Route>
              <Route path="rashodi" element={<RashodiPage />}></Route>
              <Route path="rad" element={<RadPage />}></Route>
              <Route path="berba" element={<BerbaPage />}></Route>
              <Route path="prerada" element={<PreradaPage />}></Route>
            </Route>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="deleted" element={<DeletedPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
