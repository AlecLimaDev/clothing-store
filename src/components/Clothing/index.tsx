/* eslint-disable @next/next/no-img-element */
import React from "react";

import { clothing } from "../../../database";
import ClouthingCard from "../ClothingCard";
import * as Component from "./Section";

interface ClothingProp {
  handleAddItemToCart?: any;
}

const Clothing: React.FC<ClothingProp> = ({ handleAddItemToCart }) => {
  return (
    <Component.Main>
      <Component.Sections>
        {clothing.map((course, index) => (
          <ClouthingCard
            key={index}
            img={course.url}
            title={course.name}
            price={course.price}
          />
        ))}
      </Component.Sections>
    </Component.Main>
  );
};

export default Clothing;
