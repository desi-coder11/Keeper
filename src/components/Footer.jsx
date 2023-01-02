import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright desi_coder11 ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
