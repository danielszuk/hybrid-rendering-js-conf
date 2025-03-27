import React, { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { hydratableComponents } from "./hydratable-components";
import { HydrateOnClientTag } from "../utils/hydrate-on-client-tag";

export const renderWithHydrate = <
  Component extends keyof typeof hydratableComponents
>({
  component,
  props,
}: {
  component: Component; // only keys from hydratableComponents is allowed
  props: (typeof hydratableComponents)[Component] extends FC<infer Props> // we infer the props from the component
    ? Props
    : never;
}) => {
  return (
    <HydrateOnClientTag component={component} props={JSON.stringify(props)}>
      {/* render the component in a function form */}
      {hydratableComponents[component](
        props as ComponentProps<(typeof hydratableComponents)[Component]>
      )}
    </HydrateOnClientTag>
  );
};
