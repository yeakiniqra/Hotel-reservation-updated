import React from 'react';

const Contact= () => {
  return (
    <section className="flex flex-wrap justify-between mx-10 my-10" id="contact">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Contact Us</h2>
        <form>
          <input className="w-full p-2 mb-6 rounded border border-gray-300" type="text" placeholder="Name" required />
          <input className="w-full p-2 mb-6 rounded border border-gray-300" type="email" placeholder="Email" required />
          <textarea className="w-full p-2 mb-6 rounded border border-gray-300" placeholder="Message" required></textarea>
          <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-lime-500">Submit</button>
        </form>
      </div>

      {/* Support Component */}
      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-2xl font-bold mb-5">Support</h2>
        <p>For any issues, please contact our support team. We are available 24/7 to assist you.</p>
        <p className="mt-5"><strong>Email:</strong> yeakiniqra.connect@gmail.com</p>
        <p className="mt-5"><strong>Phone:</strong> +1 234 567 890</p>
        <p className="mt-5"><strong>Location:</strong> Green Road, Dhaka</p>
      </div>
    </section>
  );
};

export default Contact;
