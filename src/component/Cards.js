import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {
  makeStyles,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CssBaseline,
  DialogActions,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Tooltip,
  IconButton,
} from "@material-ui/core";

import axios from "../axois";
import CloseIcon from "@material-ui/icons/Close";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreVert";
import "./Card.css";
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

function Cards({ product, showCategory }) {
  // eslint-disable-next-line
  const [{ category, basket }, dispatch] = useStateValue();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pid, setPid] = React.useState("");
  const [cid, setCid] = React.useState("");

  const handleClickOpen = (id) => {
    setPid(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPid("");
  };

  const handleChangeSelect = (e) => {
    setCid(e.target.value);
  };
  const addToCategory = (e) => {
    e.preventDefault();
    axios
      .put(
        `/category/${cid}`,
        {
          products: pid,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setCid("");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  function addToBasket(product) {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      basket: [...basket, product],
    });
    toast.info(product.name + "  is added to the cart!(✿◠‿◠)", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className="card__toggler"
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
        {/* <CardContent className="toogle__cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {product?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>{product?.description}</span>
            <br />
            <span> Rs:{product?.price}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {showCategory && <span>Stock: {product?.stock}</span>}
            <br />
            {showCategory && <span>Dokan Name: {product?.dokanName}</span>}
            <br />
            {showCategory && <span>Location: {product?.location}</span>}

            <br />

            {showCategory && product?.type ? (
              <span>Type: {product?.type}</span>
            ) : null}

            <br />
            {showCategory && (
              <span>
                Added At:
                {new Date(product?.addedAt).toUTCString()}
              </span>
            )}
          </Typography>
        </CardContent> */}
      </CardActionArea>
      <CardActions>
        {showCategory && (
          <Button
            onClick={() => {
              handleClickOpen(product?._id);
            }}
            size="small"
            color="primary"
          >
            Add to Category
          </Button>
        )}

        {/* Dialog */}
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <CloseIcon
              fontSize="small"
              onClick={() => {
                handleClose();
              }}
            />{" "}
            Choose a Category
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <form
                  style={{ color: "#2d2d2d" }}
                  className={classes.form}
                  noValidate
                >
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Category</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={cid}
                      onChange={handleChangeSelect}
                    >
                      {category.map(({ _id, category }) => (
                        <FormControlLabel
                          key={_id}
                          value={_id}
                          control={<Radio />}
                          label={category}
                        />
                      ))}
                    </RadioGroup>{" "}
                  </FormControl>

                  <br />
                  <br />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    id="ctop"
                    disabled={!pid || !cid}
                    onClick={addToCategory}
                    className={classes.submit}
                  >
                    Add
                  </Button>
                  <Grid container>
                    <Grid item xs></Grid>
                  </Grid>
                </form>
              </Container>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              className="login__topSpan"
              onClick={() => {
                handleClose();
              }}
              color="primary"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {!showCategory && (
          <>
            <BootstrapTooltip
              className="hover__effect"
              title="Add to cart"
              placement="top"
            >
              <IconButton
                onClick={() => {
                  addToBasket(product);
                }}
              >
                <AddShoppingCartIcon
                  // fontSize="large"
                  className="font"
                />
              </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip
              className="hover__effect"
              title="Add to wishlist"
              placement="top"
            >
              <IconButton>
                {" "}
                <FavoriteBorderIcon
                  // fontSize="large"
                  className="font"
                />
              </IconButton>
            </BootstrapTooltip>
            <BootstrapTooltip
              className="hover__effect"
              title="Full Details"
              placement="top"
            >
              <IconButton>
                {" "}
                <MoreHorizIcon
                  // fontSize="large"
                  className="font"
                />
              </IconButton>
            </BootstrapTooltip>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default Cards;
