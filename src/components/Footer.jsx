import footer from "../assets/img/footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          {" "}
          <img src={footer} alt="marvel" />{" "}
        </div>

        <div>
          <p>
            Made at <a href="https://www.lereacteur.io/">Le Reacteur </a>by
            <a href="https://github.com/seb-al"> Sebastian ALEXANDRU</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
