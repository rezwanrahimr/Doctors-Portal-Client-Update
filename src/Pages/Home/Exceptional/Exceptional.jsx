import treatment from "../../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div className="card card-side  items-center px-2 md:px-24 grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          className="rounded"
          src={treatment}
          alt="treatment"
          width={"458px"}
          height={"576px"}
        />
      </div>
      <div className="card-body w-full  md:ps-24">
        <h2 className="card-title text-5xl">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className=" pt-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-8">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
