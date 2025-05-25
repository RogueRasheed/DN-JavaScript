import Heroheader from "../components/heroheader";
import Footer from "../components/footer";

const servicesData = [
  {
    title: "Advocacy",
    description:
      "Empowering organizations and communities by promoting causes and driving impactful change. We craft compelling messages and strategies to ensure your voice resonates with decision-makers.",
  },
  {
    title: "Government Relations",
    description:
      "Building strong connections with government bodies to support your interests. Our team expertly navigates legislative landscapes, ensuring your concerns are heard and acted upon.",
  },
  {
    title: "Public Affairs",
    description:
      "Shaping public opinion and influencing key audiences through strategic communication, media relations, and stakeholder engagement. We help position your organization as a leader and advocate.",
  },
  {
    title: "Lobbying",
    description:
      "Representing your interests directly to policymakers and legislators. With extensive experience and a deep understanding of political processes, we effectively advocate for the outcomes you need.",
  },
];



function Services() {
  return ( 
    <div>
      <Heroheader />
      {/* Services Section */}
    <section className="px-5 sm:px-10 md:px-16 lg:px-24 py-24 bg-white font-['Poppins',Helvetica]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[#253f75] text-3xl sm:text-4xl font-bold mb-12 tracking-wide">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition duration-200"
            >
              <h3 className="text-[#253f75] text-xl sm:text-2xl font-semibold mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-black text-base leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
      </div>
  ); 
  
}

export default Services;