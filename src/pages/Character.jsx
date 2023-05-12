import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--x89fgb8wnx9j.code.run/character/${id}`
        );
        setData(response.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? <div className="spinner container-form"></div> : <p>OK</p>;
};

export default Character;
