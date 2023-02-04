import "./Popular.css";
import PopularImg1 from "../../assets/images/popular1.png";
import PopularImg2 from "../../assets/images/popular2.png";

const Popular = () => {
  return (
    <div className="popular">
      <h2 className="popular_title">Popular Lip Balm Bundle</h2>
      <div className="popular_container">

        <div className="popular_cards">
          <div className="card_left">
            <p className="card_title">100% Natural Organic Lip Balm Spheres</p>
            <p className="card_text">
              This lip balm takes less than 30 mins to prepare, and you'll have
              a blast doing it.
            </p>
            <button className="card_btn">Buy Now</button>
          </div>
          <span className="popular_right">
            <img className="popular_img1" src={PopularImg1} alt="popular_img" />
          </span>
        </div>
        <div className="popular_cards">
          <div className="card_left">
            <p className="card_title">100% Natural Organic Lip Balm Spheres</p>
            <p className="card_text">
              This lip balm takes less than 30 mins to prepare, and you'll have
              a blast doing it.
            </p>
            <button className="card_btn">Buy Now</button>
          </div>
          <span className="popular_right">
            <img className="popular_img1" src={PopularImg2} alt="popular_img" />
          </span>
        </div>
        
      </div>
    </div>
  );
};
export default Popular;
