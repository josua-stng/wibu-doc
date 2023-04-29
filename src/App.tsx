import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SeeDoctor from "./components/SeeDoctors";
import Market from "./components/Market";
import ChatDoctorPage from "./components/ChatDocter";
import CalculatorBMI from "./components/CalculatorBMI";
import SeeHospital from "./components/SeeHospital";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import ProtectRoute from "./authorization/ProtectRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-list" element={<SeeDoctor />} />
        <Route path="/market" element={<Market />} />
        <Route
          path="/chat-doctor"
          element={
            <ProtectRoute>
              <ChatDoctorPage />
            </ProtectRoute>
          }
        />
        <Route path="/calculator-bmi" element={<CalculatorBMI />} />
        <Route path="/see-hospital" element={<SeeHospital />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
