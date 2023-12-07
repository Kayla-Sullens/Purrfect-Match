export const Cats = ({ img, imgAlt, name, age, gender, bio }) => {
    return (
      <div className="cat-card">
        <div className="cat-img">
            <img
              src={img}
              className="images"
              style={{ width: "50%" }}
              alt={imgAlt}
            />
        </div> 
        <div className="cat-name">
          <h4>{name}</h4>
        </div> 
        <div className="cat-info">
          <p>
            {age}
            {gender}
            {bio}
          </p>
        </div>
        
      </div>
    );
  }