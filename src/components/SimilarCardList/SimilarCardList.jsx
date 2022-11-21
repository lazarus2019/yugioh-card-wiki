import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading/Loading";
import apiConfig from "api/apiConfig";
import axios from "axios";
import queryString from "query-string";

function SimilarCardList(props) {
  const { card } = props;
  const [loading, setLoading] = useState(true);
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    const fetchSimilarCards = async () => {
      const params = {
        name: card.name,
        desc: card.desc,
      };
      // const res = await axios.get(
      //   `https://ygoprodeck.com/api/card/similarCards.php?${queryString.stringify(
      //     params
      //   )}`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": "*",
      //     },
      //   }
      // );

    };
    fetchSimilarCards();
    setLoading(false);
  }, [card]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        listCards.map((card, index) => (
          <div>
            <img src={apiConfig.smallImage(card.id)} alt="" />
            <div>{card.name}</div>
          </div>
        ))
      )}
    </div>
  );
}

SimilarCardList.propTypes = {};

export default SimilarCardList;
