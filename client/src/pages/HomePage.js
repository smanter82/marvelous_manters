import OurNavbar from "../components/OurNavbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import wordLogo from "../images/pageImages/pageLogoWithText.jpg";

export default function HomePage() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div class="homePage">
        <p>Welcome to the Manters' Special Talents Website!</p>
        <img src={wordLogo} alt="Marvelous Manters logo" />
      </div>
    </>
  );
}
