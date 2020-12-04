import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axois from "../../../axois";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddProduct() {
  const [productName, setproductName] = React.useState("");
  const [type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [dokanName, setDokanName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [image, setImage] = React.useState("");

  const [price, setPrice] = React.useState("");
  const [errResponse, setErrResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  // eslint-disable-next-line
  const [{ user, product }, dispatch] = useStateValue();

  const addProduct = (e) => {
    e.preventDefault();
    setLoading(true);
    axois
      .post(
        "/product",
        {
          name: productName,
          type: type,
          description: description,
          stock: stock,
          dokanName: dokanName,
          location: location,
          image: image,
          price: price,
          postedBy: user._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        dispatch({
          type: actionTypes.ADD_PRODUCT,
          product: [...product, response.data],
        });
        setproductName("");
        setType("");
        setDescription("");
        setStock("");
        setDokanName("");
        setLocation("");
        setImage("");
        setPrice("");
        setErrResponse("Product Added");
      })
      .catch((err) => {
        setErrResponse(err.response.status);
      });
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        {loading && <CircularProgress color="secondary" />}

        {errResponse && <Alert severity="error">{errResponse}</Alert>}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={productName}
            required
            onChange={(e) => {
              setproductName(e.target.value);
            }}
            fullWidth
            id="productname"
            label="Product Name"
            name="productname"
            autoComplete="productname"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={type}
            fullWidth
            onChange={(e) => {
              setType(e.target.value);
            }}
            id="type"
            label="Product Type"
            name="type"
            autoComplete="type"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={description}
            fullWidth
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={stock}
            onChange={(e) => {
              setStock(e.target.value);
            }}
            id="stock"
            label="Stock"
            name="stock"
            type="number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dokanName"
            value={dokanName}
            onChange={(e) => {
              setDokanName(e.target.value);
            }}
            label="Dokan Name"
            name="dokanName"
            autoComplete="dokanName"
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            label="Location"
            name="location"
            autoComplete="location"
            type="text"
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dokanName"
            value={dokanName}
            onChange={e => {
              setContact(e.target.value);
            }}
            label="Dokan Name"
            name="dokanName"
            autoComplete="dokanName"
            type="text"
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            label="Price"
            name="price"
            autoComplete="price"
            type="text"
          />

          <Button
            type="submit"
            fullWidth
            disabled={
              !productName ||
              !type ||
              !description ||
              !stock ||
              !dokanName ||
              !location ||
              !price
            }
            variant="contained"
            color="primary"
            id="login"
            onClick={addProduct}
            className={classes.submit}
          >
            Add Product
          </Button>
        </form>
      </div>
    </Container>
  );
}
