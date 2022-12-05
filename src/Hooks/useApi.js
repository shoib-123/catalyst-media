import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function useApi(params) {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [material, setMaterial] = useState([]);
  const [featured, setFeatured] = useState([]);

  console.log(process.env);

  const fetchApi = useCallback(
    (args) => {
      let token = process.env.REACT_APP_BEARER_TOKEN;

      for (let i = 0; i < args.length; i++) {
        axios
          .get(`${process.env.REACT_APP_PUBLIC_API}${args[i]}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            if (args[i] == "products") {
              setProducts(res.data.products);
            } else if (args[i] == "material") {
              setMaterial(res.data.material);
            } else if (args[i] == "colors") {
              setColors(res.data.colors);
            } else if (args[i] == "featured") {
              setFeatured(res.data.featured);
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
    },
    [params]
  );

  useEffect(() => {
    fetchApi(params);
  }, []);

  return { material, colors, products, featured };
}

export default useApi;
