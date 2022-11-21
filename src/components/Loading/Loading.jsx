import React from "react";
import PropTypes from "prop-types";
import HashLoader from "react-spinners/HashLoader";

function Loading(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10rem",
        marginBottom: "10rem",
      }}
    >
      <HashLoader
        color="#b2591a"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
