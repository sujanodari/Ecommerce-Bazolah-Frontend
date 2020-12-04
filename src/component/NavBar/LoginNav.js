import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./LoginNav.css";
import { useStateValue } from "../../context/StateProvider";
import Badge from "@material-ui/core/Badge";

function LoginNav({
  handleClickOpenLogin,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleClickOpenRegister,
}) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="login__top">
        <div className="login__topLeft">
          <LockIcon fontSize="small" />
          <span onClick={handleClickOpenLogin} className="login__topSpan">
            Login
          </span>
        </div>
        <div className="login__searchDiv">
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Product"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="login__searchInput"
            />
            <SearchIcon
              type="submit"
              disabled={!searchTerm}
              onClick={handleSearch}
              className="login__searchIcon"
            />
          </div>
        </div>
        <div className="login__topRightCenter">
          <div style={{ display: "flex" }}>
            <Badge badgeContent={basket.length} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </div>
        </div>
        <div className="login__topRight">
          <PersonAddIcon fontSize="small" />
          <span onClick={handleClickOpenRegister} className="login__topSpan">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;
