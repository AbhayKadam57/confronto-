import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeFromCompare } from "../Redux/Actions/CompareActions";

const Compare = memo(() => {
  const { products } = useSelector((state) => state.compare, shallowEqual);

  const dispatch = useDispatch();

  console.log(products);

  return (
    <div className="compare">
      {products.length > 0 ? (
        <>
          <div className="details_col">
            <div className="compare_img"></div>
            <div className="compare_details">
              <ul>
                <li>Brand</li>
                <li>Model</li>
                <li>Rear Camera</li>
                <li>Front Camera</li>
                <li>Screens</li>
                <li>Storage</li>
                <li>OS</li>
                <li>Cost</li>
              </ul>
            </div>
          </div>
          <div className="list">
            {products?.map((item, id) => (
              <div className="details_col" key={id}>
                <div className="compare_img">
                  <img src={`../${item.img}`} alt="" />
                </div>
                <div className="compare_details">
                  <ul>
                    <li>{item.brand}</li>
                    <li>{item.model}</li>
                    <li>{item.rearcamera}</li>
                    <li>{item.frontCamera}</li>
                    <li>{item.screens}</li>
                    <li>{item.storage}</li>
                    <li>{item.os}</li>
                    <li>{item.cost}</li>
                    <li>
                      <button
                        className="btn"
                        onClick={() => dispatch(removeFromCompare(item.id))}
                      >
                        Remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        "Nothing to Compare..."
      )}
    </div>
  );
});

export default Compare;
