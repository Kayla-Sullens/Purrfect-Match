import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CATS } from "../utils/queries";

const CatAll = () => {
  const { loading, error, data } = useQuery(QUERY_CATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cats = data?.cats || [];

  return (
    <section className="section-cats">
      <div className="container my-2">
        <h2>Check out our available cats!</h2>
        <div className="row">
          {cats.map((cat, idx) => (
            <div className="col-md-4" key={cat._id}>
              <div className="cat-box">
                <div className="cat-img"><img src={`/images/${cat.catImage}`} /></div>
                <div className="cat-desc">
                  <Link to={`/catone/${cat._id}/${idx}`}>{cat.catName}</Link>
                  <p>{cat.catAge}</p>
                  <p>{cat.catGender}</p>
                  <p>{cat.catSpecies}</p>
                  <p>{cat.catBio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatAll;
