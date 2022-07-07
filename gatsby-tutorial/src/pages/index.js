import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"} >
      <p>I am making this page by following the Gatsby tutorial.</p>
      <StaticImage
        src="../images/clifford.jpg"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera">
      </StaticImage>
    </Layout>
  );
}

export default IndexPage;