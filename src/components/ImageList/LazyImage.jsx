import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import apiConfig from "api/apiConfig";
import assets from "assets";
import styles from "./ImageList.module.scss";

const cx = classNames.bind(styles);

function LazyImage(props) {
  const { observer, imageId, alt } = props;
  const imageRef = useRef(null);

  useEffect(() => {
    const { current } = imageRef;

    if (observer !== null) {
      observer?.observe(current);
    }

    return () => {
      observer?.unobserve(current);
    };
  }, [observer]);
  return (
    <div className={cx("image-box")}>
      <img
        ref={imageRef}
        lazy-src={apiConfig.smallImage(imageId)}
        alt={alt}
        src={assets.cardBack}
        loading="lazy"
      />
    </div>
  );
}

LazyImage.propTypes = {};

export default LazyImage;
