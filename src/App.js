import React, { useState } from "react";
const text = [
  "please don't do this",
  "miss click right?",
  "last warning!",
  "you sure?",
  "think again?",
  "please!!",
  "keep trying",
];
export default function App() {
  const [no, setNo] = useState("No");
  const [btn1, setBtn1] = useState(2);
  const [btn2, setBtn2] = useState(2);
  const [isYes, setIsYes] = useState(false);
  const handleBtn1Click = () => {
    const newsize = btn1 * 1.5;
    setBtn1(newsize);
    const random = Math.floor(Math.random() * 6) + 1;
    setNo(text[random]);
  };
  const handleBtn2Click = () => {
    setIsYes(true);
  };
  const t = "<3";
  return (
    <>
      {!isYes && (
        <h1 style={{ fontFamily: "cursive" }}>Will you treat me with momoz:)</h1>
      )}
      <div className="container">
        {!isYes ? (
          <img
            src="https://i.gifer.com/1ABW.gif"
            alt="testimg"
            className="img"
          />
        ) : (
          <>
            <img
              src="https://i.pinimg.com/originals/d2/1c/82/d21c82639f27efef9b1fd081d155be42.gif"
              alt="testimg"
              className="img"
            />
            <h1 style={{ fontFamily: "cursive" }}>I knew it {t}</h1>
          </>
        )}
        {!isYes && (
          <div className="main">
            <button
              onClick={handleBtn2Click}
              className="btn"
              style={{
                fontSize: `${btn1}rem`,
                backgroundColor: "#0D9276",
                fontFamily: "cursive",
              }}
            >
              Yes
            </button>
            <button
              className="btn"
              style={{
                fontSize: `${btn2}rem`,
                backgroundColor: "#D04848",
                fontFamily: "cursive",
              }}
              onClick={handleBtn1Click}
            >
              {no}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
