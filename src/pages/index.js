import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <h1>ALEXIS HERRERA</h1>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </Layout>
  );
};

export default IndexPage;
