import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";

function Main(props) {
  const [date, setDate] = useState([]);
  const [supcat, setSupcat] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.114:8000/v1/filter/?limit=16")
      .then((res) => res.json())
      .then((data) => setDate(data.plants));

    fetch("http://192.168.0.114:8000/v1/super_categories/")
      .then((res) => res.json())
      .then((data) => setSupcat(data.superCategories));
  }, []);

  return (
    <div className="home p-4">
      {/* <div className=""> */}
      <div className="row top_div px-5 mb-4">
        <h2 className="text-center">Asosiy toifalar</h2>
        <div
          id="cat_div"
          className="d-flex align-items-center justify-content-canter px-4 pb-4"
        >
          {supcat.map((el) => (
            <NavLink
              to="/supcat"
              key={el.superCategoryId}
              id="cat_card"
              className="d-grid text-decoration-none"
            >
              <img
                id={el.superCategoryId}
                onClick={props.getId}
                src={el.imageUrl}
                alt=""
              />
              <div className="d-grid">
                <h6>{el.superCategoryName}</h6>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="row my-2 bg-secondary px-5">
        <h3 className="text-center">Oxirgi e'lonlar</h3>
        {date.map((el, i) => (
          <NavLink to="/supcat" className="link-card">
            <Card
              key={i}
              src={el.imageURL}
              title={el.plantName}
              desc={el.description}
              price={el.price}
              quantity={el.quantity}
              region={el.place.region.regionName}
              district={el.place.region.district.districtName}
            />
          </NavLink>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Main;

// el.superCategoryName.substring( 0, el.superCategoryName.indexOf(" "))
