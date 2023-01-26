import React from "react";
import useWidth from "../hooks/useWidth";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Navbar({ lang }) {
  const width = useWidth();
  return width > 600 ? <Desktop lang={lang} /> : <Mobile lang={lang} />
}
