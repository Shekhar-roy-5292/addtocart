import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart, DeleteFromCart } from "../Slice/CartSlice";
// import { Col, Row } from "react-bootstrap";
const Store = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setproducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const Dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-4 col-sm-6 card p-3 m-2"
            style={{ width: "19rem" }}
            key={product.id}
          >
            <div className="card-header d-flex justify-content-center align-content-center">
              <img
                src={product.image}
                alt=""
                className="card-img-top"
                srcset=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="card-body">
              <h6 className="card-title">{product.title}</h6>
              <h5>Price : ${product.price}</h5>
              {/* <p className="card-text">{product.description}</p> */}
              <h6>Count : {product.rating.count}</h6>
              <h6>Rating : {product.rating.rate}</h6>
            </div>
            <div className="card-footer d-flex justify-content-end">
              <button
                className=" rounded-2 btn btn-outline-dark "
                onClick={ ()=> Dispatch(AddToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
