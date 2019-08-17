import Link from "next/link";

const Banner = () => (
  <div className="banner">
    <img
      src="https://i.pinimg.com/originals/e1/11/5a/e1115afea56dcaf0c273a4f3d9fc7f3a.jpg"
      className="img-fluid"
      alt="Responsive image"
    />
    <div className="container">
      <div className="text1 col-lg-6 col-md-6">
        <h2>
          <p>UPGRADE YOUR</p>
          <p>INVESTMENT PORTFOLIO</p>
          <p>HERE</p>
        </h2>
      </div>
      <div className="text2 col-lg-6 col-md-6">
        <h4>
          <p>Scale up your income with us</p>
        </h4>
      </div>
      <div className="text3 col-lg-6 col-md-6">
        <h4>
          <Link href="education">
            <a class="text-dark">
              <u>I want to learn first</u>
            </a>
          </Link>
        </h4>
      </div>
    </div>
  </div>
);

export default Banner;
