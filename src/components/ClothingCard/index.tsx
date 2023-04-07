/* eslint-disable @next/next/no-img-element */
import { ClothingContext } from "../../../contexts/ClothingContext";
import React, { useContext } from "react";
import * as Component from "./Cards";

interface ClouthingProps {
  img: any;
  title: any;
  price: number;
}

const ClothingCard: React.FC<ClouthingProps> = ({ img, title, price }) => {
  const { handleAddItemToCart } = useContext<any>(ClothingContext);

  return (
    <>
      <Component.Card>
        <img className="card-logo" src={img} />
        <h1 className="card-title">
          {title} R$ {price}
        </h1>
        <Component.Button
          onClick={() => handleAddItemToCart(img, title, price)}
          className="btn btn-pulsando"
        >
          ADICIONAR
        </Component.Button>
      </Component.Card>
    </>
  );
};

export default ClothingCard;
