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

      // const res = await axios.get(
      //   "https://ygoprodeck.com/api/card/similarCards.php?name=LaMoon%20(Rush%20Duel)&desc=%26%23039%3B%26%23039%3BA%20sorcerer%20that%20draws%20its%20powers%20from%20the%20lunar%20landscape.%26%23039%3B%26%23039%3B"
      // );

      fetch(
        "https://ygoprodeck.com/api/card/similarCards.php?name=LaMoon%20(Rush%20Duel)&desc=%26%23039%3B%26%23039%3BA%20sorcerer%20that%20draws%20its%20powers%20from%20the%20lunar%20landscape.%26%23039%3B%26%23039%3B",
        {
          method: "GET",
          mode: "cors",
        }
      )
        .then(
          (resp) => resp.json() // this returns a promise
        )
        .then((repos) => {
          for (const repo of repos) {
            console.log(repo.name);
          }
        })
        .catch((ex) => {
          console.error(ex);
        });
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
