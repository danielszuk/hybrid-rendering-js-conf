import { FC } from "react";
import { Card, CardProps } from "./card";

export const CardList: FC<{ cards: Array<CardProps> }> = ({ cards }) => {
  return (
    <ul className="card-list">
      {cards.map((cardProps) => (
        <li key={cardProps.id}>
          <Card {...cardProps} />
        </li>
      ))}
    </ul>
  );
};
