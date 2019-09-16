import Head_Banner from "../components/Head_Banner";
import Rowpic from "../components/Rowpic";
import balancedData from "../db/balanced.json";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";

class Balanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  iterates() {
    const data = balancedData.data;
    return data.map(item => <Rowpic item={item} />);
  }

  render() {
    const data = balancedData.data;
    return (
      <Layout>
        <Head_Banner
          text_1={"BALANCED INVESTMENT"}
          text_2={"Less risk, but more profit."}
        />
        <div className="cardContainer text-center">
          <div className="cardContents">{this.iterates()}</div>
        </div>
      </Layout>
    );
  }
}

export default Balanced;
