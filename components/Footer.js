import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="footer middle navbar-collapse mx-auto">
          <div className="container">
            <div className="text">
              <button
                type="button"
                className="btn btn-link"
                onClick={this.scrollToTop}
              >
                © 2019 UPVES
              </button>
            </div>

            <div className="icon">
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
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
