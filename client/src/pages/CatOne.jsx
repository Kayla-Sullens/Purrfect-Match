import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CAT } from "../utils/queries";

const CatOne = () => {
  const { catId, imgId } = useParams();
  console.log("catId:", catId);
  let imgIdx = parseInt(imgId) + 1;
  let imageURl = `cat${imgIdx}.jpeg`;
  // Use Apollo Client or another method to fetch the cat data
  const { loading, error, data } = useQuery(QUERY_CAT, {
    variables: { _id: catId },
  });

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cat = data.cat;
  if (!cat) return <p>Cat not found.</p>;

  return (
    <div className="container my-2">
      <img src={`/images/${imageURl}`}></img>
      <h2>{cat.catName}</h2>
      <p>{cat.catAge}</p>
      <p>{cat.catSpecies}</p>
      <p>{cat.catGender}</p>
      <p>{cat.catBio}</p>
    </div>
  );
};

export default CatOne;
