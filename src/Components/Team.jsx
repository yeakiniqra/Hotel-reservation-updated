import React from 'react';
import utshaw from '../assets/utshaw.jpg';
import jyoti from '../assets/jyoti.jpg';
import nayeem from '../assets/nayeem.jpg';
import maruf from '../assets/maruf.jpg';
import about from '../assets/about-img.webp';

const Team = () => {
  return (
    <section className="team-section">
      <div className="container mt-5 p-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Team</h2>
        <p className="mt-4 ml-4 text-gray-600">
          We are a team of 5 students from the University of Asia Pacific. We are currently pursuing our Honours in Computer Science. We are passionate about building web applications and we are always looking for new opportunities to learn and grow.
          We have done this project as our database course project. We have used ReactJS for the frontend and mySQL for the backend.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 py-6">
          <TeamMember imgSrc={utshaw} alt="Member 1" />
          <TeamMember imgSrc={jyoti} alt="Member 2" />
          <TeamMember imgSrc={nayeem} alt="Member 3" />
          <TeamMember imgSrc={maruf} alt="Member 4" />
          <TeamMember imgSrc={about} alt="Member 5" />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ imgSrc, alt }) => {
  return (
    <div className="team-member img">
      <img className="object-cover w-24 h-24 rounded-full" src={imgSrc} alt={alt} />
    </div>
  );
};

export default Team;
