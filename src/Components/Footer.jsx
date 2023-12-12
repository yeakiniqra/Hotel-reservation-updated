import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 px-5 ">
      <div className="flex flex-col h-full justify-between">
      {/* Social Media Links */}
      <div className="w-1/5 mx-auto">
        <h3 className="text-xl font-bold mb-2 mt-4 text-center">Follow Us</h3>
        <div className="flex justify-center gap-6 mt-6 text-center">
          <SocialMediaLink label="Follow on Twitter" iconName="logo-twitter" />
          <SocialMediaLink label="Follow on Instagram" iconName="logo-instagram" />
          <SocialMediaLink label="Follow on GitHub" iconName="logo-github" />
          <SocialMediaLink label="Follow on LinkedIn" iconName="logo-linkedin" />
        </div>
      </div>

      <p className="text-center mt-10">Developed by &copy;Yeakin Iqra. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialMediaLink = ({ label, iconName }) => {
  return (
    <a className="p-1 -m-1 group" aria-label={label} href="#_">
      <ion-icon className="w-6 h-6 transition fill-white hover:text-blue-500 md hydrated" name={iconName} role="img" aria-label={label}></ion-icon>
    </a>
  );
};

export default Footer;
