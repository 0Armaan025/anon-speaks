import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#323232] flex flex-row justify-center items-center">
      <div className="navbar container mx-4 flex flex-row p-2 justify-center items-center">
        <h4 className="mx-2 hover:cursor-pointer hover:underline transition-all">
          Home
        </h4>
        <h4 className="mx-2 hover:cursor-pointer hover:underline transition-all">
          Request
        </h4>
        <h4 className="mx-2 hover:cursor-pointer hover:underline transition-all">
          Code
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
