import Head_Banner from "../components/Head_Banner";
import Layout from "../layouts/Layout";
import Link from "next/link";
import "../styles/styles.scss";

const education = () => (
  <Layout>
    <Head_Banner
      text_1={"EDUCATION"}
      text_2={"You can learn about investment here."}
    />
    <div className="eduContainer">
      <div className="sideBar border">
        <p>Title</p>
        <p>TesPenjelasan</p>
      </div>
      <div className="article">Tes Penjelasan ARtikel</div>
    </div>
  </Layout>
);

export default education;
