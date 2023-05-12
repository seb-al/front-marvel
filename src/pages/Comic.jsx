import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ComicCard from "../components/ComicCard";

const Comic = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/comic/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="spinner container-form"></div>
  ) : (
    <ComicCard data={data} />
  );
};

export default Comic;
