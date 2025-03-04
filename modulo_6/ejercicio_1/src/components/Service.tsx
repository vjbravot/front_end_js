import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  image?: string; // Optional image
}

const Service: React.FC<ServiceProps> = ({ title, description, image }) => {
  return (
    <li>
      <p><b>{title}</b></p>
      <p>{description}</p>
      {image && <img src={image} alt={`Imagen de ${title}`} />}
    </li>
  );
};

export default Service;