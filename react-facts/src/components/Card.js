const Card = (props) => {
  return (
    <div className="card">
      <img src={`images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="images/star.jpg" alt="star-image" className="card--star" />
        <span>5.0</span>
        <span className="gray">({props.rating}) .</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        From <span className="bold">${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
