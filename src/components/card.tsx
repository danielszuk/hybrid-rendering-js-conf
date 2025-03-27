import React, { FC } from "react";

export type CardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const Card: FC<CardProps> = ({ name, description, price }) => {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <p className="card-content">{description}</p>
      <p className="card-sub">{price} $</p>
    </div>
  );
};
