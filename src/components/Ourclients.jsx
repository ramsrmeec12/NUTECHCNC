import React from 'react';

const clients = [
  { name: 'Ford', logo: '/clients/ford.png' },
  { name: 'Hyundai', logo: '/clients/hyundai.png' },
  { name: 'Kia', logo: '/clients/kia.png' },
  { name: 'Renault Nissan Mitsubishi', logo: '/clients/renault.png' },
  { name: 'SL', logo: '/clients/sl.png' },
  { name: 'Tata', logo: '/clients/tata.png' },
  { name: 'Hyundai Mobis', logo: '/clients/mobis.png' },
  { name: 'BMW', logo: '/clients/bmw.png' },
  { name: 'GM', logo: '/clients/gm.png' },
  { name: 'INFAC', logo: '/clients/infac.png' },
  { name: 'Mahindra', logo: '/clients/mahindra.png' },
  { name: 'Skoda', logo: '/clients/skoda.png' },
  { name: 'Stellantis', logo: '/clients/stellantis.png' },
  { name: 'Volkswagen', logo: '/clients/vw.png' },
  { name: 'Genesis', logo: '/clients/genesis.png' },
  { name: 'Audi', logo: '/clients/audi.png' },
];

const Clients = () => {
  return (
    <div className="bg-white py-10 overflow-hidden relative">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-900">Our Clients</h2>
      <div className="whitespace-nowrap overflow-hidden relative">
        <div className="animate-marquee flex space-x-12">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center justify-center w-40 h-20">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
