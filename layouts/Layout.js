import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = props => (
  <div className="layout">
    <Head>
      <title>Upves</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/litera/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Spinnaker&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar />
    <div className="container border col-lg-12 col-md-12">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
