import React from 'react';
import About from "../About";
import Contact from "../Contact"
import Sports from "../Sports"
import Awards from "../Awards"
import Staff from "../Staff"
import Middle from "../../components/middle"




function Index () {
           

    return (
        <div className=''>
            <div id='home' className="background">
                <div className="overlay"></div>
                <div class="content">
                   <h1 data-aos={"fade-up"}>
                
                        SIZ HAM  JAHONGA  O'Z  NOMINGIZNI <br /> TANITING !  
                    </h1>
                    <a href="/contact"><button data-aos={"fade-up"} className='btn'>Bog'lanish</button></a>

                    

                
                    
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
{/* <button type="button" class=" w-30 h-10 border-2 border-black bg-white  text-black focus:outline-none hover:bg-black focus:ring-4 focus:ring-black font-medium rounded-lg text-l    dark:bg-black dark:text-white dark:border-black dark:hover:bg-white  dark:hover:border-black dark:focus:ring-black text-black ">Bog'lanish</button> */}

{/* <Link to="/contact" class="  px-8 py-2   rounded-lg text-sm border-2 border-black bg-white  text-black transition duration-100 hover:bg-black hover:text-white" ></Link> */}
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