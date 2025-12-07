import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard"
import Authcontext from './context/authcontext'

function App() {
  return (
    <Authcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<div className="text-2xl font-bold">Welcome to Admin Dashboard!</div>} />
            <Route path="members" element={<div className="text-xl">Members Page</div>} />
            <Route path="books" element={<div className="text-xl">Books Page</div>} />
            <Route path="issued" element={<div className="text-xl">Issued Books Page</div>} />
            <Route path="returned" element={<div className="text-xl">Returned Books Page</div>} />
            <Route path="not-returned" element={<div className="text-xl">Not Returned Books Page</div>} />
          </Route>
          <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Authcontext>
  );
}

export default App