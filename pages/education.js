import Anotherpage from "../components/Articles/Anotherpage";
import Intro from "../components/Articles/Introduction";
import Head_Banner from "../components/Head_Banner";
import Listlink from "../components/Listlink";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";

const education = () => (
  <Layout>
    <Head_Banner />
    <div className="eduContainer">
      <Listlink />
      <div className="article">
        <Intro />
        <Anotherpage />
      </div>
    </div>
  </Layout>
);

export default education;
