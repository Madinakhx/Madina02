import React from 'react';
import Navbar from "../../components/Navbar/navbar";
import About from "../About";
import home from "../../assets/home/2024-05-25 15.59.06 3.jpg"
import Contact from "../Contact"
import Sports from "../Sports"
import Awards from "../Awards"
import Staff from "../Staff"
import Middle from "../../components/middle"
import { Link } from 'react-router-dom';



function Index () {
           

    return (
        <div className=''>
            <div id='home' className="background">
                <div className="overlay"></div>
                <div class="content">
                   <h3 className='title'>
                
                      SIZ HAM <br/> JAXONGA O'Z <br /> NOMINGIZNI <br/> TANITING !  </h3>
                        
                    <Link to="/contact">
                        <button type="button" class=" border-2 border-black bg-white  text-black focus:outline-none hover:bg-black focus:ring-4 focus:ring-black font-medium rounded-lg text-l  px-8 py-2 me-2 mb-2 dark:bg-black dark:text-white dark:border-black dark:hover:bg-white  text-black dark:hover:border-black dark:focus:ring-black">Bog'lanish</button>

                        {/* <button className='btn1'>Bog'lanish</button> */}
                    </Link>
                </div>
               
  </div >

            <About />
            <Sports />
            <Awards />
            <Middle />
            <Staff />
            <Contact />  
        
               
            </div>
            
       
    );
}



export default Index;
<Link to="/contact" class="  px-8 py-2   rounded-lg text-sm border-2 border-black bg-white  text-black transition duration-100 hover:bg-black hover:text-white" ></Link>
//  <div class="deconstructed">
// DECONSTRUCTED
//     < div > DECONSTRUCTED</div >
//   <div>DECONSTRUCTED</div>
//   <div>DECONSTRUCTED</div>
//   <div>DECONSTRUCTED</div>
// </div >
{/* <Link to="/contact">
    <button>Bog'lanish</button>
</Link>         
  </div > */}
//   <div class="container">
//     <div class="box">

//         <div class="title">
//             <span class="block"></span>
//             <h1>Kaio Almeida<span></span></h1>
//         </div>

//         <div class="role">
//             <div class="block"></div>
//             <p>UI Dev designer</p>
//         </div>

//     </div>
// </div>

// <a href="https://youtu.be/7d2XsPSjjjI" target="_blank"><footer>
//     <div class="texto">
//         <span>
//             <i class="fab fa-youtube"></i>
//              watch on youtube</span>
//     </div>
// </footer>
//    </a>