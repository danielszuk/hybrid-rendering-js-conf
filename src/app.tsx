import { FC } from "react";
import { CardList } from "./components/card-list";
import products from "./components/products.json";
import { renderWithHydrate } from "./renderer/render-with-hydrate";

export const App: FC = () => {
  return (
    <div>
      {renderWithHydrate({
        component: "LanguageSelector",
        props: { defaultLanguage: "EN" },
      })}
      <CardList cards={products} />
    </div>
  );
};
