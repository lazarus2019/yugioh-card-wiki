const apiConfig = {
  baseUrl: "https://db.ygoprodeck.com/api/v7",
  originalImage: (imgId) =>
    `https://images.ygoprodeck.com/images/cards/${imgId}.jpg`,
  smallImage: (imgId) =>
    `https://images.ygoprodeck.com/images/cards_small/${imgId}.jpg`,
};

export default apiConfig;
