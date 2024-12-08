import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/sign-in";
import Signup from "./components/auth/sign-up";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
