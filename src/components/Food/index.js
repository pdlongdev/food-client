import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchFood from "../../effects/fetchFood";

const URL_STORE = "https://yh5x5.sse.codesandbox.io";
const Food = props => {
  const [food, setFood] = useState({
    loading: true
  });
  useEffect(() => {
    try {
      fetchFood().then(({ data }) => {
        setFood(data);
      });
    } catch {}
  }, []);

  return food.loading ? (
    <div>Loading</div>
  ) : (
    <div className="list-food">
      {food.map((e,index) => (
        <Item key={index} item={e} />
      ))}
    </div>
  );
};
const Item = props => {
  return (
    <div className="col-4">
      <div className="card mt-5">
        <img src={URL_STORE + props.item.thumb} width="100%" alt="" />
        <div className="card-img-overlay d-flex ">
          <Link
            to={props.item.slug}
            className="btn btn-primary mt-auto ml-auto"
          >
            Chi tiết
          </Link>
        </div>
        <div className="card-title">
          <p className="mt-3 text-center font-weight-bold">
            {props.item.title}
          </p>
        </div>
        <div className="card-body">
          <p className="overflow-hidden" style={{ maxHeight: "100px" }}>
            {props.item.introduce}
          </p>
        </div>
        <div className="card-footer d-flex">
          <div className="font-weight-light" />
        </div>
      </div>
    </div>
  );
};
export default Food;
