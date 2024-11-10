// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent text={"hi there1"} />} />
//       <CardWrapper innerComponent={<TextComponent text={"hi there2"} />} />
//       <TextComponent text={"hi there"} />
//     </div>
//   );
// };

// const CardWrapper = ({ innerComponent }) => {
//   return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
// };

// const TextComponent = ({ text }) => {
//   return (
//     <div>
//       <h1>{text}</h1>
//     </div>
//   );
// };

// export default App;

// this is the wrong way to do things

import React from "react";

const App = () => {
  return (
    <div>
      <CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>
        <div>he there 2 </div>
      </CardWrapper>
    </div>
  );
};

const CardWrapper = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
};

const TextComponent = () => {
  return <h1>hi there</h1>;
};

export default App;
