import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

// function Home() {
//   return <h1>Hello my first component!</h1>;
// }

// export default Home;

export default function Home() {
  const [text, setText] = useState("Hello React");
  const changeText = () => {
    setText("Gde si Žobla?");
  };
  const [info, setInfo] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInfo("Use effect is triggered");
    setCount(count + 1);
  }, [text]);

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>{text}</h1>
          <h1>Hello my first component!</h1>
          <button onClick={changeText}>Change text</button>
          <h1>
            {info} - {count} times
          </h1>
        </div>
      </div>
    </Layout>
  );
}
