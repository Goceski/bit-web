import React from "react";
import Layout from "../components/layout/Layout";

// function Home() {
//   return <h1>Hello my first component!</h1>;
// }

// export default Home;

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>Hello my first component!</h1>
        </div>
      </div>
    </Layout>
  );
}
