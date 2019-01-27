import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

export default () => (
  //   <div style={{ color: `purple` }}>
  //     <Link to="/contact/">Contact</Link>
  //     <Header headerText="Hello Gatsby!"/>
  //     <p> What a World. </p>
  //     <img src="https://source.unsplash.com/random/400x200" alt="" />
  //   </div>
  <div>
  <Layout>
    <p>
      If you have a good news, share with us! :)
    </p>
    <img src="https://source.unsplash.com/random/1200x800" alt="Random image" />
  </Layout>
  </div>
);
