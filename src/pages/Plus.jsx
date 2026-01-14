import "../style/Plus.css";

const Plus = () => {
  return (
    <>
      <section className="plus">
        <h2 className="plus-title">Frequently Asked Questions</h2>

        <div className="plus-item open">
          <div className="plus-question">
            <span>What are the delivery times?</span>
            <span className="icon">−</span>
          </div>
          <div className="plus-answer">
            Delivery time and cost depend on the volume, weight, and distance.
            Based on customer feedback, we deliver faster than most companies.
          </div>
        </div>

        <div className="plus-item">
          <div className="plus-question">
            <span>Where is the waste delivered after the order?</span>
            <span className="icon">+</span>
          </div>
          <div className="plus-answer">
            All waste is transported to certified landfills and recycling centers.
          </div>
        </div>

        <div className="plus-item">
          <div className="plus-question">
            <span>Is cash payment available?</span>
            <span className="icon">+</span>
          </div>
          <div className="plus-answer">
            Yes, we accept cash payments as well as bank transfers.
          </div>
        </div>

        <div className="plus-item">
          <div className="plus-question">
            <span>How long does it take to place an order?</span>
            <span className="icon">+</span>
          </div>
          <div className="plus-answer">
            Creating an order usually takes 5–10 minutes.
          </div>
        </div>

        <div className="plus-item">
          <div className="plus-question">
            <span>Do you accept orders from other cities?</span>
            <span className="icon">+</span>
          </div>
          <div className="plus-answer">
            Yes, we accept orders from other cities and regions.
          </div>
        </div>
      </section>
    </>
  );
};

export default Plus;