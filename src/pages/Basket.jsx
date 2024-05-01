import { useSelector } from "react-redux"
import EmptyBasket from "../components/EmptyBasket"
import FiiledBasket from "../components/FiiledBasket"


const Basket = () => {
  const {basket} = useSelector((state)=> state.basket) 
  // console.log(basket)


 
  return (
    <>
    {basket?.length > 0 ? (
      <FiiledBasket basket={{basket}} /> 
    ) : (
      <EmptyBasket />
    )}
  </>

  )
}

export default Basket
