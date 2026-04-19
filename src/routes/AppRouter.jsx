import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../features/auth/pages/Login"



const AppRouter = () => {
  return (
    <div className="app-body">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  )
}


export default AppRouter