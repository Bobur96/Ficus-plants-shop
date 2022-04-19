import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Plants(props) {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch(
      `http://192.168.0.114:8000/v1/super_categories/${props.id}/categories/${props.cid}/sub_categories/${props.sid}/plants/`
    )
      .then((res) => res.json())
      .then((data) => setDate(data.plants));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {date == null ? (
        <h1 className="text-center m-5">bosh</h1>
      ) : (
        <div className="home py-4">
          <div className="container">
            <div className="d-grid text-center">
              <h4>{localStorage.getItem("name")}</h4>
              <br />
              <p>{localStorage.getItem("desc")}</p>
            </div>
            <div className="row">
              {date.map((el, i) => (
                <Link to="#" className="link-card">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Plants;
