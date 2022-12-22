import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';

const useAxios = (apiUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: apiUrl,
    })
      .then((res) => {
        setData(res.data);
      });
  }, [apiUrl]);

  return [data];
};

export default useAxios;
