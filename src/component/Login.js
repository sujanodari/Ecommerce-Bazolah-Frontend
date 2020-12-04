import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axois from "../axois";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import "./Login.css";
import Slider from "./Silder";
import { Button, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import LoginNav from "./NavBar/LoginNav";
import SearchCard from "./SearchCard";
import Skeleton from "@material-ui/lab/Skeleton";

// ------------------------------------------------ JS Style----------------------------------------------------
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    maxWidth: 345,
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

// -----------------------------Popup direction for login-------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

//----------------------popup direction for login----------------------------------------
const TransitionRegister = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Login({ handleOpen, setHandleOpen, isMobile }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [type, setType] = React.useState("");
  const [errResponse, setErrResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [OpenLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  const [searchProducts, setSearchProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchMessage, setSearchMessage] = React.useState("");

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  const clearSearch = () => {
    setSearchProducts([]);
    setSearchMessage("");
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("type") === "Vendor"
    ) {
      history.push("/vendor");
      return;
    }
  }, [history]);

  useEffect(() => {
    function myTimer() {
      axois
        .get("/product")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    var timer = setInterval(myTimer, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    searchTerm &&
      axois
        .post("/product/search", {
          name: searchTerm,
        })
        .then((response) => {
          if (response.data.length === 0) {
            setSearchMessage(`Product ${searchTerm} not found`);
            setSearchTerm("");
            setSearchProducts([]);
            return;
          }
          setSearchTerm("");
          setSearchProducts(response.data);
        });
  };

  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);
    axois
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("type", response.data.type);
        setEmail("");
        setPassword("");
        if (response.data.type === "Customer") {
          history.push("/customer");
        } else if (response.data.type === "Bazolah") {
          history.push("/bazolah");
        } else if (response.data.type === "Vendor") {
          history.push("/vendor");
        } else {
          history.push("/superadmin");
        }
      })
      .catch((err) => {
        setErrResponse(err.response.data.status);
      });
    setLoading(false);
  };

  const registerUser = (e) => {
    e.preventDefault();
    setLoading(true);
    axois
      .post("/register", {
        fullName: fullname,
        email: email,
        gender: gender,
        age: age,
        location: address,
        type: type,
        contactNo: contact,
        password: password,
      })
      .then((response) => {
        setEmail("");
        setPassword("");
        setErrResponse("");
        setFullname("");
        setAge("");
        setAddress("");
        setContact("");
        setGender("");
        setType("");
        setOpenRegister(false);
        setOpenLogin(true);
      })
      .catch((err) => {
        setErrResponse(err.response.message);
      });
    setLoading(false);
  };

  return (
    <>
      {/* top nav */}
      <LoginNav
        handleClickOpenLogin={handleClickOpenLogin}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleClickOpenRegister={handleClickOpenRegister}
      />
      {/* slider */}
      <Slider />
      {/* Search div */}
      {searchProducts.length === 0 ? (
        <p align="center" style={{ color: "red", fontSize: "25px" }}>
          {searchMessage}{" "}
          {searchMessage && (
            <Button
              onClick={() => {
                setSearchMessage("");
              }}
            >
              Clear Message
            </Button>
          )}
        </p>
      ) : (
        <SearchCard clearSearch={clearSearch} searchProducts={searchProducts} />
      )}

      {/* Products */}

      {products.length === 0 ? (
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} md={4} lg={3}>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width={210} />
              <Skeleton width={210} />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width={210} />
              <Skeleton width={210} />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width={210} />
              <Skeleton width={210} />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width={210} />
              <Skeleton width={210} />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container>
          <p align="center">
            <b>All Products</b>
          </p>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product?._id} item xs={6} md={4} lg={3}>
                <Cards
                  product={product}
                  searchProducts={searchProducts}
                  showCategory={false}
                  clearSearch={clearSearch}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      {/* popup Login----------------------------------------------------------------------------------- */}
      <Dialog
        open={OpenLogin}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon fontSize="small" onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: "#2d2d2d" }}
                >
                  Sign in
                </Typography>
                {loading && <CircularProgress color="secondary" />}

                {errResponse && <Alert severity="error">{errResponse}</Alert>}
                <form
                  style={{ color: "#2d2d2d" }}
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    value={email}
                    fullWidth
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    disabled={!email || !password}
                    variant="contained"
                    color="primary"
                    id="login"
                    onClick={loginUser}
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to="/" className="login__topSpan">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <span
                        onClickCapture={handleClose}
                        onClick={handleClickOpenRegister}
                        className="login__topSpan"
                      >
                        {"Don't have an account? Sign Up"}
                      </span>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="login__topSpan"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Register popup---------------------------------------------------------------------------- */}
      <Dialog
        open={openRegister}
        TransitionComponent={TransitionRegister}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon fontSize="small" onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: "#2d2d2d" }}
                >
                  Sign up
                </Typography>
                {loading && <CircularProgress color="secondary" />}

                {errResponse && <Alert severity="error">{errResponse}</Alert>}
                <form
                  style={{ color: "#2d2d2d" }}
                  className={classes.form}
                  noValidate
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    value={fullname}
                    required
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    name="fullname"
                    autoComplete="fullname"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    value={email}
                    fullWidth
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    value={age}
                    fullWidth
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    id="age"
                    label="Age"
                    name="age"
                    autoComplete="age"
                    type="number"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="Address"
                    type="text"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="contact"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    label="Contact Number"
                    name="contact"
                    autoComplete="contact"
                    type="number"
                  />
                  <p>Gender *</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={gender}
                      style={{ border: "0.1px solid #3f51b5" }}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="Others"
                        control={<Radio color="primary" />}
                        label="Others"
                        labelPlacement="top"
                      />
                    </RadioGroup>
                  </FormControl>
                  <p>Type *</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={type}
                      style={{ border: "0.1px solid #3f51b5" }}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        value="Vendor"
                        control={<Radio color="primary" />}
                        label="Vendor"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="Customer"
                        control={<Radio color="primary" />}
                        label="Customer"
                        labelPlacement="top"
                      />
                      <FormControlLabel
                        value="Bazolah"
                        control={<Radio color="primary" />}
                        label="Bazolah"
                        labelPlacement="top"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    disabled={
                      !fullname ||
                      !email ||
                      !password ||
                      !age ||
                      !address ||
                      !contact ||
                      !gender ||
                      !type ||
                      !password
                    }
                    variant="contained"
                    color="primary"
                    id="login"
                    onClick={registerUser}
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <span
                        onClickCapture={handleClose}
                        onClick={handleClickOpenLogin}
                        className="login__topSpan"
                      >
                        Already have an account? Sign In
                      </span>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="login__topSpan"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
