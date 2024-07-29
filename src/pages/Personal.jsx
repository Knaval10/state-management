import React from "react";
import PersonalCard from "../components/Card/PersonalCard";
import thumbnailImg from "../assets/ProfilePicture.jpg";
const personalData = [
  {
    slug: "story",
    title: "Story",
    image: thumbnailImg,
    description: "This is my personal story",
  },
  {
    slug: "database",
    title: "Database",
    image: thumbnailImg,
    description: "This is my personal database",
  },
  {
    slug: "equipment",
    title: "Equipment",
    image: thumbnailImg,
    description: "This is the list of my personal equipments",
  },
  {
    slug: "creation",
    title: "Creation",
    image: thumbnailImg,
    description: "This is my personal creations",
  },
];
const Personal = () => {
  return (
    <div className="px-5 py-5 flex flex-col gap-10">
      Personal
      <div className="flex flex-wrap gap-2">
        {personalData?.map((item, idx) => (
          <div key={idx} className="">
            <PersonalCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
