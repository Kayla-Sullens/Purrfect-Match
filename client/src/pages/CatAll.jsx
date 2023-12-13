import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CATS } from "../utils/queries";

const CatAll = () => {
  const { loading, error, data } = useQuery(QUERY_CATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // const cat = data.cat;
  // derrived state
  const cats = data?.cats || [];

  return (
    <div className="container my-2">
      <h2>Check out our available cats!</h2>
      {cats.map((cat, idx) => (
        <div key={cat._id}>
          <Link to={`/catone/${cat._id}/${idx}`}>
            <h3>{cat.catName}</h3>
          </Link>
          <div>
            <img src={`/images/${cat.catImage}`} />
          </div>
          <p>{cat.catAge}</p>
          <p>{cat.catGender}</p>
          <p>{cat.catSpecies}</p>
          <p>{cat.catBio}</p>
        </div>
      ))}
    </div>
  );
};

export default CatAll;
