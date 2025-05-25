import HeroHeader from "../components/heroheader";
import Footer from "../components/footer";
import bgImage from "../assets/IMG_1129.jpeg";
import { FaLandmark, FaUsers, FaBullhorn, FaHandshake } from 'react-icons/fa'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpeg";



  const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];


function Home() {
  return (
  <div className="overflow-x-hidden">
    <HeroHeader  
    bgImage={bgImage}
    height= "100vh"/>
     <section className="bg-black text-white py-12 px-6 md:px-12 flex flex-col items-center -mt-[1px]">
            <div className="flex flex-col md:flex-row justify-around items-center gap-5 text-center text-xl font-semibold max-w-6xl w-full">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">20+</p>
                <p>Years of Strategic <br /> Communications</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">20+</p>
                <p>Trusted by Industry, Gov’t <br /> & Indigenous Partners</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">1000+</p>
                <p>Hours Building <br />Vital Relationships</p>
              </div>
            </div>
    </section>
    <section className="py-16 px-6 bg-white text-center">
                   <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#253F75] font-[Poppins]">What We Do</h2>
          <p className="mb-10 text-gray-600 font-medium">Protecting Interests, Shaping Outcomes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaLandmark className="text-3xl text-[#253F75] mb-4" />
              <h3 className="font-bold mb-2 text-[#253F75]">Government Relations</h3>
              <p className="text-sm text-gray-800">We bridge the gap between your mission and government action—so you don’t leave outcomes to chance. Let’s turn policy into progress.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-3xl text-[#253F75] mb-4" />
              <h3 className="font-bold mb-2 text-[#253F75]">Public Affairs</h3>
              <p className="text-sm text-gray-800">We help growing organizations shape narratives, engage stakeholders, and own their story – clearly and convincingly.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBullhorn className="text-3xl text-[#253F75] mb-4" />
              <h3 className="font-bold mb-2 text-[#253F75]">Advocacy</h3>
              <p className="text-sm text-gray-800">We help new voices shape policy and public debate. Let’s build your influence, mobilize support, and turn ideas into impact—one strategic step at a time.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-3xl text-[#253F75] mb-4" />
              <h3 className="font-bold mb-2 text-[#253F75]">Lobbying</h3>
              <p className="text-sm text-gray-800">We help new players navigate government effectively. Get access, build relationships, and protect your interests—before issues become problems.</p>
            </div>
          </div>
        </section>
        <div className="py-10 flex justify-center">
  <a href="/about">
    <button className="font-[Poppins] bg-[#253F75] hover:bg-[#2c56a1] text-white font-regular px-6 py-3 rounded-md transition duration-200 shadow-md shadow-lg shadow-blue-500/50">
      Learn more about us
    </button>
  </a>
</div>
<div className="w-full flex flex-col justify-center text-center">
      <section className="bg-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-[Poppins] text-[#253F75]">Our Work In Action</h2>
        <p className="text-gray-900 mb-10 max-w-2xl mx-auto">
          Explore moments from the partnerships, advocacy, and engagement initiatives that define our approach. These snapshots reflect our commitment to building trust, fostering dialogue, and driving results across government, industry, and Indigenous communities.
        </p>
        </section>
 </div>
      <section className="px-4 sm:px-6 lg:px-8 bg-gray-100 py-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#253F75] text-center">Photos</h2>
 <Swiper
  modules={[Navigation, Pagination, Autoplay]} // ✅ must add this in v8+ of Swiper
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  className="max-w-4xl mx-auto"
>
  {images.map((src, index) => (
    <SwiperSlide key={index}>
      <img
        src={src}
        alt={`Slide ${index + 1}`}
        className="w-full h-64 md:h-80 lg:h-150 object-cover rounded-xl shadow-lg"
      />
    </SwiperSlide>
  ))}
</Swiper>
</section>
  <Footer />
    </div>
  );
}
export default Home;