import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SalaMander.css";
import OurNavbar from "../components/OurNavbar";
import sarahBackground from "../images/pageImages/pawel-czerwinski-z7prq6BtPE4-unsplash.jpg";

export default function SalaMander() {
  return (
    <div style={{ backgroundImage: `url(${sarahBackground})` }}>
      <OurNavbar></OurNavbar>
      <p>Welcome to Sarah's Page!</p>;
    </div>
  );
}
