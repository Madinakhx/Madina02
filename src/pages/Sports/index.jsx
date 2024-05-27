import React from 'react';
import Boks from "../../assets/sports/box.webp"
import One from '../../assets/sports/Taekwondo-Competitors.jpg'
import Atletic from "../../assets/sports/14827.jpg"
import Basketboll from "../../assets/sports/021321_001_basketball.jpeg"
import Tennis from "../../assets/sports/30034_680.jpg"
import Volleyboll from "../../assets/sports/volleyball-verletzungen-praevention.webp"

function Index(props) {
    return (

        <div>
            <div class="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 h-full " id='sports'>

                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={Boks} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg text-black font-semibold mb-2">Boks</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={One} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg text-black font-semibold mb-2">Taekwon-do Wtf</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={Atletic} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg  text-black font-semibold mb-2">Badiiy gimnastika</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={Basketboll} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg  text-black font-semibold mb-2">Basketboll</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={Tennis} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg text-black font-semibold mb-2">Stol tennisi</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="bg-white p-4 shadow-md rounded-lg">
                    <img src={Volleyboll} class=" w-full h-auto rounded-lg mb-4 " alt="" />
                    <div class="text-center">
                        <h2 class="text-lg text-black font-semibold mb-2">Valleyboll</h2>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            
           
       </div>
     
    );
}

  export default Index;
            // class="w-full h-auto rounded-lg mb-4"