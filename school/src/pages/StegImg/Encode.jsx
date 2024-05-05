import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumps from "../../components/BreadCrumps.jsx";
import StegoContext from "./StegoContext.js";
import "./encode.css";

const Encode = () => {
  let navigate = useNavigate();
  const a = useContext(StegoContext);
  const handleSecret = (e) => {
    a.setSecret(e.target.value);
  };
  // useEffect(() => {
  //   console.log(a);
  // }, []);
  // console.log(a.isEncoded);
  // console.log(a);
  return (
    <div>
      <BreadCrumps page="Tools/Steganography/Encode" title="Encoding Image" />
      <div className="box">
        <div className="secret-message">
          <h3>Enter Secret Message to Encode:</h3>
          <input
            className="input-secret"
            type="text"
            placeholder="Secret Message..."
            value={a.secret}
            onChange={handleSecret}
          />
        </div>
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
        <div className="nav-btns">
          <button id="nav-btn" name="nav-btn" style={{ display: "none" }} />
          <label className="stbtn-outer" htmlFor="encode-stbtn">
            {(a.secret === "" || !a.isImageUploaded) && (
              <div
                className="stbtn-disabled"
                onClick={() => a.setMsg("Please upload an image!")}
              >
                Encode
              </div>
            )}
            {a.secret != "" && a.isImageUploaded && (
              <div className="stbtn" onClick={a.encode}>
                Encode
              </div>
            )}
          </label>
          {/* <button id="nav-btn" name="nav-btn" style={{ display: "none" }} />
          <label className="stbtn-outer" htmlFor="download-stbtn">
          {(a.secret === "" || !a.isEncoded || !a.isImageUploaded) && (
            <div
            className="stbtn-disabled"
            onClick={() => a.setMsg("Please upload an image!")}
            >
            Download Image
            </div>
          )}
          {a.secret != "" && a.isEncoded && a.isImageUploaded && (
            <div className="stbtn" onClick={a.downloadImage}>
            Download Image
            </div>
          )}
        </label> */}
          <button id="nav-btn" name="nav-btn" style={{ display: "none" }} />
          <label className="stbtn-outer" htmlFor="return">
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

export default Encode;
