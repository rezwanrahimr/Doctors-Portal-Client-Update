import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "150px auto",
  padding: "30px",
  borderColor: "#19D3AE",
};

const Loader = () => {
  return (
    <div className="sweet-loading">
      <FadeLoader
        color="#19D3AE"
        loading={true}
        cssOverride={override}
        size="400px"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
