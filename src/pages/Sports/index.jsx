import React from 'react';
import Boks from "../../assets/sports/box.webp"
import One from '../../assets/sports/Taekwondo-Competitors.jpg'
import Atletic from "../../assets/sports/14827.jpg"
import Basketboll from "../../assets/sports/021321_001_basketball.jpeg"
import Tennis from "../../assets/sports/30034_680.jpg"
import Volleyboll from "../../assets/sports/volleyball-verletzungen-praevention.webp"
import Footboll from "../../assets/sports/19-03-Blog-Fitness-Training-Football-Soccer.jpg"
import Badminton from "../../assets/sports/900_badminton_rackets.jpg"
import Kurash from "../../assets/sports/135897_32627b43e7486784e23196b15508.jpg"
import Sambo from "../../assets/sports/Combat+SAMBO.jpg"
import Dzyudo from "../../assets/sports/44525.jpg"
import Kamon from "../../assets/sports/720__80_c2ee4dfcf8659f6a95ed90a391415494.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Index(props) {
    return (
            <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <div class="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 h-full " id='sports'>

                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={Boks} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg text-black font-semibold mb-2">Boks</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={One} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg text-black font-semibold mb-2">Taekvondo WTF</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={Atletic} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg  text-black font-semibold mb-2">Badiiy gimnastika</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={Basketboll} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg  text-black font-semibold mb-2">Basketbol</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={Tennis} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg text-black font-semibold mb-2">Stol tennisi</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                            <div class="bg-white p-4 shadow-md rounded-lg">
                                <img src={Volleyboll} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                                <div class="text-center">
                                    <h2 class="text-lg text-black font-semibold mb-2">Voleybol</h2>
                                    {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </div>
                            </div>
                        </div>


                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 h-full " id='sports'>

                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Footboll} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg text-black font-semibold mb-2">Footboll</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Badminton} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg text-black font-semibold mb-2">Badminton</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Kurash} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg  text-black font-semibold mb-2">Kurash</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Sambo} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg  text-black font-semibold mb-2">Sambo</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Dzyudo} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg text-black font-semibold mb-2">Dzyudo</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                        <div class="bg-white p-4 shadow-md rounded-lg">
                            <img src={Kamon} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                            <div class="text-center">
                                <h2 class="text-lg text-black font-semibold mb-2">Kamondan o'q otish</h2>
                                {/* <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
      
            </Swiper>
        </>
    );
}

  export default Index;
