import { useState,useEffect } from 'react';
import Navbar2 from '../components/Navbar2';
import { Helmet } from 'react-helmet';

import Automobile1 from '../assets/products/Automobile/Automobile1.jpg';
import Automobile2 from '../assets/products/Automobile/Automobile2.jpg';
import Automobile3 from '../assets/products/Automobile/Automobile3.jpg';
import Automobile4 from '../assets/products/Automobile/Automobile4.jpg';
import Automobile5 from '../assets/products/Automobile/Automobile5.jpg';
import Automobile6 from '../assets/products/Automobile/Automobile6.jpg';
import Automobile7 from '../assets/products/Automobile/Automobile7.jpg';
import Automobile8 from '../assets/products/Automobile/Automobile8.jpg';
import Automobile9 from '../assets/products/Automobile/Automobile9.jpg';
import Automobile10 from '../assets/products/Automobile/Automobile10.jpg';
import Automobile11 from '../assets/products/Automobile/Automobile11.jpg';
import Automobile12 from '../assets/products/Automobile/Automobile12.jpg';
import Automobile13 from '../assets/products/Automobile/Automobile13.jpg';
import Automobile14 from '../assets/products/Automobile/Automobile14.jpg';
import Automobile15 from '../assets/products/Automobile/Automobile15.jpg';
import Automobile16 from '../assets/products/Automobile/Automobile16.jpg';
import Automobile17 from '../assets/products/Automobile/Automobile17.jpg';
import Automobile18 from '../assets/products/Automobile/Automobile18.jpg';
import Automobile19 from '../assets/products/Automobile/Automobile19.jpg';
import Automobile20 from '../assets/products/Automobile/Automobile20.jpg';
import Automobile21 from '../assets/products/Automobile/Automobile21.jpg';
import Automobile22 from '../assets/products/Automobile/Automobile22.jpg';


import Electrical1 from '../assets/products/Electrical/Electrical1.jpg';
import Electrical2 from '../assets/products/Electrical/Electrical2.jpg';
import Electrical3 from '../assets/products/Electrical/Electrical3.jpg';
import Electrical4 from '../assets/products/Electrical/Electrical4.jpg';
import Electrical5 from '../assets/products/Electrical/Electrical5.jpg';
import Electrical6 from '../assets/products/Electrical/Electrical6.jpg';
import Electrical7 from '../assets/products/Electrical/Electrical7.jpg';
import Electrical8 from '../assets/products/Electrical/Electrical8.jpg';
import Electrical9 from '../assets/products/Electrical/Electrical9.jpg';
import Electrical10 from '../assets/products/Electrical/Electrical10.jpg';
import Electrical11 from '../assets/products/Electrical/Electrical11.jpg';
import Electrical12 from '../assets/products/Electrical/Electrical12.jpg';
import Electrical13 from '../assets/products/Electrical/Electrical13.jpg';
import Electrical14 from '../assets/products/Electrical/Electrical14.jpg';
import Electrical15 from '../assets/products/Electrical/Electrical15.jpg';
import Electrical16 from '../assets/products/Electrical/Electrical16.jpg';
import Electrical17 from '../assets/products/Electrical/Electrical17.jpg';
import Electrical18 from '../assets/products/Electrical/Electrical18.jpg';
import Electrical19 from '../assets/products/Electrical/Electrical19.jpg';
import Electrical20 from '../assets/products/Electrical/Electrical20.jpg';
import Electrical21 from '../assets/products/Electrical/Electrical21.jpg';
import Electrical22 from '../assets/products/Electrical/Electrical22.jpg';
import Electrical23 from '../assets/products/Electrical/Electrical23.jpg';
import Electrical24 from '../assets/products/Electrical/Electrical24.jpg';
import Electrical25 from '../assets/products/Electrical/Electrical25.jpg';
import Electrical26 from '../assets/products/Electrical/Electrical26.jpg';
import Electrical27 from '../assets/products/Electrical/Electrical27.jpg';
import Electrical28 from '../assets/products/Electrical/Electrical28.jpg';
import Electrical29 from '../assets/products/Electrical/Electrical29.jpg';
import Electrical30 from '../assets/products/Electrical/Electrical30.jpg';
import Electrical31 from '../assets/products/Electrical/Electrical31.jpg';
import Electrical32 from '../assets/products/Electrical/Electrical32.jpg';



