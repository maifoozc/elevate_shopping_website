import "./Banner.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../store/productSlice";
import { setSearchQuery } from "../store/productSlice";

function Banner() {

   // Getting selected category and search query from the Redux store
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );
  const searchQuery = useSelector((state) => state.product.searchQuery);
  const dispatch = useDispatch();

    // Handler for changing the selected category
  const handleCategoryChange = (event) => {
    const newValue = event.target.value;
    console.log("Selected Category:", newValue);
    dispatch(setCategory(newValue));
  };

   // Handler for performing the search
  const handleSearch = () => {
    console.log("search button clicked");
    console.log("Search Query:", searchQuery);
    dispatch(setSearchQuery(searchQuery));
  };

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
          className="header_options"
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
        <IconButton
          color="primary"
          sx={{ color: "#fff" }}
          className="btn iconButton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="true"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <div
          className="filter_options collapse collapse-horizontal show"
          id="collapseWidthExample"
        >
          <Select
            value={selectedCategory}
            size="small"
            sx={{ color: "#fff", backgroundColor: "grey" }}
            onChange={handleCategoryChange}
          >
            <MenuItem value="All Category">All Category</MenuItem>
            <MenuItem value="men's clothing">Men's clothing</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="women's clothing">Women's clothing</MenuItem>
          </Select>
          <div
            className="search_field"
            style={{ display: "flex", justifyContent: "center", width: "40%" }}
          >
            <TextField
              className="searchBox"
              size="large"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                width: "100%",
                marginTop: 0,
                marginBottom: 0,
              }}
              placeholder="Search this blog"
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <IconButton
              color="primary"
              sx={{ backgroundColor: "#f26522", borderRadius: "5px" }}
              onClick={handleSearch}
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
        sx={{
          color: "#fff",
          backgroundColor: "black",
          width: "10%",
          margin: "2%",
        }}
      >
        Buy Now
      </Button>
    </div>
  );
}

export default Banner;
