import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import Cards from "../../Cards";
import axois from "../../../axois";
import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function VendorDashboard() {
  // eslint-disable-next-line
  const [{ user, product, category }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    axois
      .get("/profile", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: response.data,
        });
      });
  }, [dispatch]);

  useEffect(() => {
    user &&
      axois
        .get(`/product/${user?._id}`)
        .then((response) => {
          dispatch({
            type: actionTypes.SET_PRODUCT,
            product: response.data,
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
  }, [user, dispatch]);

  useEffect(() => {
    axois
      .get(`/category`)
      .then((response) => {
        dispatch({
          type: actionTypes.SET_CATEGORY,
          category: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    history.push("/");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <AddProduct />
      <AddCategory />
      <Cards products={product} searchProducts={[]} showCategory={true} />
    </div>
  );
}

export default VendorDashboard;
