import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="homePage">
        <h3> hi this is homepage</h3>
      </div>
    </>
  );
};

export default HomePage;
