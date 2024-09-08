"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/lib/store";

const Providers = (props: { children: ReactNode }) => {
  //props
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
