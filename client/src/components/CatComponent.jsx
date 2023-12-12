export const Cat = ({ name, img, imgAlt, age, gender, species, bio }) => {
  return (
    <div className="cat-card">
      <div className="cat-name">
        <h3>{name}</h3>
      </div>
      <div className="cat-img">
        <img
          src={img}
          className="cat-images"
          style={{ width: "50%" }}
          alt={imgAlt}
        />
      </div>
      <div>
        <p>
          {age}
          {gender}
          {species}
          {bio}
        </p>
      </div>
      <div></div>
    </div>
  );
};
