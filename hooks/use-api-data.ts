import axios from "axios";
import { useEffect, useState } from "react";

type ReturnState<T> = {
  data: T;
  loading: boolean;
  error: any;
};

export const useApiData = <T>(
  path: string,
  defaultValue: any,
  dependencies = [],
  fetchData: boolean = true
): ReturnState<T> => {
  const [state, setState] = useState<ReturnState<T>>({
    data: defaultValue,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (fetchData) {
      setState({
        ...state,
        loading: true,
      });
      axios
        .get<T>(path)
        .catch((err) => {
          setState({
            ...state,
            loading: false,
            error: err.response,
          });
        })
        .then((response) => {
          if (response) {
            setState({
              ...state,
              data: response.data,
              loading: false,
            });
          }
        });
    }
  }, dependencies);

  return state;
};

export default useApiData;
