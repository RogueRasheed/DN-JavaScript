import HeroHeader from '../components/heroheader';
import { NavLink } from 'react-router-dom';
import IMG from '../assets/IMG_7851.jpeg'; 
import Footer from '../components/footer';

const About = () => {
  return (
    <div className='overflow-hidden'>
    <HeroHeader
      title="About Us"
      subtitle="Learn more about our mission and the people behind our success."
    >
      <NavLink
        to="/services"
        className="bg-[#204ECF] hover:bg-[#173cac] text-white font-medium py-3 px-6 rounded-15 transition duration-300"
      >
        Get Started
      </NavLink>
    </HeroHeader>
          {/* Main content */}
      <div className="flex flex-col items-center justify-between w-full px-8 py-[60px] gap-[60px]">
        {/* About the company section */}
            <div className="w-full border-none shadow-none">
        <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 py-8 max-w-5xl mx-auto">
          <h2 className="font-['Poppins',Helvetica] font-bold text-[#253f75] text-3xl sm:text-4xl md:text-[50px] text-center tracking-wide">
            About Davies North &amp; Associates
          </h2>
          <p className="font-['Poppins',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-normal leading-relaxed text-center">
            Founded in January 2025 by Dan Davies, Davies North &amp; Associates is dedicated to bridging community, industry, and
            government across Northern BC. <br className="hidden sm:block" />
            With over 20 years of experience as an elected official—including
            service on Fort St. John City Council and two terms as MLA—Dan brings
            unparalleled expertise, connections, and a deep-rooted passion for rural
            and northern matters. <br className="hidden sm:block" />
            Born and raised in the Peace Region, he understands the unique challenges
            and opportunities of the North, ensuring strategic, informed, and
            effective advocacy for his clients.
          </p>
        </div>
      </div>


        {/* Mission section */}
        <div className="w-full border-none shadow-none">
          <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 py-8 max-w-4xl mx-auto">
            <h2 className="font-['Poppins',Helvetica] font-bold text-[#253f75] text-3xl sm:text-4xl md:text-[50px] text-center tracking-wide">
              Our Mission
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-normal leading-relaxed text-center">
              At Davies North &amp; Associates, our mission is to provide
              exceptional consulting services that empower our clients to
              achieve their goals. <br className="hidden sm:block" />
              We strive to deliver customized solutions that meet the unique
              needs of each client.
            </p>
          </div>
        </div>

            {/* About Dan Davies section */}
            <div className="w-full border-none shadow-none">
              <div className="flex flex-col items-center justify-center gap-10 px-4 sm:px-8 md:px-12 py-8 max-w-5xl mx-auto">
                <h2 className="font-['Poppins',Helvetica] font-bold text-[#253f75] text-3xl sm:text-4xl md:text-[50px] text-center tracking-wide whitespace-nowrap">
                  About Dan Davies
                </h2>

                <img
                  className="w-full max-w-4xl h-auto object-cover rounded-md"
                  alt="Dan Davies"
                  src={IMG}
                />

                <p className="font-['Poppins',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-normal leading-relaxed text-center">
                  Dan is an experienced leader and dedicated public servant with
                  over 20 years in elected office, including as a Member of the
                  Legislative Assembly (MLA) in British Columbia and a city
                  councillor in Fort St. John. <br className="hidden sm:block" />
                  As a former teacher, industry worker, and with nearly 30 years of
                  service in the Canadian Armed Forces as a senior officer in the
                  Cadet Instructors Cadre, Dan brings a strong commitment to
                  community development and public engagement. <br className="hidden sm:block" />
                  Dan&apos;s expertise lies in leadership, collaboration, and public
                  relations, with a proven track record of advocating for northern
                  issues, working with industry and fostering positive relationships
                  with Indigenous communities. <br className="hidden sm:block" />
                  <br className="hidden sm:block" />
                  He is skilled in public speaking, effectively communicating
                  complex ideas and championing initiatives that drive positive
                  change. Dan has a master&#39;s degree from Gonzaga University in
                  Leadership.
                </p>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default About;
