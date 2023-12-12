import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reserve = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("standard");
  const [roomData, setRoomData] = useState([]);
  const [cart, setCart] = useState([]);
  const [roomCounter, setRoomCounter] = useState(1);

  const [addedRooms, setAddedRooms] = useState([]); // Track rooms that have been added
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./roomData.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch room data. Status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Fetched room data:", data);

        setRoomData(data[roomType] || []); // Set the room data based on the selected roomType, handle undefined
      } catch (error) {
        console.error("Error fetching room data:", error);
        setRoomData([]); // Set an empty array in case of an error
      }
    };

    fetchData();
  }, [roomType]);

  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRoomTypeChange = (newRoomType) => {
    setRoomType(newRoomType);
    setAddedRooms([]); // Reset added rooms when room type changes
  };

  const handleAddToCart = (roomToAdd) => {
    // Add the selected room to the cart
    if (roomToAdd) {
      setCart([...cart, roomToAdd]);
    }
    // Add the room to the addedRooms list
    setAddedRooms((prevAddedRooms) => [...prevAddedRooms, roomToAdd.id]);

    // Increment the room counter
    setRoomCounter((prevCounter) => prevCounter + 1);
    // Show a success notification
    toast.success(`Room added for booking:  ${roomCounter}`, {
      position: "top-center",
      autoClose: 3000, // Notification will close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const isRoomAdded = (roomId) => addedRooms.includes(roomId);

  const navigate = useNavigate();

  const handleBookNow = () => {
    console.log("Navigating to /checkin with cart:", cart);
    // Redirect to the checkout page with cart data
    navigate("/checkin", {
      state: {
        checkInDate,
        checkOutDate,
        cart,
      },
    });
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="container mx-auto">
        <p className="mt-2 mb-5 text-center font-semibold text-xl text-gray-900">
          Choose from our available rooms and make your reservation today.
        </p>
      </div>
      {/* Check-in and Check-out inputs */}
      <div className="mb-4">
        <label
          htmlFor="checkInDate"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Check In Date
        </label>
        <input
          type="date"
          id="checkInDate"
          className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="checkOutDate"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Check Out Date
        </label>
        <input
          type="date"
          id="checkOutDate"
          className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      {/* Room Type Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Room Type
        </label>
        <select
          className="form-select w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
          onChange={(e) => handleRoomTypeChange(e.target.value)}
        >
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="premium">Premium</option>
          <option value="platinum">Platinum</option>
        </select>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roomData.map((room) => (
          <div key={room.id} className="border p-4 rounded-lg">
            <img
              srcSet={`${room.image} 300w, ${room.image} 600w, ${room.image} 900w`}
              sizes="(max-width: 600px) 280px, (max-width: 900px) 540px, 800px"
              src={room.image}
              alt={`Room ${room.id}`}
              className="w-full h-48 object-cover mb-4"
            />

            <p className="text-lg font-semibold mb-2">${room.price}</p>

            <button
              onClick={() => handleAddToCart(room)}
              className={`${
                isRoomAdded(room.id) ? "bg-blue-500" : "bg-green-500"
              } text-white px-4 py-2 rounded-lg hover:${
                isRoomAdded(room.id) ? "bg-blue-600" : "bg-green-600"
              } focus:outline-none focus:ring-2 ${
                isRoomAdded(room.id)
                  ? "focus:ring-blue-500"
                  : "focus:ring-green-500"
              } focus:ring-opacity-50`}
            >
              {isRoomAdded(room.id) ? "Added" : "Add Rooms"}
            </button>
          </div>
        ))}
      </div>

      {/* Book Now button */}
      <button
        onClick={handleBookNow}
        className="mx-auto mt-6 block bg-purple-500 text-white px-10 py-3 rounded-xl hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Book Now
      </button>
    </div>
  );
};

export default Reserve;
