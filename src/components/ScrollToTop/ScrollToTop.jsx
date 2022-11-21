import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ScrollToTop.module.scss";
import { BsChevronUp } from "react-icons/bs";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function ScrollToTop(props) {
  const goToTopRef = useRef(null);

  useEffect(() => {
    const shrinkGoTop = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        goToTopRef.current.classList.add(cx("shrink"));
      } else {
        goToTopRef.current.classList.remove(cx("shrink"));
      }
    };

    window.addEventListener("scroll", shrinkGoTop);

    return () => {
      window.removeEventListener("scroll", shrinkGoTop);
    };
  }, []);

  const goTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={cx("goTop")} onClick={goTop} ref={goToTopRef}>
      <BsChevronUp size={15} />
    </div>
  );
}

ScrollToTop.propTypes = {};

export default ScrollToTop;
