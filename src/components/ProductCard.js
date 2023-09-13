import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCompare } from "../Redux/Actions/CompareActions";

const ProductCard = memo(({ ...product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="productCard">
      <img
        alt="phone"
        src={`../${product.img}`}
        onClick={() => handleClick(product.id)}
      />
      <div className="details">
        <h5>{product.brand}</h5>
        <h4>{product.model}</h4>

        <button
          className="btn"
          onClick={() => dispatch(addToCompare(product.id))}
        >
          Add to Compare
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
