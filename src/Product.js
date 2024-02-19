import React, { useState } from "react";

function Product(props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`col-md-3 ${
        props.voucherObj.quantity === 0 ? "disabled" : ""
      }`}
    >
      <div className="product-card">
        <div className="product-card-img">
          {Number(props.voucherObj.quantity) === 0 ? (
            <label className="stock bg-danger">Fully Redeemed</label>
          ) : (
            <label className="stock bg-success">Available</label>
          )}
          <img src={props.voucherObj.picture} alt="Voucher" />
        </div>
        <div className="product-card-body">
          <p className="product-description">{props.voucherObj.description}</p>
          <h5 className="product-name">
            <a href="">{props.voucherObj.title}</a>
          </h5>
          <p className="product-name">{props.voucherObj.name}</p>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Use Voucher
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
