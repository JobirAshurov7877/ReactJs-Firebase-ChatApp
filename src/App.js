import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Register from "./pages/Register";
import "./style.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";



function App() {
  const {currentUser}  = useContext(AuthContext); 
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <ProtectedRoute>
              <Home />
            </ProtectedRoute> } />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
