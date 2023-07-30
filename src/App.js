import { Typography } from "@mui/material";
import "./App.css";
import Banner from "./components/Banner";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <Banner />
      <ProductPage/> 
      <Typography><hr/>Powered By Maifooz Sheikh @ 2023</Typography>
    </div>
  );
}

export default App;
