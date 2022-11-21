import classNames from "classnames/bind";
import styles from "./DetailPage.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import yugiohAPI from "../../api/yugiohAPI";
import { FaBook } from "react-icons/fa";
import {
  BsFillShieldFill,
  BsFillTagFill,
  BsFillStarFill,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { RiSwordFill } from "react-icons/ri";
import Grid from "../../components/Grid/Grid";
import apiConfig from "../../api/apiConfig";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingSkeleton from "components/LoadingSkeleton/LoadingSkeleton";
import SimilarCardList from "components/SimilarCardList/SimilarCardList";
const cx = classNames.bind(styles);

const purchaseUrl = {
  cardmarket: {
    name: "cardmarket",
    link: "https://www.cardmarket.com/en/YuGiOh/Cards/",
  },
  tcgplayer: {
    name: "tcgplayer",
    link: "https://shop.tcgplayer.com/yugioh/product/show?ProductName=",
  },
};
function DetailPage(props) {
  const { id } = useParams();
  const { state } = useLocation();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (state) {
      setCard(state?.card);
    } else {
      const params = {
        id: id,
      };
      const fetchCard = async () => {
        const res = await yugiohAPI.test({ params: params });
        setCard(res.data[0]);
      };
      fetchCard();
    }
    setLoading(false);
  }, [id, state]);

  const generatePurchaseLocation = (locations) => {
    const purchaseLocations = [];

    for (let location in locations) {
      const locationName = location.split("_price")[0];

      let redirectLink = null;

      if (purchaseUrl[locationName]) {
        redirectLink = (
          <a
            href={`${purchaseUrl[locationName].link}${card.name}`}
            target="_blank"
            className={cx("purchase-box__list__item")}
          >
            {locationName} ${locations[location]}
          </a>
        );
      } else {
        redirectLink = (
          <a href="#" className={cx("purchase-box__list__item")}>
            {locationName} ${locations[location]}
          </a>
        );
      }

      purchaseLocations.push(redirectLink);
    }

    return purchaseLocations;
  };

  return (
    <div>
      <div className={cx("container")}>
        {loading ? (
          <DetailPageLoading />
        ) : (
          <>
            <div className={cx("breadcrumbs")}>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                  <span>/</span>
                </li>
                <li>{card?.name}</li>
              </ol>
            </div>
            <div className={cx("card-modal")}>
              <div className={cx("card-modal__img")}>
                <img
                  src={
                    card?.card_images[0].image_url ||
                    apiConfig.originalImage(card?.card_images[0].id)
                  }
                  className={cx("skeleton")}
                />
              </div>
              <div className={cx("card-modal__content")}>
                <h2 className={cx("card-modal__content__name")}>
                  {card?.name}
                </h2>
                <div className={cx("card-modal__content__heading")}>
                  Card Info
                </div>
                <Grid col={3} mdCol={2} smCol={1} gap={10}>
                  {card?.type ? (
                    <div className={cx("card-modal__content__info")}>
                      Type
                      <p>
                        <FaBook size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?type=${card?.type}`}
                        >
                          {card?.type}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  {card?.race ? (
                    <div className={cx("card-modal__content__info")}>
                      Typing
                      <p>
                        <FaBook size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?race=${card?.race}`}
                        >
                          {card?.race}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  {card?.attribute ? (
                    <div className={cx("card-modal__content__info")}>
                      Attribute
                      <p>
                        <BsFillTagFill size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?attribute=${card?.attribute}`}
                        >
                          {card?.attribute}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  {card?.level ? (
                    <div className={cx("card-modal__content__info")}>
                      Level
                      <p>
                        <BsFillStarFill size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?level=${card?.level}`}
                        >
                          {card?.level}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  {card?.atk >= 0 ? (
                    <div className={cx("card-modal__content__info")}>
                      ATK
                      <p>
                        <RiSwordFill size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?atk=${card?.atk}`}
                        >
                          {card?.atk}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  {card?.def >= 0 ? (
                    <div className={cx("card-modal__content__info")}>
                      DEF
                      <p>
                        <BsFillShieldFill size={15} />
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?def=${card?.def}`}
                        >
                          {card?.def}
                        </Link>
                      </p>
                    </div>
                  ) : null}
                  <div className={cx("card-modal__content__info")}>
                    Archetype
                    <p>
                      <FaBook size={15} />
                      {card?.archetype ? (
                        <Link
                          className={cx("card-modal__content__info__link")}
                          to={`/?archetype=${card?.archetype}`}
                        >
                          {card?.archetype}
                        </Link>
                      ) : (
                        "N/A"
                      )}
                    </p>
                  </div>
                </Grid>
                <div className={cx("card-modal__content__heading")}>
                  Card Purchase
                </div>
                <div className={cx("card-modal__content__purchase")}>
                  {card?.card_prices?.map((locations, index) => (
                    <div key={index} className={cx("purchase-box__list")}>
                      {generatePurchaseLocation(locations)}
                    </div>
                  ))}
                </div>
                <div className={cx("card-modal__content__heading")}>
                  Card Description
                  <a
                    href={`https://yugipedia.com/wiki/${card?.name}`}
                    target="_blank"
                    className={cx("card-modal__content__redirect-link")}
                  >
                    <BsBoxArrowUpRight size={13} />
                    Yugipedia
                  </a>
                </div>
                <div className={cx("card-modal__content__desc")}>
                  {card?.desc}
                </div>
              </div>
            </div>
            <SimilarCardList card={card} />
          </>
        )}
      </div>
    </div>
  );
}

function DetailPageLoading() {
  return (
    <>
      <div className={cx("breadcrumbs")}>
        <LoadingSkeleton height={32} />
      </div>
      <div className={cx("card-modal")}>
        <div className={cx("card-modal__img")}>
          <LoadingSkeleton height={450} />
        </div>
        <div className={cx("card-modal__content")}>
          <h2 className={cx("card-modal__content__name")}>
            <LoadingSkeleton height={37} />
          </h2>
          <div className={cx("card-modal__content__heading")}>Card Info</div>
          <Grid col={3} mdCol={2} smCol={1} gap={10}>
            <div>
              <LoadingSkeleton height={60} />
            </div>
            <div>
              <LoadingSkeleton height={60} />
            </div>
            <div>
              <LoadingSkeleton height={60} />
            </div>
          </Grid>
          <div className={cx("card-modal__content__heading")}>
            Card Purchase
          </div>
          <Grid col={5} mdCol={2} smCol={1} gap={10}>
            <div>
              <LoadingSkeleton height={24} />
            </div>
            <div>
              <LoadingSkeleton height={24} />
            </div>
            <div>
              <LoadingSkeleton height={24} />
            </div>
          </Grid>
          <div className={cx("card-modal__content__heading")}>
            Card Description
          </div>
          <LoadingSkeleton height={22} />
          <LoadingSkeleton height={22} />
        </div>
      </div>
    </>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
