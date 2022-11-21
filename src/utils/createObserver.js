// https://www.webdevdab.com/blog/lazy-loading-images-with-intersectionobserver-and-react-hooks

const createObserver = (inViewCallback = () => {}, newOptions = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  if ("IntersectionObserver" in window) {
    return new IntersectionObserver(
      inViewCallback,
      Object.assign(defaultOptions, newOptions)
    );
  }
  // Using scroll and resize event down here
  return undefined;
};

export default createObserver;
