import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";

export const DataContext = React.createContext({});

export const DataContextProvider = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/json-data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data.luckyNumber ? (
        <DataContext.Provider value={data}>
          {props.children}
        </DataContext.Provider>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
