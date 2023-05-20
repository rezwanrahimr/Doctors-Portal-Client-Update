import Banner from "../Banner/Banner";
import Exceptional from "../Exceptional/Exceptional";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
    </div>
  );
};

export default Home;
