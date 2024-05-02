import { Box, Modal, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddModal = ({ open, handleClose, product, addcart }) => {
  const { image, title, category, description } = product;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 400, md: 800 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          backgroundColor: "#90A3AE",
        }}
      >
        <Card
          sx={{
            height: 550,
            width: "100%",
            margin: "auto",
            position: "relative",
            borderRadius: "10px",
            boxShadow: "1px 2px 40px black",
          }}
        >
          <CardActionArea>
            <Typography
              fontSize={12}
              sx={{
                position: "absolute",
                top: "0",
                left: "10px",
                color: "brown",
              }}
            >
              {category}
            </Typography>
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt={title}
              sx={{ objectFit: "contain", pt: 2 }}
            />
            <CardContent>
              <Typography
                textAlign={"center"}
                gutterBottom
                
                sx={{ color: "brown" ,fontSize: {
                  xs: 13,
                  md: '1.5rem',
                },}}
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Typography
            px={1}
            pb={5}
            sx={{
              position: "absolute",
              bottom: "2px",
              left: "10px",
              color: "black",
              fontSize: {
                xs: 10,
                md: 14,
              },
            }}
          >
            {description}{" "}
          </Typography>
          <CardActions>
            <Button
              onClick={() => addcart()}
              sx={{
                position: "absolute",
                bottom: "2px",
                right: "0",
                color: "brown",
              }}
              size="small"
            >
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
};

export default AddModal;
