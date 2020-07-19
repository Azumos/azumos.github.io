import React from "react";
import PropTypes from "prop-types";

import { Header } from "./header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Azumos official website"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with ❤️ in Hong Kong
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
