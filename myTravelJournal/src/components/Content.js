const Content = (props) => {
  //   console.log(props);

  return (
    <div className="card">
      <div className="card--badge">BY FLIGHT</div>
      <img src={`images/${props.image}`} className="card--image" />
      <div>
        <div className="card--heading">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>view on googlemaps</a>
        </div>
        <h3>{props.title}</h3>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Content;
