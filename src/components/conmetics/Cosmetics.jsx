import "./Cosmetics.css";
import Conmetics from "../../assets/images/conmetics.png";
const Cosmetics = () => {
  return (
    <div className="cosmetics">
      <div className="cosmeticsis">
        <span className="cosmetics_img">
          <img src={Conmetics} alt="images" className="images" />
        </span>
        <div className="cosmetics_content">
          <h2 className="cosmetics_title">
            Women's Make Up, Lipsticks, Cosmetics, & Skin Care
          </h2>
          <p className="cosmetics_text">
            This lip balm takes less than 30 mins to prepare, and you'll have a
            blast doing it.
          </p>
          <button className="cosmetics_btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Cosmetics;
