import React from "react";
import pi1 from "./image/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe_360x.webp"
import png1 from "./pic/ic5_180x.png"
import png2 from "./pic/ic1_180x.webp"
import png3 from "./pic/ic3_180x.webp"
import png4 from "./pic/ic4_180x.webp"
import png5 from "./pic/ic6_180x.webp"
import png6 from "./pic/ic2_180x.png"
function Content() {
    return (<>
        <div className="mcs">
        <button  className="uparrow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
       
      >
      <i class="fa fa-angle-double-up"></i>
      </button>
            <div className="png">
                <div className="pn1">
                    <div>
                        <h1>INTELLIGENT PROCESSOR</h1>
                        <p>The earth was said to have dwelt in this street</p>
                    </div>
                    <div>
                        <img src={png1} alt="e" />
                    </div>

                </div>
                <div className="pn2">
                    <div>
                        <h1>4.0 WIFI SPECS</h1>
                        <p>Conveniently, there are no vehicles that you.</p>
                    </div>
                    <div> 
                        <img src={png2} alt="e" />
                    </div>
                </div>
                <div className="pn3">
                    <div>
                        <h1>STYLISH BEVEL EDGES</h1>
                        <p>The earth was said to have dwelt in this street</p>
                    </div>
                    <div>
                        <img src={png3} alt="e" />
                    </div>
                </div>
            </div>
            <div className="png1">
                <img src={pi1} alt="d"></img>
            </div>
            <div className="png2">
                <div className="pn1">
                <div>
                    <img src={png4} alt="e" />
                    </div>
                    <div>
                    <h1>INTELLIGENT PROCESSOR</h1>
                    <p>The earth was said to have dwelt in this street</p>
                    </div>
                   
                </div>
                <div className="pn2">
                <div>
                    <img src={png5} alt="e" />
                    </div>
                <div>
                    <h1>INTELLIGENT PROCESSOR</h1>
                    <p>The earth was said to have dwelt in this street</p>
                    </div>
                 
                </div>
                <div className="pn3">
                <div>
                    <img src={png6} alt="e" />
                    </div>
                <div>
                    <h1>INTELLIGENT PROCESSOR</h1>
                    <p>The earth was said to have dwelt in this street</p>
                    </div>
                   
                </div>
            </div>
        </div>
    </>);
}
export default Content;