import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
 <Fragment>
    <div className="logo hover-masks-logo">
      <a
      href="https://drive.google.com/file/d/1NZI-ZxpH4kKzVRITwzx16IGVICGD9o04/view?usp=share_link" 
      download target="_blank">
        <span className="mask-lnk">
          Ibrahim <strong> Ahmed</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item">
              <Link href="/">
                <a>
                  <span className="mask-lnk">Home</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/resume">
                <a>
                  <span className="mask-lnk">Resume</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/works">
                <a>
                  <span className="mask-lnk">Works</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contacts">
                <a>
                  <span className="mask-lnk">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
