import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/not-found" element={<NotFoundPage/>}/>

      <Route path="*" element={<Navigate to="/not-found" replace/> }/>
    </Routes>
  )
}

export default App