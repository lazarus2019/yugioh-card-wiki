import classNames from "classnames/bind";
import styles from "./DetailPage.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import yugiohAPI from "../../api/yugiohAPI";
import { FaBook } from "react-icons/fa";
import Grid from "../../components/Grid/Grid";
import apiConfig from "../../api/apiConfig";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingSkeleton from "components/LoadingSkeleton/LoadingSkeleton";
import SimilarCardList from "components/SimilarCardList/SimilarCardList";
const cx = classNames.bind(styles);

function DetailPage(props) {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const params = {
      id: id,
    };
    setLoading(true);
    const fetchCard = async () => {
      const res = await yugiohAPI.test({ params: params });
      setCard(res.data[0]);
    };
    fetchCard();
    setLoading(false);
  }, [id]);

  const generatePurchaseLocation = (locations) => {
    const purchaseLocations = [];

    for (let location in locations) {
      const locationName = location.split("_price")[0];

      purchaseLocations.push(
        <div className={cx("purchase-box__list__item")}>
          {locationName} ${locations[location]}
        </div>
      );
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
                  src={apiConfig.originalImage(card?.card_images[0].id)}
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
                        {card?.type}
                      </p>
                    </div>
                  ) : null}
                  {card?.race ? (
                    <div className={cx("card-modal__content__info")}>
                      Typing
                      <p>
                        <FaBook size={15} />
                        {card?.race}
                      </p>
                    </div>
                  ) : null}
                  {card?.attribute ? (
                    <div className={cx("card-modal__content__info")}>
                      Attribute
                      <p>
                        <FaBook size={15} />
                        {card?.attribute}
                      </p>
                    </div>
                  ) : null}
                  {card?.level ? (
                    <div className={cx("card-modal__content__info")}>
                      Level
                      <p>
                        <FaBook size={15} />
                        {card?.level}
                      </p>
                    </div>
                  ) : null}
                  {card?.atk ? (
                    <div className={cx("card-modal__content__info")}>
                      ATK
                      <p>
                        <FaBook size={15} />
                        {card?.atk}
                      </p>
                    </div>
                  ) : null}
                  {card?.def ? (
                    <div className={cx("card-modal__content__info")}>
                      DEF
                      <p>
                        <FaBook size={15} />
                        {card?.def}
                      </p>
                    </div>
                  ) : null}
                  <div className={cx("card-modal__content__info")}>
                    Archetype
                    <p>
                      <FaBook size={15} />
                      {card?.archetype ? card?.archetype : "N/A"}
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
