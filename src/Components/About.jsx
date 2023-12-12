import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 py-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-64 md:h-auto max-w-full rounded-lg"
              src="https://shorturl.at/hCLVX"
              alt="about"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">About Us</h2>
            <p className="mt-4 mr-5 ml-4 text-gray-600">EasyStayHub is a hotel reservation website that allows users to book hotel rooms online. 
            We provide hotel rooms for business and leisure travelers at the best prices. 
            Browse our 2,563,380 accommodations in over 85,000 destinations.We does this by letting you search, 
            compare and customize room options from a range of hotels and other accommodation providers in the location you want.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="reservation.html" className="px-6 py-2 text-sm font-medium text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
