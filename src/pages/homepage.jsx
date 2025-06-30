import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Services from "../components/Ourservices";
import img1 from '../assets/navbarimg/homepage.jpg';
import RAndDStats from "../components/RAndDStats";
import OurApproach from "../components/Timeline";
import Clients from "../components/Ourclients";
import AboutUs from "../components/About";
import SectorsWeServe from "../components/Sectors";

function Home() {
  return (
    <div>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Nutech CNC | Plastic Injection Moulding Company in Tamil Nadu</title>
        <meta
          name="description"
          content="Nutech CNC is Tamil Nadu’s trusted partner in CNC machining and plastic injection moulding. From design to production, we deliver excellence."
        />
        <meta property="og:title" content="Nutech CNC | Your Plastic Manufacturing Partner" />
        <meta
          property="og:description"
          content="Complete CNC and injection moulding solutions — from design to delivery. Serving industries across Tamil Nadu and beyond."
        />
        <meta property="og:image" content={img1} />
        <meta property="og:url" content="https://www.nutechcnc.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[400px] md:h-[800px] bg-cover bg-center relative mb-5"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg font-poppins">
            From Design to Production
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg font-poppins">
            Your Complete Plastic Manufacturing Partner.
          </h2>
        </div>
      </div>

      {/* Other Sections */}
      <Services />
      <RAndDStats />
      <OurApproach />
      <AboutUs />
      <SectorsWeServe />
      <Clients />
    </div>
  );
}

export default Home;
