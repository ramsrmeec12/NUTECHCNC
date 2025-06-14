import Navbar from "../components/Navbar";
import Services from "../components/Ourservices";
import img1 from '../assets/navbarimg/homepage.png';
import RAndDStats from "../components/RAndDStats";
import OurApproach from "../components/Timeline";
import Clients from "../components/Ourclients";

import AboutUs from "../components/About";
import SectorsWeServe from "../components/Sectors";


function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        className="w-full h-[400px] md:h-[800px] bg-cover bg-center relative mb-5"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-black text-3xl md:text-5xl font-bold drop-shadow-lg font-poppins">
            From Design to Production
          </h1>
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg font-poppins">
            Your Complete Plastic Manufacturing Partner.
          </h1>
        </div>
      </div>

      {/* Other Sections */}
      <Services />
      <RAndDStats></RAndDStats>
      <OurApproach></OurApproach>
      <AboutUs></AboutUs>
      <SectorsWeServe></SectorsWeServe>
      <Clients></Clients>
      
      
    </div>
  );
}

export default Home;
