import { FC } from "react";
import { CardList } from "./components/card-list";
import products from "./components/products.json";
import { LanguageSelector } from "./components/language-selector";

export const App: FC = () => {
  return (
    <div>
      <LanguageSelector defaultLanguage="EN" />
      <CardList cards={products} />
    </div>
  );
};
