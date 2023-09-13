import React, { useEffect, memo } from "react";
import ProductCard from "./ProductCard";
import { initCatalog } from "../Redux/Actions/CatalogActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Catalog = memo(() => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.catalog, shallowEqual);

  useEffect(() => {
    dispatch(initCatalog());
  }, [dispatch]);

  return (
    <div className="catalog">
      {products.length > 0 &&
        products.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
});

export default Catalog;
