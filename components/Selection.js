import Link from "next/link";

const Selection = () => (
  <div className="selection">
    <div className="container col-lg-6 col-md-6 mx-auto">
      <div className="header">
        <span>
          <p>Choose your preferrable investment type</p>
        </span>
      </div>

      <div className="pics">
        <div className="image">
          <img
            class="rounded-circle"
            src="https://static.wixstatic.com/media/25880e_9f54d679580c4d51a03a9263b00d32e5~mv2_d_1300_1300_s_2.jpg/v1/fill/w_136,h_124,al_c,q_80,usm_0.66_1.00_0.01/93463110-capital-investment-icon.webp"
            alt="investment pic"
          />
          <Link href="safe_investment">
            <a>SAFE INVESTMENT</a>
          </Link>
        </div>

        <div className="image">
          <img
            class="rounded-circle"
            src="https://static.wixstatic.com/media/25880e_6e760e5b78e443038f7a56e6c4d409e4~mv2.png/v1/fill/w_128,h_124,al_c,q_80,usm_0.66_1.00_0.01/download.webp"
            alt="balanced pic"
          />
          <Link href="balanced">
            <a>BALANCED</a>
          </Link>
        </div>
        <div className="image">
          <img
            class="rounded-circle"
            src="https://static.wixstatic.com/media/25880e_ceb0e5171ff54fbb85f8471cbb0dc405~mv2.png/v1/fill/w_132,h_140,al_c,q_80,usm_0.66_1.00_0.01/investor-investment-investing-invest-009.webp"
            alt="high profit pic"
          />
          <Link href="high_gain">
            <a>HIGH GAIN</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Selection;
