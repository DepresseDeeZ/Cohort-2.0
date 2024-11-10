import React, { useState } from "react";

const PushingDown = () => {
  return (
    <div>
      <HeaderWithBtn />
      <Header title={"My Name Is Umnang"} />
    </div>
  );
};
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const HeaderWithBtn = () => {
  const [title, settitle] = useState("My Name Is Umang");
  function onHandleBtn() {
    settitle(`My Name is ${Math.random()}`);
  }
  return (
    <div>
      <button onClick={onHandleBtn}>Click Here</button>
      <Header title={title} />
    </div>
  );
};

export default PushingDown;
