import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Filter.module.scss";

const cx = classNames.bind(styles);

function Filter(props) {
  const { list, label, onChange, value = "" } = props;

  const handleChange = (e) => {
    if (!onChange) return;
    onChange(e.target.value, label);
  };

  return (
    <div>
      <select
        name={label}
        id={`filter_${label}`}
        onChange={handleChange}
        defaultValue={value}
        className={cx("select-box")}
      >
        <option value="">Select {label}</option>
        {list.map((item, index) => (
          <option
            key={index}
            value={item}
            selected={value === item?.toString()}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

Filter.propTypes = {};

export default Filter;
