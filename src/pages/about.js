import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

export default () => (
  <div style={{ color: `teal` }}>
    <Layout>
      {/* <Header headerText="About हाम्रो नेपाल मा" /> */}
      <h3>About</h3>
      <p>
        "What's happening in Nepal?" A question, usually, brings a sense of
        pessimisim among us. I believe, it is because of lack of good positive
        news. We willfully miss the good news.
      </p>
      <p>
        So, This is our attempt to report the good bits. Someting to be hopeful
        for.
      </p>
    </Layout>
  </div>
);
