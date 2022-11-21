import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "hooks/useDebounce";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import { BsFillXCircleFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function SearchBar(props) {
  const { onChange, value = undefined } = props;
  const [inputValue, setInputValue] = useState(value);
  const debounceValue = useDebounce(inputValue);

  useEffect(() => {
    if (!onChange) return;
    onChange(debounceValue);
  }, [debounceValue]);

  return (
    <div className={cx("search-bar")}>
      <h3 className={cx("search-bar__header")}>Yu-Gi-Oh! Card Database</h3>
      <div className={cx("search-bar__input__wrapper")}>
        <input
          type="text"
          value={inputValue ? inputValue : ""}
          className={cx("search-bar__input")}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Yugi-oh wiki..."
        />
        <BsFillXCircleFill
          size={15}
          className={cx("search-bar__input__clear-btn")}
          onClick={() => setInputValue(undefined)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
