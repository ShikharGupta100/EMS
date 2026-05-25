import {Toaster} from "react-hot-toast"
import { Routes,Route, Navigate, replace } from "react-router-dom" 
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import Attendance from "./pages/Attendance"
import PrintPayslip from "./pages/PrintPayslip"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import Leave from "./pages/Leave"
import Settings from "./pages/Settings"
import Payslips from "./pages/Payslips"
import LoginForm from "./components/LoginForm"
const App = () => {
  return (
    <>
   <Toaster/>
    <Routes>
      <Route  path="/login" element={<LoginLanding/>}/>
      <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign into manage the organisation"/>}/>
      <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign into access your account"/>}/>
      <Route  element={<Layout/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/employees" element={<Employees/>}/>
      <Route path="/attendance" element={<Attendance/>}/>
      <Route path="/leave" element={<Leave/>}/>
      <Route path="/payslips" element={<Payslips/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/print/payslips/:id" element={<PrintPayslip/>}/>
      <Route path="*" element={<Navigate to="/login" replace/>}/>
      
    </Routes>
    </>
  )
}

export default App
