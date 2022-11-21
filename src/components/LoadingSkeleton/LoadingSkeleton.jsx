import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./LoadingSkeleton.module.scss";

const cx = classNames.bind(styles);

function LoadingSkeleton({ className = "", height = 50 }) {
  const styles = {
    height: height,
  };
  return <div className={cx("skeleton", `${className}`)} style={styles}></div>;
}

LoadingSkeleton.propTypes = {};

export default LoadingSkeleton;
