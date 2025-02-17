import { useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = state;

  const fetchData = async (url, method, bodyData = null) => {
    if (!url) return;

    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body:
          method === "GET" || method === "DELETE"
            ? null
            : JSON.stringify(bodyData),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error(error);

      setState({
        data: null,
        isLoading: false,
        error: error,
      });
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};
