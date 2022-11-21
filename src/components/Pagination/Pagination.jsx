import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

import PropTypes from "prop-types";
const cx = classNames.bind(styles);

function Pagination(props) {
  const { totalPage = 1, totalCard = 0, currentPage = 1, onChange } = props;
  const handleChange = (page) => {
    if (!onChange) return;
    onChange(page);
  };

  return (
    <div className={cx("pagination")}>
      <button
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={cx(
          "pagination__btn",
          `${currentPage <= 1 ? "disabled" : ""}`
        )}
      >
        Previous page
      </button>

      <div className={cx("pagination__content")}>
        Page {currentPage}/{totalPage > 0 ? totalPage : 1} of {totalCard} total
        cards
      </div>

      <button
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage >= totalPage}
        className={cx(
          "pagination__btn",
          `${currentPage >= totalPage ? "disabled" : ""}`
        )}
      >
        Next page
      </button>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;
