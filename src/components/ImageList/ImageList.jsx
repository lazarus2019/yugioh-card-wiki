import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import createObserver from "utils/createObserver";
import LazyImage from "./LazyImage";
import Grid from "components/Grid/Grid";
import { Link } from "react-router-dom";


const onImageInView = (entries, observer) => {
  entries?.forEach((entry) => {
    if (entry?.isIntersecting) {
      const element = entry?.target;
      const imageSrc = element?.getAttribute("lazy-src");

      element?.removeAttribute("lazy-src");
      element?.setAttribute("src", imageSrc);

      observer?.unobserve(element);
    }
  });
};

function ImageList(props) {
  const { data = [] } = props;
  const [images, setImages] = useState([]);

  const [imageObserver, setImageObserver] = useState(null);

  useEffect(() => {
    const newImageObserver = createObserver(onImageInView);
    setImageObserver(newImageObserver);

    return () => {
      // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect
      newImageObserver.disconnect();
    };
  }, [data]);

  useEffect(() => {
    const newImageList = data?.map((el) => ({
      id: el.id,
      name: el.name,
      alt: el.name,
      type: el.type,
      imageId: el.card_images[0].id,
    }));

    setImages(newImageList);
  }, [data]);

  return (
    <Grid col={6} mdCol={4} smCol={3} gap={20}>
      {images?.map((image, index) => (
        <Link to={`/detail/${image.id}`}>
          <LazyImage
            key={index}
            observer={imageObserver}
            imageId={image.imageId}
            alt={image.alt}
            id={image.id}
          />
        </Link>
      ))}
    </Grid>
  );
}

ImageList.propTypes = {};

export default ImageList;
