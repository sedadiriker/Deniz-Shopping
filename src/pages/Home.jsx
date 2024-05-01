import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/loadingAction";
import Loading from "../components/Loading";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import DvrIcon from '@mui/icons-material/Dvr';
import DiamondIcon from '@mui/icons-material/Diamond';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useNavigate } from "react-router-dom";
const actions = [
  { name: "Home", icon: <OtherHousesIcon /> },
  { name: "Electronics", icon: <DvrIcon /> },
  { name: "Jewelery", icon: <DiamondIcon /> },
  { name: "Men's Clothing", icon: <CheckroomIcon /> },
  { name: "Women's Clothing", icon: <CheckroomIcon /> },
];
const Electronics = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.loading);

  const URL = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    dispatch(startLoading());
    try {
      const { data } = await axios(URL);

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
  }, []);
  // console.log(products)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box position={"relative"}>
          <Typography
            sx={{ color: "brown" }}
            px={5}
            variant="h5"
            fontWeight={"bold"}
          >
            {" "}
            All Products
          </Typography>
          <Box
            px={5}
            py={5}
            pb={14}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={5}
          >
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Box>
          <Box>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={()=> navigate(`/${action.name}`)}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Electronics;
