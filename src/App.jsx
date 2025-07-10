import "./App.css";

import Extensions from "./Extensions/Extensions";
import Header from "./Header/Header";
import Filtro from "./Filter/Filter";
import { useEffect } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Filtro />
      <Extensions />
    </>
  );
}
