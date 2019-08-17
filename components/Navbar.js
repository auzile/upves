import Link from "next/Link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="middle navbar-collapse col-lg-6 col-md-6 mx-auto">
      <Link href="/">
        <a className="logo navbar-brand">UPVES</a>
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active px-1">
          <Link href="/">
            <a className="textmenu active nav-link">
              HOME <span className="sr-only">(current)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item active px-1">
          <Link href="education">
            <a className="textmenu nav-link">EDUCATION</a>
          </Link>
        </li>
        <li className="nav-item dropdown show active px-1">
          <Link href="investment">
            <a className="textmenu main nav-link" data-toggle="dropdown">
              INVESTMENTS
            </a>
          </Link>
          <ul className="dropdown-menu">
            <Link href="safe_investment">
              <a className="textmenu dropdown-item">SAFE INVESTMENTS</a>
            </Link>
            <Link href="balanced">
              <a className="textmenu dropdown-item">BALANCED</a>
            </Link>
            <Link href="high_gain">
              <a className="textmenu dropdown-item">HIGH GAIN</a>
            </Link>
          </ul>
        </li>
        <li className="nav-item active row pl-3">
          <Link href="/">
            <a className="twitter nav-link p-1">
              <img src="https://static.wixstatic.com/media/d090c1c8997ee76d531500a6002f81a2.png/v1/fill/w_18,h_18,al_c,q_80,usm_0.66_1.00_0.01/d090c1c8997ee76d531500a6002f81a2.webp" />
            </a>
          </Link>
          <Link href="/">
            <a className="ig nav-link p-1">
              <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_18,h_18,al_c,q_80,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
