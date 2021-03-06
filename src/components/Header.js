import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <section className="hero is-dark is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">DiagnosticApp</h1>
          </div>
          <div className="column is-three-fifths">
            <div className="content is-medium">
              <p>{props.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  children: PropTypes.string
};

export default Header;
