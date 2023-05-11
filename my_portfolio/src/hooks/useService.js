import { useState, useEffect } from "react";

import { client } from "../client";

const useService = (endPoint1, endPoint2) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const query1 = `*[_type == "${endPoint1}"]`;
  const query2 = endPoint2 ? `*[_type == "${endPoint2}"]` : undefined;

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await client.fetch(query1);
        setData1(response1);
        if (query2) {
          const response2 = await client.fetch(query2);
          setData2(response2);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [query1, query2]);

  return query2 ? [data1, data2] : [data1];
};

export default useService;
