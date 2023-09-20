const MapProducts = ({ data }) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  return data.images.map((item) => {
    return (
      <div className="newCollection__item">
        <img src={item} style={{ width: "99%", aspectRatio: 1 / 1 }} />
        <h6
          style={{ margin: "0px", marginTop: "0.5rem", marginBottom: "0.5rem" }}
        >{`${data.name} LOREM`}</h6>
        <h4
          style={{
            fontWeight: "bold",
            color: "blue",
            margin: "0px",
            marginBottom: "0.5rem",
          }}
        >{`${getRandomNumber()} $`}</h4>
        <button
          style={{
            fontWeight: "bold",
            color: "blue",
            border: "2px solid black",
            padding: "4px 16px 4px 16px",
          }}
          className="button"
        >
          <span>Add</span>
          <span style={{ fontWeight: "bold" }}>+</span>
        </button>
      </div>
    );
  });
};
export default MapProducts;
