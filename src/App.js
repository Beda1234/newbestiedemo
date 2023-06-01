import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const App = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYesClick = () => {
    setShowWarning(true);
    toast.success("Thank you, Bandaar");
  };

  const handleNoHover = () => {
    setNoButtonStyle({
      position: "absolute",
      top: Math.random() * 70 + 10 + "%",
      left: Math.random() * 70 + 10 + "%",
    });
  };
  return (
    <div className="App">
      <h1 className="title">Hii Bandar</h1>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/good-times-and-crazy-friend-make-the-best-memories.gif'}
          alt="Cute Dog"
          className="dog-image"
        />
      </div>
      <p className="question">Lets enjoy and create some new memories </p>
      <button className="yes-button" onClick={handleYesClick}>
        Yes
      </button>
    
      <button className="no-button" style={noButtonStyle} onMouseOver={handleNoHover}onTouchStart={handleNoHover}>
        No
      </button>
      {/* {showWarning && (
        <div className="warning">
          <AiOutlineWarning size={30} />
          <p>Thank you, Bandaar</p>
        </div>
      )} */}
      <ToastContainer />
    </div>
  );
};

export default App;
