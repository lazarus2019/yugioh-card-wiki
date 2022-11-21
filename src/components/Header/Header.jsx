import classNames from "classnames/bind";
import assets from "assets";
import styles from "./Header.module.scss";

import { BsFillMoonFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Header(props) {
  return (
    <div className={cx("header")}>
      <div className={cx("container", "header__wrapper")}>
        <Link to="/" className={cx("header__logo")}>
          <img src={assets.logo} alt="" />
        </Link>

        <div className={cx("header__menu")}>
          <div className={cx("header__menu__option")}>Random Card</div>
          <div className={cx("header__menu__option")}>
            <BsFillMoonFill size={15} />
          </div>
          <div className={cx("header__menu__option")}>
            <BsSearch size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
