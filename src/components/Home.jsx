import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Plants from "./Plants";
import SignUp from "./SignUp";
import Notice from "./Notice";

function Home(props) {
  const [id, setId] = useState("");
  const [cid, setCId] = useState("");
  const [sid, setSId] = useState("");
  const getId = (e) => {
    setId(e.target.id);
  };
  const getCId = (e) => {
    setCId(e.target.id);
  };
  const getSId = (e) => {
    setSId(e.target.id);
    localStorage.setItem("name", e.target.alt);
    localStorage.setItem("desc", e.target.name);
  };
  return (
    <div className="home">
      <Routes>
        <Route path="/" exact element={<Main getId={getId} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/notice" element={<Notice />} />
        <Route
          path="/supcat"
          element={<Categories getCId={getCId} id={id} />}
        />
        <Route
          path="/super_categories/categories"
          element={<SubCategories getSId={getSId} id={id} cid={cid} />}
        />
        <Route
          path="/super_categories/categories/sub_categories"
          element={<Plants id={id} cid={cid} sid={sid} />}
        />
      </Routes>
    </div>
  );
}

export default Home;
