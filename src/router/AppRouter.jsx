import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Basket from "../pages/Basket"
import NotFound from "../pages/NotFound"
import Navbar from "../components/Navbar"
import Electronics from "../pages/Electronics"
import Jewelery from "../pages/Jewelery"
import MensClothing from "../pages/MensClothing"
import WomensClothing from "../pages/WomensClothing"

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="basket" element={<Basket/>}/>
      <Route path="Electronics" element={<Electronics/>}/>
      <Route path="Jewelery" element={<Jewelery/>}/>
      <Route path="Men's Clothing" element={<MensClothing/>}/>
      <Route path="Women's Clothing" element={<WomensClothing/>}/>
      <Route path="basket" element={<Basket/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
    
  )
}

export default AppRouter
