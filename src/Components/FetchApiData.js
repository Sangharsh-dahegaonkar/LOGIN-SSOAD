import { useEffect, useState } from "react";

export default function FetchApiData() {
  //   const apiUrl = url;

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const info = await resp.json();

    console.log(info.meals);
    setApiData(info.meals);
  };

  useEffect(() => {
    getData();
  }, []);
  return apiData;
}
