import { useEffect, useState } from "react";
//import axios from "axios";

const useHttp = refer => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    console.log("loading data...");
    fetch(
      `https://gateway.marvel.com:443/v1/public/${refer}apikey=36e953a3163141b09945a67072e4443e`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        setLoading(false);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [refer]);
  return [data, loading];
};

export default useHttp;
