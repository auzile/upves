import Anotherpage from "../components/Articles/Anotherpage";
import Intro from "../components/Articles/Introduction";
import Head_Banner from "../components/Head_Banner";
import Listlink from "../components/Listlink";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";

class education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Getting Started",
        "Instruction",
        "Download",
        "Contents",
        "Browsers & Devices",
        "Theming"
      ],
      IndexState: 0
    };
  }

  handleChange = e => {
    this.setState({ IndexState: e });
  };

  render() {
    let article = "";
    if (this.state.IndexState === 0) {
      article = <Intro />;
    } else {
      article = <Anotherpage />;
    }
    return (
      <Layout>
        <Head_Banner />
        <div className="eduContainer">
          <Listlink list={this.state.list} onChangeIndex={this.handleChange} />
          <div className="article">{article}</div>
        </div>
      </Layout>
    );
  }
}

export default education;
