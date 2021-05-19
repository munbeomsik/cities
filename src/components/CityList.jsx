function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1>Which city do you want to find?</h1>
            <h1>CityList</h1>

      <ul>
        {cities.map((item, index) => {
          return <li key={index}>
          <a href= {'https://www.google.com/search?q='+item}> {item}</a></li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;