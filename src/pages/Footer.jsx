import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Наши отзывы</h2>

      <div className="footer-reviews">
        <div className="review-card">
          <div className="review-header">
            <span className="review-name">Имя фамилия</span>
            <span className="review-rate">⭐️ 5/10</span>
          </div>

          <div className="review-body">
            <div className="play"><img src="public/images/odam.png" alt="" /></div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <span className="review-name">Имя фамилия</span>
            <span className="review-rate">⭐️ 5/10</span>
          </div>

          <div className="review-body">
            <div className="play"><img src="public/images/odam.png" alt="" /></div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <span className="review-name">Имя фамилия</span>
            <span className="review-rate">⭐️ 5/10</span>
          </div>

          <div className="review-body">
            <div className="play"><img src="public/images/odam.png" alt="" /></div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <span className="review-name">Имя фамилия</span>
            <span className="review-rate">⭐️ 5/10</span>
          </div>

          <div className="review-body">
            <div className="play"><img src="public/images/odam.png" alt="" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

