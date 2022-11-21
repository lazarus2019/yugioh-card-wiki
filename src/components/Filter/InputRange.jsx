import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDebounce from "hooks/useDebounce";
import classNames from "classnames/bind";
import styles from "./Filter.module.scss";

const cx = classNames.bind(styles);

function InputRange(props) {
  const { max, min, step, onChange, label, defaultValue = 0 } = props;
  const [value, setValue] = useState(defaultValue);
  const debounceValue = useDebounce(value);

  useEffect(() => {
    if (!onChange) return;
    if (parseInt(debounceValue) > 0) {
      onChange(debounceValue, label);
    } else {
      onChange(undefined, label);
    }
  }, [debounceValue]);

  return (
    <div>
      <input
        type="range"
        max={max}
        min={min}
        step={step}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        className={cx("input-box range")}
      />
      <span>{value}</span>
      {label}
    </div>
  );
}

InputRange.propTypes = {};

export default InputRange;
