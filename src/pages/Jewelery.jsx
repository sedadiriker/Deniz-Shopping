import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Box } from "@mui/material"

const Jewelery = () => {
    const [products,setProducts] = useState([])

    const URL = 'https://fakestoreapi.com/products'

    const getProducts = async () => {
        
        try{
            const {data} = await axios(URL)
            const elekctronicsProducts = data.filter(product => product.category === 'jewelery' )
            setProducts(elekctronicsProducts)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getProducts()
    },[])
    console.log(products)
  return (
    <Box px={6} pb={5} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={5}>
      {
        products.map(product => (
            <ProductCard key={product.id} {...product}/>
        ))
      }
    </Box>
  )
}

export default Jewelery