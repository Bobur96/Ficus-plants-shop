import React, { useEffect, useState } from "react";

function Notice(props) {
  const [supcat, setSupcat] = useState([]);
  const [cat, setCat] = useState([]);
  const [subcat, setSubCat] = useState([]);

  const [vil, setVil] = useState([]);
  const [tum, setTum] = useState([]);
  let supId = "",
    catId = "",
    subId = "";

  useEffect(() => {
    fetch("http://192.168.0.114:8000/v1/places/regioins/")
      .then((res) => res.json())
      .then((data) => setVil(data));

    fetch("http://192.168.0.114:8000/v1/super_categories/")
      .then((res) => res.json())
      .then((data) => setSupcat(data.superCategories));
  }, []);

  const getDistrict = (e) => {
    let id = e.target.value;
    if (id !== "Select category") {
      fetch(`http://192.168.0.114:8000/v1/places/regioins/${id}/districts`)
        .then((res) => res.json())
        .then((data) => {
          setTum(data.districts);
        });
    } else setTum([]);
    document.querySelector("#tum").value = "";
  };

  const getCategory = (e) => {
    supId = e.target.value;
    if (supId !== "Select category") {
      fetch(
        `http://192.168.0.114:8000/v1/super_categories/${supId}/categories/`
      )
        .then((res) => res.json())
        .then((data) => {
          setCat(data.categories);
        });
    } else {
      setCat([]);
    }
    // setSubCat([]);
    // document.querySelector("#subCategory").textContent = "Select category";
    document.querySelector("#category").value = "";
  };

  const getSubCategory = (e) => {
    catId = e.target.value;
    if (catId !== "Select category") {
      fetch(
        `http://192.168.0.114:8000/v1/super_categories/${supId}/categories/${catId}/sub_categories/`
      )
        .then((res) => res.json())
        .then((data) => {
          setSubCat(data.subcategories);
        });
    } else setSubCat([]);
    document.querySelector("#subCategory").value = "";
  };

  const getsubId = (e) => {
    subId = e.target.value;
    console.log("111" + supId + " " + "222" + catId + " " + "333" + subId);
  };

  return (
    <div className="">
      <form className="w-100 py-5">
        <h4 className="text-center mb-4">Select category</h4>
        <div className="w-100 row gap-5 mx-auto">
          <select
            className="col-sm-3 mx-auto"
            id="supcat"
            onChange={getCategory}
          >
            <option defaultValue="">Select category</option>
            {supcat.map((el) => (
              <option id={el.superCategoryId} value={el.superCategoryId}>
                {el.superCategoryName}
              </option>
            ))}
          </select>
          <select
            className="col-sm-3 mx-auto"
            id="category"
            onChange={getSubCategory}
          >
            <option defaultValue="">Select category</option>
            {cat.map((el) => (
              <option id={el.categoryId} value={el.categoryId}>
                {el.categoryName}
              </option>
            ))}
          </select>
          <select
            className="col-sm-3 mx-auto"
            id="subCategory"
            onChange={getsubId}
          >
            <option defaultValue="">Select category</option>
            {subcat.map((el) => (
              <option id={el.subCategoryId} value={el.subCategoryId}>
                {el.subCategoryName}
              </option>
            ))}
          </select>
        </div>
        <h4 className="text-center mt-5 mb-4">Enter info</h4>
        <div className="w-100 row gap-5 mx-auto">
          <input className="col-sm-3 mx-auto" id="name" type="text" />
          <input className="col-sm-3 mx-auto" id="quantity" type="text" />
          <input className="col-sm-3 mx-auto" id="price" type="text" />
        </div>
        <h4 className="text-center mt-5 mb-4">Select your location</h4>
        <div className="w-100 row gap-5 mx-auto">
          <select
            className="col-sm-3 mx-auto"
            name=""
            id="vil"
            onChange={getDistrict}
          >
            <option defaultValue="null">Select category</option>
            {vil.map((el) => (
              <option id={el.regionId} value={el.regionId}>
                {el.regionName}
              </option>
            ))}
          </select>
          <select className="col-sm-3 mx-auto" name="" id="tum">
            <option defaultValue="">Select category</option>
            {tum ? (
              tum.map((el) => (
                <option id={el.districtId} value={el.districtId}>
                  {el.districtName}
                </option>
              ))
            ) : (
              <option value=""></option>
            )}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Notice;
