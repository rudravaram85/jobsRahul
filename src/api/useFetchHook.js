import { useReducer, useEffect } from "react";

const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error("Invalid type");
  }
};

// in this example, we're not refetching data after create/edit/deletes
// because it is not the focus of this article,
// but you can definitely write your own logic to do that

const useFetchHook = url => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await fetch(url);
        const data = await result.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [url]);

  return [state];
};

export default useFetchHook;
