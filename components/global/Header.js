import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/">
          <h1 className="logo font-orange">Give it Beans</h1>
        </Link>
        <div className="hamburger">
          <Image src="/icons/bars-solid.svg" width={30} height={30} />
        </div>
        <nav>
          <Link href={"/recipes"}>
            <h4 className="font-orange link">All Recipes</h4>
          </Link>
        </nav>
      </div>
    </header>
  );
}
