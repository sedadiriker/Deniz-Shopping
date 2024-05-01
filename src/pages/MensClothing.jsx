import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLoading, stopLoading } from "../redux/actions/loadingAction"
import Loading from "../components/Loading"

const MensClothing = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const {loading} = useSelector((state)=> state.loading)
    const URL = 'https://fakestoreapi.com/products'

    const getProducts = async () => {
      dispatch(startLoading())

        try{
            const {data} = await axios(URL)
            const mensclothings = data.filter(product => product.category === "men's clothing" )
            setProducts(mensclothings)
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
    // console.log(products)
    return (
      <>
      {loading ? (
        <Loading/>
      ):(
        <Box minHeight="85vh">
        <Typography sx={{color:"brown"}} px={5} variant="h5" fontWeight={"bold"}> Men's Clothing</Typography>
      <Box px={2} py={5} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={5}>
        {
          products.map(product => (
              <ProductCard key={product.id} {...product}/>
          ))
        }
      </Box></Box>
      )}
      
      </>
      
    )
}

export default MensClothing