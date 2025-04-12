import React from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className="h-12 p-4 bg-green-500 flex items-center justify-between">
      <h2>logo</h2>
      <div className="flex gap-8">
      <Link href="/About">About</Link>
      <Link href="/Courses">Courses</Link>
      <Link href="/Product">Product</Link>

      </div>
    </div>
  );
};

export default Header;
