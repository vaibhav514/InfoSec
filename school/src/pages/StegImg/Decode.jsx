import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumps from "../../components/BreadCrumps";
import StegoContext from "./StegoContext";
import "./decode.css";

const Decode = () => {
  let navigate = useNavigate();
  const a = useContext(StegoContext);
  // console.log(a);
  return (
    <div>
      <BreadCrumps page="Tools/Steganography/Decode" title="Decoding Image" />
      <div className="box">
        <input
          type="file"
          id="upload-image"
          name="upload-image"
          onChange={a.loadImage}
          style={{ display: "none" }}
        />
        <label className="stbtn-outer" htmlFor="upload-image">
          <div className="stbtn">Upload Image</div>
        </label>
        {a.msg != "" && <p className="message-text">{a.msg}</p>}
        <label className="stbtn-outer" htmlFor="decode-stbtn">
          {!a.isImageUploaded && (
            <div
              className="stbtn-disabled"
              onClick={() => a.setMsg("Please upload an image!")}
            >
              Decode
            </div>
          )}
          {a.isImageUploaded && (
            <div name="decode-stbtn" className="stbtn" onClick={a.decode}>
              Decode
            </div>
          )}
        </label>
        <button id="nav-stbtn" name="nav-stbtn" style={{ display: "none" }} />
        <label className="stbtn-outer" htmlFor="encode-stbtn">
          <a href="/tools/steganography">
            <div
              className="stbtn"
              onClick={() => {
                a.setMsg("");
                a.setIsImageUploaded(false);
              }}
            >
              Return to Home Page
            </div>
          </a>
        </label>
      </div>
      <div className="center">
        <img
          style={{ display: "none" }}
          id="encoded-image"
          alt="encoded output"
        ></img>
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
};

export default Decode;
