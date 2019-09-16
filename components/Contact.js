import Link from "next/link";

const Contact = () => (
  <div className="contact">
    <div className="container col-lg-6 col-md-6 mx-auto">
      <div className="header">
        <h1>CONTACT US</h1>
      </div>
      <div className="body">
        <div className="site">
          <div className="icons">
            <img src="https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_41,h_41,al_c,q_80,usm_0.66_1.00_0.01/9c4b521dd2404cd5a05ed6115f3a0dc8.webp" />
          </div>
          <Link href="https://twitter.com/upvesofficial">
            <a target="_blank">twitter.com/upvesofficial</a>
          </Link>
        </div>
        <div className="site">
          <div className="icons">
            <img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_41,h_41,al_c,q_80,usm_0.66_1.00_0.01/8d6893330740455c96d218258a458aa4.webp" />
          </div>
          <Link href="http://instagram.com/upves">
            <a target="_blank">instagram.com/upves</a>
          </Link>
        </div>
        <div className="site">
          <div className="icons">
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </div>
          <Link href="upvesofficial@gmail.com">
            <a target="_blank">upvesofficial@gmail.com</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
