import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLoading, stopLoading } from "../store/loadingReducer"
import Loading from "../components/Loading"

const Electronics = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const loading = useSelector((state)=> state.loading)

    const URL = 'https://fakestoreapi.com/products'

    const getProducts = async () => {
      dispatch(startLoading())
        try{
            const {data} = await axios(URL)
      
            setProducts(data)
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
    console.log(products)
  return (
    <>
    {loading ? (
      <Loading/>
    ):(
      <>
      <Typography px={5} variant="h4"> All Products</Typography>
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