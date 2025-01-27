import axios from "axios";
import "./App.css";
import Categories from "./pages/Categories";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://northwind.vercel.app/api/categories";

  const getAllCategories = async () => {
    try {
      const response = await axios(baseUrl);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <Categories categories={data} load={loading} setData={setData} />
    </>
  );
}

export default App;
