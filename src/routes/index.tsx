import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Main from "Main";

const Index = () => {
  return <Main />;
};

export default Index;

export const Route: unknown = createFileRoute("/")({
  component: Index,
});
