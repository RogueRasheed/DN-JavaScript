import Heroheader from "../components/heroheader";
import { FaPhone, FaEnvelope, FaMapSigns } from "react-icons/fa";
import Footer from "../components/footer";

const contactMethods = [
  {
    icon: <FaPhone className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] text-[#253f75]" />,
    title: "Phone",
    content: "(250) 787-5847",
    description: "Available Monday to Friday, 8AM to 6PM",
    buttonText: "Call Us",
    link: "tel:2507875847",
  },
  {
    icon: <FaEnvelope className="w-[65px] md:w-[90px] h-[65px] md:h-[90px] text-[#253f75]" />,
    title: "Email",
    content: "dan@daviesnorth.ca",
    description: "For inquiries, partnerships and media requests",
    buttonText: "Send an Email",
    link: "mailto:dan@daviesnorth.ca",
  },
  {
    icon: <FaMapSigns className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] text-[#253f75]" />,
    title: "Address",
    content: "FORT ST. JOHN, BC",
    description: "CANADA",
    buttonText: "Get Directions",
    link: "https://maps.app.goo.gl/9d9vVhxThy9xxzvKA",
  },
];

function Contact() {
  return (
    <div>
      <Heroheader />

      {/* Contact Methods Section */}
      <section className="py-20 px-[20px] sm:px-[40px] md:px-[60px] lg:px-[100px] bg-white font-['Poppins',Helvetica]">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#f9f9f9] rounded-lg px-6 py-10 shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="mb-6">{method.icon}</div>
              <h3 className="text-[20px] font-semibold text-[#253f75] mb-2 tracking-wide">
                {method.title}
              </h3>
              <p className="text-[16px] font-medium text-black mb-1">{method.content}</p>
              <p className="text-sm text-gray-600 mb-5 px-2">{method.description}</p>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#253F75] hover:bg-[#2c56a1] text-white px-5 py-2.5 rounded-md font-medium text-sm transition"
              >
                {method.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
