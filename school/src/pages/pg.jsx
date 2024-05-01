import React from 'react';
import BreadCrumps from "../components/BreadCrumps";
function check() {
    return (
      <div>
        <BreadCrumps page="Tools" title="Tools" />
        {/* <div> */}
        {/* <h3><a href="PasswordStrengthChecker">Password Strength Checker</a></h3> */}
          {/* < /> */}
        {/* </div> */}
        <div>
          <h3><a href="courses">Password Generator</a></h3>
          {/* <PasswordGenerator /> */}
        </div>
        <div>
          <h3><a href="courses">Encryption</a></h3>
          {/* <Encryption /> */}
        </div>
        <div>
          <h3><a href="courses">Deception</a></h3>
          {/* <Deception /> */}
        </div>
      </div>
    );
  }
  export default check;