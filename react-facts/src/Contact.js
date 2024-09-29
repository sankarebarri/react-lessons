const Contact = ({ img, star, rating }) => {
  return (
    <div className="card">
      <img src={img} className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star-image" className="card--star" />
        <span>{rating}</span>
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

export default Contact;
