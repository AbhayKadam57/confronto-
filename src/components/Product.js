import React, { useEffect, memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../Redux/Actions/CatalogActions";

const Product = memo(() => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.catalog, shallowEqual);
  // console.log(id);

  console.log(selected);

  useEffect(() => {
    dispatch(ProductDetails(id));
  }, [dispatch, id]);

  return (
    <div className="product">
      {selected ? (
        <>
          <div className="image">
            <img src={`../${selected?.img}`} alt="#" />
          </div>
          <div className="Product_details">
            <div className="heading">
              <h1>{selected?.model}</h1>
              <h5>By {selected?.brand}</h5>
            </div>
            <ul>
              <li>{selected?.os}</li>
              <li>{selected?.frontCamera}</li>
              <li>{selected?.rearcamera}</li>
              <li>{selected?.storage}</li>
              <li>{selected?.screens}</li>
              <li>₹ {selected?.cost}</li>
            </ul>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
});

export default Product;
