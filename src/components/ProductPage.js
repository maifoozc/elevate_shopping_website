import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function ProductPage() {
  // API endpoint
  const API = "https://fakestoreapi.com/products/";

  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API);
      console.log("API Response:", response.data);
      setProducts(response.data);
    } catch (err) {
      console.error(err, "error");
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Get the selected category and search query from the Redux store
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );
  const SET_SEARCH_QUERY = useSelector((state) => state.product.searchQuery);

  // Filter products based on selected category
  const filteredByCategory =
    selectedCategory === "All Category"
      ? products
      : products.filter((e) => e.category === selectedCategory);

  // Filter products based on search query
  const filteredBySearch =
    SET_SEARCH_QUERY === ""
      ? filteredByCategory
      : filteredByCategory.filter(
          (e) =>
            e.title &&
            e.title.toLowerCase().includes(SET_SEARCH_QUERY.toLowerCase())
        );

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
      <div style={{ width: "70%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            {selectedCategory.toUpperCase()}
          </Typography>
        </div>

        {filteredBySearch.length > 0 ? (
          <div className="row">
            {filteredBySearch.map((e) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={e.id}>
                <Card sx={{ height: 345, margin: "15px", textAlign: "center" }}>
                  <CardContent sx={{ backgroundColor: "#ECA72C" }}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {e.title}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="subtitle1">
                        Price: INR {e.price}
                      </Typography>
                      <Typography variant="subtitle1">
                        Rating: {e.rating.rate}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="340"
                    image={e.image}
                    alt={e.title}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
