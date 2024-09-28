const Card = () => {
  return (
    <div className="card">
      <img src="images/katie-zafere.png" alt="katie-zafere" />
      <div className="card--stats">
        <img src="images/star.jpg" alt="star-image" className="card--start" />
        <span>5.0</span>
        <span className="gray">(6) .</span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        From <span className="bold">$136</span> / person
      </p>
    </div>
  );
};

export default Card;
