import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r.items);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [loading, data, error];
};

export { useFetch };
