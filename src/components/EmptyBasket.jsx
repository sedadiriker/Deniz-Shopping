import { Button, Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const EmptyBasket = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{minHeight:"85vh", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
      <Typography>You have no items in your shopping cart,</Typography><Button sx={{color:"brown"}} onClick={()=> navigate("/home")}>start adding some!</Button>
    </Box>
  )
}

export default EmptyBasket
