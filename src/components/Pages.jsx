import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

const Pages = (props) => {
  return (
    <>
      <div className="buttons-component">
        {props.skip > 0 && (
          <button
            className="button-skip"
            onClick={() => {
              props.setSkip(props.skip - 101);
            }}
          >
            <VscArrowLeft />
            Page précédent
          </button>
        )}
        {props.skip > 1 && (
          <button
            className="button-skip"
            onClick={() => {
              props.setSkip(0);
            }}
          >
            Retour à la page principale
          </button>
        )}
        {props.skip <= props.data.count && (
          <button
            className="button-skip"
            onClick={() => {
              props.setSkip(props.skip + 101);
            }}
          >
            Page suivante
            <VscArrowRight />
          </button>
        )}
      </div>
    </>
  );
};

export default Pages;
