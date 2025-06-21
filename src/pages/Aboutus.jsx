import Navbar2 from '../components/Navbar2';
import AboutUs from '../components/About';
import aboutus1 from '../assets/Aboutus/Aboutus1.jpg'

const AboutUsPage = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='pt-20'>
                <h1 className='pt-10 pl-20 font-bold text-4xl'>#1 TAMILNADU'S PLASTIC INJECTION MOULDING COMPANY</h1>
                <AboutUs ></AboutUs>
                <div className="bg-gray-50 px-6 md:px-20 py-12 text-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-black">MOLDING COMPANY</h1>

                {/* About Us Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                    <p className="leading-relaxed">
                        From a humble beginning in 1997, INDO-MIM has grown to become a leading global supplier of Metal Injection Molded products...
                    </p>
                </section>

                {/* Our Roots */}
                <section className="md:flex items-center gap-10 mb-16">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Our Roots</h3>
                        <p className="text-gray-700">
                            In 2002, NUTECH CNC Pvt. Ltd. was founded as a 100% export-oriented unit...
                        </p>
                    </div>
                    <img
                        src="/images/roots-building.jpg"
                        alt="Our Roots"
                        className="rounded shadow-md md:w-1/2"
                    />
                </section>

                {/* The Present Sections */}
                <section className="space-y-16">
                    {[
                        {
                            text: "Over the years, Nutech has grown its facilities...",
                            img: aboutus1,
                            alt: "Chikkatirupati Unit",
                        },
                        {
                            text: "Nutech's largest injection molding facility is located at East Aurora, NY, USA.",
                            img: "/images/texas-plant.jpg",
                            alt: "East Aurora, Texas",
                        },
                        {
                            text: "NUTECH opened another state-of-the-art facility in 2020...",
                            img: "/images/us-plant.jpg",
                            alt: "New Facility USA",
                        },
                    ].map((item, index) => (
                        <div key={index} className="md:flex gap-10 items-center">
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="rounded shadow-md md:w-1/2 mb-4 md:mb-0"
                            />
                            <div className="md:w-1/2">
                                <h3 className="text-xl font-semibold mb-2">The Present</h3>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Timeline */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold mb-4 text-center">NUTECH Historic Timeline</h2>
                    <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-yellow-500">
                        <h4 className="font-bold text-lg text-gray-800 mb-2">2002</h4>
                        <p className="text-gray-700">We started with a new plant</p>
                    </div>
                </section>
            </div>
            </div>

            
        </div>

    );
};

export default AboutUsPage;
