import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section aria-labelledby="pricing" id="pricing"  className="min-h-screen">
      <div className="items-center px-8 py-16 mx-auto max-w-full ">
        <h1 className='text-center text-4xl text-bold mb-5' >Pricing</h1>
        <div className="grid max-w-2xl grid-cols-1 py-4 -mx-4 sm:grid-cols-2 gap-y-10 sm:mx-auto lg:max-w-none lg:grid-cols-4 xl:gap-x-4 lg:bg-gray-100 rounded-3xl">
          {/* Standard Room */}
          <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-lg text-black font-semibold">Standard</h3>
            <p className="mt-2 text-sm text-gray-500">Basic room for a comfortable stay</p>
            <p className="order-first text-5xl font-light tracking-tight text-black">$100</p>
            {/* Additional features specific to Standard Room */}
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Single bed</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Basic amenities</span>
              </li>
            </ul>
            <Link to="/Reserve" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black mt-8" aria-label="Standard Room" href="/reserve">
              Reserve Now
            </Link>
          </section>

            {/* Deluxe Room */}
            <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-lg text-black font-semibold">Deluxe</h3>
            <p className="mt-2 text-sm text-gray-500">Basic room for a comfortable stay</p>
            <p className="order-first text-5xl font-light tracking-tight text-black">$150</p>
            {/* Additional features specific to Standard Room */}
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">King Bed</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Free Wi-Fi</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Breakfast Included</span>
              </li>
            </ul>
            <Link to="/Reserve"  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black mt-8" aria-label="Standard Room" href="/reserve">
              Reserve Now
            </Link>
          </section>

            {/* Suite Room */}
            <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-lg text-black font-semibold">Premium</h3>
            <p className="mt-2 text-sm text-gray-500">Basic room for a comfortable stay</p>
            <p className="order-first text-5xl font-light tracking-tight text-black">$200</p>
            {/* Additional features specific to Standard Room */}
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">2 Queen Beds</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Sea View</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Free Airport Transfer</span>
              </li>
            </ul>
            <Link to="/Reserve" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black mt-8" aria-label="Standard Room" href="/reserve">
              Reserve Now
            </Link>
          </section>

            {/* Penthouse Room */}
            <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h3 className="mt-5 text-lg text-black font-semibold">Platinum</h3>
            <p className="mt-2 text-sm text-gray-500">Basic room for a comfortable stay</p>
            <p className="order-first text-5xl font-light tracking-tight text-black">$250</p>
            {/* Additional features specific to Standard Room */}
            <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">1 King Bed</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Free Airport Transfer</span>
              </li>
              <li className="flex items-center">
                <ion-icon className="w-4 h-4 md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
                <span className="ml-4">Access to Lounge</span>
              </li>
            </ul>
            <Link to="/Reserve" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black mt-8" aria-label="Standard Room" href="/reserve">
              Reserve Now
            </Link>
          </section>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
