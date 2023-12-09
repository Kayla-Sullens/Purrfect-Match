import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CAT } from "../utils/queries";

const CatOne = () => {
  const { catId } = useParams();

  // Use Apollo Client or another method to fetch the cat data
  const { loading, error, data } = useQuery(QUERY_CAT, {
    variables: { _id: catId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cat = data.cat;

  return (
    <div className="container my-2">
      <h2>{cat.catName}</h2>
      <p>{cat.catBio}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CatOne;
