import React, { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavbarList from "./NavbarList";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/reducers/rootReducer";

const Navbar: FC = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state: StoreState) => state.cartReducer.cart);
  console.log(cart);

  return (
    <header>
      <nav>
        <div className="logo" onClick={() => navigate("/")}>
          Doochan
        </div>
        <div
          className="burger-menu"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list closed"}>
          {NavbarList.map(({ url, title }) => {
            return (
              <li key={title}>
                <NavLink
                  to={url}
                  className={(data) => (data.isActive ? "active" : "")}
                  onClick={() => {
                    setClicked(false);
                  }}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
          <li>Cart ({cart.length})</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
