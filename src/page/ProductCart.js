import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFromCart } from "../Slice/CartSlice";
const ProductCart = () => {
  const cart = useSelector((state) => state.Cart);
  const Dispatch = useDispatch();
  function handleRemove(pid){
    Dispatch(DeleteFromCart(pid));
  }
  // const quantity = useSelector((state) => state.quantity);
  return (
    <div className="container">
      <div className="row">
        {cart.map((product) => (
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
                onClick={()=>handleRemove(product.id)}
              >
               Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
