import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchFoodBySlug from "../effects/fetchFoodBySlug";
import Info from "../components/Info";

const Detail = () => {
  const { slug } = useParams();
  const [food, setFood] = useState({
    loading: true
  });
  useEffect(() => {
    try {
      fetchFoodBySlug(slug).then(({ data }) => {
        setFood(data);
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, [slug]);

  console.log(food)
  return food.loading ? (
    <div>Loading</div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Detail;