import Construction1 from '../assets/products/Construction/Construction1.jpg';
import Construction2 from '../assets/products/Construction/Construction2.jpg';
import Construction3 from '../assets/products/Construction/Construction3.jpg';
import Construction4 from '../assets/products/Construction/Construction4.jpg';
import Construction5 from '../assets/products/Construction/Construction5.jpg';
import Construction6 from '../assets/products/Construction/Construction6.jpg';
import Construction7 from '../assets/products/Construction/Construction7.jpg';
import Construction8 from '../assets/products/Construction/Construction8.jpg';
import Construction9 from '../assets/products/Construction/Construction9.jpg';
import Construction10 from '../assets/products/Construction/Construction10.jpg';
import Construction11 from '../assets/products/Construction/Construction11.jpg';
import Construction12 from '../assets/products/Construction/Construction12.jpg';

import FMCG1 from '../assets/products/FMCG/FMCG1.jpg';
import FMCG2 from '../assets/products/FMCG/FMCG2.jpg';
import FMCG3 from '../assets/products/FMCG/FMCG3.jpg';
import FMCG4 from '../assets/products/FMCG/FMCG4.jpg';
import FMCG5 from '../assets/products/FMCG/FMCG5.jpg';
import FMCG6 from '../assets/products/FMCG/FMCG6.jpg';
import FMCG7 from '../assets/products/FMCG/FMCG7.jpg';
import FMCG8 from '../assets/products/FMCG/FMCG8.jpg';
import FMCG9 from '../assets/products/FMCG/FMCG9.jpg';
import FMCG10 from '../assets/products/FMCG/FMCG10.jpg';
import FMCG11 from '../assets/products/FMCG/FMCG11.jpg';
import FMCG12 from '../assets/products/FMCG/FMCG12.jpg';
import FMCG13 from '../assets/products/FMCG/FMCG13.jpg';
import FMCG14 from '../assets/products/FMCG/FMCG14.jpg';
import FMCG15 from '../assets/products/FMCG/FMCG15.jpg';
import FMCG16 from '../assets/products/FMCG/FMCG16.jpg';
import FMCG17 from '../assets/products/FMCG/FMCG17.jpg';
import FMCG18 from '../assets/products/FMCG/FMCG18.jpg';
import FMCG19 from '../assets/products/FMCG/FMCG19.jpg';
import FMCG20 from '../assets/products/FMCG/FMCG20.jpg';
import FMCG21 from '../assets/products/FMCG/FMCG21.jpg';
import FMCG22 from '../assets/products/FMCG/FMCG22.jpg';
import FMCG23 from '../assets/products/FMCG/FMCG23.jpg';
import FMCG24 from '../assets/products/FMCG/FMCG24.jpg';
import FMCG25 from '../assets/products/FMCG/FMCG25.jpg';
import FMCG26 from '../assets/products/FMCG/FMCG26.jpg';
import FMCG27 from '../assets/products/FMCG/FMCG27.jpg';
import FMCG28 from '../assets/products/FMCG/FMCG28.jpg';
import FMCG29 from '../assets/products/FMCG/FMCG29.jpg';
import FMCG30 from '../assets/products/FMCG/FMCG30.jpg';
import FMCG31 from '../assets/products/FMCG/FMCG31.jpg';
import FMCG32 from '../assets/products/FMCG/FMCG32.jpg';
import FMCG33 from '../assets/products/FMCG/FMCG33.jpg';
import FMCG34 from '../assets/products/FMCG/FMCG34.jpg';
import FMCG35 from '../assets/products/FMCG/FMCG35.jpg';
import FMCG36 from '../assets/products/FMCG/FMCG36.jpg';
import FMCG37 from '../assets/products/FMCG/FMCG37.jpg';
import FMCG38 from '../assets/products/FMCG/FMCG38.jpg';
import FMCG39 from '../assets/products/FMCG/FMCG39.jpg';
import FMCG40 from '../assets/products/FMCG/FMCG40.jpg';
import FMCG41 from '../assets/products/FMCG/FMCG41.jpg';
import FMCG42 from '../assets/products/FMCG/FMCG42.jpg';
import FMCG43 from '../assets/products/FMCG/FMCG43.jpg';
import FMCG44 from '../assets/products/FMCG/FMCG44.jpg';
import FMCG45 from '../assets/products/FMCG/FMCG45.jpg';
import FMCG46 from '../assets/products/FMCG/FMCG46.jpg';
import FMCG47 from '../assets/products/FMCG/FMCG47.jpg';
import FMCG48 from '../assets/products/FMCG/FMCG48.jpg';
import FMCG49 from '../assets/products/FMCG/FMCG49.jpg';
import FMCG50 from '../assets/products/FMCG/FMCG50.jpg';
import FMCG51 from '../assets/products/FMCG/FMCG51.jpg';
import FMCG52 from '../assets/products/FMCG/FMCG52.jpg';

