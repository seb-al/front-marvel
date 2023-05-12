const ComicCard = ({ data }) => {
  return (
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

export default ComicCard;
