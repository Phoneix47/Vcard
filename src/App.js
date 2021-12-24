import React, { createRef, useState } from "react";
import "./App.css";
import img from "./vcard.png";
import { useScreenshot, createFileName } from "use-react-screenshot";

/* use effect on every input field */

const App = () => {

/* use effect on every input field */
  const [namee, setName] = useState('');
  const [designation, setdesignation] = useState('');
  const [address ,setaddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [mail, setmail] = useState('');
  const [website, setwebsite] = useState('');
  
  const finputevent = (event) =>{
    setmobile(event.target.value);
 }

  const ainputevent = (event) =>{
     setName(event.target.value);
  }
  const binputevent = (event) =>{
    setdesignation(event.target.value);
 }
 const cinputevent = (event) =>{
  setaddress(event.target.value);
}

const dinputevent = (event) =>{
  setmail(event.target.value);
}

  const einputevent = (event) =>{
     setwebsite(event.target.value);
  }

  



/* take screenshot and downloading the ss  */
  const ref = createRef(null);
  

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "vCard", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
    
  };
  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };
  return (
    <>
        

      <h2 className="title">vCard Generator</h2>

      <div class="row">
        <div class="column" style={{ backgroundColor: "#DEABAB" }}>
          <h2 className="detail">Details</h2>


          
          
          
          
          <div className="form">
            
              <div className="aa">
  <label> Name </label>{" "}
                <span>
                  <input
                    className="input"
                    placeholder="Enter your name "
                    onChange={ainputevent}
                  ></input>
                </span>
              </div>

              <div className="ab">
                <label>Designation</label>
                <input placeholder="Enter your designation"
                onChange={binputevent}></input>
              </div>
              <div className="ac">
                <label>Address</label>
                <input placeholder="enter your addresss"
                onChange={cinputevent}></input>
              </div>


              <div className="af">
                <label>Mobile</label>
                <input placeholder="Enter your mobile"
                onChange={finputevent}></input>
              </div>




              <div className="ad">
                <label>Mail</label>
                <input placeholder="Enter your E-mail"
                onChange={dinputevent}></input>
              </div>
              <div className="ae">
                <label>Website</label>
                <input placeholder="Enter your Website"
                onChange={einputevent}></input>
              </div>
            

            <button className="btn1" type="submit"> Generate vCard </button>
          </div>
        </div>
        <div class="column" style={{ backgroundColor: "#bbb" }}>
          <div className="rectangl">
            
            
            <div className="conatiner" >


            <div className="down" ref={ref}>
              <img className="img1" src={img} alt="Smiley face" />
              
              <div className="a" style={{ color: "white" }}>
                {namee}
              </div>
              <div className="b" style={{ color: "white" }}>
                {designation}
              </div>
              <div className="c" style={{ color: "white" }}>
                {" "}
                {address}
              </div>
              <div className="d" style={{ color: "white" }}>
                {" "}
                {mobile}
              </div>
              <div className="e" style={{ color: "white" }}>
                {" "}
                {mail}
              </div>
              <div className="f" style={{ color: "white" }}>
                {" "}
                {website}
                
                </div>
                </div>
              </div>
            </div>
          </div>
        
        <button className="btn2" onClick={downloadScreenshot}>
          Download vCard
        </button>
      </div>
    </>
  );
};

export default App;
