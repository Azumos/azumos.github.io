import React from "react";
import PropTypes from "prop-types";

import { Header } from "../header";

interface ILayoutComponentProps {
  children: React.ReactNode;
  location: any;
}

const Layout: React.FC<ILayoutComponentProps> = ({ children, location }) => {
  return (
    <>
      <Header siteTitle={"Azumos"} location={location} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ minHeight: "80vh" }}>{children}</main>
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
