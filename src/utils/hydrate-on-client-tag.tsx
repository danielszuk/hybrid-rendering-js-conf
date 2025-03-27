// @ts-nocheck
import React, { FC, PropsWithChildren, ReactNode } from "react";

export const HydrateOnClientTag: FC<{
  component: string;
  props: string;
  children: any;
}> = ({ component, props, children }) => {
  return (
    <hydrate-on-client component={component} props={props}>
      {children}
    </hydrate-on-client>
  );
};
