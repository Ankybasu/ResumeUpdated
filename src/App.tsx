import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./components/Email";
import HomePage from "./components/HomePage";

let api = "https://hn.algolia.com/api/v1/search?query=html";

function App() {
  const [hits, setHit] = useState([]);
  const getData = async (url: any) => {
    try {
      await fetch(url).then(async (res) => {
        const data = await res.json();
        setHit(data.hits);
        console.log("hi1", data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(api);
  }, []);
  console.log("hits", hits);

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/mail" element={<Email />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
export default App;
