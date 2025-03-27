import ReactDOM from "react-dom/client";
import { hydratableComponents } from "./renderer/hydratable-components";
import { ComponentProps } from "react";

// Render the app on the client side
const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("Root node not found.");

// Get elements to hydrate
const hydrateToRender = document.getElementsByTagName("hydrate-on-client");

// Go through each element and hydrate the component
for (let i = 0; i < hydrateToRender.length; i++) {
  const element = hydrateToRender[i];

  // Get component
  const componentKey = element.getAttribute("component");
  if (!componentKey)
    throw new Error(`Component key '${componentKey}' not found.`);
  const Component =
    hydratableComponents[componentKey as keyof typeof hydratableComponents];

  // Get component props
  const props = element.getAttribute("props");
  const componentProps: ComponentProps<typeof Component> = props
    ? JSON.parse(props)
    : undefined;

  // Hydrate the component
  ReactDOM.hydrateRoot(element, <Component {...componentProps} />);
}
