import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 bg-yellow">
      <div className="container">
        <Link href="/">
          <h1 className="logo font-cyan my-0">Give it Beans</h1>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
