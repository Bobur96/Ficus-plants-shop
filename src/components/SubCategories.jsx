import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function SubCategories(props) {
  const [date, setDate] = useState([]);
  // const [supcat, setSupcat] = useState([]);

  useEffect(() => {
    fetch(
      `http://192.168.0.114:8000/v1/super_categories/${props.id}/categories/${props.cid}/sub_categories/`
    )
      .then((res) => res.json())
      .then((data) => setDate(data.subcategories));

    //   fetch(
    //     `http://192.168.0.114:8000/v1/super_categories/${props.id}/categories/`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => setSupcat(data.superCategories));
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
                    to="/super_categories/categories/sub_categories"
                    key={el.subCategoryId}
                    id="cat_card"
                    className="d-grid text-decoration-none"
                  >
                    <img
                      id={el.subCategoryId}
                      onClick={props.getSId}
                      src={el.imageUrl}
                      alt={el.subCategoryName}
                      name={el.description}
                    />
                    <div className="d-grid">
                      <h6>{el.subCategoryName}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="row">
              <h3 className="text-center">aaaaa</h3>
              {date.map((el) => (
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

export default SubCategories;
