import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function ProductPage() {
  const API = "https://fakestoreapi.com/products/";

  const [products, setProducts] = useState([]);

  const selectedCategory = useSelector((state) => state);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API);
      setProducts(response.data);
    } catch (err) {
      console.error(err, "error");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(products.map((e) => e.category));
  }, [products]);

  const filteredProducts =
    selectedCategory === "All Category"
      ? products
      : products.filter((e) => e.category === selectedCategory);


      const [search, setSearch]= useState('');

      let searchProducts = filteredProducts.filter((product)=>{
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {products ? (
        <div className="row" style={{ width: "70%" }}>
          {filteredProducts.map((e) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card sx={{ height: 245, margin: "15px", textAlign: "center" }}>
                  <CardContent>
                    <Typography>{e.title}</Typography>
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
            );
          })}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProductPage;
