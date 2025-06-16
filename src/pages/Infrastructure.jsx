import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import vmc1 from '../assets/Infrastructure/vmc1.jpg';
import vmc2 from '../assets/Infrastructure/vmc2.jpg';
import tool1 from '../assets/Infrastructure/tool1.jpg';
import tool2 from '../assets/Infrastructure/tool2.jpg';
import tool3 from '../assets/Infrastructure/tool3.jpg';
import inj1 from '../assets/Infrastructure/inj1.png';
import inj2 from '../assets/Infrastructure/inj2.png';
import inj3 from '../assets/Infrastructure/inj3.png';
import printer from '../assets/Infrastructure/3dprinter.jpg';

const infrastructureData = [
  {
    title: 'CNC Section',
    items: [
      {
        name: 'VMC MCV 1020 BA',
        image: vmc1,
        specs: [
          'X/Y/Z Travel: 1020/550/560 mm',
          'Table: 1300×660 mm, 1000 kg load',
          'Spindle: BT 40, 8000 RPM, 24-tool ATC',
          'Fanuc Oi-MB control'
        ]
      },
      {
        name: 'VMC MCV 720',
        image: vmc2,
        specs: [
          'X/Y/Z Travel: 720/450/500 mm',
          'Table: 900×500 mm, 600 kg load',
          'Spindle: BT 40, 6000 RPM',
          'Fanuc CNC Controller'
        ]
      }
    ]
  },
  {
    title: 'Toolroom',
    items: [
      {
        name: 'M1TR',
        image: tool1,
        specs: [
          'Universal milling machine',
          'High rigidity and accuracy',
          'Power feed on all axes'
        ]
      },
      {
        name: 'Surface Grinding',
        image: tool2,
        specs: [
          'Grinding size: 600 x 300 mm',
          'Manual and automatic models',
          'Precision grinding operations'
        ]
      },
      {
        name: 'EDM',
        image: tool3,
        specs: [
          'Wire EDM capability',
          'Fine tolerance machining',
          'For hard materials and intricate shapes'
        ]
      }
    ]
  },
  {
    title: 'Injection Moulding',
    items: [
      {
        name: 'FUTURA 120',
        image: inj1,
        specs: [
          'Clamping force: 120 tons',
          'Shot weight: ~140 g',
          'Servo motor-driven system'
        ]
      },
      {
        name: 'FUTURA 160',
        image: inj2,
        specs: [
          'Clamping force: 160 tons',
          'Shot weight: ~180 g',
          'Efficient energy use'
        ]
      },
      {
        name: 'OPTIMA 75',
        image: inj3,
        specs: [
          'Clamping force: 75 tons',
          'Compact footprint',
          'Ideal for small parts'
        ]
      }
    ]
  },
  {
    title: '3D Printer',
    items: [
      {
        name: '3D Printronics',
        image: printer,
        specs: [
          'High resolution FDM printing',
          'Build size: 300 x 300 x 300 mm',
          'PLA/ABS/PETG compatible'
        ]
      }
    ]
  }
];

const InfrastructureGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="pt-20">
      <Navbar2 />
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Infrastructure</h2>

        {infrastructureData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-600">{section.title}</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  onClick={() => openModal(item)}
                  className="group relative overflow-hidden rounded-xl shadow-md bg-white cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100">
                    <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                    <ul className="text-sm space-y-1 text-center">
                      {item.specs.map((spec, k) => (
                        <li key={k}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative"
          >
            <button
              className="absolute top-3 right-4 text-gray-700 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-[400px] object-contain rounded mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">{selectedItem.name}</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {selectedItem.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfrastructureGallery;
