import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const content = links.map ((link) => {
    const load = '#' + link
    
    return <a key = {link} href = {load}>{link}</a>

  }) 
  return <nav>{ content }</nav>;
}

export default NavBar;
