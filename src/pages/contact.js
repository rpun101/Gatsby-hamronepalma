import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import Header from "../components/header";

export default () => (
  <div style={{ color: `teal` }}>
    <Layout>
        <h3>Contact</h3>
      <p>Send us a message!</p>
      <h3>I'd love to talk! Email me at the address below</h3>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  </div>
);
