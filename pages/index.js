import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Selection from "../components/Selection";
import Tagline from "../components/Taglines";
import Layout from "../layouts/Layout";
import "../styles/styles.scss";

const Index = () => (
  <Layout>
    <Banner />
    <Selection />
    <Tagline />
    <Contact />
  </Layout>
);

export default Index;