import Footwear1 from '../assets/products/Footwear/Footwear1.jpg';
import Footwear2 from '../assets/products/Footwear/Footwear2.jpg';
import Footwear3 from '../assets/products/Footwear/Footwear3.jpg';
import Footwear4 from '../assets/products/Footwear/Footwear4.jpg';
import Footwear5 from '../assets/products/Footwear/Footwear5.jpg';
import Footwear6 from '../assets/products/Footwear/Footwear6.jpg';
import Footwear7 from '../assets/products/Footwear/Footwear7.jpg';
import Footwear8 from '../assets/products/Footwear/Footwear8.jpg';
import Footwear9 from '../assets/products/Footwear/Footwear9.jpg';
import Footwear10 from '../assets/products/Footwear/Footwear10.jpg';
import Footwear11 from '../assets/products/Footwear/Footwear11.jpg';
import Footwear12 from '../assets/products/Footwear/Footwear12.jpg';
import Footwear13 from '../assets/products/Footwear/Footwear13.jpg';
import Footwear14 from '../assets/products/Footwear/Footwear14.jpg';
import Footwear15 from '../assets/products/Footwear/Footwear15.jpg';
import Footwear16 from '../assets/products/Footwear/Footwear16.jpg';
import Footwear17 from '../assets/products/Footwear/Footwear17.jpg';
import Footwear18 from '../assets/products/Footwear/Footwear18.jpg';
import Footwear19 from '../assets/products/Footwear/Footwear19.jpg';
import Footwear20 from '../assets/products/Footwear/Footwear20.jpg';
import Footwear21 from '../assets/products/Footwear/Footwear21.jpg';
import Footwear22 from '../assets/products/Footwear/Footwear22.jpg';
import Footwear23 from '../assets/products/Footwear/Footwear23.jpg';
import Footwear24 from '../assets/products/Footwear/Footwear24.jpg';
import Footwear25 from '../assets/products/Footwear/Footwear25.jpg';
import Footwear26 from '../assets/products/Footwear/Footwear26.jpg';
import Footwear27 from '../assets/products/Footwear/Footwear27.jpg';
import Footwear28 from '../assets/products/Footwear/Footwear28.jpg';
import Footwear29 from '../assets/products/Footwear/Footwear29.jpg';
import Footwear30 from '../assets/products/Footwear/Footwear30.jpg';
import Footwear31 from '../assets/products/Footwear/Footwear31.jpg';
import Footwear32 from '../assets/products/Footwear/Footwear32.jpg';
import Footwear33 from '../assets/products/Footwear/Footwear33.jpg';
import Footwear34 from '../assets/products/Footwear/Footwear34.jpg';


