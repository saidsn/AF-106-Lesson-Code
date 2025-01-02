import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Person3Icon from "@mui/icons-material/Person3";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/features/productSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [users, setUsers] = useState([]);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getUsers = async () => {
    const { data } = await axios("http://localhost:3000/users");
    setUsers(data);
  };

  const existUser = users.find((user) => user.isLogin === true);

  const handleLogout = async () => {
    existUser.isLogin = false;
    await axios.put(`http://localhost:3000/users/${existUser.id}`, existUser);
  };

  const { products } = useSelector((state) => state.basket);

  const totalCount = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(searchProduct(value));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {existUser ? (
        <>
          <MenuItem>
            <Link>{existUser ? existUser.username : null}</Link>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose(), handleLogout();
            }}
          >
            <Link to="/">Logout</Link>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/register">Register</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/login">Login</Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  const Hello = () => {
    if (!existUser) {
      navigate("/login");
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", color: "goldenrod" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/">Home</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/about">About</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/admin">AdminPanel</Link>
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                Hello();
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to="/basket">
                <Badge badgeContent={totalCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Person3Icon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
