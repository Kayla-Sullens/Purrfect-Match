import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CATS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { QUERY_CATS } from "../utils/queries";

const CatAll = () => {
  const { loading, error, data } = useQuery(QUERY_CATS, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cats = data.cats;

  return (
    <div className="container my-2">
      <h2>All Cats</h2>
      <ul>
        {cats.map((cat, idx) => (
          <li key={cat._id}>
            <Link to={`/catone/${cat._id}/${idx}`}>
              <h3>{cat.catName}</h3>
            </Link>
            <p>{cat.catBio}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
      {/* <h2>Check out our avialable cats!</h2>
      <h3>{cat.catName}</h3>
      <p>{cat.catAge}</p>
      <p>{cat.catGender}</p>
      <p>{cat.catSpecies}</p>
      <p>{cat.catBio}</p> */}
    </div>
  );
};

export default CatAll;
