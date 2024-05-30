import logo from '../../assets/logo/1661227636_01 2 (1) (1) (1).png';
import React,{useEffect,useState} from 'react'; 
import { Link } from 'react-router-dom';




    const Navbar = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        useEffect(() => {
            const menuToggle = document.getElementById('menu-toggle');
            const navMenu = document.getElementById('navbar-default');

            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', () => {
                    setMenuOpen(!menuOpen);
                });
            }

         
            return () => {
                if (menuToggle) {
                    menuToggle.removeEventListener('click', () => {
                        setMenuOpen(!menuOpen);
                    });
                }
            };
        }, [menuOpen]);
    // useEffect(() => {
    //     const menuToggle = document.getElementById("menu-toggle");
    //     const navbar = document.getElementById("navbar-default");

    //     menuToggle.addEventListener("click", () => {
    //         navbar.classList.toggle("hidden");
    //     });

    
    //     return () => {
    //         menuToggle.removeEventListener("click", () => {
    //             navbar.classList.toggle("hidden");
    //         });
    //     };
    // }, []);
  

    return (

        <div className='div'>
            <nav class="bg-white  text-black py-3 px-4 flex items-center justify-between fixed top-0 w-full z-10 shadow-md">
                <a href="/" class="flex items-center space-x-3">
                                <img src={logo} class="h-14" alt="" />
                               <span class="self-center text-l font-Times new roman whitespace-nowrap text-black">
                                   ANGREN SHAHAR<br />2-SON SPORT<br /> MAKTABI
                                 </span>
                               </a>
                <button id="menu-toggle" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full  lg:block md:w-auto font-times new roman " id="navbar-default">
                    <a class="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#about">Biz haqimizda</a>
                    <a class="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#sports">Sport turlari</a>
                    <a class="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#awards">Erishilgan natijalar</a>
                    <a class="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#staff">Xodimlar</a>

                    <Link to="/contact" class="  px-4 py-2  rounded border-2 border-black bg-black   text-white transition duration-100 hover:bg-white hover:text-black" >
                        <button className='btn'>Bog'lanish</button>
                    </Link>

                </div>



            </nav>
            {menuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 flex justify-end">
                    <div className="bg-white w-64 h-full shadow-lg flex flex-col">
                        <button onClick={() => setMenuOpen(false)} className="p-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <nav className="flex flex-col space-y-4 p-4">
                            <a className="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#about">Biz haqimizda</a>
                            <a className="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#sports">Sport turlari</a>
                            <a className="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#awards">Erishilgan natijalar</a>
                            <a className="text-xl px-4 py-2 leading-none rounded-full hover:text-blue-700" href="#staff">Xodimlar</a>
                            <Link to="/contact" className="text-xl px-4 py-2 leading-none rounded-full border-2 border-black bg-white text-black transition duration-100 hover:bg-black hover:text-white text-center">
                                <button className='btn w-full'>Bog'lanish</button>
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
            
            </div>
      
        



       


   

       
            
           
        //     <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav ml-auto">
        //             <li>
        //                 <Link to="/home" class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"></Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" >Biz haqimizda</Link>


        //             </li>
        //             <li>
        //                 <Link to="/sports" >Sport turlari</Link>
        //             </li>
        //             <li>
        //                 <Link to="/awards" >Erishilgan natijalar</Link>
        //             </li>
        //             <li>
        //                 <Link to="/staff" >Xodimlar</Link>
        //             </li>
        //             <li>
        //                 <Link to="/contact" >Bog'lanish</Link>
        //             </li>
  
        //         </ul>
        //     </div>
        // </nav>

           
        
   
                 
                 /*  */
            

        
                /*  */
                

       

     


    )
}

export default Navbar;

<Link> <img src={logo} alt="" /> <span>ANGREN SHAHAR <br /> 2-SON SPORT <br /> MAKTABI</span>
</Link>