import Medical1 from '../assets/products/Medical/Medical1.jpg';
import Medical2 from '../assets/products/Medical/Medical2.jpg';
import Medical3 from '../assets/products/Medical/Medical3.jpg';
import Medical4 from '../assets/products/Medical/Medical4.jpg';
import Medical5 from '../assets/products/Medical/Medical5.jpg';
import Medical6 from '../assets/products/Medical/Medical6.jpg';
import Medical7 from '../assets/products/Medical/Medical7.jpg';
import Medical8 from '../assets/products/Medical/Medical8.jpg';
import Medical9 from '../assets/products/Medical/Medical9.jpg';
import Medical10 from '../assets/products/Medical/Medical10.jpg';
import Medical11 from '../assets/products/Medical/Medical11.jpg';
import Medical12 from '../assets/products/Medical/Medical12.jpg';
import Medical13 from '../assets/products/Medical/Medical13.jpg';
import Medical14 from '../assets/products/Medical/Medical14.jpg';
import Medical15 from '../assets/products/Medical/Medical15.jpg';
import Medical16 from '../assets/products/Medical/Medical16.jpg';
import Medical17 from '../assets/products/Medical/Medical17.jpg';
import Medical18 from '../assets/products/Medical/Medical18.jpg';
import Medical19 from '../assets/products/Medical/Medical19.jpg';
import Medical20 from '../assets/products/Medical/Medical20.jpg';
import Medical21 from '../assets/products/Medical/Medical21.jpg';
import Medical22 from '../assets/products/Medical/Medical22.jpg';
import Medical23 from '../assets/products/Medical/Medical23.jpg';
import Medical24 from '../assets/products/Medical/Medical24.jpg';

import Other1 from '../assets/products/Other/1.jpg';
import Other2 from '../assets/products/Other/2.jpg';
import Other3 from '../assets/products/Other/3.jpg';
import Other4 from '../assets/products/Other/4.jpg';
import Other5 from '../assets/products/Other/5.jpg';
import Other6 from '../assets/products/Other/6.jpg';
import Other7 from '../assets/products/Other/7.jpg';
import Other8 from '../assets/products/Other/8.jpg';
import Other9 from '../assets/products/Other/9.jpg';
import Other10 from '../assets/products/Other/10.jpg';
import Other11 from '../assets/products/Other/11.jpg';
import Other12 from '../assets/products/Other/12.jpg';
import Other13 from '../assets/products/Other/13.jpg';
import Other14 from '../assets/products/Other/14.jpg';
import Other15 from '../assets/products/Other/15.jpg';
import Other16 from '../assets/products/Other/16.jpg';
import Other17 from '../assets/products/Other/17.jpg';
import Other18 from '../assets/products/Other/18.jpg';
import Other19 from '../assets/products/Other/19.jpg';
import Other20 from '../assets/products/Other/20.jpg';
import Other21 from '../assets/products/Other/21.jpg';
import Other22 from '../assets/products/Other/22.jpg';
import Other23 from '../assets/products/Other/23.jpg';
import Other24 from '../assets/products/Other/24.jpg';
import Other25 from '../assets/products/Other/25.jpg';
import Other26 from '../assets/products/Other/26.jpg';
import Other27 from '../assets/products/Other/27.jpg';
import Other28 from '../assets/products/Other/28.jpg';
import Other29 from '../assets/products/Other/29.jpg';
import Other30 from '../assets/products/Other/30.jpg';
import Other31 from '../assets/products/Other/31.jpg';
import Other32 from '../assets/products/Other/32.jpg';
import Other33 from '../assets/products/Other/33.jpg';
import Other34 from '../assets/products/Other/34.jpg';
import Other35 from '../assets/products/Other/35.jpg';


