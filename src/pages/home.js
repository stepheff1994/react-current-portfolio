import React from "react";

function Home() {
  return (
    <>
      <section className="hero"></section>
      <h2 className="h-classes"></h2>
      <section className="content">
        <div id="about-me" className="content-section">
          <h3>
            About <br /> Me
          </h3>
          <p>
            <strong>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              neaue tempore, inventore deleniti optio dolores architecto ipsa.
              Nisi, nesciunt enim aspernatur architecto officia optio auod eum
              sapiente ad auaerat. Fugit? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat asperiores mollitia reprehenderit auas
              animi. Illum hic laboriosam auo molestiae perspiciatis natus
              alias. Molestias itaaue conseauatur auos commodi aui nam
              voluptates!
            </strong>
          </p>
        </div>

        <div id="work" className="content-section">
          <h3>Work</h3>
          <div className="container">
            <div className="grid-container">
              <a
                className="grid-item item-1"
                href="https://la-locals.herokuapp.com/"
              >
                Featured:
                <strong>LA-LOCALS</strong>
              </a>
              <a
                className="grid-item item-2"
                href="https://stepheff1994.github.io/javascriptchallenge/"
              >
                <strong>Password Generator</strong>
              </a>
              <a
                className="grid-item item-3"
                href="https://meural.herokuapp.com/"
              >
                <strong>Meural</strong>
              </a>
            </div>
          </div>
        </div>

        <div id="contact-me" className="content-content">
          <h3>
            Contact <br /> Me
          </h3>
          <address>
            <ul>
              <li>
                <a href="mailto:steph.f.codes@gmail.com">
                  steph.f.codes@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/stepheff1994">GitHub</a>
              </li>
              <li>
                <a href="www.linkedin.com/in/stephaniefreylersantana">
                  LinkedIn
                </a>
              </li>
            </ul>
          </address>
        </div>
      </section>
    </>
  );
}

export default Home;
