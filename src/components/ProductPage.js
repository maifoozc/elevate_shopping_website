import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductPage() {
  const API = "https://fakestoreapi.com/products/";

  const [products, setProducts] = useState([]);

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
    console.log(products.map((e)=>e.category));
  }, [products]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {products ? (
        <div className="row" style={{ width: "70%" }}>
          {products.map((e) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card sx={{ height: 245, margin: "15px" ,textAlign:'center'}}>
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
