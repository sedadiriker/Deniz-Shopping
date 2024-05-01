import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({image,title,category}) => {
  return (
    <Card sx={{ width: 300,position:"relative"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
          sx={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom fontSize="1.1rem" color="black" variant="h5" component="div">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <Typography sx={{position:"absolute", bottom:"2px", left:"10px", color:"brown"}}>{category}</Typography>
      <CardActions>
        <Button sx={{position:"absolute", bottom:"2px", right:"0", color:"brown"}} size="small">
          <AddShoppingCartIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
