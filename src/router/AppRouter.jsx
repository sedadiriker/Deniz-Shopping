import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Basket from "../pages/Basket"
import NotFound from "../pages/NotFound"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="basket" element={<Basket/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter
