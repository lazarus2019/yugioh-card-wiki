import classNames from "classnames/bind";
import assets from "assets";
import styles from "./Header.module.scss";

import { BsFillMoonFill, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import yugiohAPI from "api/yugiohAPI";

const cx = classNames.bind(styles);
function Header(props) {
  const navigate = useNavigate()

  const handleClickRandomCard = async ()=>{
    try {
      const data = await yugiohAPI.random()
      navigate(`detail/${data.id}`, {
        state: {
          card: data,
        },
      });
    } catch (error) {
      console.log("Fetch error: ", error)
    }
  }
  return (
    <div className={cx("header")}>
      <div className={cx("container", "header__wrapper")}>
        <Link to="/" className={cx("header__logo")}>
          <img src={assets.logo} alt="" />
        </Link>

        <div className={cx("header__menu")}>
          <div className={cx("header__menu__option")} onClick={handleClickRandomCard}>Random Card</div>
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
