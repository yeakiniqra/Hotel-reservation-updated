import React, {useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from 'jspdf';


const Checkin = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const { checkInDate, checkOutDate, cart } = location.state;

   // Function to format the date in dd/mm/yy format
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-GB', options);
  };

  // Format checkInDate and checkOutDate
  const formattedCheckInDate = formatDate(checkInDate);
  const formattedCheckOutDate = formatDate(checkOutDate);

  // Calculate total price based on check-in, check-out dates, and room prices
  const calculateTotalPrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Calculate the difference in milliseconds
    const difference = checkOut - checkIn;

    // Convert the difference to days
    const numberOfNights = difference / (1000 * 60 * 60 * 24);

    const totalPrice = cart.reduce((total, room) => {
      // Multiply the room price by the number of nights
      return total + room.price * numberOfNights;
    }, 0);

    return totalPrice;
  };

   // Scroll to the top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
     // Clear the email error when the user starts typing
     setEmailError('');
  };
   
  const navigate = useNavigate();
  const handleConfirmBooking = () => {

     // Validate email before confirming booking
     if (!email) {
      setEmailError('Email is required.');
      return;
    }

     // Show alert if everything is successful
    alert(
      `Your booking has been confirmed. You will receive a confirmation email shortly at ${email}.`
    );

    navigate("/");
  };

  const generatePDF = () => {
    // Create a new jsPDF instance
    const pdfDoc = new jsPDF();
    
    

    // Add content to the PDF
    pdfDoc.text('Payment Receipt:', 20, 10);
    pdfDoc.text(`Check-in Date: ${formattedCheckInDate}`, 20, 30);
    pdfDoc.text(`Check-out Date: ${formattedCheckOutDate}`, 20, 40);
    pdfDoc.text(`Total Price: $${calculateTotalPrice()}`, 20, 20);
    pdfDoc.text(`Email: ${email}`, 20, 50);
    pdfDoc.text('Thanks for Booking with EasyStayHub', 20, 60);
     
  
    // Save the PDF
    pdfDoc.save('payment_receipt.pdf');
  };
  

  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Checkout Summary
      </h2>
      <div className="mb-4">
        <p className="font-bold text-fuchsia-50 text-lg mb-2 bg-slate-500">
          Dates:
        </p>
        <p className="mb-2 text-lg font-bold">
          Check-in Date: <span className="text-green-500"> {formattedCheckInDate}</span>
        </p>
        <p className="mb-2 text-lg font-bold">
          Check-out Date:{" "}
          <span className="text-green-500"> {formattedCheckOutDate}</span>
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg mb-2 text-white bg-slate-500">
          Selected Rooms:
        </p>
        <ul>
          {cart.map((room) => (
            <li key={room.id} className="flex items-center mb-4">
              <img
                src={room.image}
                alt={`Room ${room.id}`}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <p className="font-semibold">{room.type}</p>
                <p className="font-semibold">
                  Price Per Night:{" "}
                  <span className="text-red-500 text-xl font-bold ">
                    {" "}
                    ${room.price}{" "}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-bold text-xl bg-red-200">
          Total Price: ${calculateTotalPrice()}
        </p>
      </div>
      {/* Payment Method Options */}
      <div className="flex flex-col lg:flex-row items-center mb-6 mt-5 lg:mb-5">
        <label className="mr-4  mb-1 font-semibold">Payment Method:</label>
        <select className="mb-2 lg:mb-0 md:w-1/2 lg:w-1/3  p-2 border border-gray-500 rounded focus:ring focus:border-blue-300">
          <option value="paypal">PayPal</option>
          <option value="debit">Debit Card</option>
          <option value="credit">Credit Card</option>
        </select>
      </div>

      {/* Email Section */}
      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-500"
        >
          Contact Number:
        </label>
        <input
          type="tel"
          id="contactNumber"
          className="mt-1 p-2 w-full md:w-1/2 lg:w-1/3  rounded-md border border-gray-500 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-500"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={handleEmailChange}
          className="mt-1 p-2 w-full md:w-1/2 lg:w-1/3 rounded-md border border-gray-500 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
           onClick={() => {
            handleConfirmBooking();
            generatePDF();
          }}
          className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Checkin;
