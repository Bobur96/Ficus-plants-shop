import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams, useHistory } from "react-router-dom";
import Card from "./Card";

function Categories(props) {
  const [date, setDate] = useState([]);
  const [category, setCategory] = useState([]);
  // const { id } = useParams();
  // const { goBack } = useHistory();

  useEffect(() => {
    fetch(
      `http://192.168.0.114:8000/v1/filter/?super_category=${props.id}&?limit=16`
    )
      .then((res) => res.json())
      .then((data) => setCategory(data.plants));

    fetch(
      `http://192.168.0.114:8000/v1/super_categories/${props.id}/categories/`
    )
      .then((res) => res.json())
      .then((data) => setDate(data.categories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {date == null ? (
        <h1 className="text-center m-5">bosh</h1>
      ) : (
        <div className="home py-4">
          <div className="container">
            <div className="row top_div">
              <h2 className="text-center">kotta nimadur</h2>
              <div
                id="cat_div"
                className="d-flex align-items-center justify-content-canter px-4 pb-4"
              >
                {date.map((el) => (
                  <Link
                    to="/super_categories/categories"
                    key={el.categoryId}
                    id="cat_card"
                    className="d-grid text-decoration-none"
                  >
                    <img
                      id={el.categoryId}
                      onClick={props.getCId}
                      src={el.imageUrl}
                      alt=""
                    />
                    <div className="d-grid">
                      <h6>{el.categoryName}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="row my-2">
              <h3 className="text-center">nimadur</h3>
              {category.map((el) => (
                <Card
                  key={el.categoryId}
                  src={el.imageUrl}
                  title={el.categoryName}
                  desc={el.description}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
