import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DuncMan.css";
import OurNavbar from "../components/OurNavbar";

export default function DuncMan() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div class="duncManPage">
        <p>Welcome to Duncan's Page!</p>;
      </div>
    </>
  );
}
