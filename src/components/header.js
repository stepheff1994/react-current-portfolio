import React from "react";

function Header() {
  return (
    <>
      <header>
        <h1 className="h-classes">Stephanie Freyler Santana </h1>

        <nav>
          <ul>
            <li>
              <a href="#about-me">
                <strong>About Me</strong>
              </a>
            </li>
            <li>
              <a href="#work">
                <strong>Current Work</strong>
              </a>
            </li>
            <li>
              <a href="#contact-me">
                <strong>Contact Me</strong>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header 