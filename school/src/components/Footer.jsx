import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      {/* footer */}
      <section className="w3l-footer-29-main">
        {/* copyright */}
        <section className="w3l-copyright text-center">
          {/* move top */}
          <button onClick={topFunction} id="movetop" title="Go to top">
            &#10548;
          </button>

          {/* /move top */}
        </section>
        {/* //copyright */}
      </section>
      {/* //footer */}
    </div>
  );
}

export default Footer;
