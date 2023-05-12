import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        console.log(response.data);
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
    <div className="container character-page">
      <div>
        <h1 className="title-character">{data.title}</h1>
        <div className="img-p-character">
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt={data.title}
          />
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comic;
