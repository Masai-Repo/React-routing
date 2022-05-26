import { useParams } from "react-router-dom";
import axios from "axios";

import React, { useEffect, useState } from "react";

export const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      url: `http://localhost:8080/products/${id}`,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.id]);
  console.log(data);
  return (
    <div>
      ProductDetails
      {loading && <div>Loading</div>}
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>
  );
};
