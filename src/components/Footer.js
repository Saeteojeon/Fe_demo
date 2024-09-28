import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Neighborhood Explorer</p>
      <nav>
        <a href="#terms-of-use">Terms of Use</a>
        <a href="#privacy-policy">Privacy Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
