import "./App.css";
import { useState } from "react";
import { memo } from "react";
// using React memo to prevent re-rendering of the component
function App() {
  const [title, setTitle] = useState("My name is Umang");

  return (
    <div>
      <button
        onClick={() => {
          setTitle(`My name is ${Math.random()}`);
        }}
      >
        Update the title
      </button>
      <Header title={title}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
      <Header title={"hello"}></Header>
    </div>
  );
}

// using React memo to prevent re-rendering of the component
const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
