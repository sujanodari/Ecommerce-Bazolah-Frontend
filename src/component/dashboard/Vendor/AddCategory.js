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

export default function AddCategory() {
  const [categoryName, setCategoryName] = React.useState("");
  const [errResponse, setErrResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();
  // eslint-disable-next-line
  const [{ category }, dispatch] = useStateValue();

  const addCategory = (e) => {
    e.preventDefault();
    setLoading(true);
    axois
      .post(
        "/category",
        {
          category: categoryName,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: actionTypes.ADD_CATEGORY,
          category: [...category, response.data],
        });
        setCategoryName("");
        setErrResponse("Category Added");
      })
      .catch((err) => {
        console.log(err.response);
        // setErrResponse(err.response);
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
          Add Category
        </Typography>
        {loading && <CircularProgress color="secondary" />}

        {errResponse && <Alert severity="error">{errResponse}</Alert>}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={categoryName}
            required
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            fullWidth
            id="categoryname"
            label="Category Name"
            name="categoryname"
            autoComplete="categoryname"
          />
          <Button
            type="submit"
            fullWidth
            disabled={!categoryName}
            variant="contained"
            color="primary"
            id="login"
            onClick={addCategory}
            className={classes.submit}
          >
            Add Category
          </Button>
        </form>
      </div>
    </Container>
  );
}
