import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CAT, QUERY_USER } from "../utils/queries";
import { ADOPT_CAT } from "../utils/mutations";

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
    <section className="section_cat_details">
      <div className="cat_banner">
        <img src={`/images/${imageURl}`}></img>
        <div className="container">
          <div className="row">
            <h2>{cat.catName}</h2>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="cat_details">
          <div className="cat_info">
            <span>{cat.catAge}</span>
            <span>{cat.catSpecies}</span>
            <span>{cat.catGender}</span>
          </div>
          <p>{cat.catBio}</p>
          <button onClick={() => handleAdopt(cat._id)}>Adopt</button>
          <button onClick={() => handleComment(cat._id)}>Comment</button>
        </div>
      </div>
    </section>
  );
};

export default CatOne;
