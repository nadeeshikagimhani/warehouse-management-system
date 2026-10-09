import { Routes, Route, Navigate } from "react-router-dom"

import { routes } from "../data/route"

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({route, page}) => (

         <Route key={route} path={route} element={page} />
      
      ))}
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  )
}

export default AppRouter