import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1 className="logo font-orange">Give it Beans</h1>
        </Link>
      </div>
    </header>
  );
}
