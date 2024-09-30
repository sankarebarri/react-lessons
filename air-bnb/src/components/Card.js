const Card = (props) => {
  // console.log(props.img);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`images/${props.coverImg}`} className="card--image" />
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
