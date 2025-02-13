import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Search = () => {
  return <div>search</div>;
};

export default Search;

export const Route = createFileRoute("/search/")({
  component: Search,
});
