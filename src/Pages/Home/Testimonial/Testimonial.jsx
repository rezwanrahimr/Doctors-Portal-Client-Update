import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import UserReview from "./UserReview";
const Testimonial = () => {
  // User Testimonial
  const testimoniaData = [
    {
      id: 1,
      userName: "Winson Herry",
      location: "California",
      image: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      userName: "Winson Herry",
      location: "California",
      image: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      userName: "Winson Herry",
      location: "California",
      image: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl text-secondary">Testimonial</h2>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} alt="" width={"192px"} height={"156px"} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 px-12 gap-x-6">
        {testimoniaData.map((testimonial) => (
          <UserReview
            key={testimonial.id}
            testimonial={testimonial}
          ></UserReview>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
