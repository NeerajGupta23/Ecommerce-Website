import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className=" h-full w-full object-cover object-left-top"
          src="https://rukminim1.flixcart.com/image/612/612/l01blow0/top/m/q/z/m-gr6245-white-harpa-original-imagbwnh3xqhgfbn.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60 float-left">HARPA</p>
          <p className="float-left text-justify">
            Casual Puff Sleeves Solid Women White Top
          </p>
        </div>
        <div className="flex items-center space-x-2 float-left">
          <p className="font-semibold">₹1399</p>
          <p className="line-through opacity-50">₹2399</p>
          <p className="text-green-600 font-semibold">50% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
