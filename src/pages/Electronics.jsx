import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLoading, stopLoading } from "../redux/actions/loadingAction"
import Loading from "../components/Loading"

const Electronics = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const {loading} = useSelector((state)=> state.loading)
    const URL = 'https://fakestoreapi.com/products'

    const getProducts = async () => {
        dispatch(startLoading())
        try{
            const {data} = await axios(URL)
            const elekctronicsProducts = data.filter(product => product.category === 'electronics' )
            setProducts(elekctronicsProducts)
            
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getProducts()
    },[])

    useEffect(()=> {
      setTimeout(() => {
        dispatch(stopLoading())
    }, 1000);
    },[])
    // console.log(loading)
  return (
    <>
    {loading ? (
      <Loading/>
    ):(
<><Typography sx={{color:"brown"}} px={5} variant="h5" fontWeight={"bold"}> Electronics</Typography>
        <Box px={2} py={5} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={5}>
      {
        products.map(product => (
            <ProductCard key={product.id} {...product}/>
        ))
      }
    </Box></>
    )}
        
    </>
    
  )
}

export default Electronics
