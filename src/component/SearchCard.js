import React from "react";
import {
  makeStyles,
  Tooltip,
  Container,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  // CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreVert";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// -----------------------Js Style----------------------------------
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

// Js style for tool tip
const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

// Upward ToolTip
function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

toast.configure();

function SearchCard({ searchProducts, clearSearch }) {
  const classes = useStyles();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  function addToBasket(product) {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      basket: [...basket, product],
    });

    toast.info(product.name + "  is added to the cart!(✿◠‿◠)", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <h4 align="center">
          Search Result Total: {searchProducts.length}{" "}
          <Button onClick={clearSearch}>Clear Search</Button>
        </h4>
        <Grid container spacing={3}>
          {searchProducts.map((product) => (
            <Grid key={product?._id} item xs={6} md={4} lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product?.name}
                    height="200"
                    image="https://cdn.pixabay.com/photo/2017/12/08/11/16/clock-3005574__340.jpg"
                    title={product?.name}
                  />
                  <Typography
                    style={{ paddingLeft: "7px" }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {product?.name}
                  </Typography>
                  <Typography
                    style={{ paddingLeft: "7px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Rs {product?.price}
                  </Typography>
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <span>{product?.description}</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h4"
                    >
                      <span> {product?.type}</span>
                      <br />
                      <span> Rs:{product?.price}</span>
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
                <CardActions>
                  <BootstrapTooltip title="Add to cart" placement="top">
                    <IconButton
                      onClick={() => {
                        addToBasket(product);
                      }}
                    >
                      <AddShoppingCartIcon className="font" />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title="Add to wishlist" placement="top">
                    <IconButton>
                      {" "}
                      <FavoriteBorderIcon className="font" />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title="Full Details" placement="top">
                    <IconButton>
                      {" "}
                      <MoreHorizIcon className="font" />
                    </IconButton>
                  </BootstrapTooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <hr />
    </>
  );
}

export default SearchCard;
