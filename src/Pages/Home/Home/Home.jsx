import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Exceptional from "../Exceptional/Exceptional";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
