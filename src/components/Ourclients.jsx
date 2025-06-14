import React from 'react';
import client1 from '../assets/Ourclients/client1.jpg';
import client2 from '../assets/Ourclients/client2.jpg';
import client3 from '../assets/Ourclients/client3.jpg';
import client4 from '../assets/Ourclients/client4.jpg';
import client5 from '../assets/Ourclients/client5.jpg';
import client6 from '../assets/Ourclients/client6.jpg';
import client7 from '../assets/Ourclients/client7.jpg';
import client8 from '../assets/Ourclients/client8.jpg';
import client9 from '../assets/Ourclients/client9.jpg';
import client10 from '../assets/Ourclients/client10.jpg';
import client11 from '../assets/Ourclients/client11.jpg';
import client12 from '../assets/Ourclients/client12.jpg';
import client13 from '../assets/Ourclients/client13.jpg';
import client14 from '../assets/Ourclients/client14.png';
import client15 from '../assets/Ourclients/client15.jpg';

const clients = [
  { id: 1, img: client1, desc: 'Ford' },
  { id: 2, img: client2, desc: 'Hyundai' },
  { id: 3, img: client3, desc: 'Kia' },
  { id: 4, img: client4, desc: 'Renault Nissan Mitsubishi' },
  { id: 5, img: client5, desc: 'SL' },
  { id: 6, img: client6, desc: 'Tata' },
  { id: 7, img: client7, desc: 'Hyundai Mobis' },
  { id: 8, img: client8, desc: 'BMW' },
  { id: 9, img: client9, desc: 'GM' },
  { id: 10, img: client10, desc: 'INFAC' },
  { id: 11, img: client11, desc: 'Mahindra' },
  { id: 12, img: client12, desc: 'Skoda' },
  { id: 13, img: client13, desc: 'Stellantis' },
  { id: 14, img: client14, desc: 'Volkswagen' },
  { id: 15, img: client15, desc: 'Genesis' },
];

const OurClients = () => {
  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-2 text-black font-poppins">
        Our Clients
      </h2>
      <div className="border-t-4 border-yellow-500 w-16 mb-6 mx-auto"></div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-44 md:w-52 flex-shrink-0 rounded-2xl shadow-lg bg-gray-100 p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-200"
            >
              <img
                src={client.img}
                alt={client.desc}
                className="h-20 object-contain mb-2"
              />
              <p className="text-sm font-semibold text-center text-gray-700">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
