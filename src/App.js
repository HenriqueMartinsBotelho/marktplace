import React from "react";
import PromotionCard from "./components/Promotion/Card/Card";

function App() {
  const promotion = {
    id: 1,
    title:
      "Kit notebook kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
    price: 1799,
    imageUrl:
      "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_IN_Informatica/SGNP730XBEKP2/SGNP730XBEKP2_PRD_447_1.jpg",
    url: "http://www.amazon.com",
    comments: [
      {
        id: 1,
        comment: "Tela HD",
      },
    ],
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
