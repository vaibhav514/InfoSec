import BreadCrumps from "../../components/BreadCrumps";
import "./StegImg.css";

function StegImg() {
  return (
    <div>
      <BreadCrumps page="Tools/Steganography" title="Steganography" />
      <div className="App">
        {/* <StegoState> */}
        <div className="stbtns">
          <a href="/tools/Steganography/encode">
            <div className="actual-stbtn">Encode</div>
          </a>
          <a href="/tools/Steganography/decode">
            <div className="actual-stbtn">Decode</div>
          </a>
        </div>
        {/* </StegoState> */}
      </div>
    </div>
  );
}

export default StegImg;
