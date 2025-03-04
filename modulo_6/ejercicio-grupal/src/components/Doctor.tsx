import React from "react";

interface DoctorProps {
  name: string;
  image: string;
  years_of_experience: number;
  title: string;
  specialty: string;
}

const Doctor: React.FC<DoctorProps> = ({ name, image, years_of_experience, title, specialty }) => {
  return (
    <li>
      <p><b>{name}</b></p>
      <p>{title}</p>
      <p>{specialty}</p>
      <p>Años de experiencia: {years_of_experience}</p>
      <img src={image} alt={`Imagen de ${name}`} />
    </li>
  );
};

export default React.memo(Doctor);