const sectors = [
    {
        title: 'Moulds',
        images: [/* array of img URLs or imports */],
    },
    {
        title: 'Automobiles',
        images: [Automobile1,
            Automobile2,
            Automobile3,
            Automobile4,
            Automobile5,
            Automobile6,
            Automobile7,
            Automobile8,
            Automobile9,
            Automobile10,
            Automobile11,
            Automobile12,
            Automobile13,
            Automobile14,
            Automobile15,
            Automobile16,
            Automobile17,
            Automobile18,
            Automobile19,
            Automobile20,
            Automobile21,
            Automobile22,],
    },
    {
        title: 'Electrical and Electronics',
        images: [Electrical1,
            Electrical2,
            Electrical3,
            Electrical4,
            Electrical5,
            Electrical6,
            Electrical7,
            Electrical8,
            Electrical9,
            Electrical10,
            Electrical11,
            Electrical12,
            Electrical13,
            Electrical14,
            Electrical15,
            Electrical16,
            Electrical17,
            Electrical18,
            Electrical19,
            Electrical20,
            Electrical21,
            Electrical22,
            Electrical23,
            Electrical24,
            Electrical25,
            Electrical26,
            Electrical27,
            Electrical28,
            Electrical29,
            Electrical30,
            Electrical31,
            Electrical32,],
    },
    {
        title: 'Construction',
        images: [Construction1,
            Construction2,
            Construction3,
            Construction4,
            Construction5,
            Construction6,
            Construction7,
            Construction8,
            Construction9,
            Construction10,
            Construction11,
            Construction12,],
    },
    {
        title: 'FMCG',
        images: [FMCG1, FMCG2, FMCG3, FMCG4, FMCG5, FMCG6, FMCG7, FMCG8, FMCG9, FMCG10,
            FMCG11, FMCG12, FMCG13, FMCG14, FMCG15, FMCG16, FMCG17, FMCG18, FMCG19, FMCG20,
            FMCG21, FMCG22, FMCG23, FMCG24, FMCG25, FMCG26, FMCG27, FMCG28, FMCG29, FMCG30,
            FMCG31, FMCG32, FMCG33, FMCG34, FMCG35, FMCG36, FMCG37, FMCG38, FMCG39, FMCG40,
            FMCG41, FMCG42, FMCG43, FMCG44, FMCG45, FMCG46, FMCG47, FMCG48, FMCG49, FMCG50,
            FMCG51, FMCG52],
    },
    {
        title: 'Footwear',
        images: [Footwear1, Footwear2, Footwear3, Footwear4, Footwear5, Footwear6, Footwear7, Footwear8, Footwear9, Footwear10,
            Footwear11, Footwear12, Footwear13, Footwear14, Footwear15, Footwear16, Footwear17, Footwear18, Footwear19, Footwear20,
            Footwear21, Footwear22, Footwear23, Footwear24, Footwear25, Footwear26, Footwear27, Footwear28, Footwear29, Footwear30,
            Footwear31, Footwear32, Footwear33, Footwear34],
    },
    {
        title: 'Medical and Pharmaceutical',
        images: [Medical1, Medical2, Medical3, Medical4, Medical5, Medical6, Medical7, Medical8, Medical9, Medical10,
            Medical11, Medical12, Medical13, Medical14, Medical15, Medical16, Medical17, Medical18, Medical19, Medical20,
            Medical21, Medical22, Medical23, Medical24],
    },
    {
        title: 'Other Sectors',
        images: [Other1, Other2, Other3, Other4, Other5, Other6, Other7, Other8, Other9, Other10,
            Other11, Other12, Other13, Other14, Other15, Other16, Other17, Other18, Other19, Other20,
            Other21, Other22, Other23, Other24, Other25, Other26, Other27, Other28, Other29, Other30,
            Other31, Other32, Other33, Other34, Other35,],
    },
];

const ProductListing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <Helmet>
        <title>Plastic Products by Industry | Nutech CNC</title>
        <meta
          name="description"
          content="Explore our vast range of plastic products for industries like automobiles, electronics, medical, footwear, FMCG, and more. Trusted by global clients."
        />
        <meta property="og:title" content="Plastic Products by Industry | Nutech CNC" />
        <meta
          property="og:description"
          content="See how Nutech CNC supports multiple industries with high-performance plastic components — from automotive to medical and electronics."
        />
        <meta property="og:image" content="https://yourdomain.com/assets/og-products.jpg" />
        <meta property="og:url" content="https://yourdomain.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com/products" />
      </Helmet>

      <Navbar2 />
      <div className="bg-white px-6 py-12 max-w-6xl mx-auto pt-24">
        <h2 className="text-3xl font-bold text-center mb-2">Our Plastic Product Sectors</h2>
        <div className="border-t-4 border-yellow-500 w-24 mb-6 mx-auto"></div>

        {sectors.map((sector, index) => (
          <div key={index} className="mb-4 border border-gray-200 rounded-lg shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-yellow-100 transition"
            >
              <span className="text-lg font-semibold">{sector.title}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>

            {openIndex === index && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50">
                {sector.images.length > 0 ? (
                  sector.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${sector.title} ${i + 1}`}
                      className="w-full h-40 object-cover rounded shadow cursor-pointer hover:scale-105 transition"
                      onClick={() => handleImageClick(img)}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 italic col-span-full">No images available.</p>
                )}
              </div>
            )}
          </div>
        ))}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Expanded"
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
              />
              <button
                className="absolute top-2 right-2 text-yellow-600 text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;