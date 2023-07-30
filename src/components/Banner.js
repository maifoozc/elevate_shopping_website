import React from "react";
import "./Banner.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
function Banner() {
  return (
    <div className="banner">
      {/* menu options */}
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(43,42,41,255)",
          marginTop: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "60%",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <p>Best Sellers</p>
          <p>Gift Ideas</p>
          <p>New Releases</p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
        </div>
      </div>
      {/* menu options */}

      <Typography
        sx={{
          marginTop: "2rem",
          fontSize: "3rem",
          color: "#fff",
          fontWeight: "600",
          padding: "1rem",
        }}
      >
        Eflyer
      </Typography>

      {/* Search options */}
      <div className="filter">
        <IconButton color="primary" sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
        <Select
          value="All Category"
          size="small"
          sx={{ color: "#fff", backgroundColor: "grey" }}
        >
          <MenuItem value="All Category">All Category</MenuItem>
          <MenuItem value="men's clothing">Men's clothing</MenuItem>
          <MenuItem value="jewelery">Jewelery</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="women's clothing">Women's clothing</MenuItem>
        </Select>
        <div
          style={{ display: "flex", justifyContent: "center", width: "40%" }}
        >
          <TextField
            size="small"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              width: "100%",
              marginTop: 0,
              marginBottom: 0,
            }}
            placeholder="Search this blog"
          />
          <IconButton
            color="primary"
            sx={{ backgroundColor: "#f26522", borderRadius: "5px" }}
          >
            <SearchIcon style={{ color: "#fff" }} />
          </IconButton>
        </div>

        <Select value="English" size="small" sx={{ backgroundColor: "#fff" }}>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Marathi">Marathi</MenuItem>
        </Select>

        <Button startIcon={<AddShoppingCartIcon />} sx={{ color: "#fff" }}>
          Cart
        </Button>
        <Button startIcon={<PersonIcon />} sx={{ color: "#fff" }}>
          Cart
        </Button>
      </div>

      {/* Search options */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "5%",
        }}
      >
        <Typography sx={{ fontWeight: "800", color: "#fff", fontSize: "50px" }}>
          Get Start
          <br />
          Your Favourite Shopping
        </Typography>
      </div>
      <Button
        variant="outlined"
        sx={{ color: "#fff", backgroundColor: "black", width: "10%" , margin:'2%'}}
      >
        Buy Now
      </Button>
    </div>
  );
}

export default Banner;
