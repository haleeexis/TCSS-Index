import React from "react";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>blog posts</h1>
        </div>
        <section>
          <div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
