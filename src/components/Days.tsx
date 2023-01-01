function Days(props) {
  return (
    <div className="weatherBox">
      <h3>{props.cityName}</h3>
      <h1>{props.temp}</h1>
      <p>Clear sky</p>
    </div>
  );
}

export default Days;
