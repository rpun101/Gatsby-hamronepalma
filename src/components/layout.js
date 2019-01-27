import React from "react";
import { Link } from "gatsby";
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div
    style={{
      color: `teal`,
      margin: `3rem auto`,
      maxWidth: 650,
      padding: `0 1rem`,
      backgroundColor: `#ececec`
    }}
  >
    <h1>
      Hamro Nepal Ma <em>हाम्रो नेपाल मा</em>
    </h1>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Hamro Nepal Ma [Logo here]</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink> <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
);
