import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/basketAction';
import AddModal from './AddModal';
import { add } from '../redux/types/basketType';

const ProductCard = (product) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCart = () => {
    dispatch(addProduct(product));
  };

  const { image, title, category, rating } = product;

  return (
    <>
      <Card sx={{ width: 300, height: 420, position: 'relative', borderRadius: '10px', boxShadow: '1px 2px 15px gray' }}>
        <CardActionArea onClick={handleOpen}>
          <Typography fontSize={12} sx={{ position: 'absolute', top: '0', left: '10px', color: 'brown' }}>{category}</Typography>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
            sx={{ objectFit: 'contain', pt: 2,px:2 }} />
          <CardContent>
            <Typography gutterBottom fontSize="1.1rem" color="black" variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography fontSize={12} sx={{ position: 'absolute', bottom: '2px', left: '10px', color: 'brown' }}><Rating readOnly value={rating.rate} /></Typography>
        <CardActions>
          <Button onClick={addCart} sx={{ position: 'absolute', bottom: '2px', right: '0', color: 'brown' }} size="small">
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
      <AddModal open={open} product={product} addcart={addCart} handleClose={handleClose} />
    </>
  );
};

export default ProductCard;
