import "./Cards.css";
import cards_img1 from "../../assets/images/cards1.png";
import cards_img2 from "../../assets/images/cards2.png";
const Cards = () => {
  return (
    <div className="cards">
      <div className="cards_card">
        <span>
          <img src={cards_img1} alt="cards_img" className="cards_img" />
        </span>
        <div className="cards_content1">
          <h2 className="cards_title">
            Sugar peach hydrating Lip Balm & Lip Care
          </h2>
          <p className="cards_text">
            A cushiony, peach-flavored lip balm that delivers nonstop 24-hour
            moisture and a smooth natural shine.
          </p>
          <button className="cards_btn">Buy Now</button>
        </div>
      </div>

      <div className="cards_card">
        <div className="cards_content2">
          <h2 className="cards_title">
            Make this DIY Lip Balm in less than 30 minutes
          </h2>
          <p className="cards_text">
            This lip balm takes less than 30 mins to prepare, and you'll have a
            blast doing it.
          </p>
          <button className="cards_btn">Buy Now</button>
        </div>
        <span>
          <img src={cards_img2} alt="cards_img" className="cards_img" />
        </span>
        <div className="cards_content3">
          <h2 className="cards_title">
            Make this DIY Lip Balm in less than 30 minutes
          </h2>
          <p className="cards_text">
            This lip balm takes less than 30 mins to prepare, and you'll have a
            blast doing it.
          </p>
          <button className="cards_btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
