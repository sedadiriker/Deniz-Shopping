import { Box } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import {
  clearBasket,
  minusquantity,
  plusqantity,
  removeProduct,
} from "../redux/actions/basketAction";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FiiledBasket = ({ basket }) => {
  let subtotal = 0;

  //! Her ürünün mikarı ve ttarına göre hesapla!!
  basket.basket.forEach((product) => {
    subtotal += product.price * product.quantity;
  });
  const dispatch = useDispatch();


  
  const deleteProduct = (id) => {
    dispatch(removeProduct(id));

  };

  const addquantity = (id) => {
    dispatch(plusqantity(id));

  };

  const mInusquantity = (id) => {
    dispatch(minusquantity(id));

  };



  
  return (
    <Box pb={5} minHeight="85vh">
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={2}
      >
        {basket.basket?.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 350,
              height: 410,
              position: "relative",
              borderRadius: "10px",
              boxShadow: "1px 2px 15px gray",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
              >
                <Typography
                  gutterBottom
                  fontSize="15px"
                  color="black"
                  variant="h5"
                  component="div"
                >
                  {product.title}
                </Typography>
                <Typography
                  fontWeight={600}
                  gutterBottom
                  fontSize="1.1rem"
                  color="brown"
                  variant="h5"
                  component="div"
                >
                  {product.price}$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box
                display={"flex"}
                alignItems={"center"}
                position={"absolute"}
                bottom={2}
                left={0}
              >
                <Button color="error" onClick={() => addquantity(product.id)}>
                  <AddIcon fontSize="small" />
                </Button>
                <Typography>{product.quantity}</Typography>
                <Button color="error" onClick={() => mInusquantity(product.id)}>
                  <RemoveIcon fontSize="small" />
                </Button>
              </Box>
              <Button
                onClick={() => deleteProduct(product.id)}
                sx={{
                  position: "absolute",
                  bottom: "2px",
                  right: "0",
                  color: "brown",
                }}
                size="small"
              >
                <ClearIcon />
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box width="75%" m="auto" mt={5} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Typography>Subtotal <span style={{fontWeight:"bold", fontSize:"1.2rem"}}>{subtotal.toFixed(2)}$</span></Typography>
        <Button onClick={()=> dispatch(clearBasket())} sx={{border:"1px solid brown", color:"brown"}}>Empty Cart</Button>
      </Box>
    </Box>
  );
};

export default FiiledBasket;
