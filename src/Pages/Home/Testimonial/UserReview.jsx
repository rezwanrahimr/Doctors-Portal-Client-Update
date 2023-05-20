import React from "react";

const UserReview = ({ testimonial }) => {
  const { id, userName, image, location, description } = testimonial;
  return (
    <div className="card  p-7 bg-base-100 shadow-xl">
      <p>{description}</p>
      <div className="flex items-center mt-9">
        <div className="avatar me-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="user" />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{userName}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
