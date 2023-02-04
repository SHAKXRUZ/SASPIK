import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2 className="subscribe_title">Subscribe to our Newsletter</h2>
      <p className="subscribe_text">
        This lip balm takes less than 30 mins to prepare, and you'll have a
        blast doing it.
      </p>
      <form className="form">
        <input className="form_input" type="text" placeholder="Enter your mail" required />
        <button className="form_btn">Subscribe</button>
      </form>
    </div>
  );
};
export default Subscribe;
