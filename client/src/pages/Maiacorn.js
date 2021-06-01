import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Maiacorn.css";
import OurNavbar from "../components/OurNavbar";
import maiaBackground from "../images/pageImages/sharon-mccutcheon-9Rc00n8ie-Y-unsplash.jpg";

export default function Maiacorn() {
  return (
    <div style={{ backgroundImage: `url(${maiaBackground})` }}>
      <OurNavbar></OurNavbar>
      <p>Welcome to Maia's Page!</p>;
    </div>
  );
}
