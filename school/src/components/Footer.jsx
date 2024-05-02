import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
        <section className="w3l-copyright text-center">
          <button onClick={topFunction} id="movetop" title="Go to top">
            &#10548;
          </button>
        </section>
    </div>
  );
}

export default Footer;
