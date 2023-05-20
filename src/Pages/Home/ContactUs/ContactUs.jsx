import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contact-container flex flex-col justify-center items-center ">
      <div className="my-16">
        <div className="text-center mb-5">
          <h2 className="font-bold text-xl text-secondary">Contact Us</h2>
          <h1 className="text-4xl font-semi-bold">Stay connected with us</h1>
        </div>
        <div>
          <form className="text-center">
            <input
              type="text"
              placeholder="Email Address"
              className="input  w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="input  w-full max-w-xs my-5"
            />{" "}
            <br />
            <textarea
              className="textarea w-full max-w-xs"
              placeholder="Your message"
            ></textarea>
            <div className="flex justify-center mt-5">
              <button className="btn btn-secondary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
