import { useState, useEffect } from 'react';
import Axios from 'axios';

export const useAxios = url => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(url);
      setData(res.data);
    };
    fetchData();
  }, [url]);

  return data;
};
