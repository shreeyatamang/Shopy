import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrumb from "../Components/Breadcrumb";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "./DescriptionBox";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((item) => item.id === Number(productId));

  return (
    <div>
      <Breadcrumb data={{ product }} />
      {/* Render other product details */}
      <ProductDisplay data={{ product }} />
      <DescriptionBox />
    </div>
  );
};

export default Product;
