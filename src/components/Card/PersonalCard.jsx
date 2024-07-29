import React from "react";
import { Link } from "react-router-dom";

const PersonalCard = ({ item }) => {
  const { title, image, description, slug } = item;
  return (
    <Link to={`${slug}`}>
      <div className="flex flex-col gap-2 border border-gray-400 rounded-lg p-2 w-fit">
        <h2>{title}</h2>
        <div className="rounded-lg">
          <img src={image} alt="" className="rounded-lg object-fit" />
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PersonalCard;
