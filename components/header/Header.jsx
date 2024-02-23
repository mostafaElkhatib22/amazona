import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={"/"} className="btn btn-warning text-lg">
            Amazona
          </Link>
          <ul>
            <li>
              <Link href={"/cart"} className="btn btn-ghost rounded-r-btn">
                Cart
              </Link>
            </li>
            <li>
              <Link href={"/signin"} className="btn btn-ghost rounded-r-btn